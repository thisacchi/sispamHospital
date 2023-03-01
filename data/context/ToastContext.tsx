import ToastMensagem from "@/model/Toast/ToastMensagem";
import { createContext, useState } from "react"

interface ToastContextProps {    
    toastVisivel?: boolean,
    mostrarToast?: (mostrar: boolean, mensagem: ToastMensagem, type: 'success' | 'info' | 'error') => void,
    className?: 'iniciarNoTopo' | 'mostrarToast' | 'esconderToast',
    cor?: 'blue' | 'red' | 'green',
    mensagem?: ToastMensagem
}

const ToastContext = createContext<ToastContextProps>({});

export function ToastProvider(props) {

    const [toastVisivel, setToastVisivel] = useState(false);
    const [className, setClassName] = useState<'iniciarNoTopo' | 'mostrarToast' | 'esconderToast'>('iniciarNoTopo');
    const [cor, setCor] = useState<'blue' | 'red' | 'green'>('green');
    const [mensagem, setMensagem] = useState<ToastMensagem>(null);

    function mostrarToast(mostrar: boolean, mensagem: ToastMensagem, type: 'success' | 'info' | 'error' = 'success') {

        switch(type){
            case 'success':
                setCor('green');
                break;
            case 'info':
                setCor('blue');
                break;
            case 'error':
                setCor('red');
                break;
        }
        setMensagem(mensagem);        
        setToastVisivel(mostrar);
        setClassName(mostrar ? 'mostrarToast' : 'esconderToast');

        if (mostrar){

            setTimeout(() => {
                setToastVisivel(false);
                setClassName('esconderToast');
            }, 2000);
        }

    }

    return (
        <ToastContext.Provider value={{
            mostrarToast,
            toastVisivel,
            className,
            cor,
            mensagem
            
        }}>
            {props.children}
        </ToastContext.Provider>
    );

}

export default ToastContext;