import { useEffect } from 'react';
import { gsap } from 'gsap';

const MouseTrail = () => {
    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isMobile || reducedMotion) return;

        const trailCount = 20;
        const trails = [];
        const movers = [];

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

            const duration = 0.3 + i * 0.02;
            movers.push({
                x: gsap.quickTo(trail, 'x', { duration, ease: 'power2.out' }),
                y: gsap.quickTo(trail, 'y', { duration, ease: 'power2.out' }),
            });
        }

        const handleMouseMove = (e) => {
            movers.forEach((mover) => {
                mover.x(e.clientX);
                mover.y(e.clientY);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            trails.forEach((trail) => {
                gsap.killTweensOf(trail);
                trail.remove();
            });
        };
    }, []);

    return null;
};

export default MouseTrail;
