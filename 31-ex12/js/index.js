/* Ejercicio 12 */
//Funcion para obtener el texto del usuario
getText = () => {
    return document.getElementById("field1").value;
}


//---------------------------BOTON FECHA ---------------------
//Inicia el script al clicar en el botón 1 : Validar fecha
iniciaFecha = () => {
    var result = validaFecha();
    var mensaje =  result ? 
    "Existe una fecha en el texto" : "No hay ninguna fecha en el texto";
    console.log(mensaje);
    document.getElementById("console").value += mensaje;
}


//Validar fecha
validaFecha = () => {
    document.getElementById("console").value += "Texto introducido: \n";
    //Declaracion de variable con el texto del usuario
    var texto = getText();
    document.getElementById("console").value += texto+"\n";
    //Comprobar si el texto contiene una fecha
    var arrayTexto = texto.split(" ");
    for (i = 0; i < arrayTexto.length; i++) {
        return (
            /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(arrayTexto[i])
                ? true : false);
    }
}

//---------------------------BOTON EMAIL ---------------------
//Inicia el script al clicar en el botón 2 : Validar email
iniciaEmail = () => {
    var result = validaEmail();
    var mensaje =  result ? 
    "Existe un email en el texto" : "No hay ninguna email en el texto";
    console.log(mensaje);
    document.getElementById("console").value += mensaje;
}

//Validar email
validaEmail = () => {
    document.getElementById("console").value += "Texto introducido: \n";
    //Declaracion de variable con el texto del usuario
    var texto = getText();
    document.getElementById("console").value += texto+"\n";
    //Comprobar si el texto contiene un email
    var arrayTexto = texto.split(" ");
    for (i = 0; i < arrayTexto.length; i++) {
        return (
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(arrayTexto[i])
                ? true : false);
    }
}

//TODO:Reescribir funcion con regex

//---------------------------BOTON NOMBRE/APELLIDOS ---------------------
//Inicia el script al clicar en el botón 4 : Validar Nombre/Apellidos
iniciaRevertir = () => {
    var result = validaRevertir();
    var mensaje =  result ? 
    "Existen nombre ni apellido" : "No existen nombre ni apellido" ;
    console.log(mensaje);
    document.getElementById("console").value += mensaje+'\n';
    document.getElementById("console").value += result;
}

//Validar email
validaRevertir = () => {
    document.getElementById("console").value += "Texto introducido: \n";
    //Declaracion de variable con el texto del usuario
    var texto = getText();
    document.getElementById("console").value += texto+"\n";
    var recalculo = '';
    //Comprobar si el texto contiene un email
    if (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(arrayTexto)){

        var arrayTexto = texto.split(" ");
        
        for (i = arrayTexto.length-1; i >= 0 ; i--) {
            if (i ===arrayTexto.length-1){ 
                 recalculo = arrayTexto[i]+', ';
            }else{
            recalculo +=arrayTexto[i];
            }
        }
        return recalculo;
}
}
