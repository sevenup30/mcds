import React from "react"
import { motion } from "framer-motion"

const InfrastructureAnimation = () => {
    const colors = {
        cloud: "#1565C0",
        firewall: "#D32F2F",
        k8s: "#326CE5",
        db: "#FFA000",
        loadBalancer: "#00796B"
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 800 600" className="w-full h-auto">
                {/* Cloud Container */}
                <motion.path
                    d="M50,50 C50,20 750,20 750,50 L750,550 L50,550 Z"
                    fill={colors.cloud}
                    opacity={0.1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 1 }}
                />

                {/* Cloud Logo */}
                <motion.g transform="translate(60, 20)">
                    <motion.path
                        d="M0,20 C0,10 20,10 30,20 C35,10 50,10 50,20 L50,35 L0,35 Z"
                        fill={colors.cloud}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.text
                        x="60"
                        y="30"
                        fill={colors.cloud}
                        fontSize="14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Cloud Infrastructure
                    </motion.text>
                </motion.g>

                {/* Firewall */}
                <motion.g transform="translate(150, 150)">
                    <motion.rect
                        width="500"
                        height="40"
                        fill={colors.firewall}
                        rx="5"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    />
                    <motion.text
                        x="250"
                        y="25"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        Firewall & Load Balancer
                    </motion.text>
                </motion.g>

                {/* Kubernetes Cluster */}
                <motion.g transform="translate(236, 250)">
                    <motion.rect
                        x="-130"
                        y="-50"
                        width="600"
                        height="200"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        rx="10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                    />
                    {[0, 1, 2].map((i) => (
                        <motion.g key={`pod-${i}`} transform={`translate(${i * 175}, 0)`}>
                            <motion.circle
                                r="40"
                                fill={colors.k8s}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 2 + i * 0.2 }}
                            />
                            <motion.text
                                y="60"
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.2 + i * 0.2 }}
                            >
                                Pod {i + 1}
                            </motion.text>
                        </motion.g>
                    ))}
                    <motion.text
                        x="150"
                        y="120"
                        textAnchor="middle"
                        fill="white"
                        fontSize="14"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        Kubernetes Cluster
                    </motion.text>
                </motion.g>

                {/* Database Cluster */}
                <motion.g transform="translate(200, 430)">
                    {[0, 1].map((i) => (
                        <motion.g key={`db-${i}`} transform={`translate(${i * 250}, 0)`}>
                            <motion.rect
                                width="150"
                                height="100"
                                rx="5"
                                fill={colors.db}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 3.5 + i * 0.2 }}
                            />
                            <motion.text
                                x="75"
                                y="50"
                                textAnchor="middle"
                                fill="white"
                                fontSize="12"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.7 + i * 0.2 }}
                            >
                                {i === 0 ? "Primary DB" : "Replica DB"}
                            </motion.text>
                        </motion.g>
                    ))}
                </motion.g>

                {/* Connection Lines */}
                {/* Firewall to Pods */}
                {[0, 1, 2].map((i) => (
                    <motion.path
                        key={`fw-pod-${i}`}
                        d={`M${237.5 + i * 175},190 L${237.5 + i * 175},210`}
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 4 + i * 0.2 }}
                    />
                ))}

                {/* Pods to DB */}
                <motion.path
                    d="M325,400 L325,430"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 4.8 }}
                />
                <motion.path
                    d="M350,480 L450,480"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 4.8 }}
                />
            </svg>
        </div>
    )
}

export default InfrastructureAnimation