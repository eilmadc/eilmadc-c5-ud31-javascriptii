console.log("-------------- 31-Ejercicio 16-------------");


//Funcion inicio de contador del tiempo que se carga al cargar la pagina
initTimer = () => {

    //Objeto tipo Date que recoge los datos exactos del sistema en tiempo real
    today = new Date();

    //Obtiene la hora
    hour = today.getHours();
    //Obtiene los minutos
    minute = today.getMinutes();
    //Obtiene los segundos
    seconds = today.getSeconds();

    //Control de formato al imprimir en pantalla
    seconds = checkTime(seconds);
    minute = checkTime(minute);
    hour = checkTimeHour(hour);

    //Muestra la hora hh:mm:ss en el elemento clock del html.
    document.getElementById('clock').innerHTML = hour + ':' + minute + ':' + seconds;


    time = setTimeout('initTimer()', 500);

}

//Formato al mostyrarlo eb pantalla : minutos y segundos
checkTime = (i) => {
    if (i < 60) {
        i >= 10 ? i = i : i = "0" + i;
    }
    return i;
}

//Formato al mostyrarlo eb pantalla : horas
checkTimeHour = (i) => {
    
    i >= 10 ? i = i : i = "0" + i;
    
    return i;
}



//Carga de la pagina
window.onload = function () { initTimer(); }