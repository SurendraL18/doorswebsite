import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-commercial-door',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './commercial-door.component.html',
  styleUrl: './commercial-door.component.css'
})
export class CommercialDoorComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 

  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Developer Edition - Explore our range of commercial doors. Get a quote for any of our models.'},
      {name: 'keywords', content: 'Developer Edition, commercial doors, door models, get quote'}
    ]);
    this.setTitle('Developer Edition - Explore our range of commercial doors. Get a quote for any of our models.');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
}