import { Button } from "./ui/button";

export default function CallToAction() {
  return (
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
          <Button
            size="lg"
            variant="outline"
            className="bg-[#feee5b] text-black hover:bg-[#eedf56] hover:text-black"
          >
            Contáctanos Ahora
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent">
            Ver Catálogo
          </Button>
        </div>
      </div>
    </section>
  );
}
