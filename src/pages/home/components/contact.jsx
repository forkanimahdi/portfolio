import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../../../utils/motion";
import {
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.error(error.text);
                    setStatus("Failed to send. Try again.");
                }
            );
    };

    return (
        <div
            id="contact"
            className="flex flex-col lg:items-center justify-center gap-y-10 px-6 bg-black min-h-screen text-white"
        >
            <motion.h1
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                className="uppercase pt-[10vh] text-center selection:bg-white selection:text-black text-[3rem] font-bold"
            >
                Let's Talk
            </motion.h1>

            <div className="lg:w-3/4 py-8 px-4 lg:px-0 flex flex-col items-center gap-y-8 bg-white text-black rounded-3xl">
                <motion.h1
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className="text-3xl font-semibold"
                >
                    Let's Work Together
                </motion.h1>
                <motion.p
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="lg:w-1/2 text-center"
                >
                    Unlock your potential with personalized solutions tailored just for
                    you. Let’s embark on a journey of growth and success together!
                </motion.p>
                <motion.a
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView="show"
                    className="py-2 w-1/3 lg:w-1/6 text-center border border-black rounded-xl hover:bg-black hover:text-white transition"
                    href="#form"
                >
                    Contact
                </motion.a>
            </div>

            <div className="lg:w-3/4 flex flex-col lg:flex-row gap-6 py-6">
                {/* Contact Form */}
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    id="form"
                    className="lg:w-1/2 flex flex-col gap-y-6 border border-white/70 rounded-3xl p-5"
                >
                    <div className="flex flex-col lg:flex-row gap-5">
                        <input
                            name="user_name"
                            placeholder="Name"
                            className="flex-1 px-6 py-4 bg-transparent border border-white/60 text-white placeholder-white/50 rounded-2xl"
                            type="text"
                            required
                        />
                        <input
                            name="user_email"
                            placeholder="Email"
                            className="flex-1 px-6 py-4 bg-transparent border border-white/60 text-white placeholder-white/50 rounded-2xl"
                            type="email"
                            required
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        <input
                            name="phone"
                            placeholder="Phone Number"
                            className="flex-1 px-6 py-4 bg-transparent border border-white/60 text-white placeholder-white/50 rounded-2xl"
                            type="text"
                        />
                        <input
                            name="subject"
                            placeholder="Subject"
                            className="flex-1 px-6 py-4 bg-transparent border border-white/60 text-white placeholder-white/50 rounded-2xl"
                            type="text"
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Message"
                        className="px-6 py-4 h-40 bg-transparent border border-white/60 text-white placeholder-white/50 rounded-2xl"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full py-3 text-black lg:bg-transparent bg-white border text-center border-white lg:text-white hover:bg-white hover:text-black rounded-xl transition"
                    >
                        Send
                    </button>

                    {status && <p className="text-sm text-center text-white mt-2">{status}</p>}
                </form>

                {/* Socials */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-5 lg:w-1/2 lg:px-5">
                    {[
                        {
                            href: "https://www.linkedin.com/in/forkanimahdi/",
                            icon: <FaLinkedinIn className="text-2xl" />,
                        },
                        {
                            href: "https://www.instagram.com/forkanimahdi",
                            icon: <FaInstagram className="text-2xl" />,
                        },
                        {
                            href: "https://twitter.com/forkanimahdi",
                            icon: <FaXTwitter className="text-2xl" />,
                        },
                        {
                            href: "mailto:forkanimahdi@gmail.com",
                            icon: <SiGmail className="text-2xl" />,
                        },
                    ].map(({ href, icon }, idx) => (
                        <a
                            key={idx}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full p-5 flex flex-col justify-between items-start border border-white/35 rounded-2xl hover:bg-white hover:text-black transition text-white"
                        >
                            {icon}
                            <div className="flex justify-between w-full items-center mt-2 text-lg">
                                <GoArrowUpRight />
                                <span>@forkanimahdi</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
