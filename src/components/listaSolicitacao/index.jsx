import { useContext } from "react";
import { Container } from "react-bootstrap";
import { SolicitacaoContext } from '../../context/solicitacaoContext';

import { Lista } from '../lista';
import { Paginacao } from "../paginacao";

export function ListaSolicitao(){
    const { solicitacoes } = useContext(SolicitacaoContext);
    return(
      <Container>
        <Lista solicitacoes={ solicitacoes } />
        <Paginacao />
      </Container>
    )
}