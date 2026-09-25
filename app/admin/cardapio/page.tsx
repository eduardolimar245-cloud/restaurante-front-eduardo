
"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";
import Swal from "sweetalert2";

interface Produto {
  id: number;
  descricao: string;
  categoria: string;
  preco: number;
  imagem: string;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;

export default function CardapioAdmin() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [cadastrando, setCadastrando] = useState(false);

  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");

  // ==============================
  // CARREGAR PRODUTOS
  // ==============================
  async function carregarProdutos() {
    try {
      const response = await fetch(`${API_URL}/produtos`);

      if (!response.ok) {
        throw new Error(
          `Erro ao buscar produtos: ${response.status}`
        );
      }

      const data: Produto[] = await response.json();

      setProdutos(data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);

      await Swal.fire({
        title: "Erro",
        text: "Não foi possível carregar os produtos. Verifique se o servidor está funcionando.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    } finally {
      setCarregando(false);
    }
  }

  // ==============================
  // CADASTRAR PRODUTO
  // ==============================
  async function cadastrarProduto(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (
      !descricao.trim() ||
      !categoria ||
      !preco ||
      !imagem.trim()
    ) {
      await Swal.fire({
        title: "Atenção",
        text: "Preencha todos os campos antes de cadastrar.",
        icon: "warning",
        confirmButtonColor: "#d4af6a",
      });

      return;
    }

    const precoNumerico = Number(preco.replace(",", "."));

    if (
      !Number.isFinite(precoNumerico) ||
      precoNumerico <= 0
    ) {
      await Swal.fire({
        title: "Preço inválido",
        text: "Informe um preço válido maior que zero.",
        icon: "warning",
        confirmButtonColor: "#d4af6a",
      });

      return;
    }

    setCadastrando(true);

    try {
      const response = await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          descricao: descricao.trim(),
          categoria,
          preco: precoNumerico,
          imagem: imagem.trim(),
        }),
      });

      if (!response.ok) {
        const mensagem = await response.text();

        throw new Error(
          mensagem || `Erro ao cadastrar: ${response.status}`
        );
      }

      // Limpar os campos
      setDescricao("");
      setCategoria("");
      setPreco("");
      setImagem("");

      // Atualizar a lista de produtos
      await carregarProdutos();

