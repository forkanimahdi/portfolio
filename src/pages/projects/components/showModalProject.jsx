import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FiExternalLink, FiGithub, FiX, FiCode, FiCalendar, FiUsers } from 'react-icons/fi';

const ShowModalProject = () => {
    const { selectedProject, setSelectedProject } = useAppContext();
    const isMobileApp = selectedProject?.technologies?.includes("React Native");

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setSelectedProject(null);
        };
        if (selectedProject) {
            window.addEventListener('keydown', onKey);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [selectedProject, setSelectedProject]);

    const handleBackdropClick = (e) => {
        if (e.target.id === 'modal-backdrop') {
            setSelectedProject(null);
        }
    };

    return (
        <AnimatePresence>
            {selectedProject && (
                <motion.div
                    id="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    onClick={handleBackdropClick}
                    className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center px-4"
                >
                    <motion.div
                        initial={{ y: 100, scale: 0.9, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 50, scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-5xl w-full max-h-[85vh] min-h-fit md:h-auto flex flex-col md:flex-row gap-6 md:gap-8 p-5 md:p-8 text-white shadow-2xl overflow-hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedProject?.name || 'Project details'}
                    >
                        <div className="w-full md:w-1/2 flex flex-col gap-3">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                                className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10"
                            >
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="w-full h-56 md:h-full object-contain p-4"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="hidden md:flex flex-wrap gap-2"
                            >
                                {selectedProject.technologies.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm tracking-wide">
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                            className="flex-1 flex flex-col justify-between gap-4 md:gap-6 overflow-hidden"
                        >
                            <div className=" pr-1  md:max-h-none overflow-y-auto md:pr-2">
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-2xl lg:text-4xl boldPoppin leading-snug"
                                >
                                    {selectedProject.name}
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-white/80 mt-3 text-base md:text-lg leading-relaxed"
                                >
                                    {selectedProject.description}
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex md:hidden flex-wrap gap-2 mt-4"
                                >
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/90 text-xs tracking-wide">
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6 sticky bottom-0 bg-[#0a0a0a] pt-3 md:pt-4"
                            >
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 py-3 text-center bg-white text-black rounded-xl hover:bg-gray-200 transition font-semibold border border-white/10"
                                >
                                    {isMobileApp ? "Download App" : "Live Website"}
                                </a>
                                {selectedProject.repo && (
                                    <a
                                        href={selectedProject.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 py-3 text-center border border-white/20 text-white rounded-xl hover:bg-white hover:text-black transition font-semibold"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-3 right-3 md:top-4 md:right-4 text-white/80 hover:text-white transition text-xl md:text-2xl bg-white/5 hover:bg-white/10 border border-white/10 rounded-full w-9 h-9 md:w-10 md:h-10 grid place-items-center"
                            aria-label="Close"
                        >
                            <FiX />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ShowModalProject;
