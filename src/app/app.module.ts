import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './persona/persona.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoggingService } from './LoggingService.service';

@NgModule({
  declarations: [AppComponent, PersonaComponent, FormularioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    LoggingService,
  ] /* Servicio compartido con todos los componentes de nuestra aplicación */,
  bootstrap: [AppComponent],
})
export class AppModule {}
