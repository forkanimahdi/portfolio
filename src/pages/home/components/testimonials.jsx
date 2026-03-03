import React, { useState, useEffect } from "react";
import { fadeIn } from "../../../utils/motion";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Mhijir from "../../../assets/images/testimonials/mhijir.webp"

export const Testimonials = () => {
    // Sample testimonials data - replace with your actual testimonials
    // Add image property for reviewer photos (import them like other images)
    const testimonials = [
        {
            id: 1,
            name: "Oumaima Mhijir",
            role: "CEO, Jadara Foundation",
            company: "Jadara Foundation",
            quote: "I am really impressed by you, not only by your technical Skills but also by your ability to transform a more or less clear vision into a tangible project  Your reactivity and professionalism just wawed be  Thank you sidi ",
            image:  Mhijir
        },
        {
            id: 2,
            name: "Another Client",
            role: "CTO, Tech Startup",
            company: "Tech Startup",
            quote: "Working with Mehdi was a game-changer. He understood our vision and brought it to life with precision and creativity. The final product exceeded our expectations.",
            image: null // Replace with: import reviewer2 from "../../../assets/images/testimonials/reviewer2.jpg"
        },
        {
            id: 3,
            name: "Third Client",
            role: "Project Manager",
            company: "Digital Agency",
            quote: "Professional, reliable, and incredibly talented. Mehdi's work speaks for itself, and his communication throughout the project was excellent.",
            image: null // Replace with: import reviewer3 from "../../../assets/images/testimonials/reviewer3.jpg"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play carousel (only if more than 1 testimonial)
    useEffect(() => {
        if (testimonials.length <= 1 || !isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length, isAutoPlaying]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    // If only one testimonial, display it simply without carousel
    if (testimonials.length === 1) {
        const testimonial = testimonials[0];
        return (
            <div id="testimonials" className="py-3 flex flex-col  items-center justify-start">
                <motion.h1
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[2rem] boldPoppin mb-4"
                >
                    Testimonials
                </motion.h1>

                <motion.p
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    className="text-[#bdbdbd] selection:bg-white text-center px-6 selection:text-black poppin lg:text-base text-sm mb-8"
                >
                    What clients say about working with me.
                </motion.p>

                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    className="w-full lg:w-2/3 px-6 lg:px-0 my-8"
                >
                    <div className="bg-white/5 border border-[#ffffff1a] rounded-2xl p-10 lg:p-16">
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
                            {/* Reviewer Image */}
                            <div className="flex-shrink-0">
                                {testimonial.image ? (
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-cover bg-top border-2 border-white/20"
                                    />
                                ) : (
                                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                                        <span className="text-white text-3xl lg:text-4xl font-semibold">
                                            {testimonial.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Quote and Info */}
                            <div className="flex-1 text-center lg:text-left space-y-6">
                                <p className="text-white/90 text-sm lg:text-base leading-relaxed poppin">
                                    " {testimonial.quote} "
                                </p>
                                <div className="pt-4">
                                    <h3 className="text-white text-base lg:text-lg font-semibold poppin mb-2">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-white/70 text-xs lg:text-sm poppin">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    // Multiple testimonials - simple carousel view
    return (
        <div id="testimonials" className="py-3 flex flex-col items-center justify-start">
            <motion.h1
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                className="uppercase pt-[10vh] selection:bg-white selection:text-black text-white text-[2rem] boldPoppin mb-4"
            >
                Testimonials
            </motion.h1>

            <motion.p
                variants={fadeIn('up', 0.3)}
                initial='hidden'
                whileInView={'show'}
                className="text-[#bdbdbd] selection:bg-white text-center px-6 selection:text-black poppin lg:text-base text-sm mb-8"
            >
                What clients say about working with me.
            </motion.p>

            <div className="w-full lg:w-2/3 px-6 lg:px-0 relative my-8">
                {/* Carousel Container */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/5 border border-[#ffffff1a] rounded-2xl p-10 lg:p-16"
                        >
                            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
                                {/* Reviewer Image */}
                                <div className="flex-shrink-0">
                                    {testimonials[currentIndex].image ? (
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-white/20"
                                        />
                                    ) : (
                                        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                                            <span className="text-white text-3xl lg:text-4xl font-semibold">
                                                {testimonials[currentIndex].name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Quote and Info */}
                                <div className="flex-1 text-center lg:text-left space-y-6">
                                    <p className="text-white/90 text-sm lg:text-base leading-relaxed poppin">
                                        " {testimonials[currentIndex].quote} "
                                    </p>
                                    <div className="pt-4">
                                        <h3 className="text-white text-base lg:text-lg font-semibold poppin mb-2">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="text-white/70 text-xs lg:text-sm poppin">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    {testimonials.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                onMouseEnter={() => setIsAutoPlaying(false)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full p-2 lg:p-3 text-white transition z-10"
                                aria-label="Previous testimonial"
                            >
                                <FaChevronLeft className="text-sm lg:text-base" />
                            </button>
                            <button
                                onClick={goToNext}
                                onMouseEnter={() => setIsAutoPlaying(false)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full p-2 lg:p-3 text-white transition z-10"
                                aria-label="Next testimonial"
                            >
                                <FaChevronRight className="text-sm lg:text-base" />
                            </button>
                        </>
                    )}

                    {/* Simple Dots Indicator */}
                    {testimonials.length > 1 && (
                        <div className="flex justify-center gap-2 mt-10">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    onMouseEnter={() => setIsAutoPlaying(false)}
                                    className={`h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'bg-white w-8'
                                            : 'bg-white/30 w-2 hover:bg-white/50'
                                    }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Decorative bottom element */}
            <div className="flex items-center justify-center w-full px-5 lg:px-0 mt-12">
                <div className="lg:w-1/3 w-full text-white/80 text-center relative py-3 lg:rounded-full rounded-xl">
                    <div className="w-full h-full inset-0 bg-white/50 opacity-25 absolute lg:rounded-full rounded-xl"></div>
                    <h1 className="z-20 poppin">Real feedback from real clients .</h1>
                </div>
            </div>
        </div>
    );
};
