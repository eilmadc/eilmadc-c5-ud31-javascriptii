console.log("-------------- 31-Ejercicio 15-------------");

var big = document.getElementById("big_foto")


clickFoto = (foto) => {

    
    let bfoto = document.createElement('img');
    big.hasChildNodes() ? big.removeChild(big.getElementsByTagName('img')[0]) : null;
    bfoto.src = "../31-ex15" + foto;

    console.log(bfoto);
    console.log(big);
    
    if (big != null)
        big.appendChild(bfoto);
};