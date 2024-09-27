import { Component } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  nombreInput: string;
  apellidoInput: string;
  index: number;
  modoEdicion:number;

  /* Usamos un constructor para inyectar los servicios */
  constructor(
    private loggingService: LoggingService,
    private personasService: PersonasService,
    private router:Router,
    private route: ActivatedRoute
  ) {
    this.personasService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  ngOnInit(){
    this.index = this.route.snapshot.params["id"];
    /* El simbolo + delante del parametro queryString lo convierte en tipo number  */
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion !=null && this.modoEdicion === 1){
      let persona: Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  guardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.modoEdicion !=null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, persona1);
    }else{
      this.personasService.agregarPersona(persona1);
    }
      this.router.navigate(["personas"]); 
  }

  eliminarPersona(){
    if(this.index !=null){
      this.personasService.eliminarPersona(this.index);
    }
    this.router.navigate(["personas"]);
  }
}
