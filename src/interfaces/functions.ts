interface ICursoProps {
    id: string;
    nome: string;
    preco: number;
    promocao: (preco: number) => void
}

function mostraPromo(preco:number) : void {
    console.log(`Promoção no curso por apenas R$${preco}`);
}

const newCourse: ICursoProps = {
    id: '1',
    nome: 'Curso typescript',
    preco: 750,
    promocao: mostraPromo
}

console.log(newCourse)

console.log(newCourse.promocao(350))

interface ISomaProps {
    (valor1: number, valor2: number) : number;
}

let somaNumeros: ISomaProps = (valor1: number, valor2: number) : number => {
    console.log('Resultado: ', valor1 + valor2)

    return valor1 + valor2
}

const resultado = somaNumeros(20, 40)