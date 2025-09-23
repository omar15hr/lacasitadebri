"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance text-warm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Disfruta y experimenta de nuestras galletas
        </motion.h2>
        <motion.p 
          className="text-xl text-muted-foreground mb-8 text-pretty"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Visítanos en nuestro Instagram o contáctanos por WhatsApp
          para pedidos especiales.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="btn-primary cursor-pointer rounded-full text-white transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/">Contáctanos Ahora</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="btn-secondary cursor-pointer rounded-full text-white transition-all duration-300 hover:shadow-lg">
              <Link href="/products">Ver Catálogo</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
