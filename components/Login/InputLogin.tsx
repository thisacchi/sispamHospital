interface InputLoginProps {
    textoLabel: string;
    type: 'text' | 'password';
    value: string;
    onChange: (valor: string) => void;
    valorValido: boolean;
    mensagemValidacao?: string;
    placeholder?: string;

}

export default function InputLogin(props: InputLoginProps) {
    return (
        <div className={`px-3 mb-4`}>
            <div className="mb-2">
                <label className={`text-blue-600 font-bold`}>{`${props.textoLabel}:`}</label>
            </div>
            <div>
                <input type={props.type} className={`block w-full border border-solid ${props.valorValido ? 'border-black' : 'border-red-500'}
                                                    px-2 py-1 rounded`} placeholder={props?.placeholder} value={props.value} onChange={e => props.onChange(e.target.value)}></input>
            </div>
            <div>
                {props.valorValido ? null : (
                    <span className="text-xs text-red-600 font-bold">{`*${props?.mensagemValidacao}`}</span>
                )}
            </div>
        </div>
    );
}