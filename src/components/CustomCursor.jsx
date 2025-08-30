import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        // Only show custom cursor on desktop
        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseEnter = () => {
            gsap.to([cursor, follower], {
                scale: 1.5,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to([cursor, follower], {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleLinkHover = () => {
            gsap.to(cursor, {
                scale: 0.5,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(follower, {
                scale: 2,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleLinkLeave = () => {
            gsap.to([cursor, follower], {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        // Event listeners
        document.addEventListener('mousemove', moveCursor);
        
        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cursor-hover');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleLinkHover);
            el.addEventListener('mouseleave', handleLinkLeave);
        });

        // Add hover effects for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHover);
                el.removeEventListener('mouseleave', handleLinkLeave);
            });
            projectCards.forEach(card => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Only render on desktop
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobile) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9998] mix-blend-difference hidden lg:block"
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9997] hidden lg:block"
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;
