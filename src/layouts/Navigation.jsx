
import logo from "../assets/images/myLogo.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export const Navigation = () => {

    const naviger = [
        "home",
        "about",
        "projects",
        "contact",
    ]

    const [nav, setNav] = useState(false)
    return (
        <>
        <div className="lg:block hidden">

            <AnimatedCursor
                innerSize={10}
                outerSize={80}
                color="256, 256, 256"
                outerAlpha={1}
                innerScale={0.7}
                outerScale={0.5}
                clickables={[
                    "a",
                    "button",
                    ".nav"
                ]}
                hasBlendMode={true}
                outerStyle={{
                    border: "1px solid black",
                    mixBlendMode: "difference",
                }}
            />

        </div>

            <div className="lg:h-[10vh] lg:py-0 py-2 h-fit select-none fixed w-full uppercase z-10  bg-[#010101] flex lg:flex-row flex-col items-center lg:justify-between px-8  lg:px-16 ">

                <div className="lg:w-fit w-full flex items-center justify-between flex-row-reverse">
                    <RiMenu3Line onClick={() => setNav(!nav)} className="text-3xl text-white lg:hidden" />
                    <a href="/">
                        <img className="w-14" src={logo} alt="" />
                    </a>
                </div>



                <div style={{ transition: "0.5s" }} className={`flex lg:w-fit lg:static fixed poppin   ${nav ? "top-[12vh]" : "top-[-100vh]"} bg-black px-8 w-full gap-x-16 h-fit  lg:h-full lg:flex-row items-center flex-col`}>

                    {
                        naviger.map((e, i) =>

                            <div key={i}
                                className="text-[#bdbdbd] nav cursor-pointer lg:border-none  border-b lg:w-fit w-full lg:py-0 py-7  font lg:text-lg no-underline"
                                onClick={() => {
                                    const section = document.getElementById(e);
                                    console.log(section)
                                    if (section) {
                                        section.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                {e}
                            </div>
                        )
                    }
                </div>

                <div className="lg:flex hidden gap-x-4">
                    <a className="text-[#fff] font text-2xl no-underline " target="_blank" href="https://www.linkedin.com/in/forkanimahdi/"><FaLinkedinIn /></a>
                    <a className="text-[#fff] font text-2xl no-underline " target="_blank" href="https://github.com/forkanimahdi"><FaGithub /></a>
                </div>
            </div>
        </>
    )
}
