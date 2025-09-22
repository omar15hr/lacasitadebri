import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const productos = [
  {
    id: 1,
    nombre: "Chocolate Chip Clásica",
    descripcion: "La receta perfecta con chocolate belga premium y mantequilla europea.",
    imagen: "/chocolate-chip-cookies-stack.png",
    categoria: "Clásicas",
    rating: 5,
    badges: ["Bestseller"],
  },
  {
    id: 2,
    nombre: "Red Velvet Supreme",
    descripcion: "Suave textura aterciopelada con glaseado de queso crema artesanal.",
    imagen: "/red-velvet-cookies-with-cream-cheese.jpg",
    categoria: "Especiales",
    rating: 5,
    badges: ["Especial"],
  },
  {
    id: 3,
    nombre: "Avena & Pasas Tradicional",
    descripcion: "Receta familiar con avena orgánica y pasas sultanas seleccionadas.",
    imagen: "/oatmeal-raisin-cookies-rustic-style.jpg",
    categoria: "Saludables",
    rating: 5,
    badges: ["Saludable"],
  },
  {
    id: 4,
    nombre: "Double Chocolate Fudge",
    descripcion: "Para los amantes del chocolate: doble chocolate con trozos de fudge.",
    imagen: "/double-chocolate-fudge-cookies-dark.jpg",
    categoria: "Especiales",
    rating: 5,
    badges: ["Intenso"],
  },
  {
    id: 5,
    nombre: "Mantequilla de Maní",
    descripcion: "Cremosa mantequilla de maní natural con un toque de sal marina.",
    imagen: "/peanut-butter-cookies-with-sea-salt.jpg",
    categoria: "Clásicas",
    rating: 4,
    badges: ["Sin Gluten"],
  },
  {
    id: 6,
    nombre: "Limón & Lavanda",
    descripcion: "Refrescante combinación de limón orgánico con un toque de lavanda.",
    imagen: "/lemon-lavender-cookies-elegant.jpg",
    categoria: "Gourmet",
    rating: 5,
    badges: ["Gourmet", "Nuevo"],
  },
  {
    id: 7,
    nombre: "Snickerdoodle Canela",
    descripcion: "Clásica galleta americana con canela de Ceilán y azúcar cristalizada.",
    imagen: "/snickerdoodle-cookies-cinnamon-sugar.jpg",
    categoria: "Clásicas",
    rating: 4,
    badges: ["Tradicional"],
  },
  {
    id: 8,
    nombre: "Macadamia & Chocolate Blanco",
    descripcion: "Nueces de macadamia premium con chocolate blanco belga.",
    imagen: "/macadamia-white-chocolate-cookies-premium.jpg",
    categoria: "Premium",
    rating: 5,
    badges: ["Premium"],
  },
  {
    id: 9,
    nombre: "Vegan Coco & Almendra",
    descripcion: "100% vegana con coco orgánico y almendras tostadas.",
    imagen: "/vegan-coconut-almond-cookies-healthy.jpg",
    categoria: "Veganas",
    rating: 4,
    badges: ["Vegana", "Orgánica"],
  },
]

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
