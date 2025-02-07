import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bedroom-product',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink],
  templateUrl: './bedroom-product.component.html',
  styleUrl: './bedroom-product.component.css'
})
export class BedroomProductComponent implements OnInit {
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


  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

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
     // Set title dynamically
     this.titleService.setTitle(this.productName);

     // Set meta tags including description and keywords
     this.metaService.updateTag({ name: 'description', content: `Upgrade your bedroom with our high-quality doors. Choose from a variety of styles and materials to match your aesthetic preferences and enhance privacy and security` });
     this.metaService.updateTag({ name: 'keywords', content: 'main door, samuraidoors, entry door glass inserts suppliers, door suppliers near me,door manufacturer,door manufacturers near me,exterior door manufacturers,interior door manufactuers,fire door manufacturerfire door suppliers,internal door suppliers,sliding door rollers suppliers,hdb main door supplier,steel door manufacturers,wood door manufacturers,wooden door supplier,kitchen door manufacturers,front door suppliers,front door manufacturers,steel door frames manufacturers,aluminium door manufacturers,frp door manufacturers,aluminum door window manufacturing,steel door supplier,commercial door supplier,interior door suppliers,commercial door suppliers near me,, Classic  bedroom door, Stella bedroom door,Flex bedroom door, Black Royalty bedroom door, Linea Premium 3 bedroom door,Linea Premium 4 bedroom door,Dark Walunt 3 bedroom door, Unionbedroom door,Matte Grey bedroom door,Strandbedroom door,Domino Walnut bedroom door,Brown Grains bedroom door,Ethereal Elegance bedroom door,Modern Elegance Door bedroom door,Ginger Ash Barn Door bedroom door,Charm Sliding Door bedroom door,Urbanite Barn Door bedroom door,Opulence Barn Door bedroom door,Royal Glide Entrance bedroom door,raja bedroom door' });
     // Add more keywords as needed
   });
 }

 reloadPageAfterInterval(interval: number): void {
   setTimeout(() => {
     location.reload();
   }, interval);
 } 
}