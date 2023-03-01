export default class UsuarioResponse{

    #id: number;
    #token: string | null;

    constructor(id: number, token = ''){
        this.#id = id;
        this.#token = token;

        if (this.#token)
            localStorage.setItem('token', this.#token);
        else if (localStorage.getItem('token'))
            this.#token = localStorage.getItem('token');
    }

    get token(){
        return this.#token;
    }

    static toObject(jsonResponse: any): UsuarioResponse{

        return new UsuarioResponse(jsonResponse.id, jsonResponse.token);
    }
}