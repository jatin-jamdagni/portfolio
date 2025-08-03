'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [show, setShow] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY.current) {
                setShow(true); // scrolling up
            } else {
                setShow(false); // scrolling down
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: show ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full z-50   bg-black/40"
        >
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Jatin Sharma</h1>
                <div>
                    <button>
                        Resume
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
