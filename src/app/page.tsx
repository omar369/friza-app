"use client";
import { HeroMain } from "@/components/shared/hero-main";
import { ThreeScene } from "@/components/marketing/three-scene";

export default function HomePage() {
  return (
    <main className="relative">
      <ThreeScene />

      <div className="flex flex-col items-center justify-center">
        <HeroMain />
        {/* SECCIÓN PRINCIPAL - PRESENTACIÓN PRODUCTO */}
        <section className="w-full min-h-[150vh] flex items-center justify-center border-b border-gray-100 bg-transparent">
          <div className="grid w-full min-h-[200vh] py-2">
            <div className="grid grid-cols-2 gap-8 md:gap-16 items-center justify-center w-full px-4 md:px-16">
              <div className="flex justify-end">
                <span className="text-[8vw] md:text-[7vw] font-extrabold leading-none text-sky-900 tracking-tight text-right">
                  ¡LA CH <br /> TODO T <br /> D
                </span>
              </div>

              <div className="flex justify-start">
                <span className="text-[8vw] md:text-[7vw] font-extrabold leading-none text-sky-900 tracking-tight text-left">
                  SPA PARA <br />
                  PO DE <br /> VERSIÓN!
                </span>
              </div>
            </div>
            <div className="w-full min-h-[200vh] py-20 mt-20">
              <div className="grid grid-cols-2 items-center justify-center w-full px-4 md:px-16">
                {/* Columna Izquierda */}
                <div className="flex justify-end">
                  <span className="text-[8vw] md:text-[6vw] pr-3 py-20  font-extrabold leading-none text-gray-900 tracking-tight text-right">
                    NUESTRO <br /> MEJOR PRODUCTO
                  </span>
                </div>

                {/* Columna Derecha (vacía por ahora) */}
                <div></div>
              </div>
              <span className="text-[15vw] md:text-[12vw] py-10 font-extrabold left text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-gray-500">
                LA BENGALA 
              </span>
            </div>

            <div className="w-full min-h-[200vh] py-12">
              <div className="grid grid-cols-2 items-center justify-center w-full px-4 md:px-16">
                {/* Columna Izquierda */}
                <div className="flex justify-end">
                  <span className="text-[8vw] md:text-[6vw] font-extrabold leading-none text-sky-900 tracking-tight text-right">
                   ¡HAZ <br /> TU <br /> PEDIDO!
                  </span>
                </div>

                {/* Columna Derecha (vacía por ahora) */}
                <div></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
