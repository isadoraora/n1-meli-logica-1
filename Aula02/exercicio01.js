/*Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.

1.1. Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, mas informa se o
número sorteado é maior ou menor que o primeiro palpite.

1.2. Faça o mesmo programa anterior, agora com 3 palpites.
*/

const num = parseInt(prompt("Digite um número de 1 a 10: "))
const sorte = Math.floor(Math.random() * 10 + 1)
console.log('sorte fora do if e else', sorte)

if (num == sorte) {
    alert('Parabéns!')
} else {
    const num2 = parseInt(prompt('Digite outro número de 1 a 10'))
    console.log('sorte dentro do else', sorte)
    if (num2 == sorte) {
        alert("Parabéns!")
    } else {
        alert("Sinto muito")
    }
    if (num > sorte) {
        alert(`${num} é maior do que ${sorte}`)
    } else {
        if (num < sorte) {
            alert(`${num} é menor do que o número sorteado ${sorte}`)
        }
    }
}