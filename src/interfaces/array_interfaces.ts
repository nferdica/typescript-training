interface ITecProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface INomesProps {
    tecnologia: ITecProps[]
}

let frontend: INomesProps = {
    tecnologia: [
        { id: '1', nome: 'TypeScript', descricao: 'Fortemente tipada'},
        { id: '2', nome: 'React', descricao: 'Framework frontend'}
    ]
}

console.log(frontend.tecnologia)
