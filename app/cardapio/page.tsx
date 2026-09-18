"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Produto {
  id: number;
  descricao: string;
  categoria: string;
  preco: number;
  imagem: string;
}

export default function CardapioPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  async function mostrarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/produtos");

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    mostrarProdutos();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#d4af6a]/70" />
            <span className="text-xl text-[#f1d49a]">✦</span>
            <span className="h-px w-16 bg-[#d4af6a]/70" />
          </div>

          <span className="inline-block rounded-full border border-[#d4af6a]/40 bg-white/10 px-5 py-2 text-sm font-semibold text-[#f1d49a] backdrop-blur-sm">
            Sabores especiais
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Nosso <span className="text-[#f1d49a]">Cardápio</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Escolha seu prato favorito e aproveite uma experiência
            deliciosa preparada especialmente para você.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-20 bg-[#d4af6a]/60" />
            <span className="h-2 w-2 rounded-full bg-[#f1d49a]" />
            <span className="h-px w-20 bg-[#d4af6a]/60" />
          </div>
        </div>

        {/* Carregamento */}
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#d4af6a]/20 border-t-[#f1d49a]" />

              <p className="mt-5 font-medium text-white/80">
                Carregando nosso cardápio...
              </p>
            </div>
          </div>
        ) : produtos.length === 0 ? (
          /* Nenhum produto */
          <div className="rounded-3xl border border-[#d4af6a]/40 bg-white/10 p-12 text-center shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white">
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
                className="group overflow-hidden rounded-3xl border border-[#d4af6a]/40 bg-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Imagem */}
                <div className="relative h-56 overflow-hidden bg-[#e8d5ad]">
                  <Image
                    src={produto.imagem}
                    alt={produto.descricao}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#10251c]/50 to-transparent" />

                  {/* Categoria */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-[#f1d49a]/50 bg-[#10251c]/90 px-3 py-1.5 text-xs font-bold text-[#f1d49a] shadow-lg backdrop-blur">
                      {produto.categoria}
                    </span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <h2 className="line-clamp-1 text-xl font-bold text-[#10251c]">
                    {produto.descricao}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Uma opção deliciosa preparada com ingredientes
                    selecionados.
                  </p>

                  {/* Preço e botão */}
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-medium text-gray-400">
                        A partir de
                      </span>

                      <p className="text-2xl font-extrabold text-[#28583d]">
                        R$ {Number(produto.preco).toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl bg-[#10251c] px-5 py-3 font-semibold text-[#f1d49a] shadow-md transition hover:bg-[#28583d] active:scale-95"
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
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#d4af6a]/40 bg-white/10 px-6 py-12 text-center shadow-xl backdrop-blur-sm">
            <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[#d4af6a]/20" />

            <div className="absolute -bottom-20 -right-16 h-48 w-48 rounded-full border border-[#d4af6a]/20" />

            <div className="relative z-10">
              <div className="mb-4 text-3xl text-[#f1d49a]">✦</div>

              <p className="text-2xl font-bold text-white">
                Encontrou o seu favorito?
              </p>

              <p className="mt-2 text-white/60">
                Faça seu pedido e aproveite!
              </p>

              <div className="mx-auto mt-6 h-px w-24 bg-[#d4af6a]/60" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}