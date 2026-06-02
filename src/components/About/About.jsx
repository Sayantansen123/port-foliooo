import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function useTypewriter(text, startDelay = 1.2, speed = 30, enabled = true) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        if (!enabled) { setDisplayed(""); return; }
        let timeout;
        const startTyping = () => {
            let i = 0;
            const tick = () => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i < text.length) timeout = setTimeout(tick, speed);
            };
            timeout = setTimeout(tick, 0);
        };
        const delayTimeout = setTimeout(startTyping, startDelay * 1000);
        return () => { clearTimeout(delayTimeout); clearTimeout(timeout); };
    }, [text, startDelay, speed, enabled]);

    return displayed;
}

export const About = () => {
    const [reveal, setReveal] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const headlineRest = "very project starts the same way—blank, silent, and full of possibilities.";
    const subtitle = "The moment creativity meets code, ideas begin to take shape.";
    const body = "I'm a developer who enjoys building modern web applications, solving complex problems, and crafting experiences that feel effortless.";

    const eDelay = 1.0;
    const headlineDelay = eDelay + 0.7;
    const headlineTypeDuration = (headlineRest.length * 28) / 1000;
    const subtitleDelay = headlineDelay + headlineTypeDuration + 0.25;
    const subtitleTypeDuration = (subtitle.length * 32) / 1000;
    const bodyDelay = subtitleDelay + subtitleTypeDuration + 0.25;

    const typedHeadline = useTypewriter(headlineRest, headlineDelay, 28, reveal);
    const typedSubtitle = useTypewriter(subtitle, subtitleDelay, 32, reveal);
    const typedBody = useTypewriter(body, bodyDelay, 22, reveal);

    const handleShowMore = () => {
        setShowMore(true); // instantly swaps image + starts exit animation
    };

    const handleClick = () => {
        setReveal(true);
    };

    // Which image to show
    const imageSrc = showMore
        ? "/about-hero-down.png"
        : reveal
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
                initial={{ clipPath: "circle(0% at 12% 85%)" }}
                animate={{
                    clipPath: reveal ? "circle(180% at 12% 85%)" : "circle(0% at 12% 85%)",
                }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <img src="/bg-color.png" alt="" className="w-full h-full object-cover" />
            </motion.div>

            {/* Water Drop */}
            {reveal && (
                <motion.div
                    className="absolute rounded-full bg-white/20 blur-xl pointer-events-none"
                    style={{ left: "12%", bottom: "15%", transform: "translate(-50%, 50%)" }}
                    initial={{ width: 0, height: 0, opacity: 1 }}
                    animate={{ width: 2500, height: 2500, opacity: 0 }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                />
            )}

            {/* Revealed Content */}
            {reveal && (
                <div className="relative z-10">
                    <div className="ml-4 mr-4 flex justify-center pt-22 md:pt-35 lg:pt-30 lg:mr-0 lg:pr-24 lg:ml-0 lg:flex lg:justify-end">
                        <motion.div
                            className="w-full sm:w-200 border border-white/20 p-4 rounded-xl bg-white/10 backdrop-blur-xl"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2.5 }}
                        >
                            <div className="font-bebas text-black text-[30px] md:text-[50px] leading-none">
                                <motion.span
                                    className="text-[60px] text-[#e60000] md:text-[70px] leading-none inline-block origin-bottom"
                                    initial={{ scaleY: 0, opacity: 0 }}
                                    animate={{ scaleY: 1, opacity: 1 }}
                                    transition={{ delay: eDelay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    E
                                </motion.span>
                                <span>{typedHeadline}</span>
                                {typedHeadline.length > 0 && typedHeadline.length < headlineRest.length && (
                                    <span className="animate-pulse">|</span>
                                )}
                            </div>

                            <div className="text-[20px] text-[#e60000] md:text-[30px] leading-none font-bebas min-h-[1em]">
                                {typedSubtitle}
                                {typedSubtitle.length > 0 && typedSubtitle.length < subtitle.length && (
                                    <span className="animate-pulse">|</span>
                                )}
                            </div>

                            <div className="font-finger text-[16px] text-black md:text-[20px] pt-2 min-h-[1em]">
                                {typedBody}
                                {typedBody.length > 0 && typedBody.length < body.length && (
                                    <span className="animate-pulse">|</span>
                                )}
                            </div>

                            <div
                                className="flex justify-end cursor-pointer font-serif mt-4"
                                onClick={handleShowMore}
                            >
                                <div className="text-black w-30 text-center border-2 border-white/20">
                                    Show more...
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Pre-reveal prompt */}
            {!reveal && (
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
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
                </motion.div>
            )}

            {showMore && <div className="fixed w-[90%] lg:w-75 lg:h-70 bottom-40 md:bottom-100 lg:bottom-90 left-4 z-30 border-2">
                Your content here
            </div>}



            <motion.div
                className="fixed bottom-0 left-0 z-20 origin-bottom-left"
                onClick={!reveal ? handleClick : undefined}
                animate={
                    showMore
                        ? {
                            y: 130,       // sinks partially into ground
                            rotate: 3,    // subtle lean as she settles
                        }
                        : {
                            y: 0,
                            rotate: 0,
                        }
                }
                transition={
                    showMore
                        ? {
                            y: { duration: 1.8, ease: [0.34, 1.56, 0.64, 1] }, // springy settle
                            rotate: { duration: 1.8, ease: [0.34, 1.56, 0.64, 1] },
                        }
                        : { duration: 0.4 }
                }
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={imageSrc}
                        className="w-50 sm:w-100"
                        src={imageSrc}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    />
                </AnimatePresence>
            </motion.div>
        </section>
    );
};