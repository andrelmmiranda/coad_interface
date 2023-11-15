import { createContext, useState } from "react";

export const SolicitacaoContext = createContext();

export const SolicitacaoProvider = ({ children })=>{
    const [ solicitacoes, setSolicitacoes ] = useState([]);

    function addSolicitacao(solicitacao){
        setSolicitacoes([ 
            ...solicitacoes, solicitacao 
        ]);
    }

    return(
        <SolicitacaoContext.Provider value={{ solicitacoes, addSolicitacao }}>
            { children }
        </SolicitacaoContext.Provider>
    );
}