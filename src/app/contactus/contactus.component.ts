import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
        // Basic SEO metadata
    { name: 'description', content: 'Discover top-rated door manufacturers in Mumbai. Explore premium wooden, steel, glass, and fire-rated doors crafted for superior durability and design.' },
    { name: 'keywords', content: 'door manufacturers in Mumbai within 8.1 km, door manufacturers in Mumbai, door manufacturers in Mumbai with price, top-rated door manufacturers in Mumbai, wooden door manufacturers in Mumbai, exterior door manufacturers in Mumbai, WPC door manufacturers in Mumbai, wood door manufacturers in Mumbai, PVC door manufacturers in Mumbai, safety door manufacturers in Mumbai, flush door manufacturers in Mumbai' },

    // Open Graph (OG) metadata for social sharing
    { property: 'og:title', content: 'Contact Info | Samurai Doors | Door Manufacturers | Door Suppliers' },
    { property: 'og:description', content: 'Connect with Samurai Doors, leading door manufacturers and suppliers in Mumbai. Explore a wide range of wooden, steel, and fire-rated doors to enhance your space.' },
    { property: 'og:url', content: 'https://www.samuraidoors.com/contact' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://www.samuraidoors.com/assets/images/door-contact-preview.jpg' },
    { property: 'og:site_name', content: 'Samurai Doors' },

    // Twitter Card metadata
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact Info | Samurai Doors | Door Manufacturers | Door Suppliers' },
    { name: 'twitter:description', content: 'Explore Samurai Doors: Quality wooden, steel, and fire-rated doors in Mumbai. Contact us today for superior craftsmanship and innovative designs.' },
    { name: 'twitter:image', content: 'https://www.samuraidoors.com/assets/images/door-contact-preview.jpg' },

    // Viewport metadata for mobile responsiveness
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

    // Author and canonical metadata
    { name: 'author', content: 'Samurai Doors' },
    { rel: 'canonical', href: 'https://www.samuraidoors.com/contact' },

    // Additional metadata for search engines
    { name: 'robots', content: 'index, follow' }, // Ensure the page is indexed and links are followed
    { name: 'theme-color', content: '#000000' } // Optional: Sets the theme color for mobile browsers
  ]);
    this.setTitle('Contact Info|Samurai Doors|Door Manufactures|Door suppliers');
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
