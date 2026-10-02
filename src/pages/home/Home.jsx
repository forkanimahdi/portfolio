import { useEffect } from "react";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Clients } from "./components/clients";
import { Achievements } from "./components/achievements";
import { Projects } from "./components/projects";
import { Technologies } from "./components/technologies";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";
import { homeSeo } from "../../seo/pages";

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
            <Seo {...homeSeo} />
            <main id="main">
                <Hero ready={ready} />
                <About />
                <Services />
                <Clients />
                <Achievements />
                <Projects />
                <Technologies />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    );
};
