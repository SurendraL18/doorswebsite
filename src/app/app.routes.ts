import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { MaindoorComponent } from './maindoor/maindoor.component';
import { HomeComponent } from './home/home.component';
import { BedroomdoorComponent } from './bedroomdoor/bedroomdoor.component';
import { BathroomdoorComponent } from './bathroomdoor/bathroomdoor.component';


export const routes: Routes = [
  { path: 'contactus', component: ContactusComponent},
  { path: 'maindoors', component: MaindoorComponent},
  { path: 'bedroomdoors', component: BedroomdoorComponent},
  { path: 'bathroomdoors', component: BathroomdoorComponent},
  { path: 'home', component: HomeComponent},
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
