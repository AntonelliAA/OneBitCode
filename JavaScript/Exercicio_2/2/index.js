let firstCharacter = prompt("Qual o nome do primeiro personagem? ");
let powerFirstCharacter = prompt("Qual o poder de ataque do primeiro personagem? ");

let secondCharacter = prompt("Qual o nome do segundo personagem? ");
let lifeSecondCharacter = prompt("Quantos pontos de vida o segundo personagem tem? ");
let defenseSecondCharacter = prompt("Qual o poder de defesa do segundo personagem? ");
let shield = confirm("O segundo personagem tem escudo? ");

powerFirstCharacter = parseFloat(powerFirstCharacter);

lifeSecondCharacter = parseFloat(lifeSecondCharacter);
defenseSecondCharacter = parseFloat(defenseSecondCharacter);


if(powerFirstCharacter > defenseSecondCharacter && shield === false){
    lifeSecondCharacter = powerFirstCharacter - defenseSecondCharacter;
} else if(powerFirstCharacter > defenseSecondCharacter &&  shield === true){
    lifeSecondCharacter = lifeSecondCharacter-((powerFirstCharacter - defenseSecondCharacter)/2);
    shield = false;
} else if(powerFirstCharacter <= defenseSecondCharacter){
    lifeSecondCharacter = lifeSecondCharacter - 0; 
}else{
    alert("ERROR");
}

alert(
    "O nome do primeiro personagem é: " + firstCharacter +
    "\n\n o nome do segundo personagem é: " + secondCharacter +
    "\n A vida do segundo personagem é " + lifeSecondCharacter +
    "\n A defesa do segundo personagem é: " + defenseSecondCharacter +
    "\n O segundo personagem ainda tem escudo? " + shield
);

