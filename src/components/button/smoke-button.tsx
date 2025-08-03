'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';

export default function SmokeButton({ onClick }: { onClick: () => void }) {
    const overlayRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (!overlayRef.current) return;

        gsap.fromTo(
            overlayRef.current,
            { opacity: 0, scale: 1 },
            {
                opacity: 1,
                scale: 2.5,
                duration: 1.4,
                ease: 'power2.out',
                onComplete: () => {
                    onClick();
                    gsap.set(overlayRef.current, { opacity: 0, scale: 1 });
                },
            }
        );
    };

    return (
        <div className="relative h-screen w-screen bg-black overflow-hidden flex items-center justify-center">
            {/* SMOKE OVERLAY */}
            <div
                ref={overlayRef}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.05), rgba(255,255,255,0))',
                    filter: 'url(#smokeFilter)',
                    opacity: 0,
                    transform: 'scale(1)',
                    transformOrigin: 'center',
                    zIndex: 5,
                }}
            />

            {/* BUTTON */}
            <button
                onClick={handleClick}
                className="relative z-10 px-8 py-4 text-white text-lg font-semibold border border-white backdrop-blur-md bg-white/10 rounded-md hover:bg-white/20 transition duration-300"
            >
                Click Me
            </button>
        </div>
    );
}
