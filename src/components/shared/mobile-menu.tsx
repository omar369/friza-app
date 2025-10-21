'use client'

import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTitle className="hidden">Mobile</SheetTitle>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-6 bg-white">
        <nav className="flex flex-col gap-6 text-lg font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/catalogo" onClick={() => setOpen(false)}>Catálogo</Link>
          <Link href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
          <Link href="/sobre-nosotros" onClick={() => setOpen(false)}>Sobre Nosotros</Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

