var numeroAleatorio=0 + Math.floor(Math.random()* 241);
console.log(numeroAleatorio);

var numeroUsuario = prompt("Adivina el numero :)");
var orientacion ;
var temperatura ;
var distancia = numeroUsuario-numeroAleatorio;
var numeroDeIntentos = 1
while ( distancia != 0 ){
    numeroDeIntentos++
    console.log(numeroDeIntentos)
    if (distancia > 0){
        orientacion= " arriba";
        console.log(orientacion); 
        if(distancia > 6 ){
            temperatura= " frio";
            console.log(temperatura);
            
        }
        else {
            temperatura= " caliente";
            console.log(temperatura);
        }
    }
    else {
        orientacion= " abajo";
        console.log(orientacion);
        if (distancia > -6){
            temperatura= " caliente";
            console.log(temperatura);
        
        }
        else {
            temperatura= " frio";
            console.log(temperatura);
        }
    }
    console.log("equivocado")
    numeroUsuario = prompt("Lo siento te has equivocado llevas "+ numeroDeIntentos +" intentos "+ "estas " + temperatura+ " por" + orientacion);
    distancia = numeroUsuario-numeroAleatorio;
}
console.log("correcto lo lograste con " + numeroDeIntentos+ " intentos.")


