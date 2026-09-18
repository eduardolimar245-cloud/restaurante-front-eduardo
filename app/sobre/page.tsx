<<<<<<< HEAD
import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Título */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Sobre nós
          </h1>

          <p className="mt-3 text-gray-600">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* Imagem */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/logotipo-restaurante.jpg"
              alt="Restaurante"
              width={600}
              height={400}
              className="h-100 w-full object-cover"
            />
          </div>

          {/* Texto */}
          <div>
            <h2 className="mb-5 text-3xl font-bold text-gray-900">
              Bem-vindo ao nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              Somos um restaurante dedicado a oferecer comida saborosa,
              preparada com ingredientes selecionados e muito carinho.
            </p>

            <p className="mb-6 text-lg leading-8 text-gray-600">
              Nosso compromisso é proporcionar uma experiência especial
              para nossos clientes, unindo qualidade, sabor e um
              atendimento acolhedor.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <span className="text-2xl">❤️</span>
                <p className="mt-2 font-semibold text-gray-800">
                  Carinho
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
=======

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-[#062f5f] text-white">

      {/* Navbar */}
      <header className="border-b border-white/20 bg-[#021d3a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logotipo.png"
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
              className="font-medium text-blue-200"
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

      {/* Conteúdo */}
      <section className="relative overflow-hidden px-6 py-20">

        {/* Decorações */}
        <div className="absolute -left-32 top-40 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Título */}
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-white/60" />
              <span className="text-xl">✦</span>
              <span className="h-px w-16 bg-white/60" />
            </div>

            <p className="font-semibold uppercase tracking-[0.35em] text-blue-200">
              Conheça a nossa história
            </p>

            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">
              Sobre a <span className="text-blue-200">Casa do Sabor</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Mais do que um restaurante, somos um lugar feito para reunir
              pessoas, criar momentos especiais e transformar cada refeição
              em uma experiência deliciosa.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {/* Nossa história */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/15">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-2xl">
                🏠
              </div>

              <h2 className="mb-4 text-2xl font-bold">
                Nossa História
              </h2>

              <p className="leading-7 text-white/75">
                A Casa do Sabor nasceu com o objetivo de oferecer uma comida
                saborosa, preparada com carinho e servida em um ambiente
                agradável para toda a família.
              </p>
            </div>

            {/* Nossa missão */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/15">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-2xl">
                ❤️
              </div>

              <h2 className="mb-4 text-2xl font-bold">
                Nossa Missão
              </h2>

              <p className="leading-7 text-white/75">
                Proporcionar uma experiência especial aos nossos clientes,
                unindo bons ingredientes, atendimento de qualidade e muito
                sabor em cada prato.
              </p>
            </div>

            {/* Nossos valores */}
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/15">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-2xl">
                ⭐
              </div>

              <h2 className="mb-4 text-2xl font-bold">
                Nossos Valores
              </h2>

              <p className="leading-7 text-white/75">
                Trabalhamos com dedicação, respeito e qualidade, sempre
                buscando fazer com que cada cliente se sinta em casa.
              </p>
            </div>

          </div>

          {/* Frase final */}
          <div className="mt-16 rounded-3xl border border-white/20 bg-white/10 px-6 py-12 text-center backdrop-blur-sm">

            <div className="mb-5 text-3xl">✦</div>

            <h2 className="text-3xl font-bold md:text-4xl">
              “Sabor que reúne, carinho que fica.”
            </h2>

            <p className="mt-4 text-white/70">
              Casa do Sabor — feito para você.
            </p>

          </div>

        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-white/20 bg-[#021d3a] py-8 text-center">
        <p className="text-sm text-white/60">
          © 2026 Casa do Sabor. Todos os direitos reservados.
        </p>
      </footer>

    </main>
  );
}
>>>>>>> 4dcc556 (codigo atualizado)
