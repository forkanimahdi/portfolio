"""
One-off image pipeline for the portfolio (not part of `npm run build`).

    python scripts/optimize-images.py

- Writes a .webp next to every project screenshot in src/assets/images/projects
  (max 1280px wide; animated GIFs stay animated). Originals are left untouched.
- Writes 1200x630 social preview images to public/og/ (site card + one per project).
- Writes static case-study covers to src/assets/images/projects/covers/ (`... covers` runs only this step).
- Writes square app icons to public/icons/.

Requires Pillow (`pip install pillow`). Re-run after adding or replacing a project image,
then point the import in src/data/projects.js at the new .webp file.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageSequence

ROOT = Path(__file__).resolve().parent.parent
PROJECTS = ROOT / "src/assets/images/projects"
PUBLIC = ROOT / "public"
MAX_WIDTH = 1280
COVER_SIZE = (960, 540)
BG = (12, 12, 12)
ACCENT = (128, 0, 32)

# Project slug -> source screenshot, used for the per-project social preview.
OG_SOURCES = {
    "lionsgeek": "lionsgeek.png",
    "casatourat": "casatourat.png",
    "tihad-azemmour-women": "taw.gif",
    "atelier-a1": "a1.png",
    "ecoles-belges-maroc": "ecb.jpg",
    "clb-klb": "clb_klb.png",
    "glovantis-group": "glovantis.gif",
    "israr": "israr.gif",
    "maroc-social-2030": "ms2030.png",
    "yes-africa": "yes-africa.png",
    "bigg-red": "biggred.gif",
    "my-lionsgeek": "mylionsgeek.gif",
    "casatourat-dashboard": "casatourat_backend.png",
    "yes-mobile": "yes_mobile.png",
    "yes-learning": "yes_learning.gif",
    "lionsgeek-mobile": "lg-mobile.png",
    "her-day-for-her": "hd4h.gif",
    "tilila": "tilila.gif",
    "tililab-evaluation-platform": "tililab_judge.jpg",
    "yes-mobile-dashboard": "yesMobile_backend.gif",
}


def fit_width(img):
    if img.width <= MAX_WIDTH:
        return img
    height = round(img.height * MAX_WIDTH / img.width)
    return img.resize((MAX_WIDTH, height), Image.LANCZOS)


def cover(img, size):
    target_w, target_h = size
    scale = max(target_w / img.width, target_h / img.height)
    resized = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left = (resized.width - target_w) // 2
    top = (resized.height - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def optimize_projects():
    for src in sorted(PROJECTS.iterdir()):
        if src.suffix.lower() not in {".png", ".jpg", ".jpeg", ".gif"}:
            continue
        out = src.with_suffix(".webp")
        img = Image.open(src)
        frames = getattr(img, "n_frames", 1)
        if frames > 1:
            sequence, durations = [], []
            for frame in ImageSequence.Iterator(img):
                durations.append(frame.info.get("duration", 1000) or 1000)
                sequence.append(fit_width(frame.convert("RGB")))
            sequence[0].save(
                out, save_all=True, append_images=sequence[1:], duration=durations,
                loop=0, quality=72, method=6,
            )
        else:
            fit_width(img.convert("RGB")).save(out, quality=80, method=6)
        print(f"{src.name}: {src.stat().st_size // 1024} KB -> {out.name}: {out.stat().st_size // 1024} KB")


def font(size, bold=True):
    name = "segoeuib.ttf" if bold else "segoeui.ttf"
    for path in (Path("C:/Windows/Fonts") / name, Path("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf")):
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default(size)


def site_card():
    card = Image.new("RGB", (1200, 630), BG)
    portrait = Image.open(PUBLIC / "og-image.jpg").convert("RGB")
    photo = cover(portrait, (470, 630))
    # Fade the portrait into the background on its left edge.
    mask = Image.new("L", photo.size, 255)
    draw_mask = ImageDraw.Draw(mask)
    for x in range(160):
        draw_mask.line([(x, 0), (x, photo.height)], fill=round(255 * x / 160))
    card.paste(photo, (1200 - photo.width, 0), mask)

    draw = ImageDraw.Draw(card)
    logo = Image.open(PUBLIC / "logo.png").convert("RGBA")
    logo.thumbnail((92, 92))
    card.paste(logo, (72, 64), logo)

    draw.rectangle([(72, 214), (120, 218)], fill=ACCENT)
    draw.text((72, 240), "Mehdi Forkani", font=font(76), fill=(255, 255, 255))
    draw.text((72, 340), "Freelance Mobile & Web App Developer", font=font(36), fill=(255, 255, 255))
    draw.text((72, 392), "Casablanca, Morocco", font=font(30, bold=False), fill=(170, 170, 170))
    draw.text((72, 520), "Laravel  ·  React  ·  Inertia.js  ·  React Native", font=font(26, bold=False), fill=(150, 150, 150))
    draw.text((72, 560), "forkanimahdi.com", font=font(26), fill=(212, 86, 122))

    out = PUBLIC / "og" / "mehdi-forkani.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    card.save(out, quality=86, optimize=True, progressive=True)
    print(f"{out.relative_to(ROOT)}: {out.stat().st_size // 1024} KB")


def project_cards():
    out_dir = PUBLIC / "og" / "projects"
    out_dir.mkdir(parents=True, exist_ok=True)
    for slug, filename in OG_SOURCES.items():
        img = Image.open(PROJECTS / filename)
        img.seek(0)
        poster = cover(img.convert("RGB"), (1200, 630))
        out = out_dir / f"{slug}.jpg"
        poster.save(out, quality=82, optimize=True, progressive=True)
        print(f"{out.relative_to(ROOT)}: {out.stat().st_size // 1024} KB")


def project_covers():
    """One static 16:9 first frame per project: the case-study hero (LCP) must stay small on mobile."""
    out_dir = PROJECTS / "covers"
    out_dir.mkdir(parents=True, exist_ok=True)
    for slug, filename in OG_SOURCES.items():
        img = Image.open(PROJECTS / filename)
        img.seek(0)
        out = out_dir / f"{slug}.webp"
        cover(img.convert("RGB"), COVER_SIZE).save(out, quality=74, method=6)
        print(f"covers/{out.name}: {out.stat().st_size // 1024} KB")


def icons():
    out_dir = PUBLIC / "icons"
    out_dir.mkdir(parents=True, exist_ok=True)
    logo = Image.open(PUBLIC / "logo.png").convert("RGBA")
    for size, padding, name in ((512, 0.18, "icon-512.png"), (192, 0.18, "icon-192.png"),
                                (180, 0.16, "apple-touch-icon.png"), (48, 0.08, "favicon-48.png")):
        icon = Image.new("RGBA", (size, size), BG + (255,))
        mark = logo.copy()
        inner = round(size * (1 - 2 * padding))
        mark.thumbnail((inner, inner), Image.LANCZOS)
        icon.paste(mark, ((size - mark.width) // 2, (size - mark.height) // 2), mark)
        icon.save(out_dir / name, optimize=True)
        print(f"public/icons/{name}")


if __name__ == "__main__":
    import sys

    if sys.argv[1:] == ["covers"]:
        project_covers()
    else:
        optimize_projects()
        site_card()
        project_cards()
        project_covers()
        icons()
