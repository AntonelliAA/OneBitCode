let option = 0;
let properties = [];


do {
    option = prompt(
        "Imóveis cadastrados: " + properties.length + 
        "\n1 - Cadastrar um imóvel" +
        "\n2 - Mostrar imóveis salvos"
        +"\nDigite 0 para sair"
    );

    switch (option) {
        case "1":
            let house = {};
            let proprietaryName = prompt("Qual o nome do proprietário da casa? ");
            let rooms = prompt("Qual o número de quartos na casa? ");
            let bathrooms = prompt("Qual o número de banheiros na casa? ");
            let garage = prompt("A casa tem garagem? Sim ou não");



            house.proprietaryName = proprietaryName;
            house.rooms = rooms;
            house.bathrooms = bathrooms;
            house.garage = garage;
            properties.push(house.proprietaryName);



            break;
    
        case "2":
            let listProperties = "";
            for (let i = 0; i < properties.length; i++) {
                listProperties += "\n" + (i+1) +") " + properties[i];
            
            }

            console.log(listProperties);
            alert("Lista de propriedades: " + listProperties);

            break;

        case "0":
            alert("Saindo!");
            break;

        default:
            alert("Opção inválida");
            break;
    }

    
} while (option != "0");