
import './App.css';
import Header from './components/header';

import { Route, Routes } from 'react-router-dom';

function Solicitacao(){
  return(
    <h1>Página de solicitação</h1>
  )
}

function ListaSolicitao(){
  return(
    <h1>Página de listagem</h1>
  )
}

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
