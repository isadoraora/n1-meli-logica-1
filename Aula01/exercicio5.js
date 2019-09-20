/*
5. Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.
INICIO
recebe um número inteiro
    se numero / 10 == numero inteiro
        "este número é um múltiplo de 10"
        se nao
            "este número não é múltiplo de 10"
FIM
*/

const number = parseInt(prompt("Digite um número inteiro: "))

if (number  % 10 === 0){
    alert(`${number} é múltiplo de 10!`)
}else{
    alert(`${number} não é múltiplo de 10!`)
}