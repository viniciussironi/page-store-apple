import { Component } from '@angular/core';

@Component({
  selector: 'app-airpods',
  standalone: true,
  imports: [],
  templateUrl: './airpods.component.html',
  styleUrl: './airpods.component.css'
})
export class AirpodsComponent {

  scroll(x: number, element: HTMLElement) {
    element.scrollLeft += x;
  }
}
