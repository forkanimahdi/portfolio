import { useEffect, useState } from "react";

export const ScrollBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);


    let e = document.title;
    window.addEventListener("blur", () => {
        document.title = "Im Here ! ​ "
    })
        window.addEventListener("focus", () => {
            document.title = e
        })
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollableDistance = documentHeight - windowHeight;

            if (scrollableDistance === 0) {
                setScrollPercent(0);
            } else {
                const newScrollPercent = (scrollTop / scrollableDistance) * 100;
                setScrollPercent(Math.round(Math.min(100, Math.max(0, newScrollPercent))));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="w-full h-1 z-50 fixed top-0">
                <div style={{ width: `${scrollPercent}%`, transition: "0.7s ease" }} className="h-full bg-white scrollNav"></div>
            </div>

        </>
    )
};
