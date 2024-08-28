import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  @Input() ask = '';
  @Input() answer = '';
  hoverState = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverState = true;
    console.log(this.hoverState)
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    console.log(this.hoverState)
    this.hoverState = false;
  }
}
