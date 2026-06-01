import { motion } from 'framer-motion'

const text = "Sayantan Sen."

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.3,
        },
    },
}

const letterVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.8,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 150,
        },
    },
}

export const Home = () => {
    return (
        <section className="relative min-h-screen bg-white">

            <div className="absolute inset-0 pointer-events-none">
                {/* Desktop */}
                <div className="hidden lg:flex h-full w-full justify-center items-center relative">
                    {/* B&W Base */}
                    <img
                        src="/hero.png"
                        alt="Hero"
                        className="w-1/2 object-cover min-w-[800px]"
                    />

                    {/* Color Overlay with Paint Stroke Reveal */}
                    <motion.div
                        className="absolute inset-0 flex justify-center items-center pointer-events-none"
                        initial={{ clipPath: "inset(100% 100% 50% 100%)" }}
                        animate={{ clipPath: "inset(0 0 0 0)" }}
                        transition={{
                            duration: 3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <img
                            src="/hero-color.png"
                            alt="Hero Color"
                            className="w-1/2 object-cover min-w-[800px]"
                            style={{
                                WebkitMaskImage: "url('/brush.svg')",
                                WebkitMaskSize: "90%",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                maskImage: "url('/brush.svg')",
                                maskSize: "90%",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Mobile */}
                <div className="flex h-full w-full items-center justify-center lg:hidden relative">
                    {/* B&W Base */}
                    <img
                        src="/hero-mobile.png"
                        alt="Hero"
                        className=" object-cover"
                    />

                    {/* Color Overlay with Paint Stroke Reveal */}
                    <motion.div
                        className="absolute inset-0 flex justify-center items-center pointer-events-none"
                        initial={{ clipPath: "inset(100% 100% 50% 100%)" }}
                        animate={{ clipPath: "inset(0 0 0 0)" }}
                        transition={{
                            duration: 3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <img
                            src="/hero-mobile-color.png"
                            alt="Hero Color"
                            className="object-cover"
                            style={{
                                WebkitMaskImage: "url('/brush.svg')",
                                WebkitMaskSize: "90%",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                maskImage: "url('/brush.svg')",
                                maskSize: "90%",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none w-full">
                <motion.h1
                    className="outline-text text-[60px] md:text-[120px] lg:text-[250px] font-black uppercase leading-none flex flex-wrap justify-start text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {text.split("").map((char, i) => (
                        char === " " ? (
                            <div key={i} className="w-full" />
                        ) : (
                            <motion.span
                                key={i}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        )
                    ))}
                </motion.h1>
            </div>

        </section>
    )
}
