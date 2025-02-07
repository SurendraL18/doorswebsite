import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';


@Component({
  selector: 'app-chaapwood',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './chaapwood.component.html',
  styleUrl: './chaapwood.component.css'
})
export class ChaapwoodComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Discover Chaap Wood door frames, known for their fine grain, lightweight structure, pleasant fragrance, and durability. Perfect for homes that value aesthetics and long-lasting materials. Ideal for carvings, doors, and furniture.'},
      {name: 'keywords', content: 'Chaap wood, Champ wood, Michelia champaca, lightweight wood door frames, aromatic wood, durable wood, fine grain wood, hardwood door frames, high-density wood, Chaap wood for homes, Champaca tree wood'}
    ]);
    this.setTitle('Chaap Wood Door Frames - Lightweight, Durable, & Aromatic Wood for Elegant Homes');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
}