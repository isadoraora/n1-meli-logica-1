let num = parseInt(prompt("Digite um número"))

switch (true) {
    case num > 10:
        console.log(`${num} é maior do que 10`)
        break;
    case num === 10:
        console.log(`${num} é 10`)
        break;
    case num <10:
        console.log(`${num} é menor do que 10`)
        break;
    default:
        alert("Coloque um número, anta")
        break; 
}