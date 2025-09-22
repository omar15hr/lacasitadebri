import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { productos } from "@/data/products.data";
import ProductCard from "@/components/ProductCard";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-[#feee5b]">
                Desde 2010
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
                <Button
                  asChild
                  size="lg"
                  className="bg-[#feee5b] text-black hover:bg-[#eedf56] hover:text-black"
                >
                  <Link href="/productos">Ver Catálogo</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent">
                  <Link href="/nosotros">Nuestra Historia</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/cookie.jpg"
                alt="Vitrina de galletas artesanales"
                width={500}
                height={500}
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
            {productos.slice(0, 3).map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-[#feee5b] text-black hover:bg-[#eedf56] hover:text-black"
            >
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
          <div className="grid grid-cols-6 gap-4 h-[700px] md:h-[600px]">
            {/* Hero Image - Large top left */}
            <div className="col-span-6 md:col-span-3 md:row-span-2 h-[200px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 group cursor-pointer">
              <Image
                width={600}
                height={400}
                src="/cookie.jpg"
                alt="Galletas artesanales principales"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg">
                Nuestras Especialidades
              </div>
            </div>

            {/* Medium Image - Top right */}
            <div className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 group cursor-pointer">
              <Image
                width={400}
                height={300}
                src="/cookie.jpg"
                alt="Proceso artesanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Small Image - Top far right */}
            <div className="col-span-3 md:col-span-1 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 group cursor-pointer">
              <Image
                width={200}
                height={300}
                src="/cookie.jpg"
                alt="Ingredientes premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Wide Image - Middle right */}
            <div className="col-span-6 md:col-span-3 h-[120px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 group cursor-pointer">
              <Image
                width={600}
                height={200}
                src="/cookie.jpg"
                alt="Vitrina de galletas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Medium Square - Bottom left */}
            <div className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 group cursor-pointer">
              <Image
                width={400}
                height={300}
                src="/cookie.jpg"
                alt="Horneado tradicional"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Medium Rectangle - Bottom center */}
            <div className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 group cursor-pointer">
              <Image
                width={400}
                height={300}
                src="/cookie.jpg"
                alt="Empaque artesanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Tall Image - Bottom right */}
            <div className="col-span-6 md:col-span-2 md:row-span-2 h-[200px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 group cursor-pointer">
              <Image
                width={400}
                height={500}
                src="/cookie.jpg"
                alt="Detalle de texturas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-lg">
                Calidad Premium
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-[#feee5b] text-black hover:bg-[#eedf56] hover:text-black"
            >
              <Link
                href="https://instagram.com/lacasitadebri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Síguenos en Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
