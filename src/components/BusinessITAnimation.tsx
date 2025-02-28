import React from "react"
import { motion } from "framer-motion"

const BusinessITAnimation = () => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 800 400" className="w-full h-auto">
                {/* Network of Computers */}
                {[0, 1, 2].map((i) => (
                    <g key={`computer-${i}`} transform={`translate(${50 + i * 250}, 50)`}>
                        <motion.rect
                            x="0"
                            y="0"
                            width="150"
                            height="100"
                            rx="5"
                            fill="#2196F3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                        />
                        <motion.rect
                            x="25"
                            y="110"
                            width="100"
                            height="20"
                            fill="#424242"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.2 }}
                        />
                        <motion.text
                            x="75"
                            y="50"
                            textAnchor="middle"
                            fill="#fff"
                            fontSize="14"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
                        >
                            Workstation {i + 1}
                        </motion.text>
                    </g>
                ))}

                {/* Central Server */}
                <motion.g transform="translate(350, 200)">
                    <motion.rect
                        x="0"
                        y="0"
                        width="100"
                        height="150"
                        rx="5"
                        fill="#FF4081"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    />
                    {[0, 1, 2].map((i) => (
                        <motion.rect
                            key={`server-unit-${i}`}
                            x="10"
                            y={10 + i * 45}
                            width="80"
                            height="35"
                            rx="2"
                            fill="#424242"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                        />
                    ))}
                    <motion.text
                        x="50"
                        y="180"
                        textAnchor="middle"
                        fill="#fff"
                        fontSize="14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        Main Server
                    </motion.text>
                </motion.g>

                {/* Backup System */}
                <motion.g transform="translate(600, 200)">
                    <motion.path
                        d="M0,75 L100,75 L80,0 L20,0 Z"
                        fill="#4CAF50"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 2 }}
                    />
                    <motion.circle
                        cx="50"
                        cy="35"
                        r="15"
                        fill="#fff"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 2.2 }}
                    />
                    <motion.text
                        x="50"
                        y="100"
                        textAnchor="middle"
                        fill="#fff"
                        fontSize="14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.3 }}
                    >
                        Backup Storage
                    </motion.text>
                </motion.g>

                {/* Network Lines */}
                {[0, 1, 2].map((i) => (
                    <motion.path
                        key={`network-line-${i}`}
                        d={`M${125 + i * 250},160 L${400},200`}
                        stroke="#fff"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 2.5 + i * 0.2 }}
                    />
                ))}
                <motion.path
                    d="M450,275 L600,275"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 3.1 }}
                />
            </svg>
        </div>
    )
}

export default BusinessITAnimation