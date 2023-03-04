import useAuth from "@/data/hook/useAuth";
import useToast from "@/data/hook/useToast";
import ToastMensagem from "@/model/Toast/ToastMensagem";
import UsuarioRequest from "@/model/Usuario/UsuarioRequest";
import route from "next/router";
import { useEffect, useState } from "react";
import BotaoLogin from "./BotaoLogin";
import InputLogin from "./InputLogin";

export default function QuadroLogin() {

    const [loginValido, setLoginValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(true);

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const { autenticar } = useAuth();
    const {mostrarToast} = useToast();

    async function logar() {

        setLoginValido(login ? true : false);
        setSenhaValida(senha ? true : false);

        if (loginValido && senhaValida) {

            const retorno = await autenticar(login, senha);

            if (retorno.sucesso) {
                route.push('inicio');
            }
            else {                
                mostrarToast(true, new ToastMensagem('Erro ao Autenticar', retorno.mensagemErro), 'error');
                setSenha('');
            }
        }

    }

    return (
        <div className="w-2/5">

            <form onSubmit={e => { e.preventDefault(); logar()}}>
                <div className={`flex flex-col h-screen justify-center`}>
                    <InputLogin textoLabel="CPF" type="text" placeholder="Digite o seu login" valorValido={loginValido} mensagemValidacao="Necessário preencher com o login!" value={login} onChange={setLogin}></InputLogin>
                    <InputLogin textoLabel="Senha" type="password" placeholder="Digite a senha" valorValido={senhaValida} mensagemValidacao="Necessário preencher a senha!" value={senha} onChange={setSenha}></InputLogin>
                    <BotaoLogin descricao="Entrar"></BotaoLogin>
                </div>
            </form>


        </div>
    )
}