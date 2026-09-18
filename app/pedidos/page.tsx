"use client";

import Image from "next/image";

export default function Pedidos() {
  async function cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Produto cadastrado com sucesso!");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#10251c] via-[#183d2b] to-[#28583d] p-6">
      <form
        onSubmit={cadastrar}
        className="grid w-full max-w-lg gap-4 rounded-3xl border border-[#d4af6a]/40 bg-[#10251c]/90 p-8 shadow-2xl backdrop-blur-sm"
      >
        <Image
          src="/imagemNova.png"
          alt="Logotipo Casa do Sabor"
          width={200}
          height={200}
          className="mx-auto mb-4 object-contain"
        />

        <h1 className="text-center text-3xl font-bold text-[#f1d49a]">
          Fazer Pedido
        </h1>

        <input
          type="text"
          placeholder="Digite a descrição..."
          className="w-full rounded-xl border border-[#d4af6a]/40 bg-white px-4 py-3 text-sm text-[#10251c] outline-none transition focus:border-[#d4af6a] focus:ring-2 focus:ring-[#d4af6a]/40"
          required
        />

        <input
          type="number"
          placeholder="Digite o preço..."
          step="0.01"
          className="w-full rounded-xl border border-[#d4af6a]/40 bg-white px-4 py-3 text-sm text-[#10251c] outline-none transition focus:border-[#d4af6a] focus:ring-2 focus:ring-[#d4af6a]/40"
          required
        />

        <input
          type="text"
          placeholder="Digite a categoria..."
          className="w-full rounded-xl border border-[#d4af6a]/40 bg-white px-4 py-3 text-sm text-[#10251c] outline-none transition focus:border-[#d4af6a] focus:ring-2 focus:ring-[#d4af6a]/40"
          required
        />

        <select
          className="w-full rounded-xl border border-[#d4af6a]/40 bg-white px-4 py-3 text-sm text-[#10251c] outline-none transition focus:border-[#d4af6a] focus:ring-2 focus:ring-[#d4af6a]/40"
          required
          defaultValue=""
        >
          <option value="" disabled>
            O lanche está disponível?
          </option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>

        <button
          type="submit"
          className="w-full cursor-pointer rounded-xl bg-[#d4af6a] px-4 py-3 font-semibold text-[#10251c] shadow-sm transition hover:bg-[#f1d49a]"
        >
          Finalizar Pedido
        </button>
      </form>
    </main>
  );
}