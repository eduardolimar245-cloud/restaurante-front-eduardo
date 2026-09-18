
"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useEffect, useState } from "react"

interface Produto {
  id: number
  descricao: string
  categoria: string
  preco: number
  imagem: string
}

export default function CardapioPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  async function mostrarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/produtos")

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos")
      }

      const data = await response.json()
<<<<<<< HEAD

=======
>>>>>>> 4dcc556 (codigo atualizado)
      setProdutos(data)
    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarProdutos()
  }, [])

  return (
<<<<<<< HEAD
    <main className="p-8">

      <Navbar />
      <h1 className="mb-6 text-3xl font-bold">
        Cardápio
      </h1>

      {loading ? (<p>Carregando produtos...</p>) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (

            
            <div
              key={produto.id}
              className="rounded-lg border p-4 shadow"
            >
              <Image
                src={produto.imagem}
                alt={produto.descricao}
                width={400}
                height={250}
                className="h-40 w-full rounded object-contain"
              />

              <h2 className="mt-3 text-xl font-semibold">
                {produto.descricao}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {produto.categoria}
              </p>

              <p className="mt-2 text-lg font-bold text-green-600">
                R$ {Number(produto.preco).toFixed(2)}
              </p>

              <button
                className="mt-4 w-full cursor-pointer rounded bg-orange-500 py-2 text-white hover:bg-amber-700"
              >
                Fazer pedido
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
=======
    <main className="min-h-screen bg-gradient-to-br from-[#021d3a] via-[#063b78] to-[#075dcc] text-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Cabeçalho */}
        <div className="mb-12 text-center">

          {/* Detalhe superior */}
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-white/60" />
            <span className="text-xl text-white">✦</span>
            <span className="h-px w-16 bg-white/60" />
          </div>

          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            🍽️ Sabores especiais
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Nosso <span className="text-blue-200">Cardápio</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Escolha seu prato favorito e aproveite uma experiência
            deliciosa preparada especialmente para você.
          </p>

          {/* Linha decorativa */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-white/50" />
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-px w-20 bg-white/50" />
          </div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">

              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />

              <p className="mt-5 font-medium text-white/80">
                Carregando nosso cardápio...
              </p>

            </div>
          </div>

        ) : produtos.length === 0 ? (

          /* Nenhum produto */
          <div className="rounded-3xl border border-white/20 bg-white/10 p-12 text-center shadow-xl backdrop-blur-sm">

            <div className="text-5xl">🍽️</div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Nenhum produto encontrado
            </h2>

            <p className="mt-2 text-white/60">
              No momento não temos produtos disponíveis.
            </p>

          </div>

        ) : (

          /* Produtos */
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {produtos.map((produto) => (

              <div
                key={produto.id}
                className="group overflow-hidden rounded-3xl border border-white/20 bg-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* Imagem */}
                <div className="relative h-56 overflow-hidden bg-blue-100">

                  <Image
                    src={produto.imagem}
                    alt={produto.descricao}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Efeito sobre imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021d3a]/40 to-transparent" />

                  {/* Categoria */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/30 bg-[#063b78]/90 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur">
                      {produto.categoria}
                    </span>
                  </div>

                </div>

                {/* Conteúdo */}
                <div className="p-5">

                  <h2 className="line-clamp-1 text-xl font-bold text-[#062f5f]">
                    {produto.descricao}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Uma opção deliciosa preparada com ingredientes
                    selecionados.
                  </p>

                  {/* Preço + botão */}
                  <div className="mt-5 flex items-center justify-between gap-3">

                    <div>
                      <span className="text-xs font-medium text-gray-400">
                        A partir de
                      </span>

                      <p className="text-2xl font-extrabold text-[#075dcc]">
                        R$ {Number(produto.preco).toFixed(2)}
                      </p>
                    </div>

                    <button
                      className="rounded-xl bg-[#063b78] px-5 py-3 font-semibold text-white shadow-md transition hover:bg-[#075dcc] active:scale-95"
                    >
                      Pedir
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

        {/* Rodapé do cardápio */}
        {!loading && produtos.length > 0 && (

          <div className="relative mt-16 overflow-hidden rounded-3xl border border-white/20 bg-white/10 px-6 py-12 text-center shadow-xl backdrop-blur-sm">

            {/* Decorações */}
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative z-10">

              <div className="mb-4 text-3xl text-white">
                ✦
              </div>

              <p className="text-2xl font-bold text-white">
                😋 Encontrou o seu favorito?
              </p>

              <p className="mt-2 text-white/60">
                Faça seu pedido e aproveite!
              </p>

              <div className="mx-auto mt-6 h-px w-24 bg-white/40" />

            </div>

          </div>

        )}

      </div>
    </main>
  ) 
>>>>>>> 4dcc556 (codigo atualizado)
}

