type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info = {
    id: 1,
    nome: 'Sapato',
    descricao: 'Sapato de couro'
}

type Categoria = {
    slug: string;
    qtdProduto: number;
}

const categoriaOne : Categoria = {
    slug: 'Calçados',
    qtdProduto: 2
}

type ProdutoInfo = Info & Categoria;

const novoProduto: ProdutoInfo = {
    id: 22,
    nome: 'Teclado',
    slug: 'Teclado mecanico',
    qtdProduto: 10,
}