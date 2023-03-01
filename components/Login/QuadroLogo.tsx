import Image from "next/image";


export default function QuadroLogo(){

    return (
        <div className="w-3/5">
            <div className={`flex flex-col justify-evenly items-center  
            h-screen border-r border-gray-300 border-solid`}>
                <div>
                    <h3 className={`
                        text-4xl text-blue-400 font-bold
                    `}>SISPAM HOSPITAIS</h3>
                </div>
                <Image src={`/Login/logo_SPDM.png`} alt="Logo do login" width={300} height={300}></Image>
            </div>
        </div>
    );
}