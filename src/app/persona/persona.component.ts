import { Component, Input } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
/* Con @Input recibimos los contenedores persona e indice (aqui sin corchetes) y especificamos el tipo de dato que reciben. Tipo de dato Persona y tipo de dato number */
  @Input() persona: Persona;
  @Input() indice: number;

}
