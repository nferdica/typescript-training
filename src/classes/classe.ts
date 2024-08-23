class Loja{
    nome: string;
    categoria: string;
    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(): void {
        console.log(`Loja: ${this.nome}`)
        console.log(`Categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number) : string {
        return `Pedido na mesa: ${mesa}`;
    }

}

const redBurguer = new Loja('Red Burguer', 'Harburgueria')

redBurguer.criarLoja()
const returnEmit = redBurguer.emitirPedido(22)
console.log(returnEmit)


