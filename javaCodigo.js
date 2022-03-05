let numeroAleatorio=0 + Math.floor(Math.random()* 241);
console.log(numeroAleatorio)
var numeroUsuario;
var distancia;
var orientacion;
var temperatura;
var numeroDeIntentos = 1;

const envioNumUsuario = ()=> {
    numeroUsuario = document.getElementById('entradaUsuario').value;
    if (numeroUsuario != numeroAleatorio) {
        distancia=numeroUsuario-numeroAleatorio;
    if (distancia > 0){
        orientacion= " arriba";
        document.getElementById('direccion_up').style.backgroundColor = '#813772';
        document.getElementById('direccion_down').style.backgroundColor = '#ffffff';
        console.log(orientacion);
        if(distancia > 6 ){
            temperatura= " frio";
            document.getElementById('temp_cold').style.backgroundColor = '#58c3bb';
            document.getElementById('temp_hot').style.backgroundColor = '#ffffff';
            document.getElementById('temp_goal').style.backgroundColor = '#ffffff';
            console.log(temperatura);
            
        }
        else {
            temperatura= " caliente";
            document.getElementById('temp_cold').style.backgroundColor = '#ffffff';
            document.getElementById('temp_hot').style.backgroundColor = '#d6234a';
            document.getElementById('temp_goal').style.backgroundColor = '#ffffff';
            console.log(temperatura);
        }
    }
    else {
        orientacion= " abajo";
        document.getElementById('direccion_down').style.backgroundColor = '#813772';
        document.getElementById('direccion_up').style.backgroundColor = '#ffffff';
        console.log(orientacion);
        if (distancia > -6){
            temperatura= " caliente";
            document.getElementById('temp_cold').style.backgroundColor = '#ffffff';
            document.getElementById('temp_hot').style.backgroundColor = '#d6234a';
            document.getElementById('temp_goal').style.backgroundColor = '#ffffff';
            console.log(temperatura);
        
        }
        else {
            temperatura= " frio";
            document.getElementById('temp_cold').style.backgroundColor = '#58c3bb';
            document.getElementById('temp_hot').style.backgroundColor = '#ffffff';
            document.getElementById('temp_goal').style.backgroundColor = '#ffffff';
            console.log(temperatura);
        }
    }

    document.getElementById('pantalla').innerHTML= 'Llevas '+numeroDeIntentos +' intentos, Has ingresado: '+ numeroUsuario+' estas, '+ temperatura+' por '+ orientacion;
    numeroDeIntentos++
    }
    else {
        document.getElementById('pantalla').innerHTML= 'felicitaciones has ganado con: '+numeroDeIntentos +' intentos, numero ganador: '+ numeroUsuario;
        numeroAleatorio=0 + Math.floor(Math.random()* 241);
        console.log(numeroAleatorio)
        numeroDeIntentos=1
        document.getElementById('temp_cold').style.backgroundColor = '#58c3bb';
        document.getElementById('temp_hot').style.backgroundColor = '#d6234a';
        document.getElementById('temp_goal').style.backgroundColor = '#f8e469';
        document.getElementById('direccion_down').style.backgroundColor = '#ffffff';
        document.getElementById('direccion_up').style.backgroundColor = '#ffffff';
    }
    
}













