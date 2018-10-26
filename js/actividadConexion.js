
var primeraP = "",
    segundaP = "",
    terceraP = "",
    cuartaP= ""
   

function revisarModificar(){    
    var respuestasUser = [primeraP, segundaP,terceraP, cuartaP];
    var respuestasM = ['b','a','a','c'];    
    var mensajesMod = document.getElementsByClassName('mensajeMod');
    var respuestaMod = document.getElementById('respuestaMod');
    var contador= 0;
    for (let k = 0; k < respuestasM.length; k++) {        
        if(respuestasUser[k]===respuestasM[k]){        
            mensajesMod[k].textContent="Correcto 5 puntos.";
            contador = contador + 5;
        }else{
            mensajesMod[k].textContent="Incorrecto 0 puntos.";
        }
    }
    respuestaMod.textContent="Total puntaje obtenido: "+contador+" Puntos de 20 posibles.";
}