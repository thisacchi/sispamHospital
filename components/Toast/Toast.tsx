import useToast from '@/data/hook/useToast';
import style from 'components/Toast/Toast.module.css';


export default function Toast() {

    const { className, cor, mensagem } = useToast();
    console.log(cor);

    return (

        <div className={`flex justify-center z-50 absolute w-screen ${style[className]}`}>
            <div className={`w-1/3 relative h-28 
                bg-${cor}-50 bg-red-50 rounded-md border-l-2 
                    border-l-${cor}-300 mt-2 `}>
                <div className="flex flex-col">
                    <div className="flex justify-end pr-2">
                        <button>X</button>
                    </div>
                    <div className="text-center">
                        <h3 className={`text-${cor}-600 font-bold`}>{mensagem?.titulo}</h3>
                    </div>
                    <hr />
                    <div className="mt-4 text-center">
                        <p className={`text-${cor}-600`}>
                            {mensagem?.mensagem}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}