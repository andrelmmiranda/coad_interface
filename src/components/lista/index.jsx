import Table from 'react-bootstrap/Table';

export function Lista({ solicitacoes }){

    function prioridade(date){
        const diffTimeStamp = (Date.now() - new Date(date).getTime());
        const diff = Math.ceil(diffTimeStamp / (1000 * 3600 * 24)) - 1;

        if(diff > 2)
            return 'Alta';
        else if(diff > 0)
            return 'Média';
        else
            return 'Baixa';
    }

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Requisitante</th>
                    <th>Prioridade</th>
                </tr>
            </thead>
            <tbody>
                {
                    solicitacoes.map(solicitacao => 
                        <tr>
                            <td>{ solicitacao.titulo }</td>
                            <td>{ solicitacao.nome }</td>
                            <td>{ prioridade(solicitacao.date) }</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    );
}
