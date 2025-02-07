import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cedar-wood',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './cedar-wood.component.html',
  styleUrl: './cedar-wood.component.css'
})
export class CedarWoodComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Discover the premium Deodar Wood - Cedar Wood door frames, renowned for their durability and natural beauty. Learn about their origins in the Western Himalayas, their superior resistance to weather conditions, and their noise-absorbing and pest-repelling properties. Available in various sizes, our high-quality wood frames are perfect for enhancing your homes decor. Speak to our experts for quotes and further information.'},
      {name: 'keywords', content: 'deodar wood, cedar wood, door frames, premium wood, cedar advantages, deodar origin, cedar benefits, wood sizes, home decor, wood frames, high-quality wood, buy wood, wood products, get a quote, durable wood, pest-resistant wood'}
    ]);
    this.setTitle('Deodar Wood - Cedar Wood Door Frames | Premium Quality | Samurai Door Frames');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }

}
