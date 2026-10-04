import { GoChevronDown } from "react-icons/go";
import { useServicePage } from "../../../hooks/useServicePage";
import { eyebrow, sectionTitle } from "./headings";

export const Faq = () => {
    const { page, ui } = useServicePage();

    return (
        <section className="border-t border-white/[0.06] py-24 lg:py-32">
            <div className="container grid gap-14 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                    {eyebrow("FAQ")}
                    {sectionTitle(ui.faqTitle)}
                </div>

                <div className="border-t border-white/[0.06] lg:col-span-8">
                    {page.faqs.map((faq) => (
                        <details key={faq.question} className="group border-b border-white/[0.06]">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                                <h3 className="font-display text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-alpha lg:text-xl">
                                    {faq.question}
                                </h3>
                                <GoChevronDown className="shrink-0 text-xl text-white/50 transition-transform duration-300 group-open:rotate-180 group-open:text-alpha" />
                            </summary>
                            <p className="pb-6 pr-10 text-base leading-relaxed text-white/60 lg:text-[17px] lg:leading-8">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};
