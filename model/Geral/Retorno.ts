export default class Retorno{
    
    #sucesso: boolean;
    #mensagemErro: string;

    constructor(sucesso: boolean, mensagemErro: string = ''){
        this.#sucesso = sucesso;
        this.#mensagemErro = mensagemErro;
    }

    get sucesso()
    {
        return this.#sucesso;
    }

    get mensagemErro(){
        return this.#mensagemErro;
    }
}