import RetornoUsuario from "./RetornoUsuario";
import UsuarioResponse from "./UsuarioResponse";

export default class UsuarioRequest{

    #login: string;
    #senha: string;

    constructor(login: string, senha: string){
        this.#login = login;
        this.#senha = senha;
    }

    toJson(){
        return {
            login: this.#login,
            senha: this.#senha
        }
    }

    async autenticar(){

        const header = new Headers();
        header.append('Content-Type', 'application/json');

        try{

            const response = await fetch('https://homologacao.spdmpais.org.br/ApiSispamHospitais/Usuarios/Login', {
                headers: header,
                method: 'POST',
                body: JSON.stringify(this.toJson())
            });
    
            if (response.status == 200){
                const json = await response.json();
                const usuario = UsuarioResponse.toObject(json);
                return RetornoUsuario.RetornoSucesso(usuario);
            }
            else{
                const json = await response.json();
                return RetornoUsuario.RetornoComErro(json.mensagemErro);
            }
        }
        catch (error){
            return RetornoUsuario.RetornoComErro('Não foi possível autenticar-se!');
        }
    }
}