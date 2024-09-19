export class Persona{
/*
    SINTAXIS COMPLETA

    nombre: string = "";
    apellido: string = "";

    constructor(nombre : string, apellido : string){
        this.nombre = nombre;
        this.apellido = apellido;
    } */

    /* SINTAXIS ABREVIADA */

    /* Constructor del objeto persona. En la primera linea se exporta la clase Persona para las clases que necesiten usar este objeto. */

    constructor( public nombre : string, public apellido : string){

    }
    
}