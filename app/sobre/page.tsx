"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d] text-white">
      {/* Navbar */}
      <header className="border-b border-[#d4af6a]/40 bg-[#10251c]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/imagemNova.png"
              alt="Casa do Sabor"
              width={75}
              height={75}
              className="object-contain"
            />
          </Link>

          {/* Menu */}
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
              className="font-medium text-[#f1d49a]"
            >
              Sobre Nós
            </Link>

            <Link
              href="/pedidos"
              className="rounded-full border border-[#d4af6a]/60 px-5 py-2 font-medium text-white transition hover:bg-[#d4af6a] hover:text-[#10251c]"
            >
              Fazer Pedido
            </Link>
          </nav>
        </div>
      </header>

      {/* Conteúdo */}
      <section className="relative overflow-hidden px-6 py-20">
        {/* Decorações */}
        <div className="absolute -left-32 top-40 h-64 w-64 rounded-full border border-[#d4af6a]/20" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full border border-[#d4af6a]/20" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Título */}
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[#d4af6a]/70" />
              <span className="h-px w-6 bg-[#d4af6a]/70" />
              <span className="h-px w-16 bg-[#d4af6a]/70" />
            </div>

            <p className="font-semibold uppercase tracking-[0.35em] text-[#f1d49a]">
              Conheça a nossa história
            </p>

            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">
              Sobre a{" "}
              <span className="text-[#f1d49a]">Casa do Sabor</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Mais do que um restaurante, somos um lugar feito para reunir
              pessoas, criar momentos especiais e transformar cada refeição
              em uma experiência deliciosa.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Nossa História */}
            <div className="rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/60 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-[#10251c]/90">
              <div className="mb-5 h-1 w-14 rounded-full bg-[#d4af6a]" />

              <h2 className="mb-4 text-2xl font-bold text-[#f1d49a]">
                Nossa História
              </h2>

              <p className="leading-7 text-white/75">
                A Casa do Sabor nasceu com o objetivo de oferecer uma comida
                saborosa, preparada com carinho e servida em um ambiente
                agradável para toda a família.
              </p>
            </div>

            {/* Nossa Missão */}
            <div className="rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/60 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-[#10251c]/90">
              <div className="mb-5 h-1 w-14 rounded-full bg-[#d4af6a]" />

              <h2 className="mb-4 text-2xl font-bold text-[#f1d49a]">
                Nossa Missão
              </h2>

              <p className="leading-7 text-white/75">
                Proporcionar uma experiência especial aos nossos clientes,
                unindo bons ingredientes, atendimento de qualidade e muito
                sabor em cada prato.
              </p>
            </div>

            {/* Nossos Valores */}
            <div className="rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/60 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-[#10251c]/90">
              <div className="mb-5 h-1 w-14 rounded-full bg-[#d4af6a]" />

              <h2 className="mb-4 text-2xl font-bold text-[#f1d49a]">
                Nossos Valores
              </h2>

              <p className="leading-7 text-white/75">
                Trabalhamos com dedicação, respeito e qualidade, sempre
                buscando fazer com que cada cliente se sinta em casa.
              </p>
            </div>
          </div>

          {/* Frase final */}
          <div className="mt-16 rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/60 px-6 py-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold md:text-4xl">
              Sabor que reúne, carinho que fica.
            </h2>

            <p className="mt-4 text-[#f1d49a]/80">
              Casa do Sabor — feito para você.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-[#d4af6a]/40 bg-[#10251c] py-8 text-center">
        <p className="text-sm text-white/60">
          © 2026 Casa do Sabor. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}