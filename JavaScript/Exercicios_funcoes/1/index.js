function triangle(base,height) {
    return base * height/2
}

function rectangle(base,height) {
    return base * height
}

function square(side) {
    return side * side
}

function trapeze(lowBase,highBase,height) {
    return (lowBase * highBase)/ (height*2)
}

function circle(radius) {
    return 3.14 * (radius*radius)
}

let option = "";

do {
    let x,y,z = "";
    
    
    option = prompt("Selecione uma opção: \n 1 - Área Triângulo \n 2 - Área Retângulo \n 3 - Área Quadrado \n 4 - Área Trapézio \n 5 - Área círculo \n 0 - Sair");

    switch (option) {
        case "1":
            x = prompt("Qual a base do Triângulo?")
            y =  prompt("Qual a altura do Triângulo?")
            
            alert("A área do triangulo é: " + triangle(x,y));

            break;
        
        case "2":
            x = prompt("Qual a base do Retângulo?");
            y = prompt("Qual a altura do Retângulo?");
            
            alert("A área do Retângulo é: " + rectangle(x,y));

            break;
        
        case "3":

            x = prompt("Qual a base do Quadrado?");
            
            alert("A área do Quadrado é: " + square(x));


            break;

        case "4":

            x = prompt("Qual a base menor do Trapézio?");
            y = prompt("Qual a base maior Trapézio?");
            z = prompt("Qual a altura do Trapézio?");
            
            alert("A área do Trapézio é: " + trapeze(x,y,z));
            
            break;
        
        case "5":

            x = prompt("Qual o raio do cículo?");
            
            alert("A área do Trapézio é: " + circle(x));
            
            break;

        case "0":
            alert("Saindo!")
            break;

        default:
            alert("ERRO!")
            break;
    }


    
} while (option != "0");