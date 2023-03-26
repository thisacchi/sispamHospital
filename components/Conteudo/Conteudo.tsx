import BarraMenu from "../Menu/BarraMenu";

interface ConteudoProps {
    titulo: string,
    children: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className="h-screen">
            <BarraMenu></BarraMenu>
            <main className="mt-10">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-blue-400">{props.titulo}</h1>
                    <hr/>
                </div>
                <div className="mt-3 flex">
                    {props.children}
                </div>
            </main>
        </div>
    );

}