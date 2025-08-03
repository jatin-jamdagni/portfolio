export default function SmokeFilter() {
    return (
        <svg style={{ display: 'none' }}>
            <defs>
                <filter id="smokeFilter" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="0.015 0.05"
                        numOctaves="2"
                        result="turbulence"
                    >
                        <animate
                            attributeName="baseFrequency"
                            values="0.02 0.05; 0.03 0.07; 0.015 0.05"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="turbulence"
                        scale="60"
                        xChannelSelector="R"
                        yChannelSelector="B"
                    />
                    <feGaussianBlur stdDeviation="6" />
                </filter>
            </defs>
        </svg>
    );
}
