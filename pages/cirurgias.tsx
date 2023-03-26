import GraficoCirurgias from "@/components/Cirurgias/GraficoCirurgias";
import TabelaCirurgias from "@/components/Cirurgias/TabelaCirurgias";
import Conteudo from "@/components/Conteudo/Conteudo";
import DropDownUtil from "@/components/Inputs/DropDownUtil";
import InputUtil from "@/components/Inputs/InputUtil";
import useAuth from "@/data/hook/useAuth";
import useSpinner from "@/data/hook/useSpinner";
import Cirurgia from "@/model/Cirurgia/Cirurgia";
import Hospital from "@/model/Hospital/Hospital";
import { useEffect, useState } from "react";
import { Chart } from 'react-google-charts';

export default function Cirurgias() {

    /* States */
    const [hospitais, setHospitais] = useState<Hospital[]>([]);
    const [idHosptal, setIdHospital] = useState<number>(0);
    const [periodo, setPeriodo] = useState<string>('');
    const [cirurgias, setCirurgias] = useState<Cirurgia[]>([]);
    const [mostrarMensagem, setMostrarMensagem] = useState<boolean>(false);

    /* Hooks */
    const { logout, tokenValido } = useAuth();
    const { mostrarSpinner } = useSpinner();

    async function carregarHospitais() {
        const hospitais = await Hospital.getHospitaisByApi();

        if (hospitais.length)
            setHospitais(hospitais);
        else
            logout();
    }

    useEffect(() => {
        carregarHospitais();
    }, []);

    async function carregarCirurgias(idHosptal, periodo) {

        if (idHosptal && periodo) {

            if (tokenValido()) {
                mostrarSpinner(true);
                const cirurgias = await Cirurgia.getCirurgiasByApi(periodo, idHosptal);
                setCirurgias(cirurgias);
                mostrarSpinner(false);
            }
            else {
                logout();
            }

        }


    }

    return (
        <Conteudo titulo="Cirúrgias">
            <section className="w-1/2 border-r border-black h-screen p-2">
                <div className="flex flex-col items-center">
                    <DropDownUtil
                        dados={hospitais}
                        textoLabel="Hospital"
                        campoId="id"
                        campoDescricao="descricao"
                        idElemento="ddlHospital"
                        textoPrimeiraOpcao="Selecione um Hospital..."
                        onChange={e => { setIdHospital(+e.target.value); carregarCirurgias(+e.target.value, periodo); setMostrarMensagem(+e.target.value != 0 && periodo != ''); }}></DropDownUtil>
                    <InputUtil
                        idElemento="txtPeriodo"
                        textoLabel="Período"
                        type={'month'}
                        onChange={e => { setPeriodo(e.target.value); carregarCirurgias(idHosptal, e.target.value); setMostrarMensagem(e.target.value != '' && idHosptal != 0); }}></InputUtil>
                </div>
                <TabelaCirurgias cirurgias={cirurgias} mostrarMensagemFiltro={mostrarMensagem}></TabelaCirurgias>
            </section>
            <section className="w-1/2 h-screen">
                <GraficoCirurgias cirurgias={cirurgias}></GraficoCirurgias>
            </section>
        </Conteudo>
    );
}