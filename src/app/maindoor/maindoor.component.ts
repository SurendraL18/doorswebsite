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
  { name: 'Product 1', categories: ['All Category', 'double_door'] },
  { name: 'Product 2', categories: ['All Category', 'single_door'] },
  { name: 'Product 3', categories: ['All Category', 'twin_door'] },
  { name: 'Product 4', categories: ['All Category', 'double_door'] },
  { name: 'Product 5', categories: ['All Category', 'single_door'] },
  { name: 'Product 6', categories: ['All Category', 'twin_door'] },
];

selectedCategory = 'All Category';

setCurrentCategory(category: string) {
  this.selectedCategory = category;
}
}