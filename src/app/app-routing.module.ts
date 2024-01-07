import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FilmAddEditComponent } from './film-add/film-add-edit.component';
import { ListefilmComponent } from './listefilm/listefilm.component';


const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'filmaddedit', component:FilmAddEditComponent},
  {path:'listefilm', component:ListefilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
