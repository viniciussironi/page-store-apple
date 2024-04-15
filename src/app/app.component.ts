import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homepage-apple';
}
