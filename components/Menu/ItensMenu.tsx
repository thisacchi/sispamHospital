import Menu from "@/model/Menu/Menu";
import Link from "next/link";

interface ItensMenuProps{
    itens: Menu[]
}

export default function ItensMenu(props: ItensMenuProps){

    return (
        <ul className="flex ">
            {props.itens.map((i, ind) => {
                return <li className="text-blue-500 font-bold hover:text-blue-400"><Link href={i.link}>{i.texto}</Link>{(ind + 1) == props.itens.length ? null : <span className="mx-2">|</span>}</li>
            })}
        </ul>
    );
}