// Desconto em compra
// Regra de negócio:
// - Se valorCompra >= 100 -> 10% de desconto
// - Se valorCompra < 100 -> sem desconto
// Criar uma funcçao que excute isso!

let chocolate = 10

function calcularDesconto(valorCompra) {
    let desconto = 0

    if (valorCompra >= 100) {
        desconto = valorCompra * 0.10
    }

    valorFinal = valorCompra - desconto
    
    return{
        valorCompra,
        desconto,
        valorFinal
    }
}

console.log(calcularDesconto());
