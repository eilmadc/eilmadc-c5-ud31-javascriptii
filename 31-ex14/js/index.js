
/* Iniciar la pantalla de la calculadora al cargar la pagina.*/
var val;
var acc = 0;// Guardael valero de la pantalla
var op = "";

resetCalc = () => {
    val;
    acc = 0;// Guardael valero de la pantalla
    op = "";//Selecciona la operacion pulsada
};


display = (val) => {
    document.getElementById('calc_screen').value += val;//Añade los valores a la pantalla
}

clearScreen = () => {
    document.getElementById('calc_screen').value = "";//Asignaa el valor en pantalla 0
}

calc = () => {
    let x = document.getElementById('calc_screen').value;//Obtiene el valor
    let y = eval(x);//Evalua la expresion del display
    document.getElementById('calc_screen').value = y;//Muestra el valor en pantalla
    return y;
}



/* Retr */
clickRetr = () => { }

clickChange = () => {
    var val = document.getElementById("calc_screen"); //Obtiene el valor
   
    val.value = Math.sign(val.value)*val.value;//Cambia el signo
    document.getElementById("calc_screen").value = val.value;//Muestra el valor en pantalla
}

/*Raiz*/
clickRaiz = () => {
    var val = document.getElementById("calc_screen");//Obtiene el valor
    val.value = Math.sqrt(val.value);//Raiz cuadrada
    document.getElementById("calc_screen").value = val.value;//Muestra el valor en pantalla
 }


/* Percentage */
clickPercentage = () => {
    var val = document.getElementById("calc_screen");//Obtiene el valor
    val.value = 1 / val.value;//Percentage
    document.getElementById("calc_screen").value = val.value;//Muestra el valor en pantalla
}


/* Inverse */
clickInverse = () => {
    var val = document.getElementById("calc_screen");//Obtiene el valor
    val.value = 1 / val.value;//Inverse
    document.getElementById("calc_screen").value = val.value;//Muestra el valor en pantalla

}

//Inicia la calculadora al cargar el body
inic = () => {
    val = document.getElementById("val"); 
}
