let loja: object;

loja = {
    nome: 'Bar',
    endereco: 'Rua velha',
    status: true
}

console.log(loja)

interface ILojaProps {
    nome: string;
    endereco: string;
    status: boolean;
}

const BurguerK: ILojaProps = {
    nome: 'Burguer K',
    endereco: 'Rua nova',
    status: true,
}

console.log(BurguerK);

function novaLoja({nome, endereco, status}: ILojaProps): void {
    console.log(`Loja ${nome} criada com sucesso!`)
    console.log(`Endereço: ${endereco}`)
    if(status === true) {
        console.log('A loja esta aberta!')
    } else {
        console.log('A loja esta fechada!')
    }
}

novaLoja({ nome: 'MasterKing', endereco: 'Avenida das Palmeiras', status: false })