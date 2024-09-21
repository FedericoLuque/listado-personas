import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  /* Para pasar la informacion de este componente al componente padre, usamos @Output. Con este decorador, declaramos una variable personaCreada, que crea un objeto EventEmitter. Este objeto se encarga de crear un mensaje con la informacion que vamos a transmitir al componente padre.
  
  Como vamos a emitir informacion del tipo Persona, indicamos que el objeto que se va a crear el del tipo <Persona>().
  
  */

  @Output() personaCreada = new EventEmitter<Persona>();

  /* Estas dos variables hacen two-way binding con los campos input del formulario. */
  //nombreInput: string = '';
  //apellidoInput: string = '';

  /* Uso del decorador @ViewChild */
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  /* El metodo agregarPersona() declara una variable persona1 que crea un objeto Persona, y en sus propiedades mete los valores de las variables anteriores.

  El objeto Persona() está declarado en persona.model.ts y tiene dos propiedades. Importando la clase Persona en la segunda linea de este codigo, podemos crear objetos Persona en el siguiente metodo. */

  /* El metodo debe modificarse segun si usamos two-way binding, local references o el decorador @ViewChild */
  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value
    );

    /* Nuestra variable personaCreada creada en el decorador @Output, del tipo EventEmitter, tiene el metodo .emit para propagar la informacion de este componente al componente padre. Hemos decidido emitir objetos del tipo Persona.
    
    Lo que vamos a propagar, es la variable persona1 de este metodo, que es del tipo Persona. No podemos emitir otro tipo de objeto.

    En resumen, el metodo agregarPersona() declara una variable persona1, crea una persona con sus propiedades, y despues emite esa variable con personaCreada.emit, que es el metodo del objeto que emite objetos Persona.
    */
    this.personaCreada.emit(persona1);
  }
}
