import React from "react"
import { motion } from "framer-motion"

const CICDFlow = () => {
    const stages = [
        { id: "code", label: "Code", color: "#4CAF50", x: 100 },
        { id: "test", label: "Test", color: "#FF9800", x: 250 },
        { id: "build", label: "Build", color: "#FFC107", x: 400 },
        { id: "deploy", label: "Deploy", color: "#2196F3", x: 550 },
        { id: "monitor", label: "Monitor", color: "#9C27B0", x: 700 }
    ]

    return (
        <div className="w-full max-w-4xl mx-auto">
            <svg viewBox="0 0 800 300" className="w-full h-auto">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                    </marker>
                </defs>

                {/* Pipeline Status Bar */}
                <motion.rect
                    x="50"
                    y="180"
                    width="700"
                    height="20"
                    rx="10"
                    fill="#333"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                />

                {/* Progress Indicator */}
                <motion.rect
                    x="50"
                    y="180"
                    width="700"
                    height="20"
                    rx="10"
                    fill="#4CAF50"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1
                    }}
                />

                {/* Nodes and Labels */}
                {stages.map((stage, index) => (
                    <g key={stage.id}>
                        {/* Connection Lines */}
                        {index < stages.length - 1 && (
                            <motion.line
                                x1={stage.x + 40}
                                y1="100"
                                x2={stages[index + 1].x - 40}
                                y2="100"
                                stroke="#fff"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                markerEnd="url(#arrowhead)"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.5 }}
                            />
                        )}

                        {/* Stage Circles */}
                        <motion.circle
                            cx={stage.x}
                            cy="100"
                            r="40"
                            fill={stage.color}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        />

                        {/* Icons inside circles */}
                        <motion.g
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.3 + 0.2 }}
                        >
                            {/* Stage-specific icons */}
                            {getStageIcon(stage.id, stage.x, 100)}
                        </motion.g>

                        {/* Labels */}
                        <motion.text
                            x={stage.x}
                            y="150"
                            textAnchor="middle"
                            fill="#fff"
                            fontSize="14"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.3 + 0.3 }}
                        >
                            {stage.label}
                        </motion.text>
                    </g>
                ))}

                {/* Status Indicators */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                >
                    {stages.map((stage, index) => (
                        <motion.circle
                            key={`status-${stage.id}`}
                            cx={stage.x}
                            cy="190"
                            r="8"
                            fill="#4CAF50"
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.5,
                                repeat: Infinity,
                                repeatDelay: 4
                            }}
                        />
                    ))}
                </motion.g>
            </svg>
        </div>
    )
}

// Helper function to render stage-specific icons
const getStageIcon = (stageId: string, x: number, y: number) => {
    switch (stageId) {
        case "code":
            return (
                <path
                    d={`M${x - 15},${y} L${x - 5},${y + 10} L${x + 15},${y - 10} M${x - 10},${y + 15} L${x + 10},${y + 15}`}
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                />
            )
        case "test":
            return (
                <path
                    d={`M${x - 10},${y - 10} L${x + 10},${y + 10} M${x - 10},${y + 10} L${x + 10},${y - 10}`}
                    stroke="#fff"
                    strokeWidth="2"
                />
            )
        case "build":
            return (
                <rect
                    x={x - 12}
                    y={y - 12}
                    width="24"
                    height="24"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                />
            )
        case "deploy":
            return (
                <path
                    d={`M${x},${y - 15} L${x + 15},${y + 10} L${x - 15},${y + 10}Z`}
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                />
            )
        case "monitor":
            return (
                <path
                    d={`M${x - 15},${y} A15,15 0 1,1 ${x + 15},${y} A15,15 0 1,1 ${x - 15},${y}`} stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                />
            )
        default:
            return null
    }
}

export default CICDFlow