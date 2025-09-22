import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Award, Users, Clock } from "lucide-react";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Nuestra Historia
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Horneando sueños desde el corazón de{" "}
                <span className="text-primary">Nueva York</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Sweet Dreams nació en 2020 con una misión simple: crear las
                mejores galletas artesanales de Nueva York usando solo
                ingredientes premium y recetas tradicionales perfeccionadas con
                amor.
              </p>
            </div>
            <div className="relative">
              <img
                src="/bakery-kitchen-with-bakers-working-artisan-cookies.jpg"
                alt="Nuestra cocina artesanal"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              La Historia de Sweet Dreams
            </h2>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
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
              <img
                src="/woman-baking-cookies-in-home-kitchen-vintage-style.jpg"
                alt="María en su cocina original"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src="/modern-bakery-storefront-new-york-city.jpg"
                alt="Nuestra tienda en NYC"
                className="rounded-lg shadow-lg w-full h-auto md:order-1"
              />
              <div className="md:order-2">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Los principios que guían cada galleta que horneamos y cada sonrisa
              que compartimos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Amor en cada galleta
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cada galleta es hecha a mano con el mismo cariño que
                  pondríamos en una galleta para nuestra propia familia.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Ingredientes Premium
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Solo usamos los mejores ingredientes: chocolate belga,
                  mantequilla europea y especias orgánicas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Comunidad
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Somos más que una panadería; somos parte de la comunidad de
                  Nueva York y nos enorgullece servirla.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conoce a Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Las personas apasionadas que hacen posible cada galleta perfecta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <img
                  src="/hispanic-woman-baker-chef-portrait-professional.jpg"
                  alt="María González"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  María González
                </h3>
                <p className="text-primary font-medium mb-3">
                  Fundadora & Chef Principal
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Con más de 20 años de experiencia en repostería, María es el
                  corazón y alma de Sweet Dreams.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <img
                  src="/young-man-baker-assistant-portrait-professional.jpg"
                  alt="Carlos Mendoza"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Carlos Mendoza
                </h3>
                <p className="text-primary font-medium mb-3">
                  Maestro Pastelero
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Especialista en técnicas tradicionales y creador de nuestras
                  recetas más innovadoras.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <img
                  src="/woman-customer-service-representative-friendly-por.jpg"
                  alt="Ana Rivera"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Ana Rivera
                </h3>
                <p className="text-primary font-medium mb-3">
                  Gerente de Tienda
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ana se asegura de que cada cliente tenga una experiencia
                  excepcional en nuestra tienda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Visítanos en nuestro local en Broadway y descubre por qué somos la
            panadería favorita de Nueva York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Visítanos Hoy
            </button>
            <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors">
              Síguenos en Redes
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
