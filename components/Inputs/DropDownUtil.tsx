interface DropDownUtilProps {
    dados: any[],
    campoId: string,
    campoDescricao: string,
    idElemento: string,
    textoLabel: string,
    textoPrimeiraOpcao?: string,
    onChange?: (e) => void
}

export default function DropDownUtil(props: DropDownUtilProps) {
    return (
        <div className="flex w-11/12 items-center mt-3">
            <label className="text-blue-600 font-bold pr-2" htmlFor={props.idElemento}>{props.textoLabel}:</label>
            <select id={props.idElemento} onChange={props.onChange} className='block w-full p-1 border-2 border-blue-400 bg-blue-50 rounded-md text-blue-800'>                
                {props.textoPrimeiraOpcao ? (<option value={0}>{props.textoPrimeiraOpcao}</option>) : null}
                {props.dados.map(d => {return <option value={d[props.campoId]}>{d[props.campoDescricao]}</option>})}
            </select>
        </div>
    );
}