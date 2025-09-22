import { Badge } from "@/components/ui/badge";
import { productos } from "@/data/products.data";
import ProductCard from "@/components/ProductCard";
import CallToAction from "@/components/CallToAction";

const categorias = [
  "Todas",
  "Clásicas",
  "Especiales",
  "Saludables",
  "Gourmet",
  "Premium",
  "Veganas",
];

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre nuestra colección completa de galletas artesanales, cada
            una hecha con ingredientes premium y mucho amor.
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
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
