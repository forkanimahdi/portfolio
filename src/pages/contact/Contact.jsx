import { useEffect } from "react";
import { Hero } from "./components/hero";
import { Steps } from "./components/steps";
import { Contact as ContactForm } from "../home/components/contact";
import { contactJsonLd, contactSeo } from "../../data/contact";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";

export const Contact = ({ ready = true }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Seo title={contactSeo.title} description={contactSeo.description} path={contactSeo.path} jsonLd={contactJsonLd} />
            <Hero ready={ready} />
            <ContactForm full />
            <Steps />
            <Footer />
        </>
    );
};
