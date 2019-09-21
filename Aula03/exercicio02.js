/*1.2 informe também a altura média destes 5 atletas.
INICIO
maior_altura=0
cont = 0
nome2 = ""
media =
enquanto cont < 5
recebe nome
recebe altura
se maior_altura < altura então
    maior_altura = altura
    nome2 = nome
    retorne "O atleta mais alto é ", maior_altura
FIM
*/
let cont, nome, nome2, altura, altura2, soma_altura,resu;
altura2 = 0;
nome2 = "";
cont =0
soma=0;
while (cont < 2){
    nome = prompt('Digite o nome do atleta: ')
    altura = parseFloat(prompt('Digite a altura do atleta: '))
    soma_altura +=altura;
    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;
    }
    cont++;
    
}
    resu = soma_altura % 5
alert(`${nome2} é a atleta com maior altura, com ${altura2} metros `)
alert(`A média das alturas é ${resu}`)