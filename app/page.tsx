"use client"

import Login from "./login/page"



export default function Home() {
  return(
    <div>
      <Login />
    </div>
  )
}

"use client";

import Image from "next/image";
import Link from "next/link";
import logotipo from "../public/logotipo.png"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#062f5f]">

      {/* Navbar */}
      <header className="absolute top-0 z-20 w-full border-b border-white/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          {/* Logo */}
<Link href="/" className="flex h-[75px] w-[75px] items-center justify-center">
  <Image
    src={logotipo}
    alt="Casa do Sabor"
    width={1254}
    height={1254}
    className="h-full w-full object-contain"
  />
</Link>

          {/* Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="font-medium text-white transition hover:text-blue-200"
            >
              Início
            </Link>

            <Link
              href="/cardapio"
              className="font-medium text-white transition hover:text-blue-200"
            >
              Cardápio
            </Link>

            <Link
              href="/sobre"
              className="font-medium text-white transition hover:text-blue-200"
            >
              Sobre Nós
            </Link>

            <Link
              href="/pedidos"
              className="rounded-full border border-white/40 px-5 py-2 font-medium text-white transition hover:bg-white hover:text-[#063b78]"
            >
              Fazer Pedido
            </Link>
          </nav>

        </div>
      </header>

      {/* Tela inicial */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

        {/* Fundo azul */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021d3a] via-[#063b78] to-[#075dcc]" />

        {/* Brilho central */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[120px]" />

        {/* Círculos decorativos */}
        <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full border border-white/20" />
        <div className="absolute -left-20 top-[37%] h-40 w-40 rounded-full border border-white/20" />

        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full border border-white/20" />
        <div className="absolute -right-16 bottom-32 h-40 w-40 rounded-full border border-white/20" />

        {/* Pequenos detalhes */}
        <div className="absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-white" />
        <div className="absolute left-[18%] top-[65%] h-2 w-2 rounded-full bg-white/70" />
        <div className="absolute right-[15%] top-[28%] h-3 w-3 rounded-full bg-white" />
        <div className="absolute right-[20%] bottom-[25%] h-2 w-2 rounded-full bg-white/70" />

        {/* Linhas decorativas */}
        <div className="absolute left-0 top-1/2 h-px w-32 bg-white/30" />
        <div className="absolute right-0 top-1/2 h-px w-32 bg-white/30" />

        <div className="absolute left-1/2 top-28 h-16 w-px -translate-x-1/2 bg-white/30" />

        {/* Conteúdo */}
        <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">

          {/* Detalhe superior */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-16 bg-white/70" />
            <span className="text-xl text-white">✦</span>
            <span className="h-px w-16 bg-white/70" />
          </div>

          {/* Logo */}
          <div className="rounded-full border-2 border-white/40 p-4 shadow-2xl">
            <Image
              src="/logo-casa-do-sabor.png"
              alt="Logo Casa do Sabor"
              width={210}
              height={210}
              className="object-contain"
            />
          </div>

          {/* Texto */}
          <p className="mt-8 font-semibold uppercase tracking-[0.4em] text-white">
            Bem-vindo à
          </p>

          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
            Casa do <span className="text-blue-200">Sabor</span>
          </h1>

          {/* Linha decorativa */}
          <div className="my-6 flex items-center gap-3">
            <span className="h-px w-20 bg-white/60" />
            <span className="text-white">✦</span>
            <span className="h-px w-20 bg-white/60" />
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/90 md:text-xl">
            Um lugar especial para saborear momentos,
            reunir pessoas e desfrutar de uma comida feita com carinho.
          </p>

          {/* Detalhe inferior */}
          <div className="mt-10 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-px w-12 bg-white/60" />
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>

        </div>
      </section>

    </main>
  );
}
>>>>>>> 4dcc556 (codigo atualizado)
