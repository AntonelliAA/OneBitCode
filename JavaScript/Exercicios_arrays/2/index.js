let option = 0;
let cards = [];

do {
    alert("A quantidade de cartas no baralho atualmente é de: " + cards.length);
    
    option=prompt("Selecione a opção: \n 1 - Adicionar carta \n 2 - Puxar carta \n 3 - Sair");

    if (option == "1") {
        cards.push(prompt("Digite o nome da carta para adicionar: "));
    } else if(option == "2"){
        alert("A carta de nome: " + cards.pop() + " foi puxada.");
    }
} while (option != "3");