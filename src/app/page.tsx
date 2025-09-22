import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Artesanal desde 2020
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Las mejores galletas artesanales de{" "}
                <span className="text-primary">Nueva York</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                Cada galleta es una obra de arte hecha con ingredientes premium,
                recetas tradicionales y el amor que solo Nueva York puede
                ofrecer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/productos">Ver Catálogo</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg bg-transparent"
                >
                  <Link href="/nosotros">Nuestra Historia</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/artisan-cookies-display-case-in-modern-bakery.jpg"
                alt="Vitrina de galletas artesanales"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestras Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubre nuestras galletas más populares, cada una con su propia
              personalidad y sabor único.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <img
                  src="/chocolate-chip-cookies-stack.png"
                  alt="Galletas de chocolate"
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Chocolate Chip Clásica
                </h3>
                <p className="text-muted-foreground mb-4">
                  La receta perfecta con chocolate belga premium y mantequilla
                  europea.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Badge variant="secondary">Bestseller</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <img
                  src="/red-velvet-cookies-with-cream-cheese.jpg"
                  alt="Galletas red velvet"
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Red Velvet Supreme
                </h3>
                <p className="text-muted-foreground mb-4">
                  Suave textura aterciopelada con glaseado de queso crema
                  artesanal.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Badge variant="secondary">Especial</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <img
                  src="/oatmeal-raisin-cookies-rustic-style.jpg"
                  alt="Galletas de avena"
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Avena & Pasas Tradicional
                </h3>
                <p className="text-muted-foreground mb-4">
                  Receta familiar con avena orgánica y pasas sultanas
                  seleccionadas.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Badge variant="secondary">Saludable</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              SÍGUENOS EN INSTAGRAM
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              @LACASITADEBRI
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 grid-rows-8 gap-3 h-[600px] md:h-[500px]">
            {/* Large image - top left */}
            <div className="col-span-6 md:col-span-4 row-span-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-100 to-orange-100 group cursor-pointer">
              <img
                src="/chocolate-chip-cookies-stack.png"
                alt="Galletas artesanales"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Medium image - top center */}
            <div className="col-span-6 md:col-span-4 row-span-3 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 group cursor-pointer">
              <img
                src="/red-velvet-cookies-with-cream-cheese.jpg"
                alt="Red velvet cookies"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Small image - top right */}
            <div className="col-span-6 md:col-span-4 row-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 group cursor-pointer">
              <img
                src="/oatmeal-raisin-cookies-rustic-style.jpg"
                alt="Galletas de avena"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Medium image - middle left */}
            <div className="col-span-6 md:col-span-3 row-span-3 relative overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-blue-100 group cursor-pointer">
              <img
                src="/artisan-cookies-display-case-in-modern-bakery.jpg"
                alt="Vitrina de galletas"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Large square - middle center */}
            <div className="col-span-6 md:col-span-5 row-span-4 relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 group cursor-pointer">
              <img
                src="/chocolate-chip-cookies-stack.png"
                alt="Proceso de horneado"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Tall image - right side */}
            <div className="col-span-6 md:col-span-4 row-span-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 group cursor-pointer">
              <img
                src="/red-velvet-cookies-with-cream-cheese.jpg"
                alt="Ingredientes premium"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Small bottom left */}
            <div className="col-span-6 md:col-span-3 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-100 to-red-100 group cursor-pointer">
              <img
                src="/oatmeal-raisin-cookies-rustic-style.jpg"
                alt="Detalle de textura"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Medium bottom center */}
            <div className="col-span-6 md:col-span-5 row-span-1 relative overflow-hidden rounded-xl bg-gradient-to-br from-teal-100 to-green-100 group cursor-pointer">
              <img
                src="/artisan-cookies-display-case-in-modern-bakery.jpg"
                alt="Empaque artesanal"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg">
              <Link href="https://instagram.com/lacasitadebri" target="_blank" rel="noopener noreferrer">
                Síguenos en Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            ¿Listo para probar la perfección?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Visítanos en nuestro local en el corazón de Manhattan o contáctanos
            para pedidos especiales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Visítanos Hoy
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg bg-transparent"
            >
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
