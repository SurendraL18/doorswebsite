import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpage1',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink],
  templateUrl: './blogpage1.component.html',
  styleUrl: './blogpage1.component.css'
})
export class Blogpage1Component {

  constructor(private meta: Meta,private title: Title) {
    this.meta.addTags([
      {name: 'description', content: '"Discover the crucial factors to consider when selecting a new main door for your home. From security features to design aesthetics, explore key considerations to ensure you make the perfect choice for your needs. Find the ideal balance of style, functionality, and durability to enhance the appeal and security of your home entrance'},
      {name: 'keywords', content: 'main door, buying guide, considerations, home improvement, security features, design aesthetics, durability, entrance door, residential door, door selection'}
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
