/*
2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
INICIO
recebe numero1
recebe numero2
    se n1 > n2
        "n1 é maior do que n2"
    se nao
        "n1 é menor do que n2"
FIM
*/

const n1 = parseInt(prompt("Digite um número inteiro: "))
const n2 = parseInt(prompt("Digite um outro número inteiro: "))

if(n1 > n2){
    alert(`${n1} é maior do que ${n2}`)
}else{
    alert(`${n1} é menor do que ${n2}`)
}


