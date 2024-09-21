import { Persona } from './persona.model';

export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];

  agregarPersona(persona: Persona) {
    this.personas.push(persona);
}

}
