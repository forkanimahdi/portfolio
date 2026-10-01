import { useEffect } from "react";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Clients } from "./components/clients";
import { Achievements } from "./components/achievements";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";

export const Home = ({ ready }) => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const section = document.getElementById(id);
            if (section) {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, []);

    return (
        <>
            <Seo
                title="Mehdi Forkani | Mobile & Web App Developer (Laravel, React, React Native)"
                description="Mehdi Forkani is a freelance mobile & web app developer based in Casablanca, Morocco, working with clients worldwide. I build production web platforms and mobile apps with Laravel, React, Inertia.js, and React Native for startups, NGOs, and organizations."
                path="/"
            />
            <Hero ready={ready} />
            <About />
            <Clients />
            <Achievements />
            <Projects />
            <Technologies />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};
