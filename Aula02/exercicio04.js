/*
.Escreva um programa que joga par ou ímpar com o usuário.
INICIO
usuario informa numero
se numero %2==0
    o numero é PAR
    senao
        o numero é ÍMPAR
FIM
*/
const number = parseInt(prompt('Digite um número inteiro:'))
if(number % 2 == 0){
    alert(`O número ${number} é PAR!`)
}else{
    alert(`O número ${number} é ÍMPAR!`)
}