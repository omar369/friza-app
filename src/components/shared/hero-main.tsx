'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { Button } from '@/components/ui/button'
import { AnimatedLogo } from '@/components/shared/animated-logo'

export function HeroMain() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine) // carga todo el paquete
  }, [])

  return (
      <section className="relative min-h-[80vh] w-full bg-gray-200 flex items-center justify-center overflow-hidden">
      {/* Fondo animado */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: '#efefef' } },
          particles: {
            number: { value: 250 },
            color: { value: ['#e03a87', '#115b8e', '#fbc320', '#a1bd09', '#00affe'] },
            shape: { type: 'circle' },
            opacity: { value: 0.8 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1.2, direction: 'bottom', outModes: 'out' },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Contenido del hero */}
      <div className="relative z-10 text-center">
        <AnimatedLogo/> 
        <h2 className="mt-2 text-gray-600 mx-auto">
            Hacemos tu evento brillar.
        </h2>
        <Button asChild className="mt-6">
          <a href="/marketing">Ver productos</a>
        </Button>
      </div>
    </section>
  )
}

