export default class Menu{

    #texto: string;
    #link: string;

    constructor(texto: string, link: string){
        this.#texto = texto;
        this.#link = link;
    }

    get texto(){
        return this.#texto;
    }

    get link(){
        return this.#link;
    }

    static async getMenusApi(): Promise<Menu[]>{
        const response = await fetch('api/menus');
        const json = await response.json();

        return json.map(m => {
            return new Menu(m.texto, m.link);
        })
    }

}