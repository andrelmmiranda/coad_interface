export function data(){
    const date = new Date();
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear();

    return `${ano}-${mes}-${dia}`;
}