import { useEffect, useState } from "react";

export const ScrollBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        let pageTitle = document.title;

        const handleBlur = () => {
            pageTitle = document.title;
            document.title = "Im Here ! ";
        };

        const handleFocus = () => {
            document.title = pageTitle;
        };

        window.addEventListener("blur", handleBlur);
        window.addEventListener("focus", handleFocus);

        return () => {
            window.removeEventListener("blur", handleBlur);
            window.removeEventListener("focus", handleFocus);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollableDistance === 0) {
                setScrollPercent(0);
            } else {
                setScrollPercent(Math.min(100, (window.scrollY / scrollableDistance) * 100));
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 z-[110] h-[2px] w-full">
            <div style={{ width: `${scrollPercent}%` }} className="h-full bg-alpha transition-[width] duration-700 ease-out"></div>
        </div>
    );
};
