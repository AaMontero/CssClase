function ocultarMostrarImagen() {
    // Display puede ser None o Block
    
    
    var valorDisplay = document.getElementById("idImagen").style.display;
    
    if(valorDisplay=="none"){
        valorDisplay="block"
    }else{
        valorDisplay="none"
    }
    document.getElementById("idImagen").style.display=valorDisplay; 
}

function enciende(){
    var valorSrc = document.getElementById("idImagenFoco").src; 
    console.log(valorSrc); 
    document.getElementById("idImagenFoco").src ="../img/focoEncendido.png";
}
function apaga(){
    var valorSrc = document.getElementById("idImagenFoco").src; 
    console.log(valorSrc); 
    document.getElementById("idImagenFoco").src ="../img/focoApagado.png"
}