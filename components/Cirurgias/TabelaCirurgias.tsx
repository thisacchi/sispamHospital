import Cirurgia from "@/model/Cirurgia/Cirurgia";

interface TabelaCirurgiasProps {
    cirurgias: Cirurgia[],
    mostrarMensagemFiltro: boolean
}

export default function TabelaCirurgias(props: TabelaCirurgiasProps) {
    return (
        <div className="flex mt-3">
            {props.cirurgias.length ? (
                <table className="rounded-3xl">
                    <thead>
                        <tr className="bg-gradient-to-t from-blue-200 to-blue-300 text-blue-600 font-bold">
                            <th>#</th>
                            <th>Especialidade</th>
                            <th>Tipo da Cirurgia</th>
                            <th>Data da Entrada</th>
                            <th>Data da Liberação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.cirurgias.map((c, i) => {
                            return (
                                <tr className={`text-center bg-gradient-to-t from-blue-50 to-blue-100`}>
                                    <td>{c.id}</td>
                                    <td>{c.especialidade.descricao}</td>
                                    <td>{c.tipoCirurgia.descricao}</td>
                                    <td>{new Date(Date.parse(`${c.dataEntrada.split('-')[1]}-${c.dataEntrada.split('-')[0]}-${c.dataEntrada.split('-')[2]}`)).toLocaleDateString()}</td>
                                    <td>{new Date(Date.parse(`${c.dataLiberacao.split('-')[1]}-${c.dataLiberacao.split('-')[0]}-${c.dataLiberacao.split('-')[2]}`)).toLocaleDateString()}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                props.mostrarMensagemFiltro ? (
                    <div className="flex justify-center w-full mt-4">
                        <div className="w-11/12 border border-blue-400 p-4 rounded-md bg-blue-100 text-center">
                            <p className="text-blue-400 font-bold">Não existem dados com o filtro selecionado!</p>
                        </div>
                    </div>
                ) : null
            )}

        </div>
    );
}