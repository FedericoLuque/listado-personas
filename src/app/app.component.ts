import { Component } from '@angular/core';
import { Persona } from './persona.model'; /* Importamos la clase Persona para poder crear objetos del tipo Persona */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Listado de Personas';
  /* Array donde se guardan las personas. Tres personas predefinidas creadas mediante el constructor Persona importado de persona.model.ts en la segunda linea de este codigo. */
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];
/* Como el componente hijo nos emite un objeto persona, podemos establecer que este metodo solo recibira objetos del tipo Persona.

Cogemos el objeto emitido (persona de tipo Persona) y lo metemos en el array personas[].
*/
  personaAgregada(persona: Persona){
    this.personas.push(persona);
  }

}
