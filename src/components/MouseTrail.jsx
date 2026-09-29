import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseTrail = () => {
    const trailRefs = useRef([]);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        const trailCount = 20;
        const trails = [];

        for (let i = 0; i < trailCount; i++) {
            const trail = document.createElement('div');
            trail.className = 'mouse-trail';
            trail.style.cssText = `
                position: fixed;
                width: ${8 - i * 0.3}px;
                height: ${8 - i * 0.3}px;
                background: rgba(255, 255, 255, ${0.8 - i * 0.04});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                mix-blend-mode: difference;
                transform: translate(-50%, -50%);
            `;
            document.body.appendChild(trail);
            trails.push(trail);
        }

        trailRefs.current = trails;

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const animateTrail = () => {
            trails.forEach((trail, index) => {
                const delay = index * 0.02;
                
                gsap.to(trail, {
                    x: mousePos.current.x,
                    y: mousePos.current.y,
                    duration: 0.3 + delay,
                    ease: "power2.out"
                });
            });
        };

        const animate = () => {
            animateTrail();
            requestAnimationFrame(animate);
        };

        document.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            trails.forEach(trail => trail.remove());
        };
    }, []);

    return null;
};

export default MouseTrail;
