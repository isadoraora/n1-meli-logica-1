/*
3.Sorteie dois números de 1 a 10. Informe quantos destes números estão entre 3 e 7 (inclusive).
INICIO
sorteia numero1
sorteia numero2
se n1 >= 3 && n1 <=7
    Rretornar o valor de n1
    senao
    se n2 >=3 && n2 <=7
    retornar o valor de n2
        senao
        numeros sorteados nao estao entre  3 e 7
FIM
*/
const sor1 = Math.floor(Math.random()*10+1)
console.log('Primeiro número sorteado', sor1)
const sor2 = Math.floor(Math.random()*10+1)
console.log('Segundo número sorteado', sor2)

if ((sor1 >= 3)&&(sor1 <=7)){
    alert(`${sor1} está entre 3 e 7`)
}else{
    if((sor2 >=3)&& (sor2 <=7)){
        alert(`${sor2} está entre 3 e 7`)
    }else{
        alert(`Os números sorteados ${sor1}, ${sor2} não estão entre 3 e 7`)
    }
}