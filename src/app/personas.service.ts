import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';

@Injectable()

export class PersonasService {
  personas: Persona[] = [
    new Persona('Juan', 'Pérez'),
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara'),
  ];

  constructor(private loggingService: LoggingService) {}

  agregarPersona(persona: Persona) {
    this.loggingService.enviarMensajeAConsola(
      'Agregamos persona: ' + persona.nombre
    );
    this.personas.push(persona);
  }
}
