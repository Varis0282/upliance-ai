"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AdvancedLiquidEffect = () => {
    const waterRef = useRef(null);

    // 🌊 Continuous Flow Animation
    useEffect(() => {
        gsap.to(waterRef.current, {
            backgroundPosition: "200% 100%",
            duration: 6,
            repeat: -1,
            ease: "linear",
        });
    }, []);

    // 🌊 Hover Effect - Simulates Swirling Water
    const handleMouseMove = (event: any) => {
        const { offsetX, offsetY } = event.nativeEvent;
        const xPercent = (offsetX / event.target.clientWidth) * 100;
        const yPercent = (offsetY / event.target.clientHeight) * 100;

        gsap.to(waterRef.current, {
            backgroundPosition: `${xPercent}% ${yPercent}%`,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    // 🌊 Click Effect - Simulates Water Ripple
    const handleClick = () => {
        gsap.fromTo(
            waterRef.current,
            { boxShadow: "0px 0px 0px rgba(0, 255, 255, 0.8)" },
            {
                boxShadow: "0px 0px 50px rgba(0, 255, 255, 0.8)",
                duration: 0.3,
                repeat: 1,
                yoyo: true,
                ease: "power2.out",
            }
        );
    };

    return (
        <div className="flex justify-center items-center">
            <div
                ref={waterRef}
                className="w-full max-w-5xl h-64 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg cursor-pointer"
                style={{
                    background: "linear-gradient(120deg, #0f172a, #2563eb, #22d3ee, #22d3ee, #2563eb, #0f172a)",
                    backgroundSize: "300% 300%",
                    transition: "background-position 0.5s ease, box-shadow 0.5s ease",
                }}
                onMouseMove={handleMouseMove}
                onClick={handleClick}
            >
                🌊 Water Box
            </div>
        </div>
    );
};

export default AdvancedLiquidEffect;
