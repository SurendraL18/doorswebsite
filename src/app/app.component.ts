import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { initFlowbite } from 'flowbite';  
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MaindoorComponent } from './maindoor/maindoor.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CommonModule,FooterComponent,ContactusComponent,MaindoorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doorwebsite';
  ngOnInit(): void {
    initFlowbite();
  
  }
}
