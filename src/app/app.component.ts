import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { NewsComponent } from './components/news/news.component';
import { HelpComponent } from './components/help/help.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardsComponent, NewsComponent, HelpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homepage-apple';
}
