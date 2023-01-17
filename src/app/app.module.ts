import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/shared/header/header.component'
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    UsuariosComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
