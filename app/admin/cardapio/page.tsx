"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Produto {
  id: number;
  descricao: string;
  categoria: string;
  preco: number;
  imagem: string;
}

export default function CardapioAdmin() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);

  async function carregarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/produtos");

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error(error);

      await Swal.fire({
        title: "Erro",
        text: "Não foi possível carregar os produtos",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    } finally {
      setCarregando(false);
    }
  }

  async function excluirProduto(id: number) {
    const resultado = await Swal.fire({
      title: "Excluir produto?",
      text: "Essa ação não poderá ser desfeita.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
    });

    if (!resultado.isConfirmed) {
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/produtos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao excluir o produto");
      }

      setProdutos((produtosAtuais) =>
        produtosAtuais.filter((produto) => produto.id !== id)
      );

      await Swal.fire({
        title: "Produto excluído",
        text: "O produto foi excluído com sucesso.",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    } catch (error) {
      console.error(error);

      await Swal.fire({
        title: "Erro",
        text: "Não foi possível excluir o produto.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  if (carregando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d]">
        <div className="rounded-2xl border border-[#d4af6a]/30 bg-[#10251c]/70 px-10 py-6 shadow-2xl backdrop-blur-md">
          <p className="text-lg font-semibold text-[#f1d49a]">
            Carregando produtos...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#d4af6a]/70" />
            <span className="h-px w-6 bg-[#d4af6a]/70" />
            <span className="h-px w-16 bg-[#d4af6a]/70" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af6a]">
            Administração
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Gerenciar{" "}
            <span className="text-[#f1d49a]">Cardápio</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Visualize e gerencie todos os produtos cadastrados no restaurante.
          </p>
        </div>

        {/* Quantidade de produtos */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full border border-[#d4af6a]/40 bg-[#10251c]/60 px-6 py-2 backdrop-blur-md">
            <span className="text-sm text-white/70">
              Produtos cadastrados:{" "}
            </span>

            <span className="font-bold text-[#f1d49a]">
              {produtos.length}
            </span>
          </div>
        </div>

        {produtos.length === 0 ? (
          <div className="rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/70 p-12 text-center shadow-2xl backdrop-blur-md">
            <h2 className="text-2xl font-bold text-[#f1d49a]">
              Nenhum produto cadastrado
            </h2>

            <p className="mt-3 text-white/60">
              Os produtos adicionados aparecerão aqui.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtos.map((produto) => (
              <div
                key={produto.id}
                className="group overflow-hidden rounded-3xl border border-[#d4af6a]/40 bg-white shadow-2xl transition duration-300 hover:-translate-y-2 hover:shadow-[#d4af6a]/20"
              >
                {/* Imagem */}
                <div className="relative h-56 w-full overflow-hidden bg-[#e8d5ad]">
                  {produto.imagem ? (
                    <Image
                      src={produto.imagem}
                      alt={produto.descricao}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm font-medium text-[#28583d]">
                        Sem imagem
                      </p>
                    </div>
                  )}

                  {/* Categoria */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#10251c]/90 px-4 py-1.5 text-xs font-semibold text-[#f1d49a] backdrop-blur-md">
                    {produto.categoria}
                  </div>
                </div>

                {/* Informações */}
                <div className="p-6">
                  <h2 className="line-clamp-2 text-xl font-bold text-[#10251c]">
                    {produto.descricao}
                  </h2>

                  <div className="my-4 h-px bg-[#d4af6a]/30" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      Preço
                    </span>

                    <p className="text-2xl font-extrabold text-[#28583d]">
                      R$ {Number(produto.preco).toFixed(2)}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => excluirProduto(produto.id)}
                    className="mt-6 w-full rounded-xl bg-red-600 px-4 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-red-700 hover:shadow-lg active:scale-[0.98]"
                  >
                    Excluir Produto
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}