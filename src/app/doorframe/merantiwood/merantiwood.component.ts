import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-merantiwood',
  standalone: true,
  imports: [FooterComponent, NavbarComponent,RouterLink],
  templateUrl: './merantiwood.component.html',
  styleUrl: './merantiwood.component.css'
})
export class MerantiwoodComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Explore our premium Meranti Wood Door Frames, known for their natural oil content that repels water, attractive reddish-brown color, and high resistance to weathering and insect damage. Perfect for both indoor and outdoor use. Speak to our experts for more information and get a quote today.'},
      {name: 'keywords', content: 'Meranti wood door frame, durable door frames, stylish door frames, Meranti wood advantages, natural oil content, water-repellent wood, reddish-brown wood, outdoor furniture, insect-resistant wood, weather-resistant wood, Southeast Asian wood, premium wood frames, get a quote'}
    ]);
    this.setTitle('Meranti Wood Door Frame | Durable and Stylish Door Frames');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }

}
