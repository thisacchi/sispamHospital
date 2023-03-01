export default class ToastMensagem{
    #titulo: string;
    #mensagem: string;

    constructor(titulo: string, mensagem: string){
        this.#titulo = titulo;
        this.#mensagem = mensagem;
    }

    get titulo(){
        return this.#titulo;
    }

    get mensagem(){
        return this.#mensagem;
    }

}