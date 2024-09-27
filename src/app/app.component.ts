import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model'; /* Importamos la clase Persona para poder crear objetos del tipo Persona */
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Listado de Personas';


}
