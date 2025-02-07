import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-main',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css'
})
export class BlogMainComponent implements OnInit {

  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: '"Discover the crucial factors to consider when selecting a new main door for your home. From security features to design aesthetics, explore key considerations to ensure you make the perfect choice for your needs. Find the ideal balance of style, functionality, and durability to enhance the appeal and security of your home entrance'},
      {name: 'keywords', content: 'main door, buying guide, considerations, home improvement, security features, design aesthetics, durability, entrance door, residential door, door selection'},
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
       { rel: 'canonical', href: 'https://www.samuraidoors.com/blogs' }
     ]);

    this.setTitle('Essential Considerations for Choosing Your New Main Door');
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
