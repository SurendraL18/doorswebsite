import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-bathroomdoor',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './bathroomdoor.component.html',
  styleUrl: './bathroomdoor.component.css'
})
export class BathroomdoorComponent  {
  items = [
    { name: 'Ebony Door', categories: ['All Category', 'double_door'], image: '../../assets/Ebony Door.png', alt:'Ebony Door' },
    { name: 'Johnson cherry Door', categories: ['All Category', 'double_door', 'designer_door'], image: '../../assets/Johnson cherry Door.png' ,alt:'Johnson cherry Door' },
    { name: 'Colonial Maple Door', categories: ['All Category', 'double_door'], image: '../../assets/Colonial Maple Door.png', alt:'Colonial Maple Door' },
    { name: 'Special Walnut fiberglass Door', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Special Walnut fiberglass Door.png', alt:'Special Walnut fiberglass Door'},
    { name: 'Dark Walnut Door', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Dark Walnut Door.png',alt:'Dark Walnut Door' },
    { name: 'Red Oak Door', categories: ['All Category', 'double_door', 'designer_door'], image: '../../assets/Red Oak Door.png', alt:'Red Oak Door' },
    { name: 'Ebony fiberglass Door', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Ebony fiberglass Door.png', alt:'Ebony fiberglass Door' },
    { name: 'Dark Walnut Twin Door', categories: ['All Category', 'twin_door'], image: '../../assets/Dark Walnut Twin Door.png', alt:' Dark Walnut Twin Door' },
    { name: 'Soft peach Twin Door', categories: ['All Category', 'twin_door'], image: '../../assets/Soft peach Twin Door.png', alt:'Soft peach Twin Door' },
    { name: 'Natural wood PVC Twin Door', categories: ['All Category', 'twin_door'], image: '../../assets/Natural wood PVC Twin Door.png', alt:'Natural wood PVC Twin Door' },
    { name: 'Serenity Swirl Twin Door', categories: ['All Category', 'twin_door'], image: '../../assets/Serenity Swirl Twin Door.png', alt:'Serenity Swirl Twin Door' },
  ];

  selectedCategory = 'All Category';

  setCurrentCategory(category: string) {
    this.selectedCategory = category;
  }
}
