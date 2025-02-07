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
import { BlogMainComponent } from './blogs/blog-main/blog-main.component';
import { Blogpage1Component } from './blogs/blogpage1/blogpage1.component';
import { DoorRevolutionComponent } from './blogs/door-revolution/door-revolution.component';
import { DoorframeprodComponent } from './doorframe/doorframeprod/doorframeprod.component'; 
import { TeakwoodFrameComponent } from './doorframe/teakwood-frame/teakwood-frame.component';
import { RosewoodComponent } from './doorframe/rosewood/rosewood.component';
import { MerantiwoodComponent } from './doorframe/merantiwood/merantiwood.component';
import { PinewoodComponent } from './doorframe/pinewood/pinewood.component';
import { CedarWoodComponent } from './doorframe/cedar-wood/cedar-wood.component';
import { SalwoodComponent } from './doorframe/salwood/salwood.component';
import { IvorytealwoodComponent } from './doorframe/ivorytealwood/ivorytealwood.component';
import { NagpurteakwoodComponent } from './doorframe/nagpurteakwood/nagpurteakwood.component';
import { ChaapwoodComponent } from './doorframe/chaapwood/chaapwood.component';
import { CommercialDoorComponent } from './commercial-door/commercial-door.component';
import { DoorguideComponent } from './blogs/doorguide/doorguide.component';
import { DoorpreinstallComponent} from './blogs/doorpreinstall/doorpreinstall.component';

export const routes: Routes = [
  { path: 'contactus', component: ContactusComponent},
  { path: 'maindoors', component: MaindoorComponent},
  { path: 'bedroomdoors', component: BedroomdoorComponent},
  { path: 'bathroomdoors', component: BathroomdoorComponent},
  { path: 'accessories', component: AccessoriesComponent},
  { path: 'blogs', component: BlogMainComponent},
  { path: 'blog1', component: Blogpage1Component},
  { path: '', component: HomeComponent},
  { path: 'MaindoorProduct/:id/:name/:image/:material/:size/:image2/:accessories/:polish/:thickness/:type/:weight/:alt/:walink', component: MaindoorProductsComponent},
  { path: 'bedroomProduct/:id/:name/:image/:material/:size/:image2/:accessories/:polish/:thickness/:type/:weight/:alt/:walink', component: BedroomProductComponent},
  { path: 'bathroomProduct/:id/:name/:image/:material/:size/:image2/:accessories/:polish/:thickness/:type/:weight/:alt/:walink', component: BathroomProductsComponent},
  { path: 'AccessoriesProduct/:id/:name/:image/:material/:alt/:walink', component: AccessoriesProductComponent},
  { path: 'EvolutionofDoor', component: DoorRevolutionComponent},
  { path: 'DoorFrame', component: DoorframeprodComponent},
  { path: 'TeakWood', component: TeakwoodFrameComponent},
  { path: 'RoseWood', component: RosewoodComponent},
  { path: 'MerantiWood', component: MerantiwoodComponent},
  { path: 'PineWood', component: PinewoodComponent},
  { path: 'CedarWood', component: CedarWoodComponent},
  { path: 'SalWood', component: SalwoodComponent},
  { path: 'IvoryTeakWood', component: IvorytealwoodComponent},
  { path: 'NagpurWood', component: NagpurteakwoodComponent},
  { path: 'ChapWood', component: ChaapwoodComponent},
  { path: 'DeveloperEdition', component: CommercialDoorComponent},
  { path: 'Doorguide', component: DoorguideComponent},
  { path: 'Doorinstallation', component: DoorpreinstallComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
