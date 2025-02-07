import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-teakwood-frame',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './teakwood-frame.component.html',
  styleUrl: './teakwood-frame.component.css'
})
export class TeakwoodFrameComponent {
  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  } 
  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'Explore our Sheesham Wood Rose Wood Door Frames, known for their unique color, smooth finish, and exceptional durability. Sheesham wood is resistant to termites, splitting, and warping, making it ideal for doors and frames. Speak to our experts for more information and get a quote today.'},
      {name: 'keywords', content: 'Sheesham wood door frame, Rose wood door frame, durable wood, termite resistant wood, warp resistant wood, split resistant wood, Indian Rosewood, Dalbergia sissoo, smooth finish wood, unique color wood, engraving wood, woodcarving wood, polished wood, get a quote, premium wood frames'}
    ]);
    this.setTitle('Sheesham Wood Rose Wood | Durable and Beautiful Door Frames');
  }
  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
    }
  ngOnInit() {
    
  }
}
