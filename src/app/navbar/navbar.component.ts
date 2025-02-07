import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reloadPageAfterInterval(interval: number): void {
    setTimeout(() => {
      location.reload();
    }, interval);
  }


}

