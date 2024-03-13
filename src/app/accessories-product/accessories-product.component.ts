import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-accessories-product',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './accessories-product.component.html',
  styleUrl: './accessories-product.component.css'
})
export class AccessoriesProductComponent implements OnInit {
  productId!: string;
  productName!: string;
  productImage!: string;
  productMaterial!: string;
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
      const material = params.get('material');
      this.productMaterial= material !== null ? material:'';
      const walink= params.get('walink');
      this.walink= walink !== null ? walink:'';
    });
  }


}

