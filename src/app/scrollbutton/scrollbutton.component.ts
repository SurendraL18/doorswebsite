import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule,NgIf } from '@angular/common';
import { FormsModule} from '@angular/forms';



@Component({
  selector: 'app-scrollbutton',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './scrollbutton.component.html',
  styleUrl: './scrollbutton.component.css'
})
export class ScrollbuttonComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    form.submit();
  }
 
  }

