import React, { useState } from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";

import jadara from "../../../assets/images/clients/jadara.png"
import lionsgeek from "../../../assets/images/clients/lionsgeek.png"
import casamemoire from "../../../assets/images/clients/casamemoire.png"
// import tm from "../../../assets/images/clients/2m.png"

export const Clients = () => {

    const clients = [
        { logo: jadara, name: "Jadara" },
        { logo: lionsgeek, name: "lionsgeek" },
        { logo: casamemoire, name: "casamemoire" },
        // { logo: tm, name: "2M" },

    ];

    return (
        <>
            <div id="projects" className="  py-3  flex flex-col gap-y-8 items-center justify-start">


                <motion.h1 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[2rem] boldPoppin  ">Trusted By</motion.h1>
                {/* <motion.p variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" className="text-[#bdbdbd] selection:bg-white text-center px-3 lg:text-start selection:text-black poppin lg:text-lg ">Together with my clients, we bring innovative visions to reality. </motion.p> */}

                <div className="w-4/5 flex items-center justify-center gap-x-8 ">
                    {clients.map((client, idx) => (
                        <div title={client.name} key={idx} className=" w-32 h-3w-32 flex items-center justify-center select-none hover:bg-slate-500/30 p-6  bg-white/5 border border-[#ffffff1a] rounded-lg">
                            <img  className="invert brightness-0" src={client.logo} alt="" />

                        </div>
                    ))}


                </div>


                <div className="lg:w-1/3 cursor-pointer w-11/12 lg:font-semibold lg:text-lg  text-white/80 text-center relative py-3 rounded-full">
                    <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute rounded-full"></div>
                    <h1 className="static z-20 selection:bg-white selection:text-black poppin">Trusted by countless partners worldwide.</h1>
                </div>


            </div>
        </>
    );
};
