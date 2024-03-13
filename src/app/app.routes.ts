import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { MaindoorComponent } from './maindoor/maindoor.component';
import { HomeComponent } from './home/home.component';
import { BedroomdoorComponent } from './bedroomdoor/bedroomdoor.component';
import { BathroomdoorComponent } from './bathroomdoor/bathroomdoor.component';
import { MaindoorProductsComponent } from './maindoor-products/maindoor-products.component';
import { BedroomProductComponent } from './bedroom-product/bedroom-product.component';
import { BathroomProductsComponent } from './bathroom-products/bathroom-products.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccessoriesProductComponent } from './accessories-product/accessories-product.component';

export const routes: Routes = [
  { path: 'contactus', component: ContactusComponent},
  { path: 'maindoors', component: MaindoorComponent},
  { path: 'bedroomdoors', component: BedroomdoorComponent},
  { path: 'bathroomdoors', component: BathroomdoorComponent},
  { path: 'accessories', component: AccessoriesComponent},
  { path: '', component: HomeComponent},
  { path: 'MaindoorProduct/:id/:name/:image/:material/:size/:image2/:accessories/:polish/:thickness/:type/:weight/:alt/:walink', component: MaindoorProductsComponent},
  { path: 'bedroomProduct/:id/:name/:image/:material/:size/:image2/:accessories/:polish/:thickness/:type/:weight/:alt/:walink', component: BedroomProductComponent},
  { path: 'bathroomProduct/:id/:name/:image/:material/:size/:image2/:accessories/:polish/:thickness/:type/:weight/:alt/:walink', component: BathroomProductsComponent},
  { path: 'AccessoriesProduct/:id/:name/:image/:material/:alt/:walink', component: AccessoriesProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
