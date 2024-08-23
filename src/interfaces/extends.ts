interface IJogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: IJogoProps = {
    id: '1',
    nome: 'Left 4 Dead',
    descricao: 'Jogo de ação',
    plataforma: ['PC', 'Console']
}

console.log(left4dead)

interface IDlc extends IJogoProps {
    jogoOriginal: IJogoProps;
    novoConteudo: string[];
}

const left4deadDlc : IDlc = {
    id: '90',
    nome: 'Novos mapas',
    descricao: '4 novos mapas',
    plataforma: ['Android', 'Apple'],
    novoConteudo: ['Cooperativo', 'Competitivo'],
    jogoOriginal: left4dead,
}

console.log(left4deadDlc)