import Menu from "@/model/Menu/Menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItensMenu from "./ItensMenu";
import { IconLogout } from "../Icons/Icons";

export default function BarraMenu() {

    const [menus, setMenus] = useState<Menu[]>([]);

    async function carregarMenus() {
        const menusApi = await Menu.getMenusApi();
        setMenus(menusApi);
    }

    useEffect(() => {
        carregarMenus();
    }), [];

    return (
        <div className={`w-full bg-gradient-to-r from-blue-200 to-blue-300 py-4 pl-3 flex justify-center`}>
            <div className="w-full px-4 flex items-center justify-between">
                <div>
                    <Image src={'/Logo/Logo_Horizontal.png'} alt="Logo da SPDM" width={100} height={100}></Image>
                </div>
                <div className="flex">
                    <div className="mr-10">
                        <ItensMenu itens={menus}></ItensMenu>
                    </div>
                    <div className="text-right w-full">
                        <a className="flex">
                            {IconLogout()} Sair
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );

}