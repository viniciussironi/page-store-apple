import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { NewsComponent } from './components/news/news.component';
import { HelpComponent } from './components/help/help.component';
import { MotivosComponent } from './components/motivos/motivos.component';
import { AcessoriosComponent } from './components/loja/acessorios/acessorios.component';
import { AirpodsComponent } from './components/loja/airpods/airpods.component';
import { ServicosComponent } from './components/loja/servicos/servicos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CardsComponent, NewsComponent, HelpComponent, MotivosComponent, AcessoriosComponent, AirpodsComponent, ServicosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homepage-apple';
}
