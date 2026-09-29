import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { fadeIn } from "../../../utils/motion";

const socials = [
    { icon: <FaLinkedinIn />, name: "LinkedIn", link: "https://www.linkedin.com/in/forkanimahdi/" },
    { icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/forkanimahdi" },
    { icon: <FaXTwitter />, name: "X", link: "https://twitter.com/forkanimahdi" },
    { icon: <SiGmail />, name: "Email", link: "mailto:forkanimahdi@gmail.com" },
];

const captchaSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || (import.meta.env.DEV ? "1x00000000000000000000AA" : "");

const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder-white/35 outline-none transition-colors duration-300 focus:border-alpha focus:bg-white/[0.05]";

export const Contact = () => {
    const form = useRef(null);
    const captchaBox = useRef(null);
    const captchaId = useRef(null);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState({ text: "", error: false });

    useEffect(() => {
        if (!captchaSiteKey) return;

        const renderCaptcha = () => {
            if (!captchaBox.current) return;
            captchaId.current = window.turnstile.render(captchaBox.current, {
                sitekey: captchaSiteKey,
                theme: "dark",
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

    const sendEmail = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            setMessage({ text: "Please confirm you're human before sending.", error: true });
            return;
        }

        setSending(true);
        setMessage({ text: "", error: false });

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                () => {
                    setMessage({ text: "Message sent successfully!", error: false });
                    form.current.reset();
                },
                () => {
                    setMessage({ text: "Failed to send. Try again.", error: true });
                }
            )
            .finally(() => {
                setSending(false);
                setCaptchaToken(null);
                window.turnstile?.reset(captchaId.current);
            });
    };

    return (
        <section id="contact" className="bg-dark py-24 lg:py-32">
            <div className="container">
                <motion.div
                    variants={fadeIn("up", 0.1)} initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="relative isolate overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02]"
                >
                    <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-alpha/25 blur-[100px]"></div>

                    <div className="grid gap-14 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
                        <div className="flex flex-col">
                            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                                <span className="h-px w-8 bg-alpha"></span>
                                Contact
                            </p>

                            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                                Let&apos;s build
                                <br />
                                something
                                <br />
                                <span className="text-alpha">together.</span>
                            </h2>

                            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                                Whether it&apos;s a product idea, a platform to rebuild, or just a conversation, my inbox is open.
                            </p>

                            <div className="mt-10 grid grid-cols-2 gap-4 lg:mt-auto lg:pt-10">
                                {socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="group flex h-36 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-alpha hover:bg-alpha sm:h-40 lg:aspect-[5/4] lg:h-auto"
                                    >
                                        <span className="text-2xl">{social.icon}</span>
                                        <span className="flex items-center justify-between gap-2 text-sm sm:text-base">
                                            <GoArrowUpRight className="shrink-0 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                                            <span className="truncate text-white/85 group-hover:text-white">@forkanimahdi</span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <input className={inputClass} placeholder="Name" name="user_name" autoComplete="name" required />
                                <input className={inputClass} placeholder="Email" name="user_email" type="email" autoComplete="email" required />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <input className={inputClass} placeholder="Phone number" name="phone" type="tel" autoComplete="tel" />
                                <input className={inputClass} placeholder="Subject" name="subject" />
                            </div>
                            <textarea
                                className={`${inputClass} min-h-[12rem] flex-1 resize-none`}
                                placeholder="Tell me about your project"
                                name="message"
                                required
                            />

                            {captchaSiteKey ? (
                                <div ref={captchaBox} className="h-[65px] w-full overflow-hidden rounded-lg"></div>
                            ) : (
                                <p className="text-sm text-error">Spam protection isn&apos;t configured, so the form is disabled.</p>
                            )}

                            {message.text && (
                                <p className={`text-center text-sm ${message.error ? "text-error" : "text-white/70"}`}>{message.text}</p>
                            )}

                            <button
                                type="submit"
                                disabled={sending || !captchaToken}
                                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100"
                            >
                                {sending ? "Sending..." : "Send message"}
                                {!sending && <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
