import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './filme/lista-filmes/lista-filmes.component';
import { BuscaFilmesComponent } from './filme/busca-filmes/busca-filmes.component';
import { DetalhesFilmeComponent } from './filme/detalhes-filme/detalhes-filme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaFilmesComponent, BuscaFilmesComponent, DetalhesFilmeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'gerenciador-de-filmes-2025';
}
