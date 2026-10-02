import { useEffect } from "react";
import { Hero } from "./components/hero";
import { Highlights } from "./components/highlights";
import { Journey } from "./components/journey";
import { Faq } from "./components/faq";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";
import { aboutSeo } from "../../seo/pages";

export const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Seo {...aboutSeo} />
            <main id="main">
                <Hero />
                <Highlights />
                <Journey />
                <Faq />
            </main>
            <Footer />
        </>
    );
};
