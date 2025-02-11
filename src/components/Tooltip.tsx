"use client"
import { useState } from "react";

interface TooltipProps {
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position = "top", children }) => {
    const [visible, setVisible] = useState(false);

    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    };

    return (
        <div className="relative flex items-center">
            <div
                className="cursor-pointer"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                {children}
            </div>
            {visible && (
                <div
                    className={`absolute ${positionClasses[position]} bg-gray-900 px-3 py-1 rounded-md shadow-lg transition-opacity duration-200 opacity-100`}
                >
                    {text}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
