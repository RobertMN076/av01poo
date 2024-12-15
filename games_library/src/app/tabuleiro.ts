import { Jogo } from "./jogo";

export class JogoTabuleiro extends Jogo {
    constructor(titulo: string, anoPublicacao: number, fabricante: string, public numeroJogadores: number) {
        super(titulo, anoPublicacao, fabricante);
    }

    exibirRegras(): string {
        return `As regras do jogo de tabuleiro ${this.titulo}: Necessário ter ${this.numeroJogadores} jogadores para jogar.`;
    }
}