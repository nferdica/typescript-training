function login(username: string | number): boolean {
    let message = 'Bem-vindo ' + username;
    
    console.log(message)

    return true
}

const retornoFunc = login('nferdica')
console.log(retornoFunc)

let n1: number = 24;
let n2: number = 3;

function sum(v1: number, v2: number): number {
    let soma = v1 + v2
    return soma
}

console.log(sum(n1, n2))