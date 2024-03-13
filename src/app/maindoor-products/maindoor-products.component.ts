import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-maindoor-products',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './maindoor-products.component.html',
  styleUrl: './maindoor-products.component.css'
})
export class MaindoorProductsComponent  implements OnInit {
  productId!: string;
  productName!: string;
  productImage!: string;
  productImage2!: string;
  productSize!: string;
  productMaterial!: string;
  productType!: string;
  productAccessories!: string;
  productThickness!:string;
  productWeight!:string;
  productPolish!:string;
  productmaindoor!:string;
  walink!:string;

  constructor(private route: ActivatedRoute)  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productId = id !== null ? id : '';
      const name= params.get('name')
      this.productName = name !== null ? name :'';
      const image = params.get('image');
      this.productImage = image !== null ? image :'';
      const image2 = params.get('image2');
      this.productImage2 = image2 !== null ? image2 :'';
      const size = params.get('size');
      this.productSize = size !== null ? size :'';
      const material = params.get('material');
      this.productMaterial= material !== null ? material:'';
      const type= params.get('type');
      this.productType = type !== null ? type:'';
      const accessories= params.get('accessories');
      this. productAccessories = accessories !== null ? accessories:'';
      const thickness= params.get('thickness');
      this.productThickness = thickness !== null ? thickness:'';
      const weight= params.get('weight');
      this.productWeight= weight !== null ? weight:'';
      const polish= params.get('polish');
      this.productPolish= polish !== null ? polish:'';
      const walink= params.get('walink');
      this.walink= walink !== null ? walink:'';
    });
  }
}