

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

class celularAltaGama extends celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, memoriaRam, camaraExtra){
        super(color, peso, resolucionPantalla, resolucionCamara, memoriaRam);
        this.camaraExtra=camaraExtra;
    }
    grabarLento(){
        alert("Grabando en camara lento")
    }
    reconocimientoFacial(){
        alert("Accediendo por medio de reconocimiento facial")
    }
    infoAltaGama(){
        return this.mostrarInfo() + `La resolución de camara extra es: ${this.camaraExtra}<br><br>`;
    }
}

const celu = new celularAltaGama(`Blue`, `130 g`,`5.2`,`4k`, `3GB`, `full hd`);
const celu2 = new celularAltaGama(`Red`, `140 g`,`5.1`,`4k`, `2GB`, `hd`);

document.write(`${celu.infoAltaGama()}${celu2.infoAltaGama()}`);

    