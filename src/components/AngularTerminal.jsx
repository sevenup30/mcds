"use client"

import { useEffect } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-typescript"
import { useTypewriter } from "../hooks/useTypewriter"

const typescriptCode = `
interface MCDSProject {
  name: string;
  description: string;
  manager: string;
  startDate: string;
  endDate: string;
}

function getProject(): MCDSProject {
  return {
    name: "MCDS Mobile App",
    description: "Develop a mobile app for MCDS clients",
    manager: "Martial CARRIERE",
    startDate: "2025-07-01",
    endDate: "2025-12-31"
  };
}

console.log(getProject());
`

export default function TypeScriptTerminal() {
    const typedCode = useTypewriter(typescriptCode, 10)
  
    useEffect(() => {
      requestAnimationFrame(() => {
        Prism.highlightAll()
      })
    }, [typedCode])

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-2xl w-full mt-8">
      <div className="bg-gray-700 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-300">MCDS Project Manager (TypeScript)</div>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre>
          <code className="language-typescript">{typedCode}</code>
        </pre>
      </div>
    </div>
  )
}

