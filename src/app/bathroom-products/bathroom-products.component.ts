import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-bathroom-products',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink],
  templateUrl: './bathroom-products.component.html',
  styleUrl: './bathroom-products.component.css'
})
export class BathroomProductsComponent implements OnInit {
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
    this.metaService.updateTag({ name: 'description', content: `Discover stylish and functional bathroom doors designed to enhance your space. Explore our range of durable and water-resistant options, available in various designs to suit your style and privacy needs.` });
    this.metaService.updateTag({ name: 'keywords', content: 'Doors, samuraidoors, entry door glass inserts suppliers, door suppliers near me,door manufacturer,door manufacturers near me,exterior door manufacturers,interior door manufactuers,internal door suppliers,sliding door rollers suppliers,hdb main door supplier,steel door manufacturers,commercial door supplier,interior door suppliers,commercial door suppliers near me,Sliding Bathroom Doors,Frosted Glass Bathroom Doors,Barn Doors for Bathrooms,Bi-Fold Bathroom DoorsGlass Bathroom Doors,Fiberglass Bathroom Doors,Modern Bathroom Doors,Traditional Bathroom Doors,Contemporary Bathroom Doors,Minimalist Bathroom Doors,Lockable Bathroom Doors,Soundproof Bathroom Doors,Water-Resistant Bathroom Doors,DIY Bathroom Door Installation,Hiring Bathroom Door Installers,Bathroom Door Maintenance Tips' });
    
  });
}

reloadPageAfterInterval(interval: number): void {
  setTimeout(() => {
    location.reload();
  }, interval);
}
}