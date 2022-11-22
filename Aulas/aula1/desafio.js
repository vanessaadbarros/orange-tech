let precoCombustivel = 4.91;
const kmPorLitros  = 10;
let distancia = 100;

let litroConsumidos = (distancia/kmPorLitros);
valorViagem = litroConsumidos * precoCombustivel;

console.log(valorViagem.toFixed(2));
