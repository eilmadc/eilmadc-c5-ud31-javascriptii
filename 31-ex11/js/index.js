/* Ejercicio 11 */
const totalTiradas = 36000;
var tiradas = [];

//Inicia el script al clicar en el botón
inicia = () =>{
//Declaracion de variables
var dado1 = lanzaDado(6);
var dado2 = lanzaDado(6);

//Asigno los valores al dado1 y dado2 a los dos inputs del dom
document.getElementById("dado1").value = dado1;
document.getElementById("dado2").value = dado2;

//Suma de los dos numeros de los dos dados
var suma = dado1 + dado2;
document.getElementById("suma").value = suma;
//Obtener la coincidencia de la suma en el array

document.getElementById("coincidencia").value = obtenerCoincidencias(suma);

}

//Lanzar dados
lanzaDado = (dado) => {
    return Math.floor(dado*Math.random()+1);
}

obtenerCoincidencias = (suma) => {
    var coincidencia = 0;
    for(i=1;i<=totalTiradas;i++){
        tiradas[i]=lanzaDado(12);
        if(tiradas[i] == suma){
            coincidencia++;
        }
    }
    console.log('El numero de veces que hemos obtenido la suma '+suma+ ' es: '+coincidencia);
    return coincidencia;
}