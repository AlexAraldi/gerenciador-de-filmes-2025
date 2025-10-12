import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilmeService } from '../../services/filme-service';
import { Filme } from '../filme.module';

@Component({
  selector: 'app-busca-filmes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './busca-filmes.component.html',
  styleUrls: ['./busca-filmes.component.scss'],
})
export class BuscaFilmesComponent {
  termoBusca: string = '';
  filmes: Filme[] = [];

  constructor(private filmeService: FilmeService) {}

  buscarFilmes() {
    if (this.termoBusca.length < 3) {
      alert('A busca deve ter pelo menos 3 caracteres.');
      return;
    }
    this.filmes = [];
    this.filmeService.buscarFilmes(this.termoBusca).subscribe({
      next: (dados: any) => {
        this.filmes = dados.results;
      },
      error: (erro) => {
        alert('Erro na busca: ' + erro.message);
      },
    });
  }

  verDetalhes(filme: Filme) {
    alert(`Detalhes de ${filme.title}: ID ${filme.id}, Nota ${filme.vote_average}`);
  }

  obterCorNota(voto: number): string {
    if (voto >= 7) return 'green';
    if (voto >= 5) return 'orange';
    return 'red';
  }
}