      await Swal.fire({
        title: "Sucesso!",
        text: "Produto cadastrado com sucesso.",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);

      await Swal.fire({
        title: "Erro ao cadastrar",
        text:
          error instanceof Error
            ? error.message
            : "Não foi possível cadastrar o produto.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    } finally {
      setCadastrando(false);
    }
  }

  // ==============================
  // EXCLUIR PRODUTO
  // ==============================
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
        `${API_URL}/produtos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erro ao excluir produto: ${response.status}`
        );
      }

      setProdutos((produtosAtuais) =>
        produtosAtuais.filter(
          (produto) => produto.id !== id
        )
      );

      await Swal.fire({
        title: "Produto excluído",
        text: "O produto foi excluído com sucesso.",
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    } catch (error) {
      console.error("Erro ao excluir produto:", error);

      await Swal.fire({
        title: "Erro",
        text:
          error instanceof Error
            ? error.message
            : "Não foi possível excluir o produto.",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#d4af6a",
      });
    }
  }

  // ==============================
  // CARREGAR AO ABRIR A PÁGINA
  // ==============================
  useEffect(() => {
    carregarProdutos();
  }, []);

  // ==============================
  // TELA DE CARREGAMENTO
  // ==============================
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

  // ==============================
  // PÁGINA PRINCIPAL
  // ==============================
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d] px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">

        {/* CABEÇALHO */}
        <header className="mb-12 text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#d4af6a]/70" />
            <span className="text-xl text-[#f1d49a]">
              ✦
            </span>
            <span className="h-px w-16 bg-[#d4af6a]/70" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af6a]">
            Administração
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Gerenciar{" "}
            <span className="text-[#f1d49a]">
              Cardápio
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Cadastre, visualize e gerencie todos os produtos
            cadastrados no restaurante.
          </p>
        </header>

        {/* FORMULÁRIO DE CADASTRO */}
        <section className="mx-auto mb-16 max-w-3xl rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/70 p-6 shadow-2xl backdrop-blur-md sm:p-10">
          <h2 className="mb-6 text-2xl font-bold text-[#f1d49a]">
            Cadastrar novo produto
          </h2>

          <form
            onSubmit={cadastrarProduto}
            className="space-y-5"
          >
            {/* DESCRIÇÃO */}
            <div>
              <label
                htmlFor="descricao"
                className="mb-2 block text-sm font-semibold text-white/80"
              >
                Descrição do produto
              </label>

              <input
                id="descricao"
                type="text"
                value={descricao}
                onChange={(e) =>
                  setDescricao(e.target.value)
                }
                placeholder="Ex.: Hambúrguer artesanal"
                required
                className="w-full rounded-xl border border-[#d4af6a]/30 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#f1d49a]"
              />
            </div>

            {/* CATEGORIA */}
            <div>
              <label
                htmlFor="categoria"
                className="mb-2 block text-sm font-semibold text-white/80"
              >
                Categoria
              </label>

              <select
                id="categoria"
                value={categoria}
                onChange={(e) =>
                  setCategoria(e.target.value)
                }
                required
                className="w-full rounded-xl border border-[#d4af6a]/30 bg-[#183d2b] px-4 py-3 text-white outline-none focus:border-[#f1d49a]"
              >
                <option value="">
                  Selecione uma categoria
                </option>
                <option value="Hambúrgueres">
                  Hambúrgueres
                </option>
                <option value="Pizzas">
                  Pizzas
                </option>
                <option value="Bebidas">
                  Bebidas
                </option>
                <option value="Porções">
                  Porções
                </option>
                <option value="Sobremesas">
                  Sobremesas
                </option>
                <option value="Outros">
                  Outros
                </option>
              </select>
            </div>

            {/* PREÇO */}
            <div>
              <label
                htmlFor="preco"
                className="mb-2 block text-sm font-semibold text-white/80"
              >
                Preço (R$)
              </label>

              <input
                id="preco"
                type="number"
                step="0.01"
                min="0.01"
                value={preco}
                onChange={(e) =>
                  setPreco(e.target.value)
                }
                placeholder="Ex.: 25.90"
                required
                className="w-full rounded-xl border border-[#d4af6a]/30 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#f1d49a]"
              />
            </div>

            {/* IMAGEM */}
            <div>
              <label
                htmlFor="imagem"
                className="mb-2 block text-sm font-semibold text-white/80"
              >
                URL da imagem
              </label>

              <input
                id="imagem"
                type="url"
                value={imagem}
                onChange={(e) =>
                  setImagem(e.target.value)
                }
                placeholder="https://exemplo.com/imagem.jpg"
                required
                className="w-full rounded-xl border border-[#d4af6a]/30 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#f1d49a]"
              />
            </div>

            {/* BOTÃO CADASTRAR */}
            <button
              type="submit"
              disabled={cadastrando}
              className="w-full rounded-xl bg-[#d4af6a] px-6 py-4 font-bold text-[#10251c] transition hover:bg-[#f1d49a] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {cadastrando
                ? "Cadastrando produto..."
                : "Cadastrar produto"}
            </button>
          </form>
        </section>

        {/* QUANTIDADE DE PRODUTOS */}
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

        {/* LISTAGEM */}
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
                {/* IMAGEM */}
                <div className="relative h-56 w-full overflow-hidden bg-[#e8d5ad]">
                  {produto.imagem ? (
                    <Image
                      src={produto.imagem}
                      alt={produto.descricao}
                      fill
                      unoptimized
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm font-medium text-[#28583d]">
                        Sem imagem
                      </p>
                    </div>
                  )}

                  {/* CATEGORIA */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#10251c]/90 px-4 py-1.5 text-xs font-semibold text-[#f1d49a] backdrop-blur-md">
                    {produto.categoria}
                  </div>
                </div>

                {/* INFORMAÇÕES */}
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
                      R${" "}
                      {Number(produto.preco)
                        .toFixed(2)
                        .replace(".", ",")}
                    </p>
                  </div>

                  {/* EXCLUIR */}
                  <button
                    type="button"
                    onClick={() =>
                      excluirProduto(produto.id)
                    }
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