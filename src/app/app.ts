import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MidiaService } from './services/midia-service';
import { Navbar } from './components/navbar/navbar';
import { BannerPrincipal } from './components/banner-principal/banner-principal';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, Navbar, BannerPrincipal],
  templateUrl: './app.html',
})
export class App {
  protected readonly midiaService = inject(MidiaService);

  protected readonly midiasPopulares$ = this.midiaService.selecionarMidiasPopulares();
}
