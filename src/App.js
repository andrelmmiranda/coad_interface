
import './App.css';
import Header from './components/header';

import { Route, Routes } from 'react-router-dom';
import { Solicitacao } from './components/solicitacao';
import { ListaSolicitao } from './components/listaSolicitacao';



function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={ <Solicitacao /> }/>
          <Route path='listar' element={ <ListaSolicitao /> }/>
        </Routes>
    </div>
  );
}

export default App;
