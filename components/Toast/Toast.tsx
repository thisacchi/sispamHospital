import useToast from '@/data/hook/useToast';
import style from 'components/Toast/Toast.module.css';


export default function Toast() {

    const { className, cor, mensagem } = useToast();

    const bg = {
        'red': 'bg-red-50',
        'green': 'bg-green-50',
        'blue': 'bg-blue-50'
    };

    const border = {
        'red': 'border-l-red-300',
        'green': 'border-l-green-300',
        'blue': 'border-l-blue-300'
    };

    const colorText = {
        'red': 'text-red-600',
        'green': 'text-green-600',
        'blue': 'text-blue-600'
    }

    return (

        <div className={`flex justify-center z-50 absolute w-screen ${style[className]}`}>
            <div className={`w-1/3 relative h-28 
                ${bg[cor]} bg-red-50 rounded-md border-l-2 
                    ${border[cor]} mt-2 `}>
                <div className="flex flex-col">
                    <div className="flex justify-end pr-2">
                        <button>X</button>
                    </div>
                    <div className="text-center">
                        <h3 className={`${colorText[cor]} font-bold`}>{mensagem?.titulo}</h3>
                    </div>
                    <hr />
                    <div className="mt-4 text-center">
                        <p className={`${colorText[cor]}`}>
                            {mensagem?.mensagem}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}