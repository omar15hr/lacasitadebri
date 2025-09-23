import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

interface ProductCardProps {
  producto: {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    price: number;
    badges: string[];
  };
}

export default function ProductCard({ producto }: ProductCardProps) {
  return (
    <Card className="group card-warm hover:scale-105 transition-all duration-300">
      <CardContent className="p-6">
        <Image
          src="/cookie.png"
          alt={`Galletas ${producto.nombre.toLowerCase()}`}
          width={500}
          height={500}
          className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-xl font-semibold text-primary mb-2 text-warm">
          {producto.nombre}
        </h3>
        <p className="text-muted-foreground mb-4">{producto.descripcion}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              ${producto.price}
            </span>
          </div>
          {producto.badges.map((badge, index) => (
            <Badge key={index} className="bg-accent text-accent-foreground">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
