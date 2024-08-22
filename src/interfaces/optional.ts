interface ICadastroProps {
    nome?: string;
    email: string;
    status: boolean;
}

const newUser: ICadastroProps = {
    email: 'nathan@teste.com',
    status: true,
}

console.log(newUser);

function newClient({nome, email, status}: ICadastroProps) : void {
    console.log(nome)
    console.log(`Este cliente está ${status}`)
}

newClient({nome: 'Mercadão', email: 'mercadao@teste.com', status: true})