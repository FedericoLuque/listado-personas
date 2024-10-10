import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FirebaseService } from './firebase.service';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
  declarations: [AppComponent, PersonaComponent, FormularioComponent, PersonasComponent, ErrorComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    LoggingService,
    PersonasService,
    DataServices,
    provideHttpClient(withInterceptorsFromDi()),
    FirebaseService,
    LoginService,
    LoginGuardian
  ] /* Servicios compartidos con todos los componentes de nuestra aplicación */,
  bootstrap: [AppComponent],
})
export class AppModule {}
