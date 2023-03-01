import useAuth from "@/data/hook/useAuth";

interface BotaoLoginProps{
    descricao: string;
}

export default function BotaoLogin(props: BotaoLoginProps){

    const {carregando} = useAuth();

    return (
        <div className={`px-3 flex justify-end mt-2`}>
            <button className={`flex
                bg-gradient-to-b from-blue-400 to-blue-500
                hover:from-blue-400 hover:to-blue-300
                p-3 rounded-sm text-white font-bold disabled:from-blue-100 disabled:to-blue-200
            `} disabled={carregando}>
                {carregando ? 'Carregando...' : props.descricao}
            </button>
        </div>
    );
}