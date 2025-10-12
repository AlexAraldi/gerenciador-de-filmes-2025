import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmeService } from '../../services/filme-service';
import { Filme } from '../../models/filme.model';

@Component({
  selector: 'app-detalhes-filme',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.scss'],
})
export class DetalhesFilmeComponent implements OnInit {
  filme: Filme | undefined;

  constructor(private filmeService: FilmeService) {}

  ngOnInit() {
    const exemploId = 1038393; // ID de exemplo; você pode tornar dinâmico depois
    this.filmeService.obterDetalhesFilme(exemploId).subscribe({
      next: (dados: any) => (this.filme = dados),
      error: (erro) => {
        throw erro;
      },
    });
  }
}
