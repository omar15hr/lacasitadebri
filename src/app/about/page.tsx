import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Clock } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary text-primary-foreground">
                Nuestra Historia
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance text-warm">
                Horneando sueños desde el corazón de{" "}
                <span className="text-primary">Nueva York</span>
              </h1>
              <p className="text-xl text-primary/80 leading-relaxed text-pretty">
                La Casita de Bri nació en 2020 con una misión simple: crear las
                mejores galletas artesanales de Nueva York usando solo
                ingredientes premium y recetas tradicionales perfeccionadas con
                amor.
              </p>
            </div>
            <div className="relative">
              <Image
                width={500}
                height={500}
                src="/cookie.png"
                alt="Nuestra cocina artesanal"
                className="rounded-lg shadow-2xl w-full h-auto card-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-warm">
              La Historia de La Casita de Bri
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4 text-warm">
                  Los Comienzos
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todo comenzó en la pequeña cocina de María González, una
                  inmigrante mexicana que llegó a Nueva York con el sueño de
                  compartir las recetas familiares que había perfeccionado
                  durante generaciones.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Lo que empezó como galletas para amigos y vecinos, pronto se
                  convirtió en una pasión que no podía contenerse en una cocina
                  casera.
                </p>
              </div>
              <Image
                width={500}
                height={500}
                src="/cookie.png"
                alt="María en su cocina original"
                className="rounded-lg shadow-lg w-full h-auto card-warm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Image
                width={500}
                height={500}
                src="/cookie.png"
                alt="Nuestra tienda en NYC"
                className="rounded-lg shadow-lg w-full h-auto md:order-1 card-warm"
              />
              <div className="md:order-2">
                <h3 className="text-2xl font-semibold text-primary mb-4 text-warm">
                  El Crecimiento
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  En 2020, abrimos nuestro primer local en Broadway. Desde
                  entonces, hemos servido a más de 2,000 clientes satisfechos y
                  vendido más de 50,000 galletas, cada una hecha a mano con el
                  mismo amor del primer día.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro compromiso con la calidad y la tradición nos ha
                  convertido en una de las panaderías más queridas de Manhattan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-warm">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Los principios que guían cada galleta que horneamos y cada sonrisa
              que compartimos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            <Card className="text-center card-warm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 text-warm">
                  Ingredientes Premium
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Solo usamos los mejores ingredientes: chocolate belga,
                  mantequilla europea y especias orgánicas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center card-warm">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3 text-warm">
                  Comunidad
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Somos más que una panadería; somos parte de la comunidad de
                  Nueva York y nos enorgullece servirla.
                </p>
              </CardContent>
            </Card>

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
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-warm">
              Conoce a Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Las personas apasionadas que hacen posible cada galleta perfecta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-96 mx-auto">
            <Card className="text-center card-warm">
              <CardContent className="p-6">
                <Image
                  width={500}
                  height={500}
                  src="/cookie.png"
                  alt="María González"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-primary mb-2 text-warm">
                  María González
                </h3>
                <p className="text-primary font-medium mb-3">
                  Fundadora & Chef Principal
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Con más de 20 años de experiencia en repostería, María es el
                  corazón y alma de La Casita de Bri.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
