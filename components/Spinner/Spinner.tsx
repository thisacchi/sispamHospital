
import useSpinner from "@/data/hook/useSpinner";
import Image from "next/image";

export default function Spinner(){

    const {visivel} = useSpinner();

    return (
        visivel ? (
        <div className="h-screen w-screen z-50 flex justify-center items-center absolute">
            <Image src={'/Spinner/Rolling-1s-200px.gif'} alt="Gif de Spinner" width={100} height={100}>
                
            </Image>
            
        </div>) : null
    );
}