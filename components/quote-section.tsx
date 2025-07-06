"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"

const quotes = [
  "Do or do not – there is no try",
  "In my defense, I was left unsupervised",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "The people who are crazy enough to think they can change the world are the ones who do.",
  "The only way to do great work is to love what you do",
]

export function QuoteSection() {
  const [currentQuote, setCurrentQuote] = useState("")

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }, [])

  if (!currentQuote) return null

  return (
    <div className="relative mt-8 p-6 bg-neutral-50 rounded-lg border-l-4 border-neutral-300">
      <Quote className="absolute top-4 right-4 h-5 w-5 text-neutral-400 stroke-1" />
      <blockquote className="italic text-neutral-700 pr-8">{currentQuote}</blockquote>
    </div>
  )
}
