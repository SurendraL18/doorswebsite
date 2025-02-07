import { Component, Inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ReloadService } from '../reload.service';
import { Meta,Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ReloadService] 
})

export class HomeComponent  

{

  constructor(private meta: Meta, private title: Title, @Inject(DOCUMENT) private doc: Document) {
    this.meta.addTags([
      // SEO Metadata
      { name: 'description', content: 'Discover leading door manufacturer in Mumbai, offering a variety of premium doors, including wooden, steel, glass, and fire-rated options, designed for durability and style.' },
      { name: 'keywords', content: 'Doors manufacturers in Mumbai, Doors manufacturers in India, wooden doors, steel doors, glass doors, FRD doors, fire-rated doors, quality doors in Mumbai, door suppliers' },
      
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
      { rel: 'canonical', href: 'https://www.samuraidoors.com/' }
    ]);
    
    this.setTitle('Door Manufacturers in mumbai | Door Suppliers|Samurai Doors');
  }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit() {
    
  }


}


