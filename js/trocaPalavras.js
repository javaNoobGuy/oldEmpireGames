var names = ['Detona >', 'as >', '> Art Online', 'Dragon >', 'Cavaleiros do >', 'A Lenda de >', '> Blinders', 'Como > Seu Dragão', 'Atack on >', 'Ben >', 'South >'];
var namesChanged = [];
var currentName = 7;

function start(){

    let input = document.getElementById("input");
    input.innerHTML = '';

    let inputElement = document.createElement('input');
    inputElement.type = "text";
    inputElement.id = "change";

    let posSineSubs = names[currentName].indexOf('>');

    input.append(names[currentName].substring(0, posSineSubs));
    input.append(inputElement);
    input.append(names[currentName].substring(posSineSubs + 1, names[currentName].length  + posSineSubs));
    console.log(names[currentName].substring(0, posSineSubs));



}

function addWord(){
    let pastnames = document.getElementById('pastnames');
    let input = document.getElementById("change");
    let inputDiv = document.getElementById("input");
    let posSineSubs = names[currentName].indexOf('>');
    let newName = names[currentName].substring(0, posSineSubs) + input.value + names[currentName].substring(posSineSubs + 1, names[currentName].length  + posSineSubs);
    console.log(newName);
    namesChanged.push(newName);

    let divTexto = document.createElement('div');
    divTexto.className = "textoAlt";
    divTexto.innerText = newName;
    pastnames.append(divTexto);

    input.value = '';
    inputDiv.innerHTML = '';

    if(currentName < names.length){

        currentName++;

    }

    if(currentName >= names.length){
        currentName = 0;
    }

    console.log(currentName);
    console.log(names[currentName]);
    posSineSubs = names[currentName].indexOf('>');
    inputDiv.append(names[currentName].substring(0, posSineSubs));
    inputDiv.append(input);
    inputDiv.append(names[currentName].substring(posSineSubs + 1, names[currentName].length  + posSineSubs));
    console.log(names[currentName].substring(0, posSineSubs));


}



