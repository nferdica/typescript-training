function cadastro(email: string, senha: string, nome?: string, idade?: number): void {
    let date = {
        email, senha, nome, idade
    }

    console.log(date)
}

cadastro('teste@teste.com', 'nferdica')