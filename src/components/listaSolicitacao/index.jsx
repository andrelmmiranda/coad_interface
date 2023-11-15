import { useContext } from "react";
import { Container } from "react-bootstrap";
import { SolicitacaoContext } from '../../context/solicitacaoContext';

export function ListaSolicitao(){
    const { solicitacoes } = useContext(SolicitacaoContext);
    return(
      <Container>
        <Lista items={ solicitacoes } />
      </Container>
    )
}