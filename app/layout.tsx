import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { MobileHeader } from "@/components/mobile-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "André Trollås",
  description: "Building companies and products. Investing in people and technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-neutral-900`}>
        <MobileHeader />
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12">
              <main className="md:col-span-8">
                <div className="px-6 py-8 md:px-8 md:py-12 rounded-lg">{children}</div>
              </main>
              <aside className="hidden md:block md:col-span-4">
                <Navigation />
              </aside>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
