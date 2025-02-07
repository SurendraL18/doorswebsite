import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';


@Component({
  selector: 'app-nagpurteakwood',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './nagpurteakwood.component.html',
  styleUrl: './nagpurteakwood.component.css'
})
export class NagpurteakwoodComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Discover Nagpur Teak Wood, known for its exceptional durability, high oil content, and resistance to pests like termites. Sourced from the forests of Maharashtra, this teak wood offers superior dimensional stability and a rich golden-brown aesthetic that improves over time. Ideal for long-lasting, low-maintenance furniture and construction in both humid and varying climates'},
      {name: 'keywords', content: 'Nagpur teak wood, durable teak, high oil content teak, termite-resistant wood, pest-resistant timber, aesthetic teak, golden-brown teak, teak furniture, teak for humid climates, Maharashtra teak, low-maintenance wood'}
    ]);
    this.setTitle('Nagpur Teak Wood – Durable, Pest-Resistant & Aesthetic Timber for Long-Lasting Furniture');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
}
