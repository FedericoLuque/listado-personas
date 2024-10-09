import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient,
              private loginService:LoginService
  ) {}

    cargarPersonas(): Observable<Persona[]>{
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>('https://listado-personas-37f30-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://listado-personas-37f30-default-rtdb.firebaseio.com/datos.json?auth=' + token,
        personas
      )
      .subscribe({
        next: (response) =>  console.log('Resultado guardar Personas: ' + response),
        error: (error) => console.log('Error al guardar personas: ' + error),
        complete: () => console.log("Petición completada con éxito")
  });
  }

  modificarPersona(index:number, persona:Persona){
    const token = this.loginService.getIdToken();
    const url = 'https://listado-personas-37f30-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona).subscribe({
      next: (response) => console.log("resultado modificar Persona: " + response),
      error: (error) => console.log("Error: " + error)
    }
    )
  }

  eliminarPersona(index: number){
    const token = this.loginService.getIdToken();
    const url = 'https://listado-personas-37f30-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url).subscribe({
      next: (response) => console.log("resultado de eliminar persona: " + response),
      error: (error) => console.log("Error eliminando persona: " + error)
    }
  )
  }

}
