import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bathroomdoor',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,FormsModule,RouterLink],
  templateUrl: './bathroomdoor.component.html',
  styleUrl: './bathroomdoor.component.css'
})
export class BathroomdoorComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { }
  items = [
    { name: 'Blissful blue', categories: ['All Category', 'sliding_door'], image: '../../assets/Blissful blue.png', alt:'Blissful blue',Id:'344D15C01',image2:'../../assets/Blissful blues.png' , size:'2 Feet x 7 Feet and 3 Feet x 7 Feet',material:'UPVC', type:'Bathroom Door' ,accessories:' Suspension fitting with screw-mounted support flange',thickness:'35mm, 40mm , 45mm',weight:'20kgs (+/-3kgs)',polish:'Plain Finish', walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15C01%20and%20Name%3A%20Blissful%20blue'},
    
    { name: 'Modern slide', categories: ['All Category', 'sliding_door'], image: '../../assets/Modern slide.png', alt:'Modern slide',Id:'344D15C02',image2:'../../assets/Modern slides.png' , size:'2 Feet x 7 Feet and 3 Feet x 7 Feet',material:'UPVC', type:'Bathroom Door' ,accessories:'Durable carbon steel rail with top Mounted or Face Mounted Hanger',thickness:'35mm, 40mm , 45mm',weight:'20kgs (+/-3kgs)',polish:'Plain Finish', walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15C02%20and%20Name%3A%20Modern%20slide'},

    { name: 'Luna Lattice', categories: ['All Category', 'flush_door'], image: '../../assets/Luna Lattice.png', alt:'Luna Lattice',Id:'344D15C03',image2:'../../assets/Luna Lattices.png' , size:'2 Feet x 7 Feet and 3 Feet x 7 Feet',material:'WPC wood, Laminate', type:'Bathroom Door' ,accessories:'Heavy duty steel butt hinges, door lock, Stainless steel knobe',thickness:'35mm, 40mm , 45mm',weight:'17kgs (+/-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15C03%20and%20Name%3A%20Luna%20Lattice'},

    { name: 'Radiant Nook', categories: ['All Category', 'glass_door'], image: '../../assets/Radiant Nook.png', alt:'Radiant Nook',Id:'344D15C04',image2:'../../assets/Radiant Nooks.png' , size:'2 Feet x 7 Feet and 3 Feet x 7 Feet',material:'WPC wood frame with Glass', type:'Bathroom Door' ,accessories:'Suspension fitting with screw-mounted support flange',thickness:'35mm, 40mm , 45mm',weight:'17kgs (+/-3kgs)',polish:'Glass Finish', walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15C04%20and%20Name%3A%20Radiant%20Nook'},

    { name: 'Milky White', categories: ['All Category', 'flush_door'], image: '../../assets/Milky White.png', alt:'Milky White',Id:'344D15C05',image2:'../../assets/Milky Whites.png' , size:'2 Feet x 7 Feet and 3 Feet x 7 Feet',material:'WPC wood, Laminate', type:'Bathroom Door' ,accessories:'Heavy duty steel butt hinges, door lock, Stainless steel knobe',thickness:'35mm, 40mm , 45mm',weight:'17kgs (+/-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15C05%20and%20Name%3A%20Milky%20White'},

    { name: 'Mirage Melody', categories: ['All Category', 'flush_door'], image: '../../assets/Mirage Melody.png', alt:'Mirage Melody',Id:'344D15C06',image2:'../../assets/Mirage Melodys.png' , size:'2 Feet x 7 Feet and 3 Feet x 7 Feet',material:'WPC wood, Laminate', type:'Bathroom Door' ,accessories:'Heavy duty steel butt hinges, door lock, Stainless steel knobe',thickness:'35mm, 40mm , 45mm',weight:'17kgs (+/-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15C06%20and%20Name%3A%20Mirage%20Melody'},

    { name: 'Radiant Reflection', categories: ['All Category', 'flush_door'], image: '../../assets/Radiant Reflection.png', alt:'Radiant Reflection',Id:'344D15C07',image2:'../../assets/Radiant Reflections.png' , size:'2 Feet x 7 Feet and 3 Feet x 7 Feet',material:'WPC wood, Laminate', type:'Bathroom Door' ,accessories:'Heavy duty steel butt hinges, door lock, Stainless steel knobe',thickness:'35mm, 40mm , 45mm',weight:'17kgs (+/-3kgs)',polish:'Laminate Finish', walink:'https://wa.me/919819441877?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15C07%20and%20Name%3A%20Radiant%20Reflection'},

  ];

  selectedCategory = 'All Category';

  setCurrentCategory(category: string) {
    this.selectedCategory = category;
  }

  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  }

  ngOnInit(): void {
    // Initialize meta tags
    this.meta.addTags([
      { name: 'description', content:'Discover stylish and functional bathroom doors designed to enhance your space. Explore our range of durable and water-resistant options, available in various designs to suit your style and privacy needs.' },
      { name: 'keywords', content:'Doors, samuraidoors, entry door glass inserts suppliers, door suppliers near me,door manufacturer,door manufacturers near me,exterior door manufacturers,interior door manufactuers,internal door suppliers,sliding door rollers suppliers,hdb main door supplier,steel door manufacturers,commercial door supplier,interior door suppliers,commercial door suppliers near me,Sliding Bathroom Doors,Frosted Glass Bathroom Doors,Barn Doors for Bathrooms,Bi-Fold Bathroom DoorsGlass Bathroom Doors,Fiberglass Bathroom Doors,Modern Bathroom Doors,Traditional Bathroom Doors,Contemporary Bathroom Doors,Minimalist Bathroom Doors,Lockable Bathroom Doors,Soundproof Bathroom Doors,Water-Resistant Bathroom Doors,DIY Bathroom Door Installation,Hiring Bathroom Door Installers,Bathroom Door Maintenance Tips,Blissful blue,Modern slide,Luna Lattice,Radiant Nook ,Milky White,Mirage Melody,Radiant Reflection'}
      // Add more meta tags as needed
    ]);
    this.setTitle('Bathroom Doors|Samurai Doors|Door Manufactures|Door suppliers');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  }

