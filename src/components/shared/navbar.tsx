"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MobileMenu } from "@/components/shared/mobile-menu";

export function Navbar() {
  return (
    <header className="absolute top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          <span className="text-blue-600">FRIZA</span>Store
        </Link>

        {/* Menú principal */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6 text-sm text-gray-700">
            <NavigationMenuItem>
              <Link
                href="/store"
                className="hover:text-blue-600 transition-colors"
              >
                Catálogo
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contacto"
                className="hover:text-blue-600 transition-colors"
              >
                Contacto
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/sobre-nosotros"
                className="hover:text-blue-600 transition-colors"
              >
                Sobre nosotros
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
