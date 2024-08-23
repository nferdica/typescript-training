class Conta {
    private limite: number = 450;
    private aumentarLimit(quatidade: number) {
        if(quatidade < 1000) {
            this.limite = quatidade;
            console.log(`Agora seu limite é: ${this.limite}`)
        }
    }

    solLimit(auth: boolean, quantidade: number) : void | boolean {
        if(auth) {
            this.aumentarLimit(quantidade);
        } else {
            return false;
        }
    }
}

const user = new Conta()
console.log(user)
user.solLimit(true, 900)