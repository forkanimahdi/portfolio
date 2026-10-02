import { Hero } from "./components/hero";
import Seo from "../../utils/Seo";
import { notFoundSeo } from "../../seo/pages";

export const Error = ({ ready = true }) => {
    return (
        <>
            <Seo {...notFoundSeo} />
            <main id="main">
                <Hero ready={ready} />
            </main>
        </>
    );
};
