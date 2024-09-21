import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model'; /* Importamos la clase Persona para poder crear objetos del tipo Persona */
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  /* Array donde se guardan las personas. Ahora tenemos el array vacio porque es el servicio personasService el que suministra la informacion, y la mete en este array vacio. */
  personas: Persona[] = [];

  /* Constructor para inyectar el servicio. El servicio se provee desde app.module.ts */
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService
  ) {}

  /* Inicializacmos el array con la informacion de la lista de personas predefinidas en el metodo OnInit */
  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

}
