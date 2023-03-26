export default class TipoCirurgia{

    #id: number;
    #descricao: string;

    constructor(id: number, descricao: string){
        this.#id = id;
        this.#descricao = descricao;
    }

    get id(){
        return this.#id;
    }

    get descricao(){
        return this.#descricao;
    }

    static jsonToObject(json){
        return new TipoCirurgia(json.id, json.descricao);
    }
}