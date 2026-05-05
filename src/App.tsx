import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Factory,
  HardHat,
  Link,
  PhoneCall,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Timer,
  TrendingDown,
  Wrench,
} from 'lucide-react';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 12);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 12);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 12) % 12);
  };

  return (
    <div className="relative flex flex-col min-h-screen font-sans overflow-hidden">
      {/* --- DARK THEME SECTION --- */}
      <div className="relative bg-[#030712] text-slate-300 selection:bg-orange-500/30 selection:text-orange-200 pb-10">
      {/* Web3 Background Glow Effects & Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-white/[0.02] bg-[size:32px_32px]">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/30 blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-orange-600/20 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[150px] animate-blob animation-delay-4000" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Cañiflex" className="h-12 w-auto object-contain" />
            <div className="hidden sm:flex flex-col border-l border-slate-300 pl-4 ml-2">
              <span className="text-lg font-black tracking-widest text-slate-900 leading-none">INGENIERÍA Y SOLUCIONES</span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1">Para la conducción de fluidos</span>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="https://wa.me/543462541310?text=Hola!%20Quiero%20hablar%20con%20un%20asesor."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
              <PhoneCall className="h-4 w-4 text-orange-400 group-hover:text-white transition-colors" />
              Hablar con un asesor
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION (Web3 Style) */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-mono font-medium text-orange-400 backdrop-blur-md uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>
                Alto a las pérdidas operativas
              </div>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Tenemos la solución. <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  Asegure su operación.
                </span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-slate-400 sm:text-xl">
                Soluciones para la conducción de fluidos - Conexionados que cumplen con normativas internacionales. -
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/543462541310?text=Hola!%20Necesito%20solicitar%20una%20cotizaci%C3%B3n."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.6)]"
                >
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                  Solicitar cotización
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://wa.me/543462541310?text=Hola!%20Quiero%20ver%20los%20cat%C3%A1logos%20t%C3%A9cnicos%20de..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]"
                >
                  Ver catálogo técnico
                </a>
              </div>
            </motion.div>

            {/* Hero Image Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-orange-500/20 mix-blend-overlay z-10 pointer-events-none"></div>
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentImageIndex}
                    src={`/imagen_carrusel_${currentImageIndex + 1}.jpg`} 
                    alt={`Carrusel industrial ${currentImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </AnimatePresence>
                
                {/* Navigation Buttons */}
                <div className="absolute inset-0 z-30 flex items-center justify-between p-4 px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  <button 
                    onClick={prevImage}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:scale-110 border border-white/20 pointer-events-auto"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:scale-110 border border-white/20 pointer-events-auto"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS MARQUEE */}
      <div className="relative z-10 flex overflow-hidden border-y border-slate-200 bg-white py-12 shadow-sm w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap w-max flex-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16 px-8 flex-nowrap">
              {[...Array(8)].map((_, imgIndex) => (
                <div key={imgIndex} className="flex shrink-0 items-center justify-center">
                  <img 
                    src={`/marca_${imgIndex + 1}.png`} 
                    alt={`Marca ${imgIndex + 1}`} 
                    className="max-h-12 sm:max-h-16 w-auto object-contain transition-all hover:scale-105 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 filter block" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3. PROBLEMAS COMUNES (Glassmorphism Cards) */}
      <section className="relative z-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              El verdadero costo de una conexión deficiente
            </h2>
            <p className="text-lg text-slate-400">
              En la industria, un componente inadecuado no es solo un repuesto; es una amenaza directa a su rentabilidad y seguridad.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Droplets, title: 'Fugas y Pérdidas', desc: 'Derrame de fluidos críticos que drenan su presupuesto y generan multas.' },
              { icon: TrendingDown, title: 'Caídas de Presión', desc: 'Sistemas ineficientes que obligan a sus equipos a trabajar forzados.' },
              { icon: Timer, title: 'Paradas Constantes', desc: 'Mantenimiento correctivo frecuente por desgaste prematuro.' },
              { icon: ShieldAlert, title: 'Riesgos Operativos', desc: 'Conexiones inseguras que no cumplen con las normativas internacionales.' },
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:border-orange-500/30 hover:bg-white/[0.04] hover:shadow-[0_8px_32px_0_rgba(249,115,22,0.1)]"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-white/10 to-white/5 p-3 text-orange-400 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:from-orange-500/20 group-hover:to-orange-500/5 group-hover:text-orange-300 group-hover:ring-orange-500/30">
                  <problem.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{problem.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRODUCTOS ORGANIZADOS (Bento Grid con Imágenes) */}
      </div> {/* END DARK THEME SECTION */}

      {/* --- LIGHT THEME SECTION --- */}
      <div className="relative bg-slate-50 text-slate-800 selection:bg-orange-500/30 selection:text-white flex-1">

      <section className="relative z-10 py-20 lg:py-28" id="soluciones">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Soluciones por Aplicación
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Ingeniería en conducción de fluidos. Cada producto está diseñado para resolver un desafío específico en su línea de producción.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Link,
                title: 'Sistemas de Conexión y Acople',
                resolve: 'Tiempos muertos y fugas en uniones.',
                items: ['Racores NPT/BSPT y Bronce', 'Acoplamientos CAMLOCK', 'Acoples rápidos y americanos', 'Conexiones para neumática'],
                img: '/imagen2.jpg'
              },
              {
                icon: Droplets,
                title: 'Mangueras industriales y Tubos ( THSC )',
                resolve: 'Degradación por fluidos agresivos.',
                items: ['Hidrocarburos, Vapor, Químicos, Arenado', 'Alimenticia, GNC, Combustibles', 'Ultra alta presión'],
                img: '/imagen3.jpg'
              },
              {
                icon: Settings,
                title: 'Control de Flujo',
                resolve: 'Falta de precisión y bloqueos.',
                items: ['Válvulas mariposa (Wafer / Lug)', 'Válvulas esféricas de alta resistencia'],
                img: '/imagen4.jpg'
              },
              {
                icon: ShieldAlert,
                title: 'Seguridad y Protección',
                resolve: 'Accidentes laborales y roturas.',
                items: ['Abrazaderas super presión', 'Cable de seguridad anti-látigo', 'Protector espiralado para mangueras', 'Manga protectora de Kevlar'],
                img: '/imagen5.jpg'
              },
              {
                icon: Wrench,
                title: 'Soporte e Instalación',
                resolve: 'Vibraciones destructivas.',
                items: ['Soportes para tubos simples', 'Soportes para tubos dobles', 'Empaquetaduras y sellos para cilindros'],
                img: '/imagen6.jpg'
              },
              {
                icon: Factory,
                title: 'Soluciones Especiales',
                resolve: 'Incompatibilidades y desgaste.',
                items: ['Mecanizados de precisión', 'Servicios de asesoría en planta', 'Desarrollos a pedido'],
                img: '/imagen7.jpg'
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-[0_12px_40px_-10px_rgba(249,115,22,0.15)]"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-10 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-20 grayscale group-hover:grayscale-0 mix-blend-multiply" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col pointer-events-none">
                  <div className="mb-6 inline-flex rounded-xl bg-orange-50 p-3 text-orange-500 ring-1 ring-orange-100 shadow-sm transition-transform duration-500 group-hover:scale-110">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-900">{cat.title}</h3>
                  <p className="mb-6 text-xs font-mono uppercase tracking-wider text-orange-500">Resuelve: {cat.resolve}</p>
                  
                  <ul className="mt-auto space-y-3 text-sm text-slate-600">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 group/item">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-orange-500 transition-transform group-hover/item:translate-x-1" />
                        <span className="transition-colors group-hover/item:text-slate-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFICIOS CLAVE */}
      <section className="relative z-10 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-orange-50/50 border-y border-slate-200 bg-grid-slate-200/[0.4] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-orange-600/5 blur-[150px] pointer-events-none"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Impacto directo en su <br/>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]">rentabilidad</span>
              </h2>
              <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                Invertir en conexionado normativo y eficiente es una estrategia de ahorro a largo plazo. Nuestros clientes experimentan mejoras medibles desde el primer día de instalación.
              </p>
              <a
                href="https://wa.me/543462541310?text=Hola!%20Quiero%20hablar%20con%20un%20asesor."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 ring-1 ring-slate-200 shadow-sm transition-all hover:bg-slate-50 hover:ring-orange-500/50 hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.15)]"
              >
                Recibir asesoramiento técnico
                <ArrowRight className="h-4 w-4 text-orange-500 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: 'Reducción de pérdidas', desc: 'Eliminación de fugas de fluidos costosos.' },
                { title: 'Menor instalación', desc: 'Sistemas diseñados para acoplamiento rápido.' },
                { title: 'Seguridad operativa', desc: 'Protección total para su personal.' },
                { title: 'Mayor vida útil', desc: 'Materiales de calidad PREMIUM.' },
              ].map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 ring-1 ring-orange-100 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL (Glow & Gradient) */}
      <section id="contacto" className="relative z-10 py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl sm:p-16"
          >
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 shadow-[0_0_20px_rgba(249,115,22,0.4)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/imagen8.jpg')] bg-cover bg-center opacity-[0.03] mix-blend-multiply grayscale"></div>
            <div className="absolute inset-0 bg-grid-slate-200/[0.4] bg-[size:32px_32px] pointer-events-none"></div>
            
            <div className="relative z-10 pointer-events-none">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                No espere a la <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">próxima falla.</span>
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
                Hable con nuestros especialistas hoy mismo. Analizaremos sus dolores operativos y le propondremos una solución definitiva.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pointer-events-auto">
                <a
                  href="https://wa.me/543462541310?text=Hola!%20Quiero%20hablar%20con%20un%20asesor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.6)] sm:w-auto"
                >
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                    <div className="relative h-full w-8 bg-white/20" />
                  </div>
                  <PhoneCall className="h-5 w-5" />
                  Contactar a un asesor
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-12 text-slate-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo Cañiflex" className="h-10 w-auto object-contain" />
              <div className="hidden sm:flex flex-col border-l border-slate-300 pl-4 ml-2">
                <span className="text-lg font-black tracking-widest text-slate-900 leading-none">INGENIERÍA Y SOLUCIONES</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1">Para la conducción de fluidos</span>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">
              © {new Date().getFullYear()} Cañiflex. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      </div> {/* END LIGHT THEME SECTION */}
    </div>
  );
}
