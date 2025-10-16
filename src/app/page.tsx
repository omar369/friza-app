import { Navbar } from '@/components/shared/navbar'
import { HeroMain } from '@/components/shared/hero-main'

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center">
        <HeroMain/>
        {/* ================================ */}
        {/* 🏠 HERO PRINCIPAL */}
        {/* ================================ */}
        <section className="w-full min-h-[80vh] flex items-center justify-center border-b border-gray-100">
          <div className="max-w-5xl px-6 text-center">
            {/* Aquí va el hero principal */}
            <div>/* aquí va el hero */</div>
          </div>
        </section>

        {/* ================================ */}
        {/* 💎 SECCIÓN 1 */}
        {/* ================================ */}
        <section className="w-full min-h-[60vh] flex items-center justify-center border-b border-gray-100">
          <div className="max-w-6xl px-6">
            <div>/* aquí va la sección 1 */</div>
          </div>
        </section>

        {/* ================================ */}
        {/* 🛠️ SECCIÓN 2 */}
        {/* ================================ */}
        <section className="w-full min-h-[60vh] flex items-center justify-center border-b border-gray-100">
          <div className="max-w-6xl px-6">
            <div>/* aquí va la sección 2 */</div>
          </div>
        </section>

        {/* ================================ */}
        {/* 🚀 SECCIÓN 3 */}
        {/* ================================ */}
        <section className="w-full min-h-[60vh] flex items-center justify-center border-b border-gray-100">
          <div className="max-w-6xl px-6">
            <div>/* aquí va la sección 3 */</div>
          </div>
        </section>
      </main>

      {/* ================================ */}
      {/* ⚓ FOOTER */}
      {/* ================================ */}
      <footer className="w-full border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} MiTienda — Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

