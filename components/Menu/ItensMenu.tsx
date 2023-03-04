import Menu from "@/model/Menu/Menu";

interface ItensMenuProps{
    itens: Menu[]
}

export default function ItensMenu(props: ItensMenuProps){
    return (
        <ul className="flex ">
            {props.itens.map((i, ind) => {
                return <li className="text-blue-500 font-bold"><a>{i.texto}</a>{(ind + 1) == props.itens.length ? null : <span className="mx-2">|</span>}</li>
            })}
        </ul>
    );
}