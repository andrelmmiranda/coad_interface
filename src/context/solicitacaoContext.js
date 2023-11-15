import { useContext, useState } from "react";

export const SolicitacaoContext = useContext();

export const solicitacaoProvider = ({ children })=>{
    const [ solicitacoes, setSolicitacoes ] = useState([]);

    function addSolicitacao(solicitacao){
        setSolicitacoes(solicitacao);
    }

    return(
        <SolicitacaoContext.Provider value={{ solicitacoes, addSolicitacao }}>
            { children }
        </SolicitacaoContext.Provider>
    )
}