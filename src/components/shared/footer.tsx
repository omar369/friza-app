'use client'

import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Theme } from '@radix-ui/themes'
import Link from 'next/link'

export function Footer() {
  return (
    <Theme>
      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center justify-center space-y-4 text-center">
          <nav className="flex gap-6 text-sm text-gray-600">
            <Link href="/marketing" className="hover:text-blue-600 transition-colors">
              Catálogo
            </Link>
            <Link href="/contacto" className="hover:text-blue-600 transition-colors">
              Contacto
            </Link>
            <Link href="/sobre-nosotros" className="hover:text-blue-600 transition-colors">
              Sobre nosotros
            </Link>
          </nav>

          <Separator className="w-24 bg-gray-300" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} MiTienda</p>
            <span className="hidden md:block">•</span>
            <p>Mejorando cada día para dar al cliente un mejor servicio.</p>
          </div>

          <Button
            variant="outline"
            size="sm"
            asChild
            className="mt-2 text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
          >
            <Link href="#top">Volver arriba</Link>
          </Button>
        </div>
      </footer>
    </Theme>
  )
}

