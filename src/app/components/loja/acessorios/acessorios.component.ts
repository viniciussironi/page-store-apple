import { Component } from '@angular/core';

@Component({
  selector: 'app-acessorios',
  standalone: true,
  imports: [],
  templateUrl: './acessorios.component.html',
  styleUrl: './acessorios.component.css'
})
export class AcessoriosComponent {

  scroll(x: number, element: HTMLElement) {
    element.scrollLeft += x;
  }
}
