"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const getLinkClasses = (href: string, isMobile: boolean = false) => {
    const isActive = pathname === href
    const baseClasses = isMobile 
      ? "block px-4 py-3 rounded-lg font-medium transition-all duration-200"
      : "px-4 py-2 rounded-lg font-medium transition-all duration-200"
    
    if (isActive) {
      return `${baseClasses} bg-white/20 text-gray-800 shadow-sm border border-white/30`
    }
    
    return `${baseClasses} text-gray-700 hover:bg-white/15 hover:text-gray-800`
  }

  return (
    <nav className="bg-[#feee5b] border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-200 drop-shadow-sm">
              La Casita de Bri
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className={getLinkClasses("/")}>
              Inicio
            </Link>
            <Link href="/products" className={getLinkClasses("/products")}>
              Productos
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              Nosotros
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 border-t border-white/20 bg-[#feee5b]/95 backdrop-blur-sm">
              <Link
                href="/"
                className={getLinkClasses("/", true)}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/products"
                className={getLinkClasses("/products", true)}
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/about"
                className={getLinkClasses("/about", true)}
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
