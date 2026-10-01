import { useEffect } from "react";
import { Hero } from "./components/hero";
import { Highlights } from "./components/highlights";
import { Journey } from "./components/journey";
import { Faq } from "./components/faq";
import { aboutJsonLd, aboutSeo } from "../../data/about";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";

export const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Seo title={aboutSeo.title} description={aboutSeo.description} path={aboutSeo.path} jsonLd={aboutJsonLd} />
            <Hero />
            <Highlights />
            <Journey />
            <Faq />
            <Footer />
        </>
    );
};
