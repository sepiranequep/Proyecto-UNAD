var respuestasCorrectas= ['select','nombre','mysqli_connect','mysqli_query','mysqli_connect','mysqli_query','select','mysqli_free_result','mysqli_free_result'];

function revisarSeleccion(){   
    var respuestasUser = document.getElementsByClassName('comparables');
    var mensajeSelect = document.getElementById('mensajeSelect');
    var contador = 0;
    for (let i = 0; i < respuestasUser.length; i++) {
        var minuscula = respuestasUser[i].value;
        
        if(minuscula.toLowerCase() === respuestasCorrectas[i]){            
            respuestasUser[i].style.backgroundColor="#d4edda";
            contador++;
        }else{
            respuestasUser[i].style.backgroundColor="#f8d7da";
        }

        if(contador === 9){
            mensajeSelect.textContent="Todos las respuestas son correctas, ¡FELICITACIONES!";
        }else{
            mensajeSelect.textContent="";
        }
    }
}
function mostrarRespuestas(){
    var respuestasUser = document.getElementsByClassName('comparables');
    var mensajeSelect = document.getElementById('mensajeSelect');

    for (let j = 0; j < respuestasUser.length; j++) {
        mensajeSelect.textContent="";
        respuestasUser[j].style.backgroundColor="#fff3cd";
        respuestasUser[j].value = respuestasCorrectas[j];
    }

}
function revisarModificar(){
    
}