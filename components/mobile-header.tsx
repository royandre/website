"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { BurgerIcon } from "./burger-icon"
import { MobileMenu } from "./mobile-menu"

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <header className="md:hidden fixed top-0 right-0 p-2 z-50">
      <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  )
}
