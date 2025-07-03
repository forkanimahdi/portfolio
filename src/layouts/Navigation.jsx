import logo from "../assets/images/myLogo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
    const naviger = ["home", "about", "projects", "contact"];
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.9);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e) => {
        if (e.target.id === "backdrop") setNav(false);
    };

    return (
        <>
            {/* Custom Cursor */}
            <div className="lg:block hidden">
                <AnimatedCursor
                    innerSize={10}
                    outerSize={80}
                    color="256, 256, 256"
                    outerAlpha={1}
                    innerScale={0.7}
                    outerScale={0.5}
                    clickables={["a", "button", ".nav"]}
                    hasBlendMode={true}
                    outerStyle={{
                        border: "1px solid black",
                        mixBlendMode: "difference",
                    }}
                />
            </div>

            {/* Main Navbar */}
            <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black" : "bg-transparent"} lg:h-[10vh] py-2 lg:py-0 h-fit flex lg:flex-row flex-col lg:justify-between items-center px-6 lg:px-16`}>
                {/* Logo + Mobile Toggle */}
                <div className="w-full lg:w-auto flex items-center justify-between">
                    <a href="/">
                        <img loading="lazy" src={logo} className="w-14" alt="logo" />
                    </a>
                    {
                        nav ?
                            <div className="absolute top-6 right-6 text-white text-3xl cursor-pointer">
                                <RiCloseLine onClick={() => setNav(false)} />
                            </div>
                            :
                            <div onClick={() => setNav(true)} className="text-white text-3xl lg:hidden cursor-pointer transition">
                                <RiMenu3Line />
                            </div>

                    }
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-x-16 items-center">
                    {naviger.map((e, i) => (
                        <div key={i}
                            className="text-[#bdbdbd] uppercase nav cursor-pointer font-medium lg:text-lg hover:text-white transition"
                            onClick={() => {
                                if (window.location.pathname !== "/") {
                                    window.location.href = `/#${e}`;
                                } else {
                                    const section = document.getElementById(e);
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }
                            }}
                        >
                            {e}
                        </div>
                    ))}
                </div>

                {/* Desktop Social */}
                <div className="hidden lg:flex gap-x-4">
                    <a className="text-white text-2xl" target="_blank" href="https://www.linkedin.com/in/forkanimahdi/"><FaLinkedinIn /></a>
                    <a className="text-white text-2xl" target="_blank" href="https://github.com/forkanimahdi"><FaGithub /></a>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        id="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 left-0 h-screen w-full bg-black/80 backdrop-blur-lg z-40 flex justify-center items-center"
                        onClick={handleNavClick}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full text-center text-white flex flex-col gap-10 text-xl font-semibold poppin"
                        >


                            {naviger.map((e, i) => (
                                <div key={i}
                                    className="cursor-pointer uppercase hover:opacity-80 transition"
                                    onClick={() => {
                                        if (window.location.pathname !== "/") {
                                            window.location.href = `/#${e}`;
                                        } else {
                                            const section = document.getElementById(e);
                                            if (section) {
                                                section.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }
                                    }}
                                >
                                    {e}
                                </div>
                            ))}

                            <div className="flex gap-6 justify-center pt-4">
                                <a className="text-white text-2xl" target="_blank" href="https://www.linkedin.com/in/forkanimahdi/"><FaLinkedinIn /></a>
                                <a className="text-white text-2xl" target="_blank" href="https://github.com/forkanimahdi"><FaGithub /></a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
