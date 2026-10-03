import { useEffect } from "react";
import { Hero } from "./components/hero";
import { Steps } from "./components/steps";
import { Contact as ContactForm } from "../home/components/contact";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";
import { contactSeo } from "../../seo/pages";

export const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Seo {...contactSeo} />
            <main id="main">
                <Hero />
                <ContactForm full />
                <Steps />
            </main>
            <Footer />
        </>
    );
};
