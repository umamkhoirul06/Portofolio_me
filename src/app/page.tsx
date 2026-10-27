// File: src/app/page.tsx
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, Layers, Cpu } from "lucide-react";
import { PROJECTS_DATA } from "@/data/portfolio";
import SmoothScroll from "@/components/ui/SmoothScroll";

// Dynamic import untuk 3D Canvas agar tidak error saat Server-Side Rendering (SSR)
const HeroCanvas = dynamic(() => import("@/components/canvas/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] md:h-[520px] flex items-center justify-center border border-neutral-800 bg-neutral-950/50 font-mono text-xs text-neutral-400">
      INITIALIZING_3D_VIEWPORT...
    </div>
  ),
});

export default function PortfolioPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#0A0A0A] text-[#EDEDED] selection:bg-[#CCFF00] selection:text-black">
        {/* Top Minimalist Bar */}
        <header className="border-b border-neutral-800/80 px-6 py-4 sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center font-mono text-xs">
            <span className="text-[#CCFF00] font-semibold tracking-wider">
              RPL_ENG // PORTFOLIO_2026
            </span>
            <div className="flex items-center gap-6 text-neutral-400">
              <a href="#projects" className="hover:text-white transition-colors">
                /PROJECTS
              </a>
              <a href="#stack" className="hover:text-white transition-colors">
                /ARCHITECTURE
              </a>
              <span className="hidden sm:inline-flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR PROJECTS
              </span>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Kolom Kiri: Tipografi Berani & Informatif */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-neutral-900/60 font-mono text-xs text-neutral-300"
              >
                <Terminal className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>SOFTWARE ENGINEERING STUDENT & FULL-STACK DEV</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]"
              >
                Merancang sistem yang{" "}
                <span className="text-[#CCFF00] underline decoration-neutral-700 underline-offset-8">
                  terukur
                </span>
                , bukan sekadar jalan.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed"
              >
                Fokus pada Clean Architecture, pengembangan aplikasi lintas
                platform (Flutter & Next.js), serta backend tangguh dengan
                Laravel & PostgreSQL.
              </motion.p>

              {/* Metrik Singkat (Informatif untuk Recruiter) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-800/80 font-mono"
              >
                <div>
                  <div className="text-xs text-neutral-500">PRIMARY STACK</div>
                  <div className="text-sm font-semibold mt-1">
                    Laravel / Flutter / Next
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500">ARCHITECTURE</div>
                  <div className="text-sm font-semibold mt-1">
                    SOLID & Clean Code
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500">DATABASE</div>
                  <div className="text-sm font-semibold mt-1">PostgreSQL</div>
                </div>
              </motion.div>
            </div>

            {/* Kolom Kanan: 3D Interaktif */}
            <div className="lg:col-span-5 border border-neutral-800/80 bg-neutral-950/40 p-2">
              <HeroCanvas />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (Editorial Asymmetric Grid - Anti AI Slop) */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800/80"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="font-mono text-xs text-[#CCFF00] mb-2">
                // 01. SELECTED_WORKS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Studi Kasus & Proyek Teknis
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-400 max-w-xs">
              Setiap proyek dilengkapi konteks masalah, arsitektur yang
              dipilih, dan dampak teknisnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {PROJECTS_DATA.map((project, index) => {
              // Proyek pertama mengambil 12 kolom penuh agar terlihat kontras & editorial
              const colSpan =
                index === 0 ? "md:col-span-12" : "md:col-span-6";

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${colSpan} group relative border border-neutral-800 bg-[#0F0F0F] hover:border-[#CCFF00]/60 transition-colors p-6 sm:p-8 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex justify-between items-start font-mono text-xs text-neutral-500 mb-6">
                      <span>
                        [{project.id}] — {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold group-hover:text-[#CCFF00] transition-colors flex items-center justify-between gap-4">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>

                    <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlight Engineering Impact */}
                    <div className="mt-6 p-3 bg-neutral-900/70 border-l-2 border-[#CCFF00] text-xs font-mono text-neutral-300">
                      <span className="text-[#CCFF00] font-semibold">
                        ENGINEERING IMPACT:{" "}
                      </span>
                      {project.impact}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ARCHITECTURE & ENGINEERING PRINCIPLES SECTION */}
        <section
          id="stack"
          className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800/80"
        >
          <div className="font-mono text-xs text-[#CCFF00] mb-2">
            // 02. HOW_I_BUILD
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Standar Rekayasa Perangkat Lunak
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-neutral-800 bg-[#0F0F0F]">
              <Layers className="w-6 h-6 text-[#CCFF00] mb-4" />
              <h3 className="font-bold text-lg">Clean Architecture</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Memisahkan logika bisnis dari UI dan database. Mudah diuji
                (testable) dan tidak pusing saat ada perubahan fitur mendadak.
              </p>
            </div>
            <div className="p-6 border border-neutral-800 bg-[#0F0F0F]">
              <Cpu className="w-6 h-6 text-[#CCFF00] mb-4" />
              <h3 className="font-bold text-lg">Performance First</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Query database terindeks tanpa masalah N+1 di backend, serta
                komponen 3D yang di-lazy-load agar tetap 60 FPS di perangkat
                mobile.
              </p>
            </div>
            <div className="p-6 border border-neutral-800 bg-[#0F0F0F]">
              <Terminal className="w-6 h-6 text-[#CCFF00] mb-4" />
              <h3 className="font-bold text-lg">Maintainable Code</h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Penamaan variabel yang jelas, tipe data ketat dengan
                TypeScript/Dart, dan penggunaan Git dengan Conventional Commits.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}