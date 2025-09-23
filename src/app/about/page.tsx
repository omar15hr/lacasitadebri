"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Clock } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import { motion } from "motion/react";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4 bg-primary text-white">
                  Nuestra Historia
                </Badge>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance text-warm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Horneando sueños desde el corazón de{" "}
                <span className="text-primary">Nueva York</span>
              </motion.h1>
              <motion.p
                className="text-xl text-primary/80 leading-relaxed text-pretty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                La Casita de Bri nació en 2020 con una misión simple: crear las
                mejores galletas artesanales de Nueva York usando solo
                ingredientes premium y recetas tradicionales perfeccionadas con
                amor.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                width={500}
                height={500}
                src="/cookie.png"
                alt="Nuestra cocina artesanal"
                className="rounded-lg shadow-2xl w-full h-auto card-warm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-warm">
              La Historia de La Casita de Bri
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-4 text-warm">
                  Los Comienzos
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  La historia de La Casita de Bri nace en Maracay, Venezuela,
                  donde la pasión por la repostería comenzó como un simple hobby
                  se transformó en un sueño de emprendimiento. Con años de
                  formación, cursos especializados y una dedicación constante,
                  Brisa Hernández perfeccionó recetas tradicionales que hoy son
                  el corazón de nuestro sabor.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aunque la experiencia en el rubro ya sumaba muchos años, fue
                  en 2020 cuando la decisión de emprender tomó fuerza.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  width={500}
                  height={500}
                  src="/cookie.png"
                  alt="María en su cocina original"
                  className="rounded-lg shadow-lg w-full h-auto card-warm"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  width={500}
                  height={500}
                  src="/cookie.png"
                  alt="Nuestra tienda en NYC"
                  className="rounded-lg shadow-lg w-full h-auto md:order-1 card-warm"
                />
              </motion.div>
              <motion.div
                className="md:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-primary mb-4 text-warm">
                  El Crecimiento
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Con valentía y entusiasmo, empezamos a compartir nuestras
                  galletas estilo New York, elaboradas con una receta que
                  combina tradición y técnica, cuidando cada detalle para lograr
                  un postre único.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Hoy seguimos creciendo con la misma misión que nos inspiró
                  desde el inicio: ofrecer postres que transmitan calidez, sabor
                  y autenticidad. En cada galleta horneada llevamos la tradición
                  de nuestra receta y la experiencia de años dedicados a la
                  repostería, transformando momentos cotidianos en dulces
                  recuerdos.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-primary mb-6 text-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nuestros Valores
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Los principios que guían cada galleta que horneamos y cada sonrisa
              que compartimos.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center card-warm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 text-warm">
                    Amor en cada galleta
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cada galleta es hecha a mano con el mismo cariño que
                    pondríamos en una galleta para nuestra propia familia.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="text-center card-warm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 text-warm">
                    Ingredientes Premium
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Solo usamos los mejores ingredientes, desde el chocolate, mantequilla, azúcar y especias orgánicas.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center card-warm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 text-warm">
                    Comunidad
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Somos más que una tienda de galletas; somos parte de la comunidad de
                    galletas Nueva York y nos enorgullece servirla.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="text-center card-warm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Clock className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 text-warm">
                    Tradición
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Respetamos las recetas tradicionales mientras innovamos para
                    crear sabores únicos y memorables.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
