import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
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
            {/* ── Mobile toggle button ── */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                    fixed top-5 left-5 z-[60]
                    flex justify-center items-center
                    w-10 h-10
                    bg-[#29274D]
                    
                    rounded-[var(--radius-md)]
                    cursor-pointer
                    transition-all duration-300
                    hover:shadow-[var(--shadow-lg)]
                    active:scale-95
                "
                aria-label="Toggle navigation"
            >
                {isOpen ? (
                    <HiX className="w-5 h-5 text-white  duration-300" />
                ) : (
                    <HiMenuAlt3 className="w-5 h-5 text-white transition-transform duration-300" />
                )}
            </button>

            {/* ── Backdrop (mobile only) ── */}
            <div
                className={`
                    fixed inset-0 z-[49] bg-[var(--color-overlay)]
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setIsOpen(false)}
            />

            {/* ── Centered Board Nav ── */}
            <nav
                className={`
                    fixed inset-0 z-50 flex items-center justify-center pointer-events-none
                `}
            >
                {/* The Board */}
                <div
                    className={`
                        relative shrink-0 flex flex-col items-center justify-center
                        w-[80vh] h-[90vw]
                        md:w-[90%] md:h-[900px] md:max-w-[900px]
                        bg-no-repeat bg-center bg-contain
                        rotate-90 md:rotate-0
                        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-12 pointer-events-none"}
                    `}
                    style={{ backgroundImage: "url('/board.png')" }}
                >
                    <div className="flex flex-col gap-5 md:gap-6 items-center text-center -rotate-90 md:rotate-0">
                        {navItems.map((item, index) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "")}`}
                                onClick={() => setIsOpen(false)}
                                className="
                                    no-underline
                                    text-2xl
                                    text-white
                                    hover:scale-110
                                    transition-transform duration-200
                                    focus:outline-none
                                    drop-shadow-md
                                    font-finger
                                    font-medium
                                "
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    // If your board image is light, you might need to change the text color to something dark like text-[var(--color-text)]
                                }}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;