import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  showNavbar() {
    this.renderer.addClass(document.querySelector('main'), 'blur');
    this.renderer.addClass(document.querySelector('header'), 'white');
    this.renderer.addClass(document.querySelector('header *'), 'white');
  }

  hideNavbar() {
    this.renderer.removeClass(document.querySelector('main'), 'blur');
    this.renderer.removeClass(document.querySelector('header'), 'white');
    this.renderer.removeClass(document.querySelector('header *'), 'white');
  }
}
