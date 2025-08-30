import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logo from "../assets/images/myLogo.png";
import mlg from "../assets/images/projects/mylionsgeek.gif";
import lionsgeek from "../assets/images/projects/lionsgeek.png";
import yes from "../assets/images/projects/yes-africa.png";
import casatourat_backend from "../assets/images/projects/casatourat_backend.gif";
import yesMobile_backend from "../assets/images/projects/yesMobile_backend.gif";
import casatourat from "../assets/images/projects/casatourat.png";
import yes_backend from "../assets/images/projects/yes_backend.png";
import yes_learning from "../assets/images/projects/yes_learning.gif";
import yes_mobile from "../assets/images/projects/yes_mobile.png";
import hd4h from "../assets/images/projects/hd4h.gif";

const AdvancedLoader = ({ onLoadComplete }) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [assetsLoaded, setAssetsLoaded] = useState(false);
    const loaderRef = useRef(null);
    const logoRef = useRef(null);
    const progressBarRef = useRef(null);
    const textRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        // Create floating particles
        createParticles();
        
        // Start loading assets
        loadAssets();
        
        // Initial animations
        gsap.fromTo(logoRef.current, 
            { scale: 0, rotation: -180, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: "back.out(1.7)" }
        );

        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
        );

        // Animate particles
        animateParticles();
    }, []);

    useEffect(() => {
        // Update progress bar
        gsap.to(progressBarRef.current, {
            width: `${loadingProgress}%`,
            duration: 0.5,
            ease: "power2.out"
        });

        if (loadingProgress === 100 && assetsLoaded) {
            // Complete loading animation
            setTimeout(() => {
                completeLoading();
            }, 500);
        }
    }, [loadingProgress, assetsLoaded]);

    const createParticles = () => {
        const particleContainer = document.querySelector('.particles-container');
        if (!particleContainer) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
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
                scale: Math.random() * 0.5 + 0.5
            });

            gsap.to(particle, {
                y: "-=100",
                x: `+=${Math.random() * 100 - 50}`,
                opacity: Math.random() * 0.8 + 0.2,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.1
            });
        });
    };

    const loadAssets = () => {
        const images = [
            logo,
            mlg,
            lionsgeek,
            yes,
            casatourat_backend,
            yesMobile_backend,
            casatourat,
            yes_backend,
            yes_learning,
            yes_mobile,
            hd4h
        ];

        let loadedCount = 0;
        const totalAssets = images.length;

        const updateProgress = () => {
            loadedCount++;
            const progress = Math.round((loadedCount / totalAssets) * 100);
            setLoadingProgress(progress);
            
            if (loadedCount === totalAssets) {
                setAssetsLoaded(true);
            }
        };

        // Load images
        images.forEach(src => {
            const img = new Image();
            img.onload = updateProgress;
            img.onerror = updateProgress; // Still count as loaded to prevent hanging
            img.src = src;
        });

        // Simulate minimum loading time for effect
        setTimeout(() => {
            if (loadedCount === totalAssets) {
                setAssetsLoaded(true);
            }
        }, 2000);
    };

    const completeLoading = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                onLoadComplete();
            }
        });

        // Animate logo explosion
        tl.to(logoRef.current, {
            scale: 1.2,
            rotation: 360,
            duration: 0.5,
            ease: "power2.out"
        })
        .to(logoRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        })
        .to(textRef.current, {
            y: -50,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.2")
        .to(progressBarRef.current.parentElement, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.2")
        .to(loaderRef.current, {
            opacity: 0,
            scale: 1.1,
            duration: 0.5,
            ease: "power2.inOut"
        }, "-=0.1");

        // Animate particles out
        particlesRef.current.forEach((particle, index) => {
            gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                delay: index * 0.01,
                ease: "power2.in"
            });
        });
    };

    return (
        <div 
            ref={loaderRef}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Particles Container */}
            <div className="particles-container absolute inset-0"></div>
            
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
            
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
                {/* Logo */}
                <div ref={logoRef} className="relative">
                    <img 
                        src={logo} 
                        alt="Logo" 
                        className="w-32 h-32 lg:w-40 lg:h-40 object-contain filter drop-shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                </div>

                {/* Loading Text */}
                <div ref={textRef} className="text-center space-y-4">
                    <h1 className="text-white boldPoppin text-2xl lg:text-4xl tracking-wider">
                        LOADING PORTFOLIO
                    </h1>
                    <p className="text-white/70 poppin text-lg">
                        Preparing an amazing experience...
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="w-80 lg:w-96 bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/20">
                    <div 
                        ref={progressBarRef}
                        className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 ease-out relative"
                        style={{ width: '0%' }}
                    >
                        <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
                    </div>
                </div>

                {/* Progress Percentage */}
                <div className="text-white/80 poppin text-lg font-semibold">
                    {loadingProgress}%
                </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
            <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
        </div>
    );
};

export default AdvancedLoader;
