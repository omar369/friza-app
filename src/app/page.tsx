"use client"
import { Navbar } from '@/components/shared/navbar'
import { HeroMain } from '@/components/shared/hero-main'
import { Footer } from '@/components/shared/footer'
import { ThreeScene } from '@/components/marketing/three-scene'

export default function HomePage() {
  return (
    <main className="relative">
      <ThreeScene/>
      <Navbar />

      <div className="flex flex-col items-center justify-center">
        <HeroMain/>
        {/* 🏠 SECCIÓN PRINCIPAL - PRESENTACIÓN PRODUCTO */}
        <section className="w-full min-h-[150vh] flex items-center justify-center border-b border-gray-100 bg-transparent">
          <div className="max-w-5xl px-6 text-center">
            <h1>Nuestro mejor producto</h1>
            <div className="w-full min-h-[200vh] py-12">otra</div>
            <div className="w-full min-h-[200vh] py-12">separación</div>
            <div className="w-full min-h-[200vh] py-12">invisible?</div>
          </div>
        </section>
      </div>

      <Footer/>
    </main>
  )
}

