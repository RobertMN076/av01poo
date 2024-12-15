import { Jogo } from "./jogo";

export class JogoCarta extends Jogo {
    constructor(titulo: string, anoPublicacao: number, fabricante: string, public idadeMinima: number) {
        super(titulo, anoPublicacao, fabricante);
    }

    exibirRegras(): string {
        return `As regras do jogo de cartas ${this.titulo}: Necessário ter ${this.idadeMinima} anos para jogar.`;
    }
}