import { HTMLInputTypeAttribute } from "react";

interface InputUtilProps {
    idElemento: string,
    textoLabel: string,
    type: HTMLInputTypeAttribute,
    onChange?: (e) => void
}

export default function InputUtil(props: InputUtilProps) {
    return (
        <div className="flex w-11/12 mt-3 items-center">
            <label className="text-blue-600 font-bold pr-2"  htmlFor={props.idElemento}>{props.textoLabel}:</label>
            <input onChange={props.onChange} className="block w-full px-1 border-2 border-blue-400 bg-blue-50 rounded-md text-blue-800" id={props.idElemento} type={props.type}></input>
        </div>

    );
}