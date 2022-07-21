let primeiroNum = Number (prompt("Digite um número"))
let segundoNum = Number (prompt("Digite um segundo número"))

console.log("O primeiro numero é maior que segundo?", "-", primeiroNum > segundoNum);
console.log("O primeiro numero é igual ao segundo?", "-", primeiroNum === segundoNum);
console.log("O primeiro numero é divisível pelo segundo?", "-", primeiroNum %segundoNum === 0);
console.log("O segundo numero é divisível pelo primeiro?", "-", segundoNum %primeiroNum === 0);

