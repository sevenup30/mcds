"use client"

import { useEffect } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-typescript"
import { useTypewriter } from "../hooks/useTypewriter"

const typescriptCode = `interface MCDSProject {
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

console.log(getProject());`

export default function TypeScriptTerminal() {
  const typedCode = useTypewriter({ text: typescriptCode, speed: 10 })

  useEffect(() => {
    requestAnimationFrame(() => {
      Prism.highlightAll()
    })
  }, [typedCode])

  return (
    <div className="bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden max-w-2xl w-full h-[500px]">
      {/* VS Code-like title bar */}
      <div className="bg-[#323233] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">project.ts</span>
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
          {typescriptCode.split('\n').map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code area */}
        <div className="p-4 font-mono text-sm flex-1">
          <pre className="language-typescript">
            <code>{typedCode}</code>
          </pre>
          <span className="inline-block w-[2px] h-4 bg-white animate-pulse" />
        </div>
      </div>
    </div>
  )
}

