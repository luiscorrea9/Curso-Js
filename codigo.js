

class celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;

    }
    prender(){
        if(this.encendido==false){
            alert(`El celular ha sido encendido`);
            this.encendido=true;    
        }else{
            alert(`El celular ya está encendido`)
        }
    }
    reiniciar(){
        if(this.encendido==true){
            alert(`El celular se está reiniciando`)
        }else{
            alert(`El celular está apagado, no se puede reiniciar`)
        }
    }
    mostrarInfo(){
        return `El color del celular es: ${this.color} <br>
        El peso del celular es: ${this.peso} <br>
        La resolución de pantalla del celular es: ${this.resolucionPantalla} <br>
        La resolución de camara del celular es: ${this.resolucionCamara} <br>
        La memoria Ram del celular es: ${this.memoriaRam} <br>`; 
    }
    
    
    tomarFoto(){
         alert(`Se está tomando foto con una resolución de camara de ${this.resolucionCamara}`)
    }
    grabar(){
        alert(`Se está grabando un video con una resolución de camara de ${this.resolucionCamara}`)

    }

}


const celu = new celular(`Blue`, `160 g`,`5`,`Full hd`, `2GB`);
const celu2 = new celular(`Red`, `150 g`,`4`,`Full hd`, `5GB`);
const celu3 = new celular(`Yellow`, `170 g`,`3`,`Full hd`, `3GB`);

    