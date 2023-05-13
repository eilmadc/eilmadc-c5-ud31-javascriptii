
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
    document.getElementById('calc_screen').value += val;
}

clearScreen = () => {
    document.getElementById('calc_screen').value = "";
}

calc = () => {
    let x = document.getElementById('calc_screen').value;
    let y = eval(x);
    document.getElementById('calc_screen').value = y;
    return y;
}



/* Retr */
clickRetr = () => { }

clickChange = () => {
    var val = document.getElementById("calc_screen");
    val.value = -(val.value);
    document.getElementById("calc_screen").value = val.value;
}

/*Raiz*/
clickRaiz = () => {
    var val = document.getElementById("calc_screen");
    val.value = Math.sqrt(val.value);
    console.log(val.value);
    document.getElementById("calc_screen").value = val.value;
 }


/* Percentage */
clickPercentage = () => {
    var val = document.getElementById("calc_screen");
    val.value = 1 / val.value;
    document.getElementById("calc_screen").value = val.value;
}


/* Inverse */
clickInverse = () => {
    var val = document.getElementById("calc_screen");
    val.value = 1 / val.value;
    document.getElementById("calc_screen").value = val.value;

}

inic = () => {
    val = document.getElementById("val");
}
