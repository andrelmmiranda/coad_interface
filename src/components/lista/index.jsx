import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup'

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
        <ul style={{ listStyle: 'none' }}>
            {
                solicitacoes.map(solicitacao => 
                    <li>
                        <Card style={{ width: '100%' }}>
                            <div style={{ display: 'flex', justifyContent: 'right', margin: '10px 10px 0 0'}}>
                                <h5><Badge bg="secondary">Prioridade: { prioridade(solicitacao.date) }</Badge></h5>
                            </div>
                            <Card.Body>
                                <Card.Title>Título: { solicitacao.titulo }</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Tipo: { solicitacao.tipo }</Card.Subtitle>
                                <Card.Text>
                                    { solicitacao.descricao }
                                </Card.Text>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Nome: { solicitacao.nome }</ListGroup.Item>
                                    <ListGroup.Item>Email: { solicitacao.email }</ListGroup.Item>
                                    <ListGroup.Item>Telefone: { solicitacao.telefone }</ListGroup.Item>
                                    <ListGroup.Item>Celular: { solicitacao.celular }</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </li>
                )
            }
        </ul>
    );
}
