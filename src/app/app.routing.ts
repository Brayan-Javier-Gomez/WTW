import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonasComponent } from './components/personas/personas.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'personas' , component: PersonasComponent},
  {path: '**', pathMatch: 'full' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }