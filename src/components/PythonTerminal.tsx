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
        "description": "MCDS backend",
        "manager": "Martial CARRIERE",
        "start_date": "2025-01-01",
        "end_date": "2025-06-30"
    }

print(get_project())`

export default function PythonTerminal() {
  const typedCode = useTypewriter({ text: pythonCode, speed: 10 })

  useEffect(() => {
    requestAnimationFrame(() => {
      Prism.highlightAll()
    })
  }, [typedCode])

  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden max-w-2xl w-full h-96">
      {/* VS Code-like title bar */}
      <div className="bg-[#323233] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">project.py</span>
          <span className="text-xs text-gray-500">•</span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
      </div>

      {/* IDE content area */}
      <div className="flex h-[calc(100%-2.5rem)]">
        {/* Line numbers */}
        <div className="bg-[#1e1e1e] text-gray-600 p-4 text-right select-none w-12 border-r border-gray-800">
          {pythonCode.split('\n').map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code area */}
        <div className="p-4 font-mono text-sm flex-1">
          <pre className="language-python">
            <code>{typedCode}</code>
          </pre>
          <span className="inline-block w-[2px] h-4 bg-white animate-pulse" />
        </div>
      </div>
    </div>
  )
}

