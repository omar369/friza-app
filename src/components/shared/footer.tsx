"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Theme } from "@radix-ui/themes";
import Link from "next/link";
import { useLenis } from "lenis/react";

export function Footer() {
  const lenis = useLenis();

  function scrollToTop(e: React.MouseEvent) {
    e.preventDefault(); // evita salto instantáneo del anchor
    lenis?.scrollTo(0, {
      offset: 0,
      duration: 1.5,
      easing: (t: number) => 1 - Math.pow(1 - t, 4), // ease-out
    });
  }

  return (
    <Theme>
      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center justify-center space-y-4 text-center">
          <nav className="flex gap-6 text-sm text-gray-600">
            <Link
              href="/marketing"
              className="hover:text-blue-600 transition-colors"
            >
              Catálogo
            </Link>
            <Link
              href="/contacto"
              className="hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/sobre-nosotros"
              className="hover:text-blue-600 transition-colors"
            >
              Sobre nosotros
            </Link>
          </nav>

          <Separator className="w-24 bg-gray-300" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Friza store</p>
            <span className="hidden md:block">•</span>
            <p>Página desarrollada por Friza.</p>
          </div>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="cursor-pointer mt-2 text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
            onClick={scrollToTop}
          >
            <h1>Regresar al inicio  </h1>
          </Button>
        </div>
      </footer>
    </Theme>
  );
}
