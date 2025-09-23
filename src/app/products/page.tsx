"use client";

import { productos } from "@/data/products.data";
import ProductCard from "@/components/ProductCard";
import CallToAction from "@/components/CallToAction";
import { motion } from "motion/react";

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
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nuestros Productos
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Descubre nuestra colección completa de galletas artesanales, cada
            una hecha con ingredientes premium y mucho amor.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Products Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {productos.map((producto, index) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index % 6) * 0.1 
                }}
                viewport={{ once: true }}
              >
                <ProductCard producto={producto} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
