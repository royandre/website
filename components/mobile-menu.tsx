"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Linkedin, Instagram } from "lucide-react"
import { navItems } from "@/lib/nav-links"

type MobileMenuProps = {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center animate-in fade-in duration-300">
      <nav className="navigation">
        <ul className="space-y-4 text-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`text-2xl font-bold transition-colors hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-neutral-200 mt-6">
            <div className="flex justify-center space-x-8">
              <Link
                href="https://www.linkedin.com/in/royandre/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center space-x-2 text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/royandretroll"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center space-x-2 text-lg font-semibold text-pink-600 hover:text-pink-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
