import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
    selector: 'app-door-revolution',
    standalone: true,
    templateUrl: './door-revolution.component.html',
    styleUrl: './door-revolution.component.css',
    imports: [NavbarComponent, RouterLink, FooterComponent]
})
export class DoorRevolutionComponent {

  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Discover the rich history of doors, from ancient stone barriers to modern smart and eco-friendly designs. Explore the evolution of door technology, materials, and craftsmanship throughout the ages.'},
      {name: 'keywords', content: 'History of Doors,Evolution of Doors,Ancient Door Designs,Modern Door Technology,Door Craftsmanship,Smart Doors,Eco-Friendly Doors,Door Materials,Architectural History,Door Innovations'},
       // Open Graph Metadata for social sharing
       { property: 'og:title', content: 'Samurai Doors - Quality Door Manufacturers and Suppliers' },
       { property: 'og:description', content: 'Explore Samurai Doors for top-rated door manufacturers in Mumbai. Wooden, steel, glass, and fire-rated doors with exceptional craftsmanship.' },
       { property: 'og:type', content: 'website' },
       { property: 'og:url', content: 'https://www.samuraidoors.com/' },
       { property: 'og:image', content: 'https://www.samuraidoors.com/assets/8.png'},
       
       // Twitter Card Metadata
       { name: 'twitter:card', content: 'summary_large_image' },
       { name: 'twitter:title', content: 'Samurai Doors - Door Manufacturers in Mumbai' },
       { name: 'twitter:description', content: 'Offering top-rated wooden, steel, glass, and fire-rated doors in Mumbai. Enhance your space with Samurai Doors.' },
       { name: 'twitter:image', content: 'https://www.samuraidoors.com/assets/8.png' },
       
       // Viewport and Author Metadata
       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
       { name: 'author', content: 'Samurai Doors' },
       
       // Canonical URL
       { rel: 'canonical', href: 'https://www.samuraidoors.com/EvolutionofDoor' }
    ]);
    this.setTitle('The Evolution of Doors: A Comprehensive History from Ancient Times to Modern Day');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
 



  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  }

}
