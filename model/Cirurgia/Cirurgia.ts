import Hospital from "../Hospital/Hospital";
import EspecialidadeCirurgica from "./EspecialidadeCirurgica";
import TipoCirurgia from "./TipoCirurgia";

export default class Cirurgia{

    #id: number;
    #periodo: string;
    #dataEntrada: string;
    #dataLiberacao: string;
    #especialidade: EspecialidadeCirurgica;
    #tipoCirurgia: TipoCirurgia;
    #hospital: Hospital;

    constructor(id: number, periodo: string, dataEntrada: string, dataLiberacao: string,
        especialidade: EspecialidadeCirurgica, tipoCirurgia: TipoCirurgia, hospital: Hospital){
            this.#id = id;
            this.#periodo = periodo;
            this.#dataEntrada = dataEntrada;
            this.#dataLiberacao = dataLiberacao;
            this.#especialidade = especialidade;
            this.#tipoCirurgia = tipoCirurgia;
            this.#hospital = hospital;
        }

    get id(){
        return this.#id;
    }

    get periodo(){
        return this.#periodo;
    }

    get dataEntrada(){
        return this.#dataEntrada;
    }

    get dataLiberacao(){
        return this.#dataLiberacao;
    }

    get especialidade(){
        return this.#especialidade;
    }

    get tipoCirurgia(){
        return this.#tipoCirurgia;
    }

    get hospital(){
        return this.#hospital;
    }

    static async getCirurgiasByApi(periodo: string, idHospital: number): Promise<Cirurgia[]>{

        const token = localStorage.getItem('token');
        let retorno: Cirurgia[] = [];
        let endpoint = 'https://homologacao.spdmpais.org.br/ApiSispamHospitais/Cirurgias';

        if (periodo)
            endpoint = `${endpoint}?Periodo=${`${periodo.split('-')[1]}-${periodo.split('-')[0]}`}`;

        if (token){

            const headers = new Headers();
            headers.append('Authorization', `Bearer ${token}`);

            const response = await fetch(endpoint, {
                headers,
                method: 'GET'
            });

            console.log(endpoint);
            if (response.status == 200){
                const json = await response.json();

                retorno = json.map(c => {

                    let especialidade = EspecialidadeCirurgica.jsonToObject(c.especialidadeCirurgica);
                    let tipoCirurgia = TipoCirurgia.jsonToObject(c.tipoCirurgia);
                    let hospital = Hospital.jsonToObject(c.hospital);

                    return new Cirurgia(c.id, c.periodo, c.dataEntrada, c.dataLiberacao,
                        especialidade, tipoCirurgia, hospital);
                });

                if (idHospital){
                    return retorno.filter(c => {return c.hospital.id == idHospital});
                }
                else
                    return retorno;
                
            }
        }

        return retorno;
    }

}