class Jogo {
    private servidor: string;
    private id: string = '1';

    constructor(servidor: string) {
        this.servidor = servidor;
    }
    
    get getServidorIp() {
        console.log('Método GET')
        return this.servidor;
    }

    set setServidorIp(newIp: string) {
        this.servidor = newIp;
    }
}

const newGame = new Jogo('192.0.0.0.1');
console.log(newGame.getServidorIp);
newGame.setServidorIp = '199.1.1.0.1';
console.log(newGame.getServidorIp)
