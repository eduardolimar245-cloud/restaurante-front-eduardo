



import { useState } from "react";

export default function Cadastro() {

    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
     const [senha,setSenha] = useState("");
     
     function cadastrar() {
        console.log("Usuario cadastrado com sucesso!");

     }

     return (
        <form onSubmit={cadastrar}>
            <input type="text" 
            placeholder="Nome..."
            onChange={(e) => setNome(e.target.value)}
            />

            <input type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            />

            <input type="password"
            placeholder="Senha..."
            onChange={(e) => setSenha(e.target.value)}
            />


            </form>
     )
    }
