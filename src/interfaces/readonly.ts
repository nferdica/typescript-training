interface IProdutoProps {
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: IProdutoProps = {
    id: '1',
    nome: 'Tenis Nike',
    descricao: 'Preto'
}

console.log(produto1)