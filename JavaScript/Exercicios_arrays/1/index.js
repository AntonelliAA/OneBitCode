let option = 0;
let queue = ["Matheus","Marcos","José"];

do {
    patients = "";

    for (let i = 0; i < queue.length; i++) {
    patients += (i+1) + "º - " + queue[i] + "\n"
    }

    alert("Lista de pacientes: \n"+ patients);

    option = prompt("1 - Cadastrar novo paciente \n 2 - Consultar paciente \n 3 - Sair");

    if (option == "1") {
        queue.push(prompt("Qual o nome do paciente? "));
        
    } else if (option == "2") {
        alert("O paciente " + queue.shift() + " foi consultado!");
    }

} while (option != "3");