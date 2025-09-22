import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { productos } from "@/data/products.data"

const categorias = ["Todas", "Clásicas", "Especiales", "Saludables", "Gourmet", "Premium", "Veganas"]

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Productos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre nuestra colección completa de galletas artesanales, cada una hecha con ingredientes premium y mucho
            amor.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categorias.map((categoria) => (
              <Badge
                key={categoria}
                variant={categoria === "Todas" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {categoria}
              </Badge>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <Card key={producto.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <img
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-wrap gap-1 mb-2">
                    {producto.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{producto.nombre}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{producto.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < producto.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <Badge variant="outline">{producto.categoria}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Contáctanos para pedidos especiales o consultas sobre ingredientes y alérgenos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contactar Ahora
            </button>
            <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
              Ver Ingredientes
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
