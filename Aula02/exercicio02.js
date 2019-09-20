/*
2.Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não necessariamente na mesma ordem.
INICIO
sorteia1 numero
num1 recebido do usuario
    se sorteai1 == num1
    parabéns
sorteia2 numero
num2 recebido do usuario
    se sorteia2 == num2
    parabens
FIM
*/
const sorteai1 = Math.floor(Math.random() * 5 + 1)
console.log('sorteado', sorteai1)
const num1 = parseInt(prompt('Tente acertar o número da sorte, de 1 a 5'))

if (sorteai1 == num1) {
    alert(`Parabéns o número sorteado foi ${sorteai1}`)
} else {
    alert('Vamos sortear mais um')
    const sorteia2 = Math.floor(Math.random() * 5 + 1)
    console.log('sorteado número dois', sorteia2)
    const num2 = parseInt(prompt('Digite outro número de 1 a 5'))
    if (num2 == sorteia2) {
        alert(`Parabéns, o número sorteado foi ${num2}`)
    } else {
        alert('Que pena, não foi dessa vez!')
    }
}
