import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const easing = [0.16, 1, 0.3, 1];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const navItems = [
        "Home",
        "About",
        "Skills",
        "Experience",
        "Projects",
        "Contact Me",
    ];

    return (
        <>
            {/* ── Toggle Button ── */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    fixed top-5 left-5 z-[60]
                    flex justify-center items-center
                    w-10 h-10 bg-[#29274D]
                    rounded-[var(--radius-md)]
                    cursor-pointer
                "
                style={{ willChange: "transform" }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.18, ease: easing }}
                aria-label="Toggle navigation"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <motion.span
                            key="close"
                            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            transition={{ duration: 0.18, ease: easing }}
                            style={{ willChange: "opacity, transform", display: "flex" }}
                        >
                            <HiX className="w-5 h-5 text-white" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="menu"
                            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                            animate={{ opacity: 1, rotate: 0, scale: 1 }}
                            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                            transition={{ duration: 0.18, ease: easing }}
                            style={{ willChange: "opacity, transform", display: "flex" }}
                        >
                            <HiMenuAlt3 className="w-5 h-5 text-white" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* ── Backdrop ── */}
            <motion.div
                className="fixed inset-0 z-[49] bg-[var(--color-overlay)]"
                initial={false}
                animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                onClick={() => setIsOpen(false)}
            />

            {/* ── Board Nav — always in DOM, never unmounts ── */}
            <nav className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                {/* Board — opacity only, no scale/y */}
                <motion.div
                    className="
        relative shrink-0 flex flex-col items-center justify-center
        w-[80vh] h-[90vw]
        md:w-[90%] md:h-[900px] md:max-w-[900px]
        bg-no-repeat bg-center bg-contain
        rotate-90 md:rotate-0
    "
                    style={{
                        backgroundImage: "url('/board.png')",
                        willChange: "opacity",
                        pointerEvents: isOpen ? "auto" : "none",
                    }}
                    initial={false}
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <div className="flex flex-col gap-5 md:gap-6 items-center text-center -rotate-90 md:rotate-0">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                onClick={() => setIsOpen(false)}
                                className="
                    no-underline text-2xl text-white
                    focus:outline-none drop-shadow-md
                    font-finger font-medium
                "
                                style={{ willChange: "opacity" }}
                                initial={false}
                                animate={{ opacity: isOpen ? 1 : 0 }}
                                transition={{
                                    delay: isOpen ? 0.08 + index * 0.04 : 0,
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                whileHover={{ scale: 1.12, transition: { duration: 0.15 } }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </nav>
        </>
    );
};

export default Navbar;