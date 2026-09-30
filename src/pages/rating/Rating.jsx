import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GoAlertFill, GoArrowRight, GoCheckCircleFill } from "react-icons/go";
import { RiDoubleQuotesL, RiStarFill } from "react-icons/ri";
import { fadeIn } from "../../utils/motion";
import Seo from "../../utils/Seo";

const captchaSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || (import.meta.env.DEV ? "1x00000000000000000000AA" : "");

const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder-white/35 outline-none transition-colors duration-300 focus:border-alpha focus:bg-white/[0.05]";

const ratingLabels = ["Tap a star", "Not great", "Okay", "Good", "Great", "Outstanding"];

export const Rating = () => {
    const form = useRef(null);
    const captchaBox = useRef(null);
    const captchaId = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);
    const [values, setValues] = useState({ user_name: "", job_title: "", company: "", quote: "" });

    useEffect(() => {
        window.scrollTo({ top: 0 });
        const robots = document.querySelector('meta[name="robots"]');
        const previous = robots?.getAttribute("content");
        robots?.setAttribute("content", "noindex, nofollow");
        return () => robots?.setAttribute("content", previous);
    }, []);

    useEffect(() => {
        if (!captchaSiteKey) return;

        const renderCaptcha = () => {
            if (!captchaBox.current) return;
            captchaId.current = window.turnstile.render(captchaBox.current, {
                sitekey: captchaSiteKey,
                theme: document.documentElement.classList.contains("light") ? "light" : "dark",
                size: "flexible",
                callback: (token) => setCaptchaToken(token),
                "expired-callback": () => setCaptchaToken(null),
                "error-callback": () => setCaptchaToken(null),
            });
        };

        if (window.turnstile) {
            renderCaptcha();
        } else {
            const script = document.createElement("script");
            script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
            script.async = true;
            script.onload = renderCaptcha;
            document.head.appendChild(script);
        }

        return () => {
            if (window.turnstile && captchaId.current !== null) {
                window.turnstile.remove(captchaId.current);
            }
        };
    }, []);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const sendRating = (e) => {
        e.preventDefault();

        if (!rating) {
            setError("Please pick a rating from 1 to 5 stars.");
            return;
        }

        if (!captchaToken) {
            setError("Please confirm you're human before sending.");
            return;
        }

        setSending(true);
        setError("");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_RATING_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                () => {
                    window.turnstile?.remove(captchaId.current);
                    captchaId.current = null;
                    setSent(true);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                },
                (error) => {
                    console.error("EmailJS error:", error?.status, error?.text || error);
                    setError("Something went wrong. Please try again, or email me directly.");
                    setCaptchaToken(null);
                    window.turnstile?.reset(captchaId.current);
                }
            )
            .finally(() => setSending(false));
    };

    const role = [values.job_title, values.company].filter(Boolean).join(", ");
    const shownRating = hovered || rating;

    return (
        <>
            <Seo title="Rate our work together | Mehdi Forkani" description="Share your experience working with Mehdi Forkani." path="/rating" />

            <section className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[30rem] w-[30rem] rounded-full bg-alpha/25 blur-[100px]"></div>

                <div className="container grid gap-14 pb-24 pt-36 lg:grid-cols-12 lg:gap-16 lg:pb-32 lg:pt-40">
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <motion.p
                                variants={fadeIn("up", 0.1)} initial="hidden" animate="show"
                                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                            >
                                <span className="h-px w-8 bg-alpha"></span>
                                Kind words
                            </motion.p>

                            <motion.h1
                                variants={fadeIn("up", 0.2)} initial="hidden" animate="show"
                                className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl"
                            >
                                How was it working <span className="text-alpha">together?</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeIn("up", 0.3)} initial="hidden" animate="show"
                                className="mt-5 text-base leading-relaxed text-white/60 lg:text-lg"
                            >
                                Your feedback means a lot. With your permission, I&apos;ll feature it on my portfolio, exactly like the preview below.
                            </motion.p>

                            <motion.div
                                variants={fadeIn("up", 0.4)} initial="hidden" animate="show"
                                className="relative isolate mt-10 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8"
                            >
                                <div className="pointer-events-none absolute -bottom-32 -right-32 -z-10 h-72 w-72 rounded-full bg-alpha/25 blur-[90px]"></div>

                                <div className="flex items-start justify-between gap-4">
                                    <RiDoubleQuotesL className="text-4xl text-alpha" />
                                    <div className="flex gap-1 pt-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <RiStarFill key={star} className={star <= shownRating ? "text-alpha" : "text-white/15"} />
                                        ))}
                                    </div>
                                </div>

                                <p className={`mt-6 font-display text-lg font-semibold leading-snug tracking-tight ${values.quote ? "text-white" : "text-white/30"}`}>
                                    {values.quote || "Your words will appear here as you type…"}
                                </p>

                                <div className="mt-8 flex items-center gap-4 border-t border-white/[0.06] pt-6">
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-alpha font-display text-sm font-bold text-pure-white">
                                        {values.user_name.charAt(0).toUpperCase() || "?"}
                                    </span>
                                    <div className="min-w-0">
                                        <p className="truncate font-semibold text-white">{values.user_name || "Your name"}</p>
                                        <p className="truncate text-sm text-white/50">{role || "Your role, Company"}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        variants={fadeIn("up", 0.3)} initial="hidden" animate="show"
                        className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-10 lg:col-span-7"
                    >
                        {sent ? (
                            <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                                <GoCheckCircleFill className="text-6xl text-emerald-500" />
                                <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white">
                                    Thank you{values.user_name ? `, ${values.user_name.split(" ")[0]}` : ""}!
                                </h2>
                                <p className="mt-3 max-w-sm text-white/60">
                                    Your words mean a lot. I&apos;ll let you know once your testimonial is live on the site.
                                </p>
                                <Link
                                    to="/"
                                    className="group mt-8 flex h-12 items-center gap-2 rounded-lg bg-alpha px-6 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                                >
                                    Visit the portfolio
                                    <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ) : (
                            <form ref={form} onSubmit={sendRating} className="flex flex-col gap-6">
                                <div>
                                    <p className="text-sm font-semibold text-white">Your rating</p>
                                    <div className="mt-3 flex items-center gap-4">
                                        <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setRating(star)}
                                                    onMouseEnter={() => setHovered(star)}
                                                    aria-label={`${star} star${star > 1 ? "s" : ""}`}
                                                    className="text-3xl transition-transform duration-200 hover:scale-110"
                                                >
                                                    <RiStarFill className={star <= shownRating ? "text-alpha" : "text-white/15"} />
                                                </button>
                                            ))}
                                        </div>
                                        <span className="text-sm text-white/50">{ratingLabels[shownRating]}</span>
                                    </div>
                                    <input type="hidden" name="rating" value={rating ? `${rating}/5` : ""} />
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <input className={inputClass} placeholder="Full name" name="user_name" value={values.user_name} onChange={handleChange} autoComplete="name" required />
                                    <input className={inputClass} placeholder="Email" name="user_email" type="email" autoComplete="email" required />
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <input className={inputClass} placeholder="Job title (e.g. CEO)" name="job_title" value={values.job_title} onChange={handleChange} autoComplete="organization-title" required />
                                    <input className={inputClass} placeholder="Company or organization" name="company" value={values.company} onChange={handleChange} autoComplete="organization" />
                                </div>
                                <textarea
                                    className={`${inputClass} min-h-[10rem] resize-none`}
                                    placeholder="What was it like working with me? What did I build for you?"
                                    name="quote"
                                    value={values.quote}
                                    onChange={handleChange}
                                    required
                                />
                                <input className={inputClass} placeholder="LinkedIn or photo link (optional, for your picture)" name="photo_url" type="url" />

                                <label className="flex cursor-pointer items-start gap-3 text-sm text-white/60">
                                    <input type="checkbox" name="consent" value="Yes" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#800020]" />
                                    I agree that my name, role, photo and words can be shown on forkanimahdi.com.
                                </label>

                                {captchaSiteKey ? (
                                    <div ref={captchaBox} className="h-[65px] w-full overflow-hidden rounded-lg"></div>
                                ) : (
                                    <p className="text-sm text-error">Spam protection isn&apos;t configured, so the form is disabled.</p>
                                )}

                                <AnimatePresence>
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.3 }}
                                            role="status"
                                            className="flex items-start gap-3 rounded-lg border border-error/30 bg-error/10 px-4 py-3.5"
                                        >
                                            <GoAlertFill className="mt-0.5 shrink-0 text-lg text-error" />
                                            <div>
                                                <p className="text-sm font-semibold text-white">Not sent</p>
                                                <p className="mt-0.5 text-sm text-white/65">{error}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={sending || !captchaToken}
                                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-alpha px-6 py-3.5 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100"
                                >
                                    {sending ? "Sending..." : "Send my testimonial"}
                                    {!sending && <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
};
