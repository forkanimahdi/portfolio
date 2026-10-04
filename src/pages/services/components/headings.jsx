export const eyebrow = (text) => (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
        <span className="h-px w-8 bg-alpha"></span>
        {text}
    </p>
);

export const sectionTitle = (text) => <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl">{text}</h2>;
