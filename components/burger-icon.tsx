"use client"

type BurgerIconProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function BurgerIcon({ isOpen, setIsOpen }: BurgerIconProps) {
  const lineBaseClasses = "h-0.5 w-6 bg-neutral-900 transition-all duration-300 ease-in-out"

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative z-50 h-10 w-10 flex flex-col justify-center items-center gap-1.5"
      aria-label="Toggle menu"
    >
      <div className={`${lineBaseClasses} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
      <div className={`${lineBaseClasses} ${isOpen ? "opacity-0" : ""}`} />
      <div className={`${lineBaseClasses} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
    </button>
  )
}
