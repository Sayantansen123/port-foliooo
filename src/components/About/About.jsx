import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const easing = [0.16, 1, 0.3, 1]; // expo out — feels snappier than before

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: easing },
    }),
};

const slideVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: (delay) => ({
        opacity: 1,
        x: 0,
        transition: { delay, duration: 0.9, ease: easing },
    }),
};

export const About = () => {
    const [isColored, setIsColored] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showPrompt, setShowPrompt] = useState(true);

    const eDelay = 1.0;

    const handleClick = () => {
        setIsColored(true);
        setShowPrompt(false);
        setTimeout(() => {
            setShowContent(true);
        }, 1200);
    };

    const handleShowMore = () => {
        setShowContent(true);
        setIsColored(false);

        setTimeout(() => {
            setShowMore(true);
        }, 2200);
    };

    const imageSrc = showMore
        ? "/about-hero-down.png"
        : isColored
            ? "/about-hero.png"
            : "/about-hero-eyes-closed.png";

    return (
        <section id="about" className="relative h-screen overflow-hidden">

            {/* Black & White Background */}
            <div className="absolute inset-0">
                <img src="/bg-white.png" alt="" className="w-full h-full object-cover" />
            </div>

            {/* Color Reveal Layer */}
            <motion.div
                className="absolute inset-0"
                style={{ willChange: "clip-path" }}
                initial={{ clipPath: "circle(0% at 12% 85%)" }}
                animate={{
                    clipPath: isColored
                        ? "circle(180% at 12% 85%)"
                        : "circle(0% at 12% 85%)",
                }}
                transition={{ duration: 2.2, ease: easing }}
            >
                <img src="/bg-color.png" alt="" className="w-full h-full object-cover" />
            </motion.div>

            {/* Water Drop Ripple */}
            <AnimatePresence>
                {isColored && (
                    <motion.div
                        className="absolute rounded-full pointer-events-none"
                        style={{
                            left: "12%",
                            bottom: "15%",
                            transform: "translate(-50%, 50%)",
                            background: "rgba(255,255,255,0.15)",
                            willChange: "transform, opacity",
                        }}
                        initial={{ width: 0, height: 0, opacity: 0.8 }}
                        animate={{ width: 2400, height: 2400, opacity: 0 }}
                        transition={{ duration: 2.2, ease: easing }}
                        exit={{
                            width: 0,
                            height: 0,
                            opacity: 0.8,
                        }}
                    />
                )}</AnimatePresence>

            {/* Revealed Content */}
            {showContent && (
                <motion.div className="relative z-10"
                    animate={{
                        opacity: showContent ? 1 : 0,
                        y: showContent ? 0 : 20,
                    }}
                    transition={{
                        duration: 0.8,
                    }}>
                    <div className="ml-4 mr-4 flex justify-center pt-22 md:pt-35 lg:pt-30 lg:mr-0 lg:pr-24 lg:ml-0 lg:flex lg:justify-end">
                        <motion.div
                            className="w-full sm:w-200 border border-white/20 p-4 rounded-xl bg-white/10 backdrop-blur-xl"
                            style={{ willChange: "opacity, transform" }}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1.0, ease: easing }}
                        >
                            {/* Headline — slides in from left */}
                            <motion.div
                                className="font-bebas text-black text-[30px] md:text-[55px] leading-none"
                                style={{ willChange: "opacity, transform" }}
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                                custom={eDelay + 0.3}
                            >
                                Every <span className="text-[#e60000]">p</span>roject starts the same way—blank, silent, and full of possibilities.
                            </motion.div>

                            {/* Subtitle — fades up */}
                            <motion.div
                                className="text-[20px] text-[#e60000] md:text-[30px] leading-none font-finger mt-1"
                                style={{ willChange: "opacity, transform" }}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={eDelay + 0.65}
                            >
                                The moment creativity meets code, ideas begin to take shape.
                            </motion.div>

                            {/* Body — fades up */}
                            <motion.div
                                className="font-finger text-[16px] text-black md:text-[20px] pt-2"
                                style={{ willChange: "opacity, transform" }}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={eDelay + 0.9}
                            >
                                I'm a developer who enjoys building modern web applications, solving
                                complex problems, and crafting experiences that feel effortless.
                            </motion.div>

                            {/* Show More */}
                            <motion.div
                                className="flex justify-end cursor-pointer font-serif mt-4"
                                style={{ willChange: "opacity, transform" }}
                                onClick={handleShowMore}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                custom={eDelay + 1.1}
                            >
                                <div className="text-white font-finger p-1 px-2 text-sm text-center border-2 rounded-4xl bg-[#e60000] border-[#e83e3e] hover:bg-white/10 hover:text-black transition-colors duration-200">
                                    Show more...
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {/* Pre-reveal prompt */}
            {showPrompt && (
                <motion.div
                    className="relative z-10 md:pl-14"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: easing }}
                >
                    <div className="ml-4 pt-40 md:pr-70 md:ml-0 md:flex justify-end">
                        <div className="w-80 md:w-140">
                            <div className="font-finger text-black md:text-[40px]">
                                An empty canvas looks a little bland, doesn't it?
                            </div>
                            <div className="font-finger text-[#e83e3e] md:text-[25px]">
                                Let's wake up the girl and bring some color to life
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Show More Panel */}
            <AnimatePresence>
                {showMore && (
                    <motion.div
                        className="
                fixed
                bottom-30
                left-1/2
                -translate-x-1/2
                z-30
                w-[90%]
                md:bottom-120
                lg:w-40
                lg:left-84
                lg:translate-x-0
                lg:bottom-80
            "
                        initial={{ opacity: 0, y: 16, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: easing }}
                    >
                        {/* Mobile + Tablet */}
                        <div className="flex lg:hidden gap-3">
                            <div className="flex-1 rounded-xl h-25 md:h-40 bg-white/70 backdrop-blur-md p-3 text-center shadow-lg flex justify-center flex-col">
                                <h3 className="font-bebas text-4xl text-black">20+</h3>
                                <p className="text-xs text-black">
                                    Projects
                                </p>
                            </div>

                            <div className="flex-1 rounded-xl h-25 md:h-40 bg-white/70 backdrop-blur-md p-3 text-center shadow-lg flex justify-center flex-col">
                                <h3 className="font-bebas text-4xl text-black">2+</h3>
                                <p className="text-xs text-black">
                                    Years
                                </p>
                            </div>

                            <div className="flex-1 rounded-xl h-25 md:h-40 bg-white/70 backdrop-blur-md p-3 text-center shadow-lg flex justify-center flex-col">
                                <h3 className="font-bebas text-4xl text-black">10+</h3>
                                <p className="text-xs text-black">
                                    Clients
                                </p>
                            </div>
                        </div>

                        {/* Desktop */}
                        <div className="hidden lg:block relative pl-8">
                            <div className="absolute left-2 top-0 h-full w-0.5 bg-red-600" />

                            <div className="mb-8">
                                <h3 className="font-bebas text-black text-5xl">
                                    20+
                                </h3>
                                <p className="text-black">
                                    Projects Delivered
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-bebas text-black text-5xl">
                                    2+
                                </h3>
                                <p className="text-black">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bebas text-black text-5xl">
                                    5+
                                </h3>
                                <p className="text-black">
                                    Happy Clients
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Image */}
            <motion.div
                className="fixed bottom-0 left-0 z-20 origin-bottom-left"
                style={{ willChange: "transform" }}
                onClick={!showContent ? handleClick : undefined}
                animate={
                    showMore
                        ? { y: 130, rotate: 3 }
                        : { y: 0, rotate: 0 }
                }
                transition={
                    showMore
                        ? {
                            y: { duration: 1.6, ease: [0.34, 1.56, 0.64, 1] },
                            rotate: { duration: 1.6, ease: [0.34, 1.56, 0.64, 1] },
                        }
                        : { duration: 0.4, ease: easing }
                }
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={imageSrc}
                        className="w-50 sm:w-100"
                        src={imageSrc}
                        alt=""
                        style={{ willChange: "opacity" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </AnimatePresence>
            </motion.div>

        </section>
    );
};