let x = window.prompt("Digite o primeiro número: ");
let y = window.prompt("Digite o segundo número: ");

x = parseFloat(x);
y = parseFloat(y);

let soma = x + y;
let sub = x - y;
let divisao = x/y;
let multi = x*y;

window.alert(
    "Resultados: \n" +
    "Soma: " + soma +  
    "\nSubtração: " + sub +
    "\nmultiplicação: " + multi +
    "\ndivisão: " + divisao
 
);




