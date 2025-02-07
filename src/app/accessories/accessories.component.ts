import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule,FormsModule,RouterLink],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})

export class AccessoriesComponent  implements OnInit  {
   
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) { }
  items = [
    { name:'Woodcraft Pulls', categories: ['All Category', 'handle'], image: '../../assets/Woodcraft Pulls.png', alt:'Woodcraft Pulls',Id:'344D15D01' ,material:'Solid Wood', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D01%20and%20Name%3A%20Woodcraft%20Pulls'},

    { name:'Woodcraft Handle', categories: ['All Category', 'handle','knobe'], image: '../../assets/Woodcraft Handle.png', alt:'Woodcraft Handle',Id:'344D15D02' ,material:'Solid Wood', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D02%20and%20Name%3A%20Woodcraft%20Handle'},

    { name:'Bail Pulls', categories: ['All Category', 'handle'], image: '../../assets/Bail Pulls.png', alt:'Bail Pulls',Id:'344D15D03' ,material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D03%20and%20Name%3A%20Bail%20Pulls'},

    { name:'Bail Pulls Round', categories: ['All Category', 'handle'], image: '../../assets/Bail Pulls Round.png', alt:'Bail Pulls Round',Id:'344D15D04' ,material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D04%20and%20Name%3A%20Bail%20Pulls%20Round'},

    { name:'SteelForge Handle', categories: ['All Category', 'handle'], image: '../../assets/SteelForge Handle.png', alt:'SteelForge Handle',Id:'344D15D05' ,material:'Steel/Stainless Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D05%20and%20Name%3A%20SteelForge%20Handle'},

    { name:'Antique Elegance Gold', categories: ['All Category', 'handle'], image: '../../assets/Antique Elegance Gold.png', alt:'Antique Elegance Gold',Id:'344D15D06' ,material:'Steel ', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D06%20and%20Name%3A%20Antique%20Elegance%20Gold'},

    { name:'SecureSmart Lock Handle', categories: ['All Category', 'handle'], image: '../../assets/SecureSmart Lock Handle.png', alt:'SecureSmart Lock Handle',Id:'344D15D07' ,material:'Alloy Steel, Aluminium', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D07%20and%20Name%3A%20SecureSmart%20Lock%20Handle'},

    { name:'GuardLock Smart Handle', categories: ['All Category', 'handle'], image: '../../assets/GuardLock Smart Handle.png', alt:'GuardLock Smart Handle',Id:'344D15D08' ,material:'Alloy Steel, Aluminium', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D08%20and%20Name%3A%20GuardLock%20Smart%20Handle'},

    { name:'FlushEase Pull', categories: ['All Category', 'handle'], image: '../../assets/FlushEase Pull.png', alt:'FlushEase Pull',Id:'344D15D09' ,material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D09%20and%20Name%3A%20FlushEase%20Pull'},

    { name:'GoldGlide Pull', categories: ['All Category', 'handle'], image: '../../assets/GoldGlide Pull.png', alt:'GoldGlide Pull',Id:'344D15D10' ,material:'Stainless Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D10%20and%20Name%3A%20GoldGlide%20Pull'},

    { name:'Midnight Elegance', categories: ['All Category', 'handle'], image: '../../assets/Midnight Elegance.png', alt:'Midnight Elegance',Id:'344D15D11' ,material:'Aluminium', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D11%20and%20Name%3A%20Midnight%20Elegance'},

    { name:'Vintage Charm', categories: ['All Category', 'handle'], image: '../../assets/Vintage Charm.png', alt:'Vintage Charm',Id:'344D15D12' ,material:'Brass , Glass', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D12%20and%20Name%3A%20Vintage%20Charm'},

    { name:'Crystal Touch', categories: ['All Category', 'handle'], image: '../../assets/Crystal Touch.png', alt:'Crystal Touch',Id:'344D15D13' ,material:'Brass , Glass', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D13%20and%20Name%3A%20Crystal%20Touch'},

    { name:'Golden| Midnight handle', categories: ['All Category', 'handle'], image: '../../assets/Golden.png', alt:'Golden| Midnight handle',Id:'344D15D14' ,material:'Stainless Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D14%20and%20Name%3A%20Golden%7C%20Midnight%20handle'},

    { name:'Golden Grace Lever', categories: ['All Category', 'handle'], image: '../../assets/Golden Grace Lever.png', alt:'Golden Grace Lever',Id:'344D15D15' ,material:'Stainless Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D15%20and%20Name%3A%20Golden%20Grace%20Lever'},

    { name:'Oval Elegance', categories: ['All Category', 'knobe'], image: '../../assets/Oval Elegance.png', alt:'Oval Elegance',Id:'344D15D16' ,material:'Brass', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D16%20and%20Name%3A%20Oval%20Elegance'},

    { name:'Oval Radiance Handle', categories: ['All Category', 'knobe'], image: '../../assets/Oval Radiance Handle.png', alt:'Oval Radiance Handle',Id:'344D15D17' ,material:' Aluminium', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D17%20and%20Name%3A%20Oval%20Radiance%20Handle'},

    { name:'Cocoa Touch Handle', categories: ['All Category','handle','knobe'], image: '../../assets/Cocoa Touch Handle.png', alt:'Cocoa Touch Handle',Id:'344D15D18' ,material:'Stainless Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D18%20and%20Name%3A%20Cocoa%20Touch%20Handle'},

    { name:'Golden Simplicity', categories: ['All Category', 'handle','knobe'], image: '../../assets/Golden Simplicity.png', alt:'Golden Simplicity',Id:'344D15D19' ,material:'Stainless Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D19%20and%20Name%3A%20Golden%20Simplicity'},

    { name:'Golden Orb', categories: ['All Category', 'knobe'], image: '../../assets/Golden Orb.png', alt:'Golden Orb',Id:'344D15D20' ,material:'Brass', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D20%20and%20Name%3A%20Golden%20Orb'},

    { name:'Radiant Circle', categories: ['All Category', 'knobe'], image: '../../assets/Radiant Circle.png', alt:'Radiant Circle',Id:'344D15D21' ,material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D21%20and%20Name%3A%20Radiant%20Circle'},

    { name:'Steel Square Touch', categories: ['All Category', 'knobe'], image: '../../assets/Steel Square Touch.png', alt:'Steel Square Touch',Id:'344D15D22' ,material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D22%20and%20Name%3A%20Steel%20Square%20Touch'},

    { name:'Golden Square Elegance', categories: ['All Category', 'knobe'], image: '../../assets/Golden Square Elegance.png', alt:'Golden Square Elegance',Id:'344D15D23' ,material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D23%20and%20Name%3A%20Golden%20Square%20Elegance'},

    { name:'Midnight Matte', categories: ['All Category', 'Handle'], image: '../../assets/Midnight Matte.png', alt:'Midnight Matte',Id:'344D15D24' ,material:'Stainless Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D24%20and%20Name%3A%20Midnight%20Matte'},

    { name:'Golden T-Bar', categories: ['All Category', 'Handle'], image: '../../assets/Golden T-Bar.png', alt:'Golden T-Bar',Id:'344D15D25',material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D25%20and%20Name%3A%20Golden%20T-Bar'},

    { name:'Spring Hinge', categories: ['All Category', 'Hinge'], image: '../../assets/Spring Hinge.png', alt:'Spring Hinge',Id:'344D15D26' ,material:'Steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D26%20and%20Name%3A%20Spring%20Hinge'},

    { name:'Spring Hinge Gold', categories: ['All Category', 'Hinge'], image: '../../assets/Spring Hinge Gold.png', alt:'Spring Hinge Gold',Id:'344D15D27' ,material:'Steel, Stainless steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D27%20and%20Name%3A%20Spring%20Hinge%20Gold'},

    { name:'Concealed Hinge', categories: ['All Category', 'Hinge'], image: '../../assets/Concealed Hinge.png', alt:'Concealed Hinge',Id:'344D15D28' ,material:'Steel, Stainless steel', walink:'https://wa.me/919819600149?text=Hello%2C%20I%20want%20the%20prices%20for%20Product%20no.%20344D15D28%20and%20Name%3A%20Concealed%20Hinge'}     

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
      { name: 'description', content:'Elevate the functionality and aesthetics of your doors with our wide selection of door accessories. From handles and hinges to locks and doorstops, find the perfect finishing touches to complement your interior decor and enhance the usability of your doors.' },
      { name: 'keywords', content:'Doors, samuraidoors, entry door glass inserts suppliers, door suppliers near me,door manufacturer,door manufacturers near me,exterior door manufacturers,interior door manufactuers,Antique door knobs,Modern door knobs,Glass door knobs,Brass door knobs,Decorative door knobs,Butt hinges,Self-closing hinges,Heavy-duty door hinges,Pivot hinges,Lever door handles,Entry door handles,Interior door handles,Stainless steel door handles,Chrome door accessories,Nickel door hardware,Bronze door fittings,Black door handles,Satin-finish knobs,Caring for door knobs and handles,Choosing the right door accessories'}
      // Add more meta tags as needed
    ]);
    this.setTitle('Accessories for Doors|Samurai Doors|Door Manufactures|Door suppliers');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }

   
  }

