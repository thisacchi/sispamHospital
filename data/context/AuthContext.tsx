import RetornoUsuario from "@/model/Usuario/RetornoUsuario";
import UsuarioRequest from "@/model/Usuario/UsuarioRequest";
import UsuarioResponse from "@/model/Usuario/UsuarioResponse";
import { createContext, useState } from "react"
import useSpinner from "../hook/useSpinner";
import Router from "next/router";
import jwt_decode from 'jwt-decode';

interface AuthContextProps{
    autenticar?: (login: string, senha: string) => Promise<RetornoUsuario>,
    carregando?: boolean,
    usuario?: UsuarioResponse,
    logout?: () => void,
    tokenValido?: () => boolean
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any){
    const [carregando, setCarregando] = useState(false);
    const [usuario, setUsuario] = useState<UsuarioResponse>(null);
    const {mostrarSpinner} = useSpinner();


    async function autenticar(login: string, senha: string): Promise<RetornoUsuario>{

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        try{
            setCarregando(true);
            mostrarSpinner(true);
            const usuarioRequest = new UsuarioRequest(login, senha);
            const response = await fetch('https://homologacao.spdmpais.org.br/ApiSispamHospitais/Usuarios/Login', {
                headers,
                method: 'POST',
                body: JSON.stringify(usuarioRequest.toJson())
            });

            if (response.status == 200){
                const json = await response.json();
                const usuario = UsuarioResponse.toObject(json);
                setUsuario(usuario);                
                return RetornoUsuario.RetornoSucesso(usuario);
            }
            else{
                const json = await response.json();   
                return RetornoUsuario.RetornoComErro(json.mensagem);
            }
        }
        catch(error){            
            return RetornoUsuario.RetornoComErro('Não foi possível se autenticar');
        }
        finally{
            setCarregando(false);
            mostrarSpinner(false);
        }
    }

    function logout(){
        setUsuario(null);
        localStorage.removeItem('token');
        Router.push('/');
    }

    function tokenValido(){

        if (usuario?.token){
            const decode = jwt_decode(usuario.token);
            const segundos = decode['exp'];
            const tempo = segundos * 1000;

            const data = new Date(tempo);
            const dataAtual = new Date(Date.now());

            return data > dataAtual;

        }
        else{
            return false;
        }
    }

    return(
        <AuthContext.Provider value={{
            usuario,
            carregando,
            autenticar,
            logout,
            tokenValido
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext