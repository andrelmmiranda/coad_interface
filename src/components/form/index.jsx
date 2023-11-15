import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { Solicitacao } from '../../models/solicitacao';
import { data } from '../../utils/data';

import './form.css';
import { useContext, useEffect, useState } from 'react'; 
import { SolicitacaoContext } from '../../context/solicitacaoContext';

export function FormularioSolicitacao() {
    const [ date, setDate ] = useState(undefined);
    const [ input, setInput ] = useState({});

    const { solicitacoes, addSolicitacao } = useContext(SolicitacaoContext);

    useEffect(()=>{
        setDate(data());
    }, [ date ]);

    function handleInput(e){
        const { value, name } = e.target;

        setInput({
            ...input, [name]: value
        });
    }

    function clear(){
        setInput({ titulo: '', tipo: '', descricao: '', nome: '', email: '', telefone: '', celular: '' });
    }

    function handleSubmit(e){
        e.preventDefault();
        addSolicitacao(new Solicitacao(input));
        clear();
    }

    return (
        <Form className='pt-4 pb-5'>
            <div className='deslocamentoDate'>
                <Form.Control 
                    type='date' 
                    className='date'
                    value={ date }
                    disabled
                >
                </Form.Control>
            </div>  

            <h3 className='mt-3 mb-4'>Dados da Solicitação</h3>
            
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridTitulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Insira o título da solicitação"
                        name='titulo'
                        value={ input.titulo }
                        onChange={ (e)=> handleInput(e) }
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formGridTipo'>
                    <Form.Label>Tipo</Form.Label>
                    <Form.Select 
                        aria-label="valor_padrao" 
                        type="text"
                        name='tipo'
                        value={ input.tipo }
                        onChange={ (e)=> handleInput(e) }
                    >
                        <option >Escolha o tipo de solicitação</option>
                        <option value="contabil">Contábil</option>
                        <option value="juridica">Jurídica</option>
                        <option value="trabalhista">Trabalhista</option>
                        <option value="outros">Outros</option>
                    </Form.Select>  
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridDescricao">
                <Form.Label>Descrição da Solicitação</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows="5" 
                    aria-label="textarea" 
                    type='text' 
                    placeholder='Insira a descrição da solicitação'
                    name='descricao'
                    value={ input.descricao }
                    onChange={ (e)=> handleInput(e) }
                />
            </Form.Group>

            <hr className='mt-5 mb-4'/>
            <h3 className='mt-3 mb-4'>Dados do Ciente</h3>

            <Form.Group className="mb-3" controlId="formGridNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder="Insira o seu nome"
                    name='nome'
                    value={ input.nome }
                    onChange={ (e)=> handleInput(e) } 
                />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={ Col } xs={6} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email' 
                        placeholder='johndoe@mail.com'
                        name='email'
                        value={ input.email }
                        onChange={ (e)=> handleInput(e) }
                    />
                </Form.Group>

                <Form.Group as={ Col } controlId="formGridTelefone">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control 
                        type='phone' 
                        placeholder='xx xxxx-xxxx'
                        name='telefone'
                        value={ input.telefone }
                        onChange={ (e)=> handleInput(e) }
                    />
                </Form.Group>

                <Form.Group as={ Col } controlId="formGridCelular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control 
                        type='phone' 
                        placeholder='xx x xxxx-xxxx'
                        name='celular'
                        value={ input.celular }
                        onChange={ (e)=> handleInput(e) }
                    />
                </Form.Group>
            </Row>

            <Button 
                variant="primary" 
                type="submit" 
                onClick={ (e)=> handleSubmit(e) }
            >
                Enviar
            </Button>
        </Form>
    );
}