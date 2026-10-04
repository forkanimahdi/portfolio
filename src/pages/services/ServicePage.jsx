import { useEffect } from "react";
import { Hero } from "./components/hero";
import { Offers } from "./components/offers";
import { Proof } from "./components/proof";
import { Approach } from "./components/approach";
import { Faq } from "./components/faq";
import { Cta } from "./components/cta";
import { Footer } from "../../layouts/Footer";
import Seo from "../../utils/Seo";
import { serviceSeo } from "../../seo/pages";
import { useServicePage } from "../../hooks/useServicePage";

export const ServicePage = () => {
    const { page } = useServicePage();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [page.path]);

    return (
        <>
            <Seo {...serviceSeo(page)} />
            <main id="main">
                <Hero />
                <Offers />
                <Proof />
                <Approach />
                <Faq />
                <Cta />
            </main>
            <Footer />
        </>
    );
};
