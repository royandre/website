"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/lib/nav-links"

type MobileMenuProps = {
  onClose: () => void
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center animate-in fade-in duration-300">
      <nav>
        <ul className="space-y-6 text-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`text-3xl font-bold transition-colors hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
