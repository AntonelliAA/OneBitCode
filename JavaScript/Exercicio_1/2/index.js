let nome;
let sobrenome;
let campoEstudo;
let anoNascimento;

nome = window.prompt('Escreva seu nome: ');

sobrenome = window.prompt('Qual seu sobrenome? ');

campoEstudo = window.prompt('Qual seu campo de estudo? ');

anoNascimento = window.prompt('Escreva o seu ano de nascimento: ');

anoNascimento = 2022 - anoNascimento;

window.alert(nome +" "+ sobrenome + " Estuda "+ campoEstudo + " Tem " + anoNascimento + " anos!" );