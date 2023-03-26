import Menu from "@/model/Menu/Menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItensMenu from "./ItensMenu";
import { IconLogout } from "../Icons/Icons";
import useAuth from "@/data/hook/useAuth";
import Spinner from "../Spinner/Spinner";

export default function BarraMenu() {

    const [menus, setMenus] = useState<Menu[]>([]);

    const {logout} = useAuth();

    async function carregarMenus() {
        const menusApi = await Menu.getMenusApi();
        setMenus(menusApi);
    }

    useEffect(() => {
        carregarMenus();
    }), [];

    return (
        <div className={`w-full bg-gradient-to-r from-blue-100 to-blue-200 py-4 pl-3 flex justify-center`}>
            <Spinner></Spinner>
            <div className="w-full px-4 flex items-center justify-between">
                <div>
                    <Image src={'/Logo/Logo_Horizontal.png'} alt="Logo da SPDM" width={100} height={100}></Image>
                </div>
                <div className="flex">
                    <div className="mr-10">
                        <ItensMenu itens={menus}></ItensMenu>
                    </div>
                    <div className="text-right w-full">
                        <a className="flex cursor-pointer hover:text-white" onClick={logout}>
                            {IconLogout()} Sair
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );

}