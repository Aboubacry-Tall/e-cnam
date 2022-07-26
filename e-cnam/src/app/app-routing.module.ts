import { DetailsRendiezvausComponent } from './details-rendiezvaus/details-rendiezvaus.component';
import { UpdateRendiezvausComponent } from './update-rendiezvaus/update-rendiezvaus.component';
import { RendezVausListComponent } from './rendez-vaus-list/rendez-vaus-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rendezVaus', component: RendezVausListComponent},
  { path: 'update/:id', component: UpdateRendiezvausComponent},
  { path: 'details/:id', component: DetailsRendiezvausComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
