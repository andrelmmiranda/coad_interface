import { data } from '../../utils/data';

export class Solicitacao{
    constructor({ titulo, tipo, descricao, nome, email, telefone, celular }){
        this.id = new Date().getTime();
        this.titulo = titulo;
        this.tipo = tipo;
        this.descricao = descricao;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.celular = celular;
        this.date = data();
    }
}
