import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-salwood',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './salwood.component.html',
  styleUrl: './salwood.component.css'
})
export class SalwoodComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Explore the advantages of Sal Wood, a high-density, termite-resistant timber native to India, Myanmar, and Nepal. Known for its durability, rich reddish-brown hue, and versatility, Sal Wood is ideal for furniture, flooring, cabinetry, and more. Learn about its moisture resistance, aesthetic appeal, and sustainability for eco-conscious projects.'},
      {name: 'keywords', content: 'Sal Wood, durable timber, termite-resistant wood, high-density wood, aesthetic wood, furniture wood, sustainable timber, outdoor furniture wood, sal tree, Indian timber, moisture-resistant wood'}
    ]);
    this.setTitle('Sal Wood – Durable, Termite-Resistant & Aesthetic Timber for Furniture and Construction');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
}