import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';

const ShowModalProject = () => {
    const { selectedProject, setSelectedProject } = useAppContext();

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
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
                >
                    <motion.div
                        initial={{ y: 100, scale: 0.9, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: 50, scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className="relative bg-black border border-white/70 rounded-2xl max-w-6xl w-full max-h-[80vh] min-h-fit md:h-auto flex flex-col md:flex-row gap-10 p-6 md:p-10 text-white shadow-2xl overflow-hidden"
                    >
                        <motion.img
                            src={selectedProject.image}
                            alt={selectedProject.name}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            className="w-full md:w-1/2 h-64 md:h-auto rounded-2xl object-contain shadow-xl lg:block hidden"
                        />

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                            className="flex-1 flex flex-col justify-between gap-6 overflow-hidden"
                        >
                            <div className=" pr-2  md:max-h-none">
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-3xl lg:text-4xl boldPoppin leading-snug"
                                >
                                    {selectedProject.name}
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-white/80 mt-3 text-lg leading-relaxed"
                                >
                                    {selectedProject.description}
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-wrap gap-4 mt-6"
                                >
                                    {selectedProject.technologies.map((tech, i) => (
                                        <span key={i} className="text-base tracking-wide text-white font-semibold italic">
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex flex-col sm:flex-row gap-4 mt-6 sticky bottom-0 bg-black pt-4"
                            >
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 py-3 text-center bg-white text-black rounded-xl hover:bg-gray-200 transition font-semibold"
                                >
                                    Live Website
                                </a>
                                {selectedProject.repo && (
                                    <a
                                        href={selectedProject.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 py-3 text-center border border-white text-white rounded-xl hover:bg-white hover:text-black transition font-semibold"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>

                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-white hover:text-red-500 transition text-2xl"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ShowModalProject;
