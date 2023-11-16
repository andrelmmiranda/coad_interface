import { useContext, useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { SolicitacaoContext } from '../../context/solicitacaoContext';

export function Paginacao() {
    const { solicitacoes } = useContext(SolicitacaoContext);
    const [ pag, setPag ] = useState([]);

    const nPaginas = Math.ceil(solicitacoes.length / 10);
    
    useEffect(()=>{
        const items = [];
        for(let i = 1; i <= nPaginas; i++){
            items.push(
                <Pagination.Item 
                    key={i} 
                    active={ i === 1 ? true : false }
                    onClick={ (e)=> activate(e) }
                >
                    {i}
                </Pagination.Item>
            );
        }
        setPag(items);
    }, []);

    function activate(e){
        const n = (e.target.innerHTML).split('')[0];

        const nodeList = document.querySelectorAll('.pagination .page-item');

        nodeList.forEach(element => {
            element.classList.contains('active') &&
                element.classList.remove('active');
        });

        const li = e.target.parentElement;
        li.classList.add('active');
    }   

    return (    
        <Pagination>    
            { pag }
        </Pagination>
    );
}