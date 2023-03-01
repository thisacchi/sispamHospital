import { createContext, useState } from "react"

interface SpinnerContextProps{
    visivel?: boolean,
    mostrarSpinner?: (mostrar: boolean) => void
}

const SpinnerContext = createContext<SpinnerContextProps>({});

export function SpinnerProvider(props){
    const [visivel, setVisisel] = useState(false);

    function mostrarSpinner(mostrar: boolean) {
        setVisisel(mostrar);
    }

    return (
        <SpinnerContext.Provider value={{
            visivel,
            mostrarSpinner
        }}>
            {props.children}
        </SpinnerContext.Provider>
    )

}

export default SpinnerContext;