import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scroll(x: number, element: HTMLElement) {
    element.scrollLeft += x;
  }
}

