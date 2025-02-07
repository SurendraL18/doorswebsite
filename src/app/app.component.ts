import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { initFlowbite } from 'flowbite';  
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MaindoorComponent } from './maindoor/maindoor.component';
import { ScrollbuttonComponent } from './scrollbutton/scrollbutton.component';

import { NavigationEnd, Router } from '@angular/router';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CommonModule,FooterComponent,ContactusComponent,MaindoorComponent,ScrollbuttonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doorwebsite';
  ngOnInit(): void {
    initFlowbite();
  
  }
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'MEASUREMENT-ID', { 'page_path': event.urlAfterRedirects });
      }      
    })
  }
  
}


