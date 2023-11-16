import { createContext, useEffect, useState } from "react";

export const SolicitacaoContext = createContext();

export const SolicitacaoProvider = ({ children })=>{
    const [ solicitacoes, setSolicitacoes ] = useState([]);
    const [ numeroPagina, setNumeroPagina ] = useState(1);
    const [ items, setItems ] = useState([]);

    function addSolicitacao(solicitacao){
        setSolicitacoes([ 
            ...solicitacoes, solicitacao 
        ]);
    }

    function paginate(n){
        setNumeroPagina(n);
        const fim = 10 * numeroPagina;
        const inicio = fim - 10;

        setItems(solicitacoes.slice(inicio, fim));
    }

    return(
        <SolicitacaoContext.Provider value={{ solicitacoes, addSolicitacao }}>
            { children }
        </SolicitacaoContext.Provider>
    );
}