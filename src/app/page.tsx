'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { productos } from "@/data/products.data";
import ProductCard from "@/components/ProductCard";
import CallToAction from "@/components/CallToAction";
import { motion } from "motion/react";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm"
            >
              Desde 2010
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Galletas Artesanales
            </motion.span>
            <motion.span 
              className="block text-4xl md:text-5xl lg:text-6xl text-white/90 font-light mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              de Nueva York
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Ingredientes premium, recetas tradicionales y el amor de Nueva York
            en cada bocado
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary cursor-pointer rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
            >
              <Link href="/">Contáctanos Ahora</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-4 text-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nuestras Especialidades
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Descubre nuestras galletas más populares, cada una con su propia
              personalidad y sabor único.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {productos.slice(0, 3).map((producto, index) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.5 + (index * 0.2) 
                }}
                viewport={{ once: true }}
              >
                <ProductCard producto={producto} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="btn-secondary rounded-full text-white">
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p 
              className="text-sm font-medium text-primary uppercase tracking-wider mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              SÍGUENOS EN INSTAGRAM
            </motion.p>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-primary text-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              @LACASITADEBRI
            </motion.h2>
            <motion.p 
              className="text-lg text-primary tracking-wider mb-2 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Perfectas para darte un gusto en cualquier momento o para compartir en eventos, cumpleaños y celebraciones especiales. 
            </motion.p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div 
            className="grid grid-cols-6 gap-4 h-[700px] md:h-[600px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Hero Image - Large top left */}
            <motion.div 
              className="col-span-6 md:col-span-3 md:row-span-2 h-[200px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 group cursor-pointer card-warm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Medium Image - Top right */}
            <motion.div 
              className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 group cursor-pointer card-warm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                width={400}
                height={300}
                src="/cookie.png"
                alt="Proceso artesanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Small Image - Top far right */}
            <motion.div 
              className="col-span-3 md:col-span-1 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 to-primary/30 group cursor-pointer card-warm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Image
                width={200}
                height={300}
                src="/cookie.png"
                alt="Ingredientes premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Wide Image - Middle right */}
            <motion.div 
              className="col-span-6 md:col-span-3 h-[120px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 group cursor-pointer card-warm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                width={600}
                height={200}
                src="/cookie.png"
                alt="Vitrina de galletas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Medium Square - Bottom left */}
            <motion.div 
              className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group cursor-pointer card-warm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Image
                width={400}
                height={300}
                src="/cookie.png"
                alt="Horneado tradicional"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Medium Rectangle - Bottom center */}
            <motion.div 
              className="col-span-3 md:col-span-2 h-[150px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 group cursor-pointer card-warm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Image
                width={400}
                height={300}
                src="/cookie.png"
                alt="Empaque artesanal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Tall Image - Bottom right */}
            <motion.div 
              className="col-span-6 md:col-span-2 md:row-span-2 h-[200px] md:h-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 group cursor-pointer card-warm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </motion.div>

          {/* Call to action */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="btn-accent rounded-full text-white">
              <Link
                href="https://www.instagram.com/lacasitadebri/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Síguenos en Instagram
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
