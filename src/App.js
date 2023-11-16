
import './App.css';
import Header from './components/header';

import { Route, Routes } from 'react-router-dom';
import { Solicitacao } from './components/solicitacao';
import { ListaSolicitao } from './components/listaSolicitacao';
import { SolicitacaoProvider } from './context/solicitacaoContext';


function App() {
  return (
    <div >
        <Header />
          <SolicitacaoProvider>
          <Routes>
            <Route path='/' element={ <Solicitacao /> }/>
            <Route path='listar' element={ <ListaSolicitao /> }/>
          </Routes>
        </SolicitacaoProvider>
    </div>
  );
}

export default App;
