import CentroCusto from "./CentroCusto";

export default class Hospital {

    #id: number;
    #descricao: string;
    #setor: CentroCusto;

    constructor(id: number, descricao: string, setor: CentroCusto = null) {
        this.#id = id;
        this.#descricao = descricao;
        this.#setor = setor;
    }

    static async getHospitaisByApi(): Promise<Hospital[]> {
        const headers = new Headers();
        const token = localStorage.getItem('token');

        if (token) {
            headers.append('Authorization', `Bearer ${token}`);

            const response = await fetch('https://homologacao.spdmpais.org.br/ApiSispamHospitais/Hospitais', {
                headers,
                method: 'GET'
            });

            if (response.status == 200) {
                const json = await response.json();
                const hospitais = json.map(h => new Hospital(h.id, h.descricao));
                return hospitais;
            }
        }


        return [];
    }

    static jsonToObject(json){
        return new Hospital(json.id, json.descricao, CentroCusto.jsonToObject(json.centroCustoSetor));
    }

    get id() {
        return this.#id;
    }

    get descricao() {
        return this.#descricao;
    }

}