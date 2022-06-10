function ocultarMostrarImagen() {
    // Display puede ser None o Block


    var valorDisplay = document.getElementById("idImagen").style.display;

    if (valorDisplay == "none") {
        valorDisplay = "block"
    } else {
        valorDisplay = "none"
    }
    document.getElementById("idImagen").style.display = valorDisplay;
}

function enciende() {
    var valorSrc = document.getElementById("idImagenFoco").src;
    console.log(valorSrc);
    document.getElementById("idImagenFoco").src = "../img/focoEncendido.png";
}
function apaga() {
    var valorSrc = document.getElementById("idImagenFoco").src;
    console.log(valorSrc);
    document.getElementById("idImagenFoco").src = "../img/focoApagado.png"
}
function cambiarTextos() {
    //Cuando se declara un array se debe declara como constante 
    const elementos = document.getElementsByClassName("nuevo");
    //innerHTML - Permite acceder al contenido de un documento. 
    //console.log(elementos[0].innerHTML)
    /*
    elementos[0].innerHTML="1er Texto"; 
    elementos[1].innerHTML="2do Texto";
    elementos[2].innerHTML="3er Texto";*/
    for (let valor of elementos) {
        valor.innerHTML = "valorA";
        console.log(valor.innerHTML);
    }
    /*     for(valor in elementos){
            elementos[valor].innerHTML= "valorA";
            console.log(valor.innerHTML); 
        } */

}
function cambiarTextosElemento() {
    const elementos = document.getElementsByTagName("h1");
    elementos[0].innerHTML = "A";
    elementos[1].innerHTML = "B";
    console.log(elementos[2]);

}


/* Forma tradicional de acceso a un elemento especifico. 
function mOver(){
    var elemento = document.getElementById("div1"); 
    elemento.innerHTML ="Nuevo Texto"; 
    elemento.style.backgroundColor="red"; 
}
function mOut(){
    var elemento = document.getElementById("div1"); 
    elemento.innerHTML ="Texto para nuevos elementos"; 
    elemento.style.backgroundColor="green"; 
}*/
function mOver(elemen) {

    elemen.innerHTML = "Nuevo Texto";
    elemen.style.backgroundColor = "red";
}
function mOut(elemen) {
    elemen.innerHTML = "Texto para nuevos elementos";
    elemen.style.backgroundColor = "green";
}

function imprimirPersona() {
    //Declaraciones de arreglos
    const colores = ['rojo','amarillo','azul']; 
   /*  console.log(colores[0]);
    console.log(colores[1]);
    console.log(colores[2]); */
    //Desestruturacion de arreglos 
    const[p1,p2,p3] = ['red','yellow','blue'];
    console.log(p1); 
    console.log(p2); 
    console.log(p3); 
    const[c1,c2,c3] = colores; 
    console.log(c1); 
    console.log(c2); 
    console.log(c3); 
    //Declaracion de objetos 
    const persona = {
        nombre: "Edison", apellido: "Cayambe",
        edad: 32
    }
    console.log(persona); 
    //Desestructuracion de objetos
    const {nombre,apellido,edad} = persona; 
    console.log(nombre);
    console.log(apellido); 
    console.log(edad); 

    const{name, lastname,age} = {name: "Anthonny", lastname:"Montero",age:25}
    console.log(name); 
    console.log(lastname); 
    console.log(age); 
    const persona2 = {
        nombre: "Edison", apellido: "Cayambe",
        edad: 32, direccion:{calle: "America", numero: "Oe3-23"}
    }
    console.log(persona2); 
}
