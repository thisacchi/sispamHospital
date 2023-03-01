import Retorno from "../Geral/Retorno";
import UsuarioResponse from "./UsuarioResponse";

export default class RetornoUsuario extends Retorno{

    #usuario: UsuarioResponse;

    constructor(sucesso: boolean, usuario: UsuarioResponse = new UsuarioResponse(0), mensagemErro: string = ''){
        super(sucesso, mensagemErro);

        this.#usuario = usuario;
    }

    static RetornoSucesso(usuario: UsuarioResponse){
        return new RetornoUsuario(true, usuario);
    }

    static RetornoComErro(mensagemErro: string){
        return new RetornoUsuario(false, new UsuarioResponse(0), mensagemErro);
    }

    get usuario(){
        return this.#usuario;
    }
}