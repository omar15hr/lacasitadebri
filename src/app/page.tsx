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
      <section className="relative min-h-120 md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cookie.png"
            alt="Galletas artesanales"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm"
          >
            Desde 2010
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            Galletas Artesanales
            <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90 font-light mt-2">
              de Nueva York
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ingredientes premium, recetas tradicionales y el amor de Nueva York
            en cada bocado
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-primary cursor-pointer rounded-full"
          >
            <Link href="/contacto">Contáctanos Ahora</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-warm">
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
            <Button asChild size="lg" className="btn-secondary rounded-full text-white">
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
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
              SÍGUENOS EN INSTAGRAM
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-warm">
              @LACASITADEBRI
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-6 gap-4 h-[700px] md:h-[600px]">
            {/* Hero Image - Large top left */}
            <div className="col-span-6 md:col-span-3 md:row-span-2 h-[200px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 group cursor-pointer card-warm">
              <Image
                width={600}
                height={400}
                src="/cookie.png"
                alt="Galletas artesanales principales"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg">
                Nuestras Especialidades
              </div>
            </div>

            {/* Medium Image - Top right */}
            <div className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 group cursor-pointer card-warm">
              <Image
                width={400}
                height={300}
                src="/cookie.png"
                alt="Proceso artesanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Small Image - Top far right */}
            <div className="col-span-3 md:col-span-1 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/30 group cursor-pointer card-warm">
              <Image
                width={200}
                height={300}
                src="/cookie.png"
                alt="Ingredientes premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Wide Image - Middle right */}
            <div className="col-span-6 md:col-span-3 h-[120px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 group cursor-pointer card-warm">
              <Image
                width={600}
                height={200}
                src="/cookie.png"
                alt="Vitrina de galletas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Medium Square - Bottom left */}
            <div className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group cursor-pointer card-warm">
              <Image
                width={400}
                height={300}
                src="/cookie.png"
                alt="Horneado tradicional"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Medium Rectangle - Bottom center */}
            <div className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 group cursor-pointer card-warm">
              <Image
                width={400}
                height={300}
                src="/cookie.png"
                alt="Empaque artesanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Tall Image - Bottom right */}
            <div className="col-span-6 md:col-span-2 md:row-span-2 h-[200px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 group cursor-pointer card-warm">
              <Image
                width={400}
                height={500}
                src="/cookie.png"
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
            <Button asChild size="lg" className="btn-accent rounded-full text-white">
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
