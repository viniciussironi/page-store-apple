import { Component } from '@angular/core';
import { LinksRapidosComponent } from './links-rapidos/links-rapidos.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinksRapidosComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
