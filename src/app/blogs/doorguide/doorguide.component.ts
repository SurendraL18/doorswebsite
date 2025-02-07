import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-doorguide',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './doorguide.component.html',
  styleUrl: './doorguide.component.css'
})
export class DoorguideComponent {
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Explore ASDMA essential guide on custom door installation and maintenance. Learn about fire door safety, preventive care, damage prevention, and troubleshooting for long-lasting performance'},
      {name: 'keywords', content: 'custom door near me,custom door in mumbai ,custom door installation guide ,ASDMA door maintenance best practices,Fire door safety standards,Preventive door maintenance tips,Architectural door care,Troubleshooting door malfunctions,Door damage prevention techniques,Custom door installation checklist,Door inspection and handover procedure,Door hardware maintenance,Building code compliance for doors,Timber fire doors guide,Professional door maintenance services,Custom door troubleshooting,Door gap maintenance standards,samurai doors ,fire rated Doors ,doors manufactures in mumbai ,main door, buying guide, considerations, home improvement, security features, design aesthetics, durability, entrance door, residential door, door selection'},
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
       { rel: 'canonical', href: 'https://www.samuraidoors.com/Doorguide' }
    ]);
    this.setTitle('Complete Guide to Installing and Maintaining Doors ');
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
