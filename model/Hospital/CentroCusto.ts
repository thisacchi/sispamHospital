export default class CentroCusto{

    #codigo: string;
    #descricao: string;

    constructor(codigo: string, descricao: string){
        this.#codigo = codigo;
        this.#descricao = descricao;
    }

    get codigo(){
        return this.#codigo;
    }

    get descricao(){
        return this.#descricao;
    }

    static jsonToObject(json){
        return new CentroCusto(json.codigo, json.descricao);
    }

    
}