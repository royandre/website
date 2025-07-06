"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Linkedin } from "lucide-react"
import { navItems } from "@/lib/nav-links"
import { QuoteSection } from "./quote-section"

// Map each route to its corresponding dot color (darker version of page background)
const routeColors: Record<string, string> = {
  "/": "bg-slate-600",
  "/about": "bg-green-600",
  "/now": "bg-blue-600",
  "/advisory": "bg-amber-600",
  "/photo-filming": "bg-purple-600",
  "/investments": "bg-emerald-600",
  "/articles": "bg-rose-600",
  "/contact": "bg-indigo-600",
}

export function Navigation() {
  const pathname = usePathname()

  return (
    <div className="space-y-10 sticky top-20">
      <nav>
        <ul className="space-y-2 text-lg">
          {navItems.map((item) => (
            <li key={item.href} className="flex items-center">
              <span
                className={`mr-4 h-2 w-2 shrink-0 rounded-full transition-colors ${
                  pathname === item.href ? routeColors[item.href] || "bg-blue-600" : "bg-transparent"
                }`}
              />
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center">
            <div className="mr-4 w-2 flex justify-center items-center">
              <Linkedin className="h-4 w-4 shrink-0 text-blue-600" />
            </div>
            <Link
              href="https://www.linkedin.com/in/royandre/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Image
          src="/images/royandre.jpeg"
          alt="Roy-André Tollefsen"
          width={200}
          height={200}
          className="rounded-full object-cover mb-6"
          priority
        />
        <p className="text-neutral-600 leading-relaxed">
          Norwegian technologist and father, living in Sandnes, Norway. Building companies and products. Investing in
          people and technology.
        </p>
        <QuoteSection />
      </div>
    </div>
  )
}
