import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient) {}

    cargarPersonas(): Observable<Persona[]>{
        return this.httpClient.get<Persona[]>('https://listado-personas-37f30-default-rtdb.firebaseio.com/datos.json');
    }


  guardarPersonas(personas: Persona[]) {
    this.httpClient
      .put(
        'https://listado-personas-37f30-default-rtdb.firebaseio.com/datos.json',
        personas
      )
      .subscribe({
        next: (response) =>  console.log('Resultado guardar Personas: ' + response),
        error: (error) => console.log('Error al guardar personas: ' + error),
        complete: () => console.log("Petición completada con éxito")
  });
  }

  modificarPersona(index:number, persona:Persona){
    let url: string;
    url = 'https://listado-personas-37f30-default-rtdb.firebaseio.com/datos/' + index + '.json';
    this.httpClient.put(url, persona).subscribe({
      next: (response) => console.log("resultado modificar Persona: " + response),
      error: (error) => console.log("Error: " + error)
    }
    )
  }


}
