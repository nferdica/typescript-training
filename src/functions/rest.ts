function totVendas(venda1: number, venda2: number, venda3: number, venda4: number) {
    const total = venda1 + venda2 + venda3 + venda4;

    console.log(total)

    return total;
}

totVendas(10, 20, 40, 50)

function totalVendas(...vendas: number[]) {
    const qtVendas = vendas.length;

    console.log(`Vendas: ${qtVendas}`)
}

totalVendas(10, 40, 100, 300, 40)