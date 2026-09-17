import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GoArrowUp } from "react-icons/go";
import logo from "../assets/images/myLogo.png";

const navLinks = ["home", "about", "projects", "clients", "contact"];

const socials = [
    { href: "https://www.linkedin.com/in/forkanimahdi/", icon: <FaLinkedinIn />, label: "LinkedIn" },
    { href: "https://github.com/forkanimahdi", icon: <FaGithub />, label: "GitHub" },
    { href: "https://instagram.com/forkanimahdi", icon: <FaInstagram />, label: "Instagram" },
    { href: "mailto:forkanimahdi@gmail.com", icon: <SiGmail />, label: "Email" },
];

export const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-black text-white border-t border-white/10">
            {/* Big CTA line */}
            <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 flex flex-col items-center text-center gap-y-6">
                <p className="eyebrow">Let&apos;s build something bold</p>
                <h2 className="uppercase boldPoppin text-3xl lg:text-5xl gradient-heading">
                    Have a project in mind?
                </h2>
                <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                    className="group poppin uppercase mt-2 inline-flex items-center gap-x-3 border border-white/60 rounded-xl px-6 py-3 hover:bg-white hover:text-black transition-colors"
                >
                    Get in touch
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
            </div>

            {/* Divider */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="h-px w-full bg-white/10" />
            </div>

            {/* Links row */}
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10 lg:items-start lg:justify-between">
                {/* Brand */}
                <div className="flex flex-col gap-y-4 lg:max-w-xs">
                    <Link to="/" onClick={scrollToTop} className="flex items-center gap-x-3">
                        <img src={logo} alt="Mehdi" className="w-10 h-10 object-contain" />
                        <span className="poppin text-lg">Mehdi Forkani</span>
                    </Link>
                    <p className="text-white/50 poppin text-sm leading-relaxed">
                        Mobile & web app developer building fast, reliable web & mobile products from Morocco.
                    </p>
                </div>

                {/* Nav */}
                <div className="flex flex-col gap-y-3">
                    <h4 className="eyebrow">Navigate</h4>
                    <div className="flex flex-col gap-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollToSection(link)}
                                className="capitalize text-left text-white/60 hover:text-white poppin text-sm transition-colors w-fit"
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-col gap-y-3">
                    <h4 className="eyebrow">Connect</h4>
                    <div className="flex gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.label}
                                title={s.label}
                                className="premium-glass w-11 h-11 rounded-xl flex items-center justify-center text-lg text-white/80 hover:text-black hover:bg-white transition-colors"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-y-4">
                    <p className="text-white/40 poppin text-xs text-center">
                        &copy; {new Date().getFullYear()} Mehdi Forkani. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-x-2 text-white/60 hover:text-white poppin text-xs uppercase tracking-widest transition-colors"
                    >
                        Back to top
                        <span className="premium-glass w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                            <GoArrowUp />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
