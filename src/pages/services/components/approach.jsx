import { GoCheck } from "react-icons/go";
import { projects } from "../../../data/projects";
import { useServicePage } from "../../../hooks/useServicePage";
import { eyebrow, sectionTitle } from "./headings";

export const Approach = () => {
    const { page, ui } = useServicePage();

    return (
        <section className="border-t border-white/[0.06] py-24 lg:py-32">
            <div className="container grid gap-14 lg:grid-cols-2 lg:gap-16">
                <div>
                    {eyebrow("Mehdi Forkani")}
                    {sectionTitle(ui.whyTitle)}
                    <ul className="mt-10 flex flex-col gap-5">
                        {page.why(projects.length).map((reason) => (
                            <li key={reason} className="flex gap-4 text-base leading-relaxed text-white/65 lg:text-[17px] lg:leading-8">
                                <GoCheck className="mt-1.5 shrink-0 text-alpha" aria-hidden="true" />
                                {reason}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    {eyebrow("Process")}
                    {sectionTitle(ui.processTitle)}
                    <ol className="mt-10 flex flex-col gap-4">
                        {page.process.map((step, idx) => (
                            <li key={step.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                                <span className="font-mono text-sm text-white/55">0{idx + 1}</span>
                                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-white">{step.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-white/55">{step.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};
