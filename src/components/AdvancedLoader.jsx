import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../assets/images/myLogo.png";

const DURATION_MS = 1400;
const PARTICLES = Array.from({ length: 28 });
const CORNERS = [
    "left-10 top-10 border-l-2 border-t-2 rounded-tl-lg",
    "right-10 top-10 border-r-2 border-t-2 rounded-tr-lg",
    "bottom-10 left-10 border-b-2 border-l-2 rounded-bl-lg",
    "bottom-10 right-10 border-b-2 border-r-2 rounded-br-lg",
];

const AdvancedLoader = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const rootRef = useRef(null);
    const onCompleteRef = useRef(onLoadComplete);
    onCompleteRef.current = onLoadComplete;

    useEffect(() => {
        let frame;
        const ctx = gsap.context(() => {
            gsap.fromTo("[data-logo]", { scale: 0, rotation: -180, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 1.1, ease: "back.out(1.7)" });
            gsap.fromTo("[data-text]", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.35, ease: "power3.out" });

            gsap.utils.toArray("[data-particle]").forEach((particle, i) => {
                gsap.set(particle, {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: Math.random() * 0.5 + 0.5,
                });
                gsap.to(particle, {
                    y: "-=100",
                    x: `+=${Math.random() * 100 - 50}`,
                    opacity: Math.random() * 0.8 + 0.2,
                    duration: Math.random() * 3 + 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.08,
                });
            });
        }, rootRef);

        const exit = () =>
            ctx.add(() => {
                gsap.timeline({ delay: 0.28, onComplete: () => onCompleteRef.current?.() })
                    .to("[data-logo]", { scale: 1.15, rotation: 360, duration: 0.4, ease: "power2.out" })
                    .to("[data-logo]", { scale: 0, opacity: 0, duration: 0.25, ease: "power2.in" }, "-=0.05")
                    .to("[data-text]", { y: -40, opacity: 0, duration: 0.25, ease: "power2.in" }, "-=0.2")
                    .to("[data-progress]", { y: 40, opacity: 0, duration: 0.25, ease: "power2.in" }, "-=0.2")
                    .to("[data-particle]", { scale: 0, opacity: 0, duration: 0.25, stagger: 0.008 }, "<")
                    .to(rootRef.current, { opacity: 0, duration: 0.35, ease: "power2.inOut" }, "-=0.1");
            });

        const start = performance.now();
        const tick = (now) => {
            const t = Math.min(1, (now - start) / DURATION_MS);
            setProgress(Math.round((1 - Math.pow(1 - t, 3)) * 100));
            if (t < 1) frame = requestAnimationFrame(tick);
            else exit();
        };
        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            ctx.revert();
        };
    }, []);

    return (
        <div
            ref={rootRef}
            aria-hidden
            className="fixed inset-0 z-[9999] isolate flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            {PARTICLES.map((_, i) => (
                <span key={i} data-particle className="absolute left-0 top-0 h-0.5 w-0.5 rounded-full bg-white/60" />
            ))}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-alpha/20 blur-[100px]"></div>

            <div className="flex flex-col items-center gap-8">
                <img data-logo src={logo} alt="" className="h-32 w-32 object-contain drop-shadow-2xl lg:h-40 lg:w-40" />

                <div data-text className="space-y-4 text-center">
                    <p className="font-display font-bold tracking-tight text-2xl tracking-wider lg:text-4xl">LOADING PORTFOLIO</p>
                    <p className="text-lg text-white/70">Preparing an amazing experience...</p>
                </div>

                <div data-progress className="flex flex-col items-center gap-8">
                    <div className="h-1.5 w-80 overflow-hidden rounded-full bg-white/10 lg:w-96">
                        <div className="h-full rounded-full bg-gradient-to-r from-alpha/50 to-alpha" style={{ width: `${progress}%` }} />
                    </div>
                    <p className="text-lg font-semibold tabular-nums text-white/80">{progress}%</p>
                </div>
            </div>

            {CORNERS.map((position) => (
                <span key={position} className={`absolute h-20 w-20 border-white/20 ${position}`} />
            ))}
        </div>
    );
};

export default AdvancedLoader;
