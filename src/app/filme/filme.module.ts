import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';
import { BuscaFilmesComponent } from './busca-filmes/busca-filmes.component';

const routes: Routes = [
  { path: '', component: ListaFilmesComponent },
  { path: ':id', component: DetalhesFilmeComponent },
];

@NgModule({
  declarations: [ListaFilmesComponent, DetalhesFilmeComponent, BuscaFilmesComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class FilmeModule {}
