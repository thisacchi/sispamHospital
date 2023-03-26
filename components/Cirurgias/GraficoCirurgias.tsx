import Cirurgia from '@/model/Cirurgia/Cirurgia';
import { Chart } from 'react-google-charts';

interface GraficoCirurgiaProps {
    cirurgias: Cirurgia[]
}

export default function GraficoCirurgias(props: GraficoCirurgiaProps) {

    function carregarDadosGraficosPizza() {

        const dadosUnicos: string[] = [];
        const matrizDados: (string | number)[][] = [];
        const tituloGrafico: string[] = ["Cirurgias", "Quantidade Por Mês"];       


        const dados = props.cirurgias.map(c => {
            return `${c.especialidade.descricao}`;
        });

        dados.forEach(d => {

            const indice = dadosUnicos.indexOf(`${d}`);

            if (indice == -1)
                dadosUnicos.push(d);
        });

        dadosUnicos.forEach(d => {

            const filtro = dados.filter(f => { return f == d });

            matrizDados.push([d, filtro.length]);
        });

        const matrizUnica: any[] = [tituloGrafico];

        matrizDados.forEach(d => matrizUnica.push(d));
        return matrizUnica;
    }

    function carregarDadosGraficoBarra(){

        const titulo: string[] = ["Período"];
        const dadosUnicos: string[] = [];
        const arrayDados: (string | number)[] = [props.cirurgias[0].periodo];

        const dados = props.cirurgias.map(c => {
            return `${c.tipoCirurgia.descricao}`;
        });

        dados.forEach(d => {

            const indice = dadosUnicos.indexOf(`${d}`);

            if (indice == -1){
                dadosUnicos.push(d);
                titulo.push(d);
            }
        });

        dadosUnicos.forEach(d => {
            const filtro = dados.filter(f => {return d == f});
            arrayDados.push(filtro.length);
        });

        const matrizDados: any[] = [titulo, arrayDados];
        
        return matrizDados;
    };

    

    return (
            
                props.cirurgias.length ? (
                    <div className='flex flex-col items-center justify-center px-2'>
                        <Chart
                            chartType='PieChart'
                            data={carregarDadosGraficosPizza()}
                            options={{ title: "Nº Cirurgias no mês por Especialidade" }}
                            width={"100%"}
                            height={"400px"}
                        ></Chart>
                        <hr/>
                        <Chart
                            chartType='Bar'
                            width={"80%"}
                            height={"400px"}
                            data={carregarDadosGraficoBarra()}
                            options={{
                                chart:{
                                    title: "Nº de Tipo de Círurgias no Período"
                                }
                            }}
                        ></Chart>
                    </div>
                ) : null
            
    );
}