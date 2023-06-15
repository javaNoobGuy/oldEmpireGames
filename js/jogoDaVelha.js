var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];

var vez = 1;

var countClick = 0;

var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

function verifica(casa){

    if(casas[casa] == 9){


        casas[casa] = vez;

        if(vez==1){

            document.getElementById("img" + casa).src = "images/xis.png";

        }else{

            document.getElementById("img" + casa).src = "images/bola.png"

        }

        vez*=-1;
        countClick++;
        confere();



    }


}

function confere(){

    var lGanhou = false;
    var lAcabou = true;

    for(let i = 0; i < casas.length; i++){

        if(casas[i] == 9){
            lAcabou = false
        }

    }

    var soma = [];

    for(let i = 0; i < 3; i++){
         soma[i] = casas[3 * i] + casas[(3 * i) + 1] + casas[(3 * i) + 2];
    }
    for(let i = 0; i < 3; i++){
        soma[i + 3] = casas[i] + casas[i + 3] + casas[i + 6];
    }

    soma[6] = casas[0] + casas[4] + casas[8];
    soma[7] = casas[2] + casas[4] + casas[6];

    let isVelha = true;

    for(let i = 0; i < soma.length;i++){

    
        if(soma[i] == -3){

            lGanhou = true;
            sResposta = "Bolinha GANHOU!!!";
            iPontosO++;
            isVelha = false;
            document.getElementById("bola").innerHTML = "PONTOS O: " + iPontosO;
            break;

        }else if(soma[i] == 3){

            lGanhou = true;
            sResposta = "Xis GANHOU!!!";
            iPontosX++;
            isVelha = false;
            document.getElementById("xis").innerHTML = "PONTOS X: " + iPontosX;
            break;

        }

    }

    if(isVelha == true && countClick == 9 ){
        sResposta = "Deu VELHA!!!";
        lAcabou = true;
        iPontosV++;
        document.getElementById("velha").innerHTML = "VELHA...: " + iPontosV; 
    }

    if(lGanhou || lAcabou){

        for(let i = 0; i < casas.length; i++){

            document.getElementById("casa" + i).disabled = true;
            casas[i] = 0;

        }

        document.getElementById("resposta").innerHTML = sResposta;
        document.getElementById("resposta").style.color = "#ffc400";
        document.getElementById("resposta").style.fontSize = "xx-large";


    }

}

function recomeca(){

    for(let i = 0 ; i < casas.length; i++){

        document.getElementById("img" + i).ondragstart = function() { return false; };
        document.getElementById("casa" + i).disabled = false;
        document.getElementById("img" + i).src = "";

        document.getElementById("resposta").innerHTML = "RESULTADO:";
        document.getElementById("resposta").style.color = "#f5ff00";
        document.getElementById("resposta").style.fontSize = "large";

        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        countClick = 0;
        vez = 1;





    }




}