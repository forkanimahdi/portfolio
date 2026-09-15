import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { clients } from "../../../data/clients";

export const Clients = () => {
  return (
    <>
      <div id="clients" className="py-3 flex flex-col gap-y-8 items-center justify-start">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[2rem] boldPoppin"
        >
          Trusted By
        </motion.h1>

        <div className="w-5/6 grid lg:grid-cols-8 items-center grid-cols-2 gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", 0.1 * idx)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
            >
              <div
                title={client.name}
                className={`flex-col gap-y-2 flex items-center justify-center select-none hover:bg-slate-500/30 p-5 bg-white/5 border border-[#ffffff1a] rounded-lg ${
                  client.preserveColor ? "" : "brightness-0 invert"
                }`}
              >
                <img
                  className="object-contain w-24 h-24 max-w-full max-h-full"
                  src={client.logo}
                  alt={client.name}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full px-5 lg:px-0">
          <div className="lg:w-1/3 w-full mt-8 text-white/80 text-center relative py-3 lg:rounded-full rounded-xl">
            <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute lg:rounded-full rounded-xl"></div>
            <h1 className="z-20 poppin">Trusted by countless partners .</h1>
          </div>
        </div>
      </div>
    </>
  );
};
