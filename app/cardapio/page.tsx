"use client";

import Navbar from "@/components/Navbar";
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
  const [erro, setErro] = useState("");

  async function mostrarProdutos() {
    try {
      setLoading(true);
      setErro("");

      const response = await fetch(`${process.env.API_URL}/produtos`, {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const data = await response.json();

      console.log("Produtos recebidos:", data);

      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);

      setErro(
        error instanceof Error
          ? error.message
          : "Não foi possível carregar os produtos."
      );
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
        <header className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#d4af6a]/70" />
            <span className="text-xl text-[#f1d49a]">✦</span>
            <span className="h-px w-16 bg-[#d4af6a]/70" />
          </div>

          <span className="inline-block rounded-full border border-[#d4af6a]/40 bg-white/10 px-5 py-2 text-sm font-semibold text-[#f1d49a]">
            Sabores especiais
          </span>

          <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Nosso <span className="text-[#f1d49a]">Cardápio</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Escolha seu prato favorito e aproveite uma experiência deliciosa
            preparada especialmente para você.
          </p>
        </header>

        {/* Carregamento */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#d4af6a]/20 border-t-[#f1d49a]" />

              <p className="mt-5 text-white/80">
                Carregando nosso cardápio...
              </p>
            </div>
          </div>
        )}

        {/* Erro */}
        {!loading && erro && (
          <div className="rounded-3xl border border-red-400/40 bg-red-500/10 p-10 text-center">
            <h2 className="text-2xl font-bold">
              Erro ao carregar produtos
            </h2>

            <p className="mt-3 text-white/70">{erro}</p>

            <button
              type="button"
              onClick={mostrarProdutos}
              className="mt-6 rounded-xl bg-[#d4af6a] px-6 py-3 font-bold text-[#10251c] hover:bg-[#f1d49a]"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Nenhum produto */}
        {!loading && !erro && produtos.length === 0 && (
          <div className="rounded-3xl border border-[#d4af6a]/40 bg-white/10 p-12 text-center">
            <h2 className="text-2xl font-bold">
              Nenhum produto encontrado
            </h2>

            <p className="mt-3 text-white/60">
              No momento não temos produtos disponíveis.
            </p>
          </div>
        )}

        {/* Lista de produtos */}
        {!loading && !erro && produtos.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="group overflow-hidden rounded-3xl border border-[#d4af6a]/40 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Imagem */}
                <div className="relative h-56 overflow-hidden bg-[#e8d5ad]">
                  {produto.imagem ? (
                    <img
                      src={produto.imagem}
                      alt={produto.descricao}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[#10251c]">
                      Sem imagem
                    </div>
                  )}

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-[#f1d49a]/50 bg-[#10251c]/90 px-3 py-1.5 text-xs font-bold text-[#f1d49a]">
                      {produto.categoria}
                    </span>
                  </div>
                </div>

                {/* Informações */}
                <div className="p-5">
                  <h2 className="truncate text-xl font-bold text-[#10251c]">
                    {produto.descricao}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Uma opção deliciosa preparada com ingredientes selecionados.
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-gray-400">
                        A partir de
                      </span>

                      <p className="text-2xl font-extrabold text-[#28583d]">
                        R${" "}
                        {Number(produto.preco)
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="rounded-xl bg-[#10251c] px-5 py-3 font-semibold text-[#f1d49a] transition hover:bg-[#28583d] active:scale-95"
                    >
                      Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Rodapé */}
        {!loading && !erro && produtos.length > 0 && (
          <div className="mt-16 rounded-3xl border border-[#d4af6a]/40 bg-white/10 px-6 py-12 text-center">
            <div className="mb-4 text-3xl text-[#f1d49a]">✦</div>

            <p className="text-2xl font-bold">
              Encontrou o seu favorito?
            </p>

            <p className="mt-2 text-white/60">
              Faça seu pedido e aproveite!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}