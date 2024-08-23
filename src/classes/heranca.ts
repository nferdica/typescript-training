class User {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}

class Admin extends User {
    cargo: string;
    nivel: number;

    constructor(cargo: string, nivel: number, nome: string, email: string) {
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}

const userOne = new Admin('Diretor', 1, 'Nathan Ferdinando', 'nathan@teste.com')
console.log(userOne)