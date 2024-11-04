import React from "react";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";


export const Contact = () => {




    return (
        <>
            <div id="contact" className="   flex flex-col   items-center justify-center gap-y-5 px-6">

                <motion.h1 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[3rem] boldPoppin  ">L'ets Talk</motion.h1>
                {/* <motion.p variants={fadeIn('up', 0.2)} initial="hidden" whileInView="show" className="text-[#bdbdbd] selection:bg-white selection:text-black poppin text-lg ">Together with my clients, we bring innovative visions to reality. </motion.p> */}

                <div  className="lg:w-3/4 lg:px-0 px-2 py-8 h-full flex flex-col items-center gap-y-8 bg-white rounded-3xl">
                    <motion.h1 variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} className="poppin lg:text-4xl text-2xl font-semibold">Lets Work Together</motion.h1>
                    <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} className="poppin text-black text-base lg:w-1/2 text-center">Unlock your potential with personalized solutions tailored just for you  let's embark on a journey of growth and success together!</motion.p>
                    <motion.a  variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} className="py-2 w-1/3 lg:w-1/6 text-center hover:bg-black hover:text-white poppin poppin border border-black rounded-xl" href="#" target="_blank">Contact</motion.a>
                </div>
                <div className="lg:w-3/4 flex lg:gap-y-0 gap-y-4 lg:flex-row flex-col py-6   rounded-3xl">
                    <form className="lg:w-1/2 lg:p-5 p-3 h-full flex border rounded-3xl  border-white/70 flex-col gap-y-6" action="">
                        <div className="flex lg:flex-row flex-col lg:gap-x-5 gap-y-5 ">

                            <div className="  flex flex-col gap-y-4 w-full  ">
                                <input placeholder="Name" className="px-6 bg-transparent text-white  placeholder:text-white/50 border py-4 border-white/60 hover:border-white rounded-2xl " type="text" />
                            </div>
                            <div className=" w-full  flex flex-col gap-y-4  ">
                                <input placeholder="Email" className="px-6 bg-transparent text-white  placeholder:text-white/50 border py-4 border-white/60 hover:border-white rounded-2xl " type="text" />
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-y-5 lg:gap-x-5 ">

                            <div className="  flex flex-col gap-y-4 w-full  ">
                                <input placeholder="Phone Number" className="px-6 bg-transparent text-white  placeholder:text-white/50 border py-4 border-white/60 hover:border-white rounded-2xl " type="text" />
                            </div>
                            <div className=" w-full  flex flex-col gap-y-4  ">
                                <input placeholder="Subject" className="px-6 bg-transparent text-white  placeholder:text-white/50 border py-4 border-white/60 hover:border-white rounded-2xl " type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4  h-full ">
                            <textarea placeholder="Description" className="px-6  bg-transparent text-white  placeholder:text-white/50 border p-4 h-52 border-white/60 hover:border-white rounded-2xl " type="text" />
                        </div>
                        <button className="w-full border py-3 text-white hover:bg-white hover:text-black border-white/50 rounded-xl " type="submit">Submit </button>
                    </form>
                    <div className=" lg:w-1/2 w-full flex items-center justify-center flex-wrap gap-3 ">
                        <a href="https://www.linkedin.com/in/forkanimahdi/" target="_blank" className="lg:w-[45%] w-full p-5 sociallink flex lg:flex-col lg:justify-between items-start text-white hover:text-black hover:bg-white transition-all static z-10 h-1/2 border border-white/35 rounded-2xl">
                            <FaLinkedinIn className=" iconsocial  text-2xl" />
                            <div className="flex text-xl w-full lg:flex-row flex-row-reverse justify-between px-4 items-center gap-x-2">
                                <GoArrowUpRight />
                                <p className="">@forkanimahdi</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/forkanimahdi" target="_blank" className="lg:w-[45%] w-full p-5 sociallink flex lg:flex-col lg:justify-between items-start text-white hover:text-black hover:bg-white transition-all static z-10 h-1/2 border border-white/35 rounded-2xl">
                            <FaInstagram className=" iconsocial  text-2xl" />
                            <div className="flex text-xl w-full lg:flex-row flex-row-reverse justify-between px-4 items-center gap-x-2">
                                <GoArrowUpRight />
                                <p className="">@forkanimahdi</p>
                            </div>
                        </a>
                        <a href="https://twitter.com/forkanimahdi" target="_blank" className="lg:w-[45%] w-full p-5 sociallink flex lg:flex-col lg:justify-between items-start text-white hover:text-black hover:bg-white transition-all static z-10 h-1/2 border border-white/35 rounded-2xl">
                            <FaXTwitter className=" iconsocial  text-2xl" />
                            <div className="flex text-xl w-full lg:flex-row flex-row-reverse justify-between px-4 items-center gap-x-2">
                                <GoArrowUpRight />
                                <p className="">@forkanimahdi</p>
                            </div>
                        </a>
                        <a href="mailto:forkanimahdi@gmail.com" target="_blank" className="lg:w-[45%] w-full p-5 sociallink flex lg:flex-col lg:justify-between items-start text-white hover:text-black hover:bg-white transition-all static z-10 h-1/2 border border-white/35 rounded-2xl">
                            <SiGmail className=" iconsocial  text-2xl" />
                            <div className="flex text-xl w-full lg:flex-row flex-row-reverse justify-between px-4 items-center gap-x-2">
                                <GoArrowUpRight />
                                <p className="">@forkanimahdi</p>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
        </>
    );
};
