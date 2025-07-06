"use client"

import { useState, useEffect } from "react"

interface AnimatedTitleProps {
  text: string
  className?: string
}

export function AnimatedTitle({ text, className = "" }: AnimatedTitleProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100) // Typing speed: 100ms per character

      return () => clearTimeout(timeout)
    } else {
      // Start cursor blinking after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev)
      }, 500)

      return () => clearInterval(cursorInterval)
    }
  }, [currentIndex, text])

  return (
    <p className={className}>
      {displayText}
      <span
        className={`inline-block w-0.5 h-6 bg-neutral-600 ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      >
        |
      </span>
    </p>
  )
}
