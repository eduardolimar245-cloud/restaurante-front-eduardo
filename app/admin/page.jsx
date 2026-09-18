"use client"

import Navbar from "@/components/Navbar"
import { useState,
 } from "react"
import Swal from "sweetalert2"

export default function AdminPage() {
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const [preco, setPreco] = useState("")
    const [imagem, setImagem] = useState("")
    const [carregando, setCarregando] = useState(false)

<<<<<<< HEAD
    async function cadastrarLanche() {
=======
    async function cadastrarLanche(e) {
>>>>>>> 4dcc556 (codigo atualizado)
        e.preventDefault()

        const descricaoLimpa = descricao.trim()
        const categoriaLimpa = categoria.trim()
        const imagemLimpa = imagem.trim()
        const precoNumerico = Number(preco)

        // Validação dos campos obrigatórios
        if (!descricaoLimpa || !categoriaLimpa || !preco.trim()) {
            await Swal.fire({
                title: "Campos obrigatórios",
                text: "Preencha descrição, categoria e preço.",
                icon: "warning",
                confirmButtonText: "Entendi",
                confirmButtonColor: "#dc2626",
            })

            return
        }

        // Validação do preço
        if (!Number.isFinite(precoNumerico) || precoNumerico <= 0) {
            await Swal.fire({
                title: "Preço inválido",
                text: "Informe um preço válido maior que zero.",
                icon: "warning",
                confirmButtonText: "Entendi",
                confirmButtonColor: "#dc2626",
            })

            return
        }

        try {
            setCarregando(true)

            const response = await fetch("http://localhost:3001/produtos", {
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
            })

            if (!response.ok) {
                let mensagemErro = "Erro ao cadastrar produto."

                try {
                    const dadosErro = await response.json()

                    if (dadosErro?.message) {
                        mensagemErro = dadosErro.message
                    }
                } catch {
                    // A API pode não retornar JSON em caso de erro.
                }

                throw new Error(mensagemErro)
            }

            await Swal.fire({
                title: "Produto cadastrado!",
                text: "O lanche foi adicionado ao cardápio com sucesso.",
                icon: "success",
                confirmButtonText: "Ok",
                confirmButtonColor: "#16a34a",
            })

            // Limpa o formulário
            setDescricao("")
            setCategoria("")
            setPreco("")
            setImagem("")
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error)

            const mensagem =
                error instanceof Error
                    ? error.message
                    : "Não foi possível cadastrar o produto."

            await Swal.fire({
                title: "Erro",
                text: mensagem,
                icon: "error",
                confirmButtonText: "Entendi",
                confirmButtonColor: "#dc2626",
            })
        } finally {
            setCarregando(false)
        }
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="px-6 py-10 md:px-10">
                <div className="mx-auto max-w-3xl">
                    {/* Cabeçalho */}
                    <header className="mb-8">
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
                            <span
                                aria-hidden="true"
                                className="h-2 w-2 rounded-full bg-red-600"
                            />

                            Área administrativa
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                            Cadastrar Lanche
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Adicione um novo produto ao seu cardápio.
                        </p>
                    </header>

                    {/* Formulário */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        {/* Cabeçalho do formulário */}
                        <div className="border-b border-slate-100 bg-gradient-to-r from-red-50 to-white px-6 py-5 md:px-8">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 shadow-sm">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <h2 className="font-bold text-slate-900">
                                        Informações do produto
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Preencha os dados abaixo para cadastrar o lanche.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form
                            onSubmit={cadastrarLanche}
                            className="space-y-6 p-6 md:p-8"
                        >
                            {/* Descrição */}
                            <div>
                                <label
                                    htmlFor="descricao"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Descrição
                                </label>

                                <input
                                    id="descricao"
                                    name="descricao"
                                    type="text"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    placeholder="Ex: X-Bacon com salada e carne"
                                    required
                                    maxLength={200}
                                    autoComplete="off"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                />
                            </div>

                            {/* Categoria */}
                            <div>
                                <label
                                    htmlFor="categoria"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Categoria
                                </label>

                                <input
                                    id="categoria"
                                    name="categoria"
                                    type="text"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                    placeholder="Ex: Hambúrgueres"
                                    required
                                    maxLength={100}
                                    autoComplete="off"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                />
                            </div>

                            {/* Preço */}
                            <div>
                                <label
                                    htmlFor="preco"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Preço
                                </label>

                                <div className="relative">
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400"
                                    >
                                        R$
                                    </span>

                                    <input
                                        id="preco"
                                        name="preco"
                                        type="number"
                                        step="0.01"
                                        min="0.01"
                                        inputMode="decimal"
                                        value={preco}
                                        onChange={(e) => setPreco(e.target.value)}
                                        placeholder="0.00"
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                    />
                                </div>
                            </div>

                            {/* Imagem */}
                            <div>
                                <label
                                    htmlFor="imagem"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Imagem
                                </label>

                                <input
                                    id="imagem"
                                    name="imagem"
                                    type="url"
                                    value={imagem}
                                    onChange={(e) => setImagem(e.target.value)}
                                    placeholder="https://exemplo.com/imagem.jpg"
                                    maxLength={1000}
                                    autoComplete="url"
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-100"
                                />

                                <p className="mt-2 text-xs text-slate-400">
                                    Insira o link da imagem do produto.
                                </p>
                            </div>

                            {/* Preview */}
                            {imagem.trim() && (
                                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                                    <div className="border-b border-slate-200 px-4 py-3">
                                        <p className="text-sm font-semibold text-slate-700">
                                            Pré-visualização
                                        </p>
                                    </div>

                                    <div className="p-4">
                                        <img
                                            src={imagem.trim()}
                                            alt={`Pré-visualização de ${
                                                descricao.trim() || "produto"
                                            }`}
                                            className="h-48 w-full rounded-xl object-cover"
                                            onError={(e) => {
                                                e.currentTarget.style.display = "none"
                                            }}
                                            onLoad={(e) => {
                                                e.currentTarget.style.display = "block"
                                            }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Botão */}
                            <button
                                type="submit"
                                disabled={carregando}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:shadow-md active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {carregando ? (
                                    <>
                                        <svg
                                            className="h-5 w-5 animate-spin"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />

                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />
                                        </svg>

                                        Cadastrando...
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 4v16m8-8H4"
                                            />
                                        </svg>

                                        Cadastrar Lanche
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
