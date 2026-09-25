
"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AdminPage() {
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function cadastrarLanche(e) {
    e.preventDefault();

    const descricaoLimpa = descricao.trim();
    const categoriaLimpa = categoria.trim();
    const imagemLimpa = imagem.trim();
    const precoNumerico = Number(preco.replace(",", "."));

    if (!descricaoLimpa || !categoriaLimpa || !preco.trim()) {
      await Swal.fire({
        title: "Campos obrigatórios",
        text: "Preencha a descrição, categoria e preço.",
        icon: "warning",
        confirmButtonColor: "#d4af6a",
      });
      return;
    }

    if (!Number.isFinite(precoNumerico) || precoNumerico <= 0) {
      await Swal.fire({
        title: "Preço inválido",
        text: "Digite um preço maior que zero.",
        icon: "warning",
        confirmButtonColor: "#d4af6a",
      });
      return;
    }

    // URL da API
    const API_URL =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

    try {
      setCarregando(true);

      const response = await fetch(`${API_URL}/produtos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          descricao: descricaoLimpa,
          categoria: categoriaLimpa,
          preco: precoNumerico,
          imagem: imagemLimpa,
        }),
      });

      // Lê a resposta sem presumir que seja JSON
      const textoResposta = await response.text();

      let dados = null;

      if (textoResposta) {
        try {
          dados = JSON.parse(textoResposta);
        } catch {
          dados = null;
        }
      }

      if (!response.ok) {
        throw new Error(
          dados?.message ||
            `Erro ao cadastrar produto. Status: ${response.status}`
        );
      }

      await Swal.fire({
        title: "Produto cadastrado!",
        text: "O lanche foi adicionado ao cardápio.",
        icon: "success",
        confirmButtonColor: "#d4af6a",
      });

      // Limpa os campos após o cadastro
      setDescricao("");
      setCategoria("");
      setPreco("");
      setImagem("");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);

      let mensagemErro = "Não foi possível cadastrar o produto.";

      if (error instanceof TypeError) {
        mensagemErro =
          "Não foi possível conectar ao servidor. Verifique se o backend está funcionando na porta 3001 e se o CORS está configurado.";
      } else if (error instanceof Error) {
        mensagemErro = error.message;
      }

      await Swal.fire({
        title: "Erro no cadastro",
        text: mensagemErro,
        icon: "error",
        confirmButtonColor: "#d4af6a",
      });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d] text-white">
      <Navbar />

      <div className="px-6 py-12 md:px-10">
        <div className="mx-auto max-w-3xl">
          {/* Cabeçalho */}
          <header className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af6a]">
              Área administrativa
            </p>

            <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
              Cadastrar{" "}
              <span className="text-[#f1d49a]">Lanche</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Adicione um novo produto ao cardápio da Casa do Sabor.
            </p>
          </header>

          {/* Formulário */}
          <div className="overflow-hidden rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/80 shadow-2xl">
            <div className="border-b border-[#d4af6a]/30 px-6 py-6">
              <h2 className="text-lg font-bold text-[#f1d49a]">
                Informações do produto
              </h2>

              <p className="mt-1 text-sm text-white/60">
                Preencha os dados abaixo para cadastrar o lanche.
              </p>
            </div>

            <form
              onSubmit={cadastrarLanche}
              className="space-y-6 p-6 md:p-8"
            >
              {/* Descrição */}
              <div>
                <label
                  htmlFor="descricao"
                  className="mb-2 block font-semibold text-[#f1d49a]"
                >
                  Descrição
                </label>

                <input
                  id="descricao"
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Ex: X-Bacon com salada e carne"
                  maxLength={200}
                  required
                  className="w-full rounded-xl bg-white px-4 py-3 text-[#10251c] outline-none focus:ring-4 focus:ring-[#d4af6a]/40"
                />
              </div>

              {/* Categoria */}
              <div>
                <label
                  htmlFor="categoria"
                  className="mb-2 block font-semibold text-[#f1d49a]"
                >
                  Categoria
                </label>

                <input
                  id="categoria"
                  type="text"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  placeholder="Ex: Hambúrgueres"
                  maxLength={100}
                  required
                  className="w-full rounded-xl bg-white px-4 py-3 text-[#10251c] outline-none focus:ring-4 focus:ring-[#d4af6a]/40"
                />
              </div>

              {/* Preço */}
              <div>
                <label
                  htmlFor="preco"
                  className="mb-2 block font-semibold text-[#f1d49a]"
                >
                  Preço (R$)
                </label>

                <input
                  id="preco"
                  type="text"
                  inputMode="decimal"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  placeholder="Ex: 25,90"
                  required
                  className="w-full rounded-xl bg-white px-4 py-3 text-[#10251c] outline-none focus:ring-4 focus:ring-[#d4af6a]/40"
                />
              </div>

              {/* Imagem */}
              <div>
                <label
                  htmlFor="imagem"
                  className="mb-2 block font-semibold text-[#f1d49a]"
                >
                  Imagem (link)
                </label>

                <input
                  id="imagem"
                  type="url"
                  value={imagem}
                  onChange={(e) => setImagem(e.target.value)}
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="w-full rounded-xl bg-white px-4 py-3 text-[#10251c] outline-none focus:ring-4 focus:ring-[#d4af6a]/40"
                />

                <p className="mt-2 text-xs text-white/50">
                  Insira o link de uma imagem do produto.
                </p>
              </div>

              {/* Pré-visualização */}
              {imagem.trim() && (
                <div className="rounded-2xl border border-[#d4af6a]/30 bg-[#183d2b] p-4">
                  <p className="mb-3 font-semibold text-[#f1d49a]">
                    Pré-visualização
                  </p>

                  <img
                    src={imagem.trim()}
                    alt={descricao.trim() || "Imagem do produto"}
                    className="h-56 w-full rounded-xl object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.display = "block";
                    }}
                  />
                </div>
              )}

              {/* Botão */}
              <button
                type="submit"
                disabled={carregando}
                className="w-full rounded-xl bg-[#d4af6a] px-5 py-4 font-bold text-[#10251c] transition hover:bg-[#f1d49a] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {carregando
                  ? "Cadastrando..."
                  : "Cadastrar Lanche"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}