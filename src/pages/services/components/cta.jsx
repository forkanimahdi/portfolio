import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { servicePages } from "../../../data/services";
import { useServicePage } from "../../../hooks/useServicePage";
import { sectionTitle } from "./headings";

export const Cta = () => {
    const { page, ui } = useServicePage();
    const related = servicePages.filter((other) => other.lang === page.lang && other.key !== page.key);

    return (
        <section className="border-t border-white/[0.06] py-24 lg:py-32">
            <div className="container">
                {sectionTitle(ui.ctaTitle)}
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 lg:text-lg">{ui.ctaText}</p>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <Link
                        to="/contact"
                        className="group flex items-center gap-2 rounded-lg bg-alpha px-6 py-3 text-sm font-semibold text-pure-white transition duration-300 hover:brightness-125"
                    >
                        {ui.cta}
                        <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    {related.map((other) => (
                        <Link
                            key={other.path}
                            to={other.path}
                            className="text-sm text-white/60 underline decoration-white/20 underline-offset-4 transition-colors duration-300 hover:text-alpha hover:decoration-alpha"
                        >
                            {ui.otherServices}: {other.navLabel}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
