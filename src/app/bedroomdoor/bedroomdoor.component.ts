import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bedroomdoor',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,FormsModule],
  templateUrl: './bedroomdoor.component.html',
  styleUrl: './bedroomdoor.component.css'
})
export class BedroomdoorComponent    {
  items = [
    { name: 'Classic', categories: ['All Category', 'single'], image: '../../assets/Classic.png', alt:'Classic'},
    { name: 'Stella', categories: ['All Category', 'single'], image: '../../assets/Stella.png', alt:'Ebony Door'},
    { name: 'Flex', categories: ['All Category', 'single'], image: '../../assets/Flex.png', alt:'Flex'},
    { name: 'Black Royalty', categories: ['All Category', 'single'], image: '../../assets/Black Royalty.png', alt:'Black Royalty'},
    { name: 'Linea Premium 3', categories: ['All Category', 'single'], image: '../../assets/Linea Premium 3.png', alt:'Linea Premium 3'},
    { name: 'Linea Premium 4', categories: ['All Category', 'single'], image: '../../assets/Linea Premium 4.png', alt:'Linea Premium 4'},
    { name: 'Dark Walunt 3', categories: ['All Category', 'single'], image: '../../assets/Dark Walunt 3.png', alt:'Dark Walunt 3'},
    { name: 'Union', categories: ['All Category', 'single'], image: '../../assets/Union.png', alt:'Union'},
    { name: 'Linewood', categories: ['All Category', 'single'], image: '../../assets/Linewood.png', alt:'Linewood'},
    { name: 'Matte Grey', categories: ['All Category', 'single'], image: '../../assets/Matte Grey.png', alt:'Matte Grey'},
    { name: 'Strand', categories: ['All Category', 'single'], image: '../../assets/Strand.png', alt:'Strand'},
    { name: 'Domino Walnut', categories: ['All Category', 'single'], image: '../../assets/Domino Walnut.png', alt:'Domino Walnut'},
    
  ];

  selectedCategory = 'All Category';

  setCurrentCategory(category: string) {
    this.selectedCategory = category;
  }
}
