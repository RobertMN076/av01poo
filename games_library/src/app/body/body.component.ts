import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Biblioteca } from '../biblioteca';
import { Jogo} from '../jogo';
import { JogoCarta } from '../carta';
import { JogoTabuleiro } from '../tabuleiro';



@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule,],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  textColor: string = 'white'
  biblioteca = new Biblioteca();


  titulo='';
  anoPublicacao= 0;
  fabricante = '';
  numeroJogadores? = 0;
  idadeMinima? = 0;
  tipo = '';

  constructor() {
    // Adicionando jogos para teste
    this.biblioteca.adicionarJogo(new JogoCarta('Poker', 1829, 'Colonos Franceses', 18));
  }

  get jogos(): Jogo[]{
    return this.biblioteca.listarJogos();
  }

  adicionarJogo(): void {
    if (this.tipo === 'tabuleiro' && this.numeroJogadores) {
      this.biblioteca.adicionarJogo(
        new JogoTabuleiro(this.titulo, this.anoPublicacao, this.fabricante, this.numeroJogadores)
      );
    } else if (this.tipo === 'carta' && this.idadeMinima) {
      this.biblioteca.adicionarJogo(
        new JogoCarta(this.titulo, this.anoPublicacao, this.fabricante, this.idadeMinima)
      );
    }
    this.limparFormulario();
  }

  removerJogo(jogo: Jogo): void {
    this.biblioteca.removerJogo(jogo);
  }

  limparFormulario(): void {
    this.titulo = '';
    this.anoPublicacao = 0;
    this.fabricante = '';
    this.numeroJogadores = 0;
    this.idadeMinima = 0;
  }
}

