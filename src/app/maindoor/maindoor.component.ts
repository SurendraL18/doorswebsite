import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';




@Component({
  selector: 'app-maindoor',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './maindoor.component.html',
  styleUrl: './maindoor.component.css'
})
export class MaindoorComponent   {
  items = [
    { name: 'Ebony', categories: ['All Category', 'double_door'], image: '../../assets/Ebony Door.png', alt:'Ebony Door' },
    { name: 'Johnson cherry', categories: ['All Category', 'double_door', 'designer_door'], image: '../../assets/Johnson cherry Door.png' ,alt:'Johnson cherry Door' },
    { name: 'Colonial Maple', categories: ['All Category', 'double_door'], image: '../../assets/Colonial Maple Door.png', alt:'Colonial Maple Door' },
    { name: 'Special Walnut fiberglass', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Special Walnut fiberglass Door.png', alt:'Special Walnut fiberglass Door'},
    { name: 'Dark Walnut', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Dark Walnut Door.png',alt:'Dark Walnut Door' },
    { name: 'Red Oak', categories: ['All Category', 'double_door', 'designer_door'], image: '../../assets/Red Oak Door.png', alt:'Red Oak Door' },
    { name: 'Ebony fiberglass', categories: ['All Category', 'double_door','designer_door'], image: '../../assets/Ebony fiberglass Door.png', alt:'Ebony fiberglass Door' },
    { name: 'Dark Walnut', categories: ['All Category', 'twin_door'], image: '../../assets/Dark Walnut Twin Door.png', alt:' Dark Walnut Twin Door' },
    { name: 'Soft Peach', categories: ['All Category', 'twin_door'], image: '../../assets/Soft peach Twin Door.png', alt:'Soft peach Twin Door' },
    { name: 'Natural Wood PVC', categories: ['All Category', 'twin_door'], image: '../../assets/Natural wood PVC Twin Door.png', alt:'Natural wood PVC Twin Door' },
    { name: 'Serenity Swirl', categories: ['All Category', 'twin_door'], image: '../../assets/Serenity Swirl Twin Door.png', alt:'Serenity Swirl Twin Door' },
  ];

  selectedCategory = 'All Category';

  setCurrentCategory(category: string) {
    this.selectedCategory = category;
  }
}
