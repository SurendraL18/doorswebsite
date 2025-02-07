import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pinewood',
  standalone: true,
  imports: [FooterComponent, NavbarComponent,RouterLink],
  templateUrl: './pinewood.component.html',
  styleUrl: './pinewood.component.css'
})
export class PinewoodComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 

  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Discover our Pine Wood Door Frames, featuring a blonde color with a distinctive grain pattern, excellent resistance to warping and cracking, and great insulation properties. Ideal for any budget, Pine wood is widely available and easy to work with. Speak to our experts and get a quote today.'},
      {name: 'keywords', content: 'Pine wood door frame, affordable door frames, beautiful grain pattern, warping resistant wood, cracking resistant wood, moisture resistant wood, budget-friendly wood, good insulator wood, Pine wood advantages, northern temperate regions wood, premium wood frames, get a quote'}
    ]);
    this.setTitle('Pine Wood Door Frame | Affordable and Beautiful Door Frames');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
}
