"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Bengala de chispa (5cm)",
    category: "Chispa fria",
    details: "Bengala con humo aromomático, libre de amonio y duración...",
    image: "/images/products/auriculares.jpg",
  },
  {
    id: 2,
    name: "Bengala de chispa (8cm)",
    category: "Chispa fria",
    details: "Bengala con humo aromomático, libre de amonio y duración...",
    image: "/images/products/smartwatch.jpg",
  },
  {
    id: 3,
    name: "Bengala de chispa (12cm)",
    category: "Chispa fria",
    details: "Bengala con humo aromomático, libre de amonio y duración...",
    image: "/images/products/mochila.jpg",
  },
  {
    id: 4,
    name: "Bengala de chispa (14cm)",
    category: "Chispa fria",
    details: "Bengala con humo aromomático, libre de amonio y duración...",
    image: "/images/products/camara.jpg",
  },
  {
    id: 5,
    name: "Bengala LED",
    category: "Luces LED",
    details: "Luz LED para la botella, recargable y con diferentes modos...",
    image: "/images/products/teclado.jpg",
  },
  {
    id: 6,
    name: "Chisperos para detonador",
    category: "Chispa fria",
    details: "Chispa con alcance de 1.5 metros de altura y duracíon...",
    image: "/images/products/teclado.jpg",
  },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Billboard / Carousel */}
      <section className="relative w-full max-w-6xl mx-auto py-8">
        <Carousel className="w-full">
          <CarouselContent>
            {products.slice(0, 4).map((product) => (
              <CarouselItem key={product.id}>
                <div className="relative flex justify-center">
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt={product.name}
                    className="rounded-2xl h-[320px] w-full object-cover md:h-[480px]"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/80 px-4 py-2 rounded-lg backdrop-blur">
                    <h3 className="text-xl font-semibold text-blue-600">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-700">{product.category}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 pb-12">
        {products.map((product) => (
          <Card
            key={product.id}
            className="shadow-sm border hover:shadow-md transition-all"
          >
            <CardHeader>
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-blue-600">{product.name}</CardTitle>
              <CardDescription className="text-yellow-600 ">
                {product.category}
              </CardDescription>
              <p className="text-gray-500 mt-2">{product.details}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Link
                href={`/store/${product.id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Ver detalles
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                asChild
              >
                <a
                  href={`https://wa.me/5210000000000?text=Hola, quiero información sobre ${encodeURIComponent(
                    product.name,
                  )}`}
                  target="_blank"
                >
                  Consultar
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
