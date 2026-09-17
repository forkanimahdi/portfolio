import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "../assets/images/myLogo.png";

/**
 * Lightweight branded intro.
 * Does NOT preload project GIFs/PNGs (those were crushing PageSpeed).
 * Progress is a short timed animation after the logo loads.
 */
const AdvancedLoader = ({ onLoadComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const progressBarRef = useRef(null);
  const textRef = useRef(null);
  const particlesRef = useRef([]);
  const doneRef = useRef(false);

  useEffect(() => {
    createParticles();
    animateParticles();

    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.1, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.35, ease: "power3.out" }
    );

    // Preload only the logo (tiny), then run a short progress tween.
    const img = new Image();
    img.src = logo;
    const startProgress = () => runProgress();
    if (img.complete) startProgress();
    else {
      img.onload = startProgress;
      img.onerror = startProgress;
    }

    return () => {
      particlesRef.current.forEach((p) => p.remove());
      particlesRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!progressBarRef.current) return;
    gsap.to(progressBarRef.current, {
      width: `${loadingProgress}%`,
      duration: 0.25,
      ease: "power2.out",
    });

    if (loadingProgress >= 100 && !doneRef.current) {
      doneRef.current = true;
      const t = setTimeout(() => completeLoading(), 280);
      return () => clearTimeout(t);
    }
  }, [loadingProgress]);

  const createParticles = () => {
    const particleContainer = document.querySelector(".particles-container");
    if (!particleContainer) return;

    for (let i = 0; i < 28; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                pointer-events: none;
            `;
      particleContainer.appendChild(particle);
      particlesRef.current.push(particle);
    }
  };

  const animateParticles = () => {
    particlesRef.current.forEach((particle, index) => {
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
        delay: index * 0.08,
      });
    });
  };

  const runProgress = () => {
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // Ease-out curve so it feels natural
      const eased = 1 - Math.pow(1 - t, 3);
      setLoadingProgress(Math.round(eased * 100));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const completeLoading = () => {
    const tl = gsap.timeline({
      onComplete: () => onLoadComplete(),
    });

    tl.to(logoRef.current, {
      scale: 1.15,
      rotation: 360,
      duration: 0.4,
      ease: "power2.out",
    })
      .to(
        logoRef.current,
        { scale: 0, opacity: 0, duration: 0.25, ease: "power2.in" },
        "-=0.05"
      )
      .to(
        textRef.current,
        { y: -40, opacity: 0, duration: 0.25, ease: "power2.in" },
        "-=0.2"
      )
      .to(
        progressBarRef.current?.parentElement,
        { y: 40, opacity: 0, duration: 0.25, ease: "power2.in" },
        "-=0.2"
      )
      .to(
        loaderRef.current,
        { opacity: 0, duration: 0.35, ease: "power2.inOut" },
        "-=0.1"
      );

    particlesRef.current.forEach((particle, index) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        delay: index * 0.008,
        ease: "power2.in",
      });
    });
  };

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      <div className="particles-container absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
        <div ref={logoRef} className="relative">
          <img
            src={logo}
            alt=""
            className="w-32 h-32 lg:w-40 lg:h-40 object-contain filter drop-shadow-2xl"
          />
          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        </div>

        <div ref={textRef} className="text-center space-y-4">
          <h1 className="text-white boldPoppin text-2xl lg:text-4xl tracking-wider">
            LOADING PORTFOLIO
          </h1>
          <p className="text-white/70 poppin text-lg">
            Preparing an amazing experience...
          </p>
        </div>

        <div className="w-80 lg:w-96 bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/20">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full relative"
            style={{ width: "0%" }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
          </div>
        </div>

        <div className="text-white/80 poppin text-lg font-semibold">
          {loadingProgress}%
        </div>
      </div>

      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
    </div>
  );
};

export default AdvancedLoader;
