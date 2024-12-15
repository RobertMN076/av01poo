import { Jogo } from "./jogo";

export class Biblioteca {
    private jogos: Jogo[] = [];

    adicionarJogo(jogo: Jogo) {
        this.jogos.push(jogo);
    }

    removerJogo(jogo: Jogo) {
        const index = this.jogos.indexOf(jogo);
        if (index !== -1) {
            this.jogos.splice(index, 1);
        }
    }

    listarJogos(): Jogo[] {
        return this.jogos;
    }
}