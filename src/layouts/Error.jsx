import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiHome, FiArrowLeft, FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/images/myLogo.png";

export const Error = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const numbersRef = useRef([]);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Create floating particles
    createParticles();

    // Entrance animations
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(numbersRef.current, { scale: 0, rotation: 180, opacity: 0 });
    gsap.set(logoRef.current, { scale: 0, rotation: -180, opacity: 0 });
    gsap.set(textRef.current, { y: 50, opacity: 0 });
    gsap.set(buttonsRef.current, { y: 30, opacity: 0 });

    // Animate entrance
    tl.to(numbersRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2
      })
      .to(logoRef.current, {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.4")
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .to(buttonsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.2");

    // Continuous logo animation
    gsap.to(logoRef.current, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    // Floating animation for numbers
    numbersRef.current.forEach((num, index) => {
      gsap.to(num, {
        y: -10,
        duration: 2 + index * 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3
      });
    });

    // Animate particles
    animateParticles();
  }, []);

  const createParticles = () => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white/20 rounded-full';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      container.appendChild(particle);
      particlesRef.current.push(particle);
    }
  };

  const animateParticles = () => {
    particlesRef.current.forEach((particle, index) => {
      gsap.to(particle, {
        y: -100,
        x: Math.random() * 100 - 50,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1
      });
    });
  };

  return (
    <div
      ref={containerRef}
      className="h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden dynamic-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 border border-white/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* 404 with Logo */}
        <div className="flex items-center justify-center gap-6 lg:gap-8">
          <h1
            ref={el => numbersRef.current[0] = el}
            className="text-8xl lg:text-9xl boldPoppin text-white text-glow"
          >
            4
          </h1>
          <div className="relative">
            <img
              ref={logoRef}
              loading="lazy"
              className="w-24 lg:w-32 filter drop-shadow-2xl"
              src={logo}
              alt="Logo"
            />
            <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          </div>
          <h1
            ref={el => numbersRef.current[1] = el}
            className="text-8xl lg:text-9xl boldPoppin text-white text-glow"
          >
            4
          </h1>
        </div>

        {/* Error Message */}
        <div ref={textRef} className="space-y-4">
          <div className="flex items-center justify-center gap-3 text-white/80">
            <FiAlertTriangle className="text-2xl" />
            <h2 className="text-2xl lg:text-3xl boldPoppin">Page Not Found</h2>
          </div>
          <p className="text-white/70 poppin text-lg max-w-md mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>
        </div>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="px-8 py-4 bg-white text-black rounded-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 font-semibold poppin flex items-center gap-3 group border-glow"
          >
            <FiHome className="text-lg group-hover:scale-110 transition-transform duration-300" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-white/30 text-white rounded-xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-semibold poppin flex items-center gap-3 group"
          >
            <FiArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30 poppin text-sm">
        Error 404 • Portfolio
      </div>
    </div>
  );
};
