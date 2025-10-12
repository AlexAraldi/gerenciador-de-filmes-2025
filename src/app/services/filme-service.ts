import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private apiKey = 'sua-api-key-aqui'; // Substitua por sua chave da TMDB (obtenha em https://www.themoviedb.org/)
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  selecionarFilmesPopulares(pagina: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR&page=${pagina}`
    );
  }

  selecionarFilmesTopRated(pagina: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=pt-BR&page=${pagina}`
    );
  }

  obterDetalhesFilme(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=pt-BR&append_to_response=videos,credits`
    );
  }

  buscarFilmes(termo: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${termo}`
    );
  }
}
