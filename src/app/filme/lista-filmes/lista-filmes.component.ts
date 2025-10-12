import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilmeService } from '../../services/filme-service';
import { Filme, RespostaFilmes } from '../filme.module';

@Component({
  selector: 'app-lista-filmes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Importa módulos necessários
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
})
export class ListaFilmesComponent implements OnInit {
  verDetalhes(_t21: Filme) {
    throw new Error('Method not implemented.');
  }
  filmes: Filme[] = [];
  categoria: string = 'popular';
  pagina: number = 1;
  totalPaginas: number = 0;

  constructor(private filmeService: FilmeService) {}

  ngOnInit() {
    this.carregarFilmes();
  }

  carregarFilmes() {
    const observable =
      this.categoria === 'popular'
        ? this.filmeService.selecionarFilmesPopulares(this.pagina)
        : this.filmeService.selecionarFilmesTopRated(this.pagina);
    observable.subscribe({
      next: (dados: RespostaFilmes) => {
        this.filmes = dados.results;
        this.totalPaginas = dados.total_pages;
      },
      error: (erro) => {
        throw erro;
      },
    });
  }

  mudarCategoria(evento: Event) {
    this.categoria = (evento.target as HTMLSelectElement).value;
    this.pagina = 1;
    this.carregarFilmes();
  }

  proximaPagina() {
    if (this.pagina < this.totalPaginas) {
      this.pagina++;
      this.carregarFilmes();
    }
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.carregarFilmes();
    }
  }
}
