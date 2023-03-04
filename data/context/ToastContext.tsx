import ToastMensagem from "@/model/Toast/ToastMensagem";
import { createContext, useState } from "react"

interface ToastContextProps {    
    toastVisivel?: boolean,
    mostrarToast?: (mostrar: boolean, mensagem: ToastMensagem, type: 'success' | 'info' | 'error') => void,
    className?: 'iniciarNoTopo' | 'mostrarToast' | 'esconderToast',
    cor?: 'blue' | 'red' | 'green',
    mensagem?: ToastMensagem,
    fecharToast?: () => void
}

const ToastContext = createContext<ToastContextProps>({});

export function ToastProvider(props) {

    const [toastVisivel, setToastVisivel] = useState(false);
    const [className, setClassName] = useState<'iniciarNoTopo' | 'mostrarToast' | 'esconderToast'>('iniciarNoTopo');
    const [cor, setCor] = useState<'blue' | 'red' | 'green'>('green');
    const [mensagem, setMensagem] = useState<ToastMensagem>(null);
    const [tmo, setTmo] = useState<NodeJS.Timeout>(null);

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

          let timeOut = setTimeout(() => {
                setToastVisivel(false);
                setClassName('esconderToast');
            }, 2500);

            setTmo(timeOut);
        }

    }

    function fecharToast(){
        setClassName('iniciarNoTopo');
        clearTimeout(tmo);
        setTmo(tmo);
    }


    return (
        <ToastContext.Provider value={{
            mostrarToast,
            toastVisivel,
            className,
            cor,
            mensagem,
            fecharToast
            
        }}>
            {props.children}
        </ToastContext.Provider>
    );

}

export default ToastContext;