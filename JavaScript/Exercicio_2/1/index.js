let firstCar = window.prompt("Qual a velocidade do primeiro veículo? ");

let secondCar = window.prompt("Qual a velocidade do segundo veículo? ");

firstCar = parseFloat(firstCar);
secondCar = parseFloat(secondCar);


if (firstCar > secondCar) {
    alert(" O primeiro carro é mais rápido ")
} else if (secondCar > firstCar){
    alert(" O segundo carro é mais rápido! ")
} else {
    alert("As velocidade são iguais!")
}