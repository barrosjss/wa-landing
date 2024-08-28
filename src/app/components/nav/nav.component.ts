import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  ShowNav = false;
  Show() {
    this.ShowNav = !this.ShowNav; 
    this.Translate = this.ShowNav ? '0rem' : '15.25rem';
    this.Opacity = this.ShowNav ? 1:0;
    this.Display = this.ShowNav ? 'flex' : 'none';
  }
  Translate: string = '15.25rem';
  Opacity: number = 0;
  Display: string = this.ShowNav ? 'flex' : 'none';
}

