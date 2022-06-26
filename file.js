/*Crear un sistema que nos permita crear celulares con las siguientes especificaciones:
    color
    peso
    resolucion pantalla
    resolucion camara
    memoria ram

Cada celular debe prender-apagar, reiniciar, tomar fotos y grabar, ademas de crear una funcion
para mostrar sus especificaciones*/

//creacion de la clase celulares

class Celulares{
    constructor(color, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = rdp;
        this.resolucionCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
     //creacion de metodos: prender-apágar, reiniciar, tomar fotos y grabar, mostrar info

     //setter para apagado

    

     prenderApagar(){
        if(this.encendido == true){
            alert("El celular ya esta encendido.");
        }else{
            alert("Encendiendo el celular.");
            this.encendido = true;
        }
     }

     reiniciar(){
        if(this.encendido == false){
            alert("El celular esta apagado, encenderlo primero para reiniciar");
        }else{
            alert("Reiniciando el celular.");
        }
     }

     tomarFotos(){
        alert(`Fotografia tomada con camara de ${this.resolucionCamara}`);
     }

     grabarVideo(){
        alert(`Video grabado con una resolucion de ${this.resolucionCamara}`);
     }

     info(){
        return `<b>Informacion del mobile </b> <br>
        Color = ${this.color} <br>
        Peso = ${this.peso} <br>
        Tamaño = ${this.tamaño} <br>
        Resolucion de Camara = ${this.resolucionCamara}<br>
        Memoria = ${this.ram}<br>`
     }
}

const cel1 = new Celulares("Rojo", "185 grs", " 5.5'", "hd", "4GB",);
cel1.reiniciar();
cel1.prenderApagar();

cel1.tomarFotos();
cel1.grabarVideo();
document.write(cel1.info());
cel1.prenderApagar();
cel1.reiniciar();