import React, { useState } from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";

import jadara from "../../../assets/images/clients/jadara.png"
import lionsgeek from "../../../assets/images/clients/lionsgeek.png"
import casamemoire from "../../../assets/images/clients/casamemoire.png"
import tilila from "../../../assets/images/clients/tilila.png"
import mhijir from "../../../assets/images/clients/mhijir.png"
import a1 from "../../../assets/images/clients/a1.png"
import tihadazemmour from "../../../assets/images/clients/tihadazemmour.png"
// import tm from "../../../assets/images/clients/2m.png"

export const Clients = () => {

    const clients = [
        { logo: jadara, name: "Jadara" },
        { logo: lionsgeek, name: "LionsGeek" },
        { logo: casamemoire, name: "Casamemoire" },
        { logo: tilila, name: "Tilila" },
        { logo: mhijir, name: "Oumaima Mhijir" },
        { logo: tihadazemmour, name: "Tihada Zemmour" },
        { logo: a1, name: "Atelier A1" },
        // { logo: tm, name: "2M" },

    ];

    return (
        <>
            <div id="clients" className="  py-3  flex flex-col gap-y-8 items-center justify-start">


                <motion.h1 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[2rem] boldPoppin  ">Trusted By</motion.h1>
                {/* <motion.p variants={fadeIn('up', 0.4)} initial="hidden" whileInView="show" className="text-[#bdbdbd] selection:bg-white text-center px-3 lg:text-start selection:text-black poppin lg:text-lg ">Together with my clients, we bring innovative visions to reality. </motion.p> */}

                <div className="w-4/5 grid lg:grid-cols-6 items-center grid-cols-2 gap-8 ">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeIn('up', 0.1 * idx)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: true }}
                        >
                            <div
                                title={client.name}
                                className=" flex-col gap-y-2 brightness-0 invert flex items-center justify-center select-none hover:bg-slate-500/30 p-5 bg-white/5 border border-[#ffffff1a] rounded-lg"
                            >
                                <img
                                    className="object-contain w-24 h-24 max-w-full max-h-full"
                                    src={client.logo}
                                    alt={client.name}
                                />

                                {/* <h1 className="font-bold text-sm">{client.name}</h1> */}
                            </div>
                        </motion.div>
                    ))}



                </div>


                <div className="flex items-center justify-center w-full px-5 lg:px-0">
                    <div className="lg:w-1/3  w-full mt-8 text-white/80 text-center relative py-3 lg:rounded-full rounded-xl">
                        <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute lg:rounded-full rounded-xl"></div>
                        <h1 className="z-20 poppin">Trusted by countless partners .</h1>
                    </div>
                </div>


            </div>
        </>
    );
};
