import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-maindoor-products',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink],
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
  productThickness!: string;
  productWeight!: string;
  productPolish!: string;
  productmaindoor!: string;
  walink!: string;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productId = id !== null ? id : '';
      const name = params.get('name');
      this.productName = name !== null ? name : '';
      const image = params.get('image');
      this.productImage = image !== null ? image : '';
      const image2 = params.get('image2');
      this.productImage2 = image2 !== null ? image2 : '';
      const size = params.get('size');
      this.productSize = size !== null ? size : '';
      const material = params.get('material');
      this.productMaterial = material !== null ? material : '';
      const type = params.get('type');
      this.productType = type !== null ? type : '';
      const accessories = params.get('accessories');
      this.productAccessories = accessories !== null ? accessories : '';
      const thickness = params.get('thickness');
      this.productThickness = thickness !== null ? thickness : '';
      const weight = params.get('weight');
      this.productWeight = weight !== null ? weight : '';
      const polish = params.get('polish');
      this.productPolish = polish !== null ? polish : '';
      const walink = params.get('walink');
      this.walink = walink !== null ? walink : '';

      // Set title dynamically
      this.titleService.setTitle(this.productName);

      // Set meta tags including description and keywords
      this.metaService.updateTag({ name: 'description', content: `Elevate your home's security and style with ${this.productName} Main Door. Crafted for durability and equipped with advanced locking mechanisms, our doors offer peace of mind and aesthetic appeal. Explore our range today! ` });
      this.metaService.updateTag({ name: 'keywords', content: 'main door, samuraidoors, entry door glass inserts suppliers, door suppliers near me,door manufacturer,door manufacturers near me,exterior door manufacturers,interior door manufactuers,fire door manufacturerfire door suppliers,internal door suppliers,sliding door rollers suppliers,hdb main door supplier,steel door manufacturers,wood door manufacturers,wooden door supplier,kitchen door manufacturers,front door suppliers,front door manufacturers,steel door frames manufacturers,aluminium door manufacturers,frp door manufacturers,aluminum door window manufacturing,steel door supplier,commercial door supplier,interior door suppliers,commercial door suppliers near me' });
      // Add more keywords as needed
    });
  }

  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  }
} 