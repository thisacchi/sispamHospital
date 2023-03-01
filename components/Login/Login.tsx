import QuadroLogin from "./QuadroLogin";
import QuadroLogo from "./QuadroLogo";

export default function Login(){
    return (
        <div className={`flex h-screen w-full`}>
            <QuadroLogo></QuadroLogo>
            <QuadroLogin></QuadroLogin>
        </div>
    );
}