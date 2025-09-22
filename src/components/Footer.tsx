import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-primary-foreground text-golden">La Casita de Bri</div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Creando momentos dulces desde el corazón de Nueva York. Nuestras galletas artesanales están hechas con
              ingredientes premium y mucho amor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4 text-warm">Enlaces</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-md text-primary-foreground/70 hover:text-secondary transition-colors">
                Inicio
              </Link>
              <Link
                href="/productos"
                className="block text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Productos
              </Link>
              <Link
                href="/nosotros"
                className="block text-md text-primary-foreground/70 hover:text-secondary transition-colors"
              >
                Nosotros
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4 text-warm">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-md text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Región Metropolitana, Chile</span>
              </div>
              <div className="flex items-center space-x-2 text-md text-primary-foreground/70">
                <Phone className="h-4 w-4 text-secondary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-md text-primary-foreground/70">
                <Mail className="h-4 w-4 text-secondary" />
                <span>info@lacasitadebri.com</span>
              </div>
              <div className="flex items-center space-x-2 text-md text-primary-foreground/70">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Lun-Dom: 8AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2025 La Casita de Bri. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
