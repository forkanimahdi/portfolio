import { useServicePage } from "../../../hooks/useServicePage";
import { eyebrow, sectionTitle } from "./headings";

export const Offers = () => {
    const { page, ui } = useServicePage();

    return (
        <section className="border-t border-white/[0.06] py-24 lg:py-32">
            <div className="container">
                {eyebrow(page.serviceType)}
                {sectionTitle(ui.offersTitle)}

                <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {page.offers.map((offer) => (
                        <article key={offer.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 lg:p-8">
                            <h3 className="font-display text-xl font-bold tracking-tight text-white">{offer.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-white/60 lg:text-base lg:leading-7">{offer.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
