import Link from "next/link";
import { Button } from "./ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance text-warm">
          Disfruta y experimenta de nuestras galletas
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-pretty">
          Visítanos en nuestro Instagram o contáctanos por WhatsApp
          para pedidos especiales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="btn-primary cursor-pointer rounded-full text-white"
          >
            <Link href="/">Contáctanos Ahora</Link>
          </Button>
          <Button size="lg" className="btn-secondary cursor-pointer rounded-full text-white">
            <Link href="/products">Ver Catálogo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
