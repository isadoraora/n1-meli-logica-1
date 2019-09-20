/*
4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

INICIO
receba um número
    se numero % 2 == 0
        "O número é par"
        se nao
            "O número é ímpar"

FIM
*/

const num = parseInt(prompt('Digite um número inteiro: '))
    if(num % 2 === 0){
        alert(`${num} é um número par!`)
    }else{
        alert(`${num} é um número ímpar!`)
    }