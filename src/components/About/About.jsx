import { motion } from "framer-motion";
import { useState } from "react";

export const About = () => {

    const [reveal, setReveal] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [isDownImage, setIsDownImage] = useState(false);

    const handleShowMore = () => {
        setShowMore(true); // start moving down

        setTimeout(() => {
            setIsDownImage(true); // change image after movement
        }, 1000); // match animation duration
    };

    const handleClick = () => {
        setReveal(true);
    };

    return (
        <section
            id="about"
            className="relative h-screen overflow-hidden"
        >
            {/* Black & White Background */}
            <div className="absolute inset-0">
                <img
                    src="/bg-white.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Color Reveal Layer */}
            {/* Color Background */}
            <motion.div
                className="absolute inset-0"
                initial={{
                    clipPath: "circle(0% at 12% 85%)",
                }}
                animate={{
                    clipPath: reveal
                        ? "circle(180% at 12% 85%)"
                        : "circle(0% at 12% 85%)",
                }}
                transition={{
                    duration: 2.5,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <img
                    src="/bg-color.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Water Drop */}
            {reveal && (
                <motion.div
                    className="absolute rounded-full bg-white/20 blur-xl pointer-events-none"
                    style={{
                        left: "12%",
                        bottom: "15%",
                        transform: "translate(-50%, 50%)",
                    }}
                    initial={{
                        width: 0,
                        height: 0,
                        opacity: 1,
                    }}
                    animate={{
                        width: 2500,
                        height: 2500,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 2.5,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />
            )}

            {/* Content */}
            {reveal && <div
                className="relative z-10"

            >
                <div className="ml-4 mr-4 flex justify-center pt-22 lg:pt-30 lg:mr-0 lg:pr-24 lg:ml-0 lg:flex lg:justify-end">
                    <motion.div className="w-full sm:w-200 border border-white/20 p-4 rounded-xl
                bg-white/10 backdrop-blur-xl" initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 2.5,

                        }}>
                        <div className="font-bebas text-black text-[30px] md:text-[50px] leading-none">
                            Every project starts the same way—blank, silent, and full of possibilities.
                        </div>

                        <div className="text-[20px] text-[#e60000] md:text-[30px]  leading-none font-bebas">
                            The moment creativity meets code, ideas begin to take shape.
                        </div>

                        <div className="font-finger text-[16px] text-black md:text-[20px] pt-2">
                            I'm a developer who enjoys building modern web applications, solving complex problems, and crafting experiences that feel effortless.
                        </div>


                        <div className="flex justify-end cursor-pointer font-serif mt-4" onClick={handleShowMore}>
                            <div className="text-black  w-30 text-center border-2 border-white/20 ">Show more...</div>
                        </div>
                    </motion.div>
                </div>
            </div>}

            {!reveal && <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,

                }}
            >
                <div className="ml-4 pt-40 md:pr-70 md:ml-0 md:flex justify-end">
                    <div className="w-80 md:w-140">
                        <div className="font-finger text-black md:text-[40px]">
                            An empty canvas looks a little bland, doesn't it?
                        </div>
                        <div className="font-finger text-red-900 md:text-[25px]">
                            Let's wake up the girl and bring some color to life
                        </div>
                    </div>
                </div>
            </motion.div>}


            <div className="fixed w-[90%] bottom-40 md:bottom-100 left-4 z-30">
                Your content here
            </div>

            {/* Bottom Left Image */}
            <motion.div
                className="fixed bottom-0 left-0 z-20"
                animate={{
                    y: showMore ? 130 : 0,
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
                onClick={handleClick}
            >
                <img
                    className="w-50 sm:w-100"
                    src={
                        isDownImage
                            ? "/about-hero-down.png"
                            : reveal
                                ? "/about-hero.png"
                                : "/about-hero-eyes-closed.png"
                    }
                    alt=""
                />
            </motion.div>
        </section>
    );
};