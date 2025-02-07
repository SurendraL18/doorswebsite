import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-doorframeprod',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink,CommonModule],
  templateUrl: './doorframeprod.component.html',
  styleUrl: './doorframeprod.component.css'
})
export class DoorframeprodComponent {
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Discover our exquisite range of wooden door frames crafted from premium materials like Sagwan Teakwood, Deodar Cedarwood, Sheesam Rosewood, Pinewood, and Meranti Wood. Get a quote today and enhance your home with high-quality, stylish door frames.'},
      {name: 'keywords', content: 'Doors,samuraidoors,door frames, teak wood, cedar wood, rose wood, pine wood, meranti wood, Sagwan Teakwood, Deodar Wood, Sheesam Wood, wood frames, high-quality wood, buy wood, wood products, get a quote, premium wood, home decor, furniture'}
    ]);
    this.setTitle('Premium Wooden Door Frames | Teakwood, Cedarwood, Rosewood, Pinewood, Meranti Wood');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
 


}
