/*
Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe 
A ALTURA do atleta mais alto.
INICIO
maior_altura=0
cont = 0
enquanto cont < 5
recebe nome
recebe altura
se maior_altura < altura então
    maior_altura != altura
    retorne "O atleta mais alto é ", maior_altura
FIM

let maior_altura = 0;
let cont = 0;

while (cont < 5) {
    const nome = prompt("Insira seu nome: ")
    const altura = parseFloat(prompt("Insira sua altura: "))
    
    if (maior_altura < altura){

    }
    cont++;
}
alert(`A altura do atleta mais alto é: ${maior_altura}`)
*/
let cont, nome, nome2, altura, altura2;
altura2 = 0;
nome2 = "";
cont =0

while (cont < 5){
    nome = prompt('Digite o nome do atleta: ')
    altura = parseFloat(prompt('Digite a altura do atleta: '))
    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;
    }
    cont++;
}
document.write(`${nome2} é a atleta com maior altura, com ${altura2} metros `)
alert(`${nome2} é a atleta com maior altura, com ${altura2} metros `)