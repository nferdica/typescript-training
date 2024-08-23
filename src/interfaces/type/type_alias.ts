type Uuid = string | number | null

function acessar(uid: Uuid, nome: string) {
    console.log(`ID: ${uid} - Bem-vindo ${nome}`)
}

function logUser(uid: Uuid) {
    console.log(`Conta referente ao ID: ${uid}`)
}

acessar(1, 'Nathan Ferdinando')
logUser(1);

type Moedas = 'BRL' | 'EUR' | 'USD'

function comprarItem(moeda: Moedas) {
    console.log("Comprando com a moeda: ", moeda)
}

comprarItem('BRL')
