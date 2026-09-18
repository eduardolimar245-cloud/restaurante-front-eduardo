"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#10251c]">
      <header className="absolute left-0 top-0 z-50 w-full border-b border-[#d4af6a]/20 bg-[#10251c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="group flex items-center gap-3">
            <div className="rounded-xl border border-[#d4af6a]/40 bg-white/10 p-2">
              <Image
                src="/imagemNova.png"
                alt="Logo Casa do Sabor"
                width={65}
                height={65}
                className="rounded-lg object-contain"
              />
            </div>

            <span className="hidden text-lg font-bold tracking-wide text-[#f1d49a] sm:block">
              Casa do Sabor
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="font-medium text-white transition hover:text-[#f1d49a]"
            >
              Início
            </Link>

            <Link
              href="/cardapio"
              className="font-medium text-white transition hover:text-[#f1d49a]"
            >
              Cardápio
            </Link>

            <Link
              href="/sobre"
              className="font-medium text-white transition hover:text-[#f1d49a]"
            >
              Sobre Nós
            </Link>

            <Link
              href="/pedidos"
              className="rounded-full bg-[#d4af6a] px-6 py-3 font-bold text-[#10251c] transition hover:bg-[#f1d49a]"
            >
              Fazer Pedido
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d] px-6 text-center">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full border border-[#d4af6a]/10" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full border border-[#d4af6a]/10" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af6a]/5 blur-[120px]" />

        <div className="relative z-10 flex max-w-5xl flex-col items-center pt-24">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-16 bg-[#d4af6a]/70 sm:w-24" />
            <span className="text-2xl text-[#f1d49a]">✦</span>
            <span className="h-px w-16 bg-[#d4af6a]/70 sm:w-24" />
          </div>

          <div className="rounded-3xl border border-[#d4af6a]/50 bg-white/5 p-5 shadow-2xl backdrop-blur-sm transition duration-500 hover:scale-105">
            <div className="rounded-2xl border border-[#d4af6a]/30 bg-[#10251c]/60 p-4">
              <Image
                src="/imagemNova.png"
                alt="Logo Casa do Sabor"
                width={190}
                height={190}
                className="rounded-xl object-contain"
              />
            </div>
          </div>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.4em] text-[#f1d49a] sm:text-base">
            Bem-vindo à
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-8xl">
            Casa do <span className="text-[#f1d49a]">Sabor</span>
          </h1>

          <div className="my-8 flex items-center gap-4">
            <span className="h-px w-20 bg-[#d4af6a]/60" />
            <span className="text-lg text-[#f1d49a]">✦</span>
            <span className="h-px w-20 bg-[#d4af6a]/60" />
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg md:text-xl">
            Um lugar especial para saborear momentos,
            <br className="hidden sm:block" />
            reunir pessoas e desfrutar de uma comida feita com carinho.
          </p>

          <Link
            href="/cardapio"
            className="mt-10 rounded-full bg-[#d4af6a] px-10 py-4 font-bold text-[#10251c] shadow-xl transition duration-300 hover:scale-105 hover:bg-[#f1d49a] active:scale-95"
          >
            Conheça nosso cardápio
          </Link>

          <div className="mt-12 flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-[#f1d49a]" />
            <span className="h-px w-16 bg-[#d4af6a]/60" />
            <span className="h-2 w-2 rounded-full bg-[#f1d49a]" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[#f1d49a]/60">
          <span className="text-xs uppercase tracking-[0.3em]">
            Explore
          </span>

          <div className="h-10 w-px bg-[#d4af6a]/50" />
        </div>
      </section>
    </main>
  );
}