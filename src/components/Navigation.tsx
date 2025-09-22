"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./Icons";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClasses = (href: string, isMobile: boolean = false) => {
    const isActive = pathname === href;
    const baseClasses = isMobile
      ? "block px-4 py-3 font-medium transition-all duration-200 relative"
      : "px-4 py-2 font-medium transition-all duration-200 relative";

    if (isActive) {
      return `${baseClasses} after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#feee5b] ${
        isMobile ? "after:rounded-full" : ""
      }`;
    }

    return `${baseClasses} hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-[#feee5b]`;
  };

  return (
    <nav className="bg-[#8C5245] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-[#F2D95C] group-hover:text-[#F2D95C]/80 transition-colors duration-200">
              La Casita de Bri
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[#F2D95C]">
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

          {/* Social Media Icons & Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D2F25E]"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D2F25E]"
              >
                <InstagramIcon />
              </Link>
              <Button className="bg-[#D2F25E] hover:bg-[#D2F25E]/90 text-[#8C5245] hover:text-[#8C5245]/80 cursor-pointer hover:scale-102">
                Contáctanos Ahora
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-[#feee5b] hover:bg-[#feee5b]/80 text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 text-[#D2F25E]">
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

              {/* Social Media Icons - Mobile */}
              <div className="flex items-center justify-center space-x-4 pt-4 mt-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#feee5b] text-gray-700 hover:text-gray-900 hover:bg-[#feee5b]/80 transition-all duration-200"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#feee5b] text-gray-700 hover:text-gray-900 hover:bg-[#feee5b]/80 transition-all duration-200"
                >
                  <InstagramIcon />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
