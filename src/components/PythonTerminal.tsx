"use client"

import { useEffect } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-python"
import { useTypewriter } from "../hooks/useTypewriter"

const pythonCode = `from typing import Dict

def get_project() -> Dict[str, str]:
    return {
        "name": "MCDS Website Redesign",
        "description": "Redesign the MCDS corporate website",
        "manager": "Martial CARRIERE",
        "start_date": "2025-01-01",
        "end_date": "2025-06-30"
    }

print(get_project())`

export default function PythonTerminal() {
  const typedCode = useTypewriter({text: pythonCode, speed:10})

  useEffect(() => {
    requestAnimationFrame(() => {
      Prism.highlightAll()
    })
  }, [typedCode])

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
      <div className="bg-gray-700 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-4 text-sm text-gray-300">MCDS Project (Python)</div>
      </div>
      <div className="p-4 font-mono text-sm">
        <pre className="language-python">
          <code>{typedCode}</code>
        </pre>
        <span className="inline-block w-2 h-4 bg-white animate-pulse" />
      </div>
    </div>
  )
}

