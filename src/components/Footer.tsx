import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#feee5b] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-primary">Sweet Dreams</div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Creando momentos dulces desde el corazón de Nueva York. Nuestras galletas artesanales están hechas con
              ingredientes premium y mucho amor.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Enlaces</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link
                href="/productos"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Productos
              </Link>
              <Link
                href="/nosotros"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Broadway, NYC</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@sweetdreamsnyc.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Lun-Dom: 8AM-8PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 Sweet Dreams NYC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
