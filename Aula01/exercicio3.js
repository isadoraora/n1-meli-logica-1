/*
3. Altere o exercício anterior de forma que ele informe também se os números são iguais.
INICIO
recebe numero1
recebe numero2
    se n1 > n2
        "n1 é maior do que n2"
    se nao se
        n1 < n2
        "n1 é menor do que n2"
        se nao
        "n1 é igual a n2"
FIM
*/

const n1 = parseInt(prompt("Digite um número inteiro: "))
const n2 = parseInt(prompt("Digite um outro número inteiro: "))

if(n1 > n2){
    alert(`${n1} é maior do que ${n2}`)
}else{
    if( n1 == n2){
        alert(`${n1} tem o mesmo valor de ${n2}`)
    }else{
        alert(`${n1} é menor do que ${n2}`)
    }
    
}
