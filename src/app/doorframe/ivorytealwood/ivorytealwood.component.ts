import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ivorytealwood',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './ivorytealwood.component.html',
  styleUrl: './ivorytealwood.component.css'
})
export class IvorytealwoodComponent  {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Explore the finest Ivory Teak Wood door frames, known for exceptional durability, high resistance to pests and weather, and a rich golden-brown color that deepens over time. Perfect for homes looking for beauty and longevity.'},
      {name: 'keywords', content: 'Ivory teak wood, teak wood door frames, durable teak wood, pest-resistant wood, moisture-resistant teak, luxury door frames, teak wood for homes, low maintenance wood, elegant wood door frames, Ivory Coast teak'}
    ]);
    this.setTitle('Ivory Teak Wood Door Frames - Durable, Elegant, & Low Maintenance');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
}