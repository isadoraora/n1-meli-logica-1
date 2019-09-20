/*
Crie um programa que solicita que o usuário digite uma palavra que começa com a letra A. O programa deve então exibir 
uma mensagem dizendo se ele acertou ou errou. (Importante o programa aceitar que a letra A seja digitada tanto em 
minúsculas quanto em maiúsculas).
INICIO

FIM
*/
const palavra = prompt('Digite uma palavra que comece com a letra a')
const teste_palavra = palavra.slice(0,1)
console.log(teste_palavra)
if((teste_palavra == 'a') || (teste_palavra == 'A')){
    alert(`A palavra ${palavra} começa com a letra A, parabéns!`)
}else{
    alert(`A palavra ${palavra} não começa com a letra A, querido. A palavra que você digitou começa com a letra ${teste_palavra}!`)
}