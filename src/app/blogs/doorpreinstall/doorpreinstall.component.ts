import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-doorpreinstall',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './doorpreinstall.component.html',
  styleUrl: './doorpreinstall.component.css'
})
export class DoorpreinstallComponent {
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'This document, created by the  Door Manufacturers , provides detailed guidance on the pre-installation preparation, site reception, handling, storage, and installation of custom-made timber doorsets. It emphasizes best practices for fire door installation, compliance with building regulations, and proper handling and storage to maintain product integrity.'},
      {name: 'keywords', content: 'Timber Doorsets,Custom-Made Doors,Fire Door Installation,Door Handling and Storage,Architectural Doors,Pre-Installation Preparation,Building Regulations,Door Assembly,Door Hardware Installation,Doorframe Fixing,Intumescent Systems,Moisture Content in Doors,Site Reception Guidelines,British Standards for Doors'},
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
       { rel: 'canonical', href: 'https://www.samuraidoors.com/Doorinstallation' }
     ]);

    this.setTitle('Door-Installation, Handling, and Installation of Custom-Made Timber');
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
