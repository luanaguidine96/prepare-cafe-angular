import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dicas',
  imports: [RouterLink],
  templateUrl: './dicas.html',
  styleUrl: './dicas.css'
})
export class Dicas {

  respostas: Record<string, string> = {
  iphone: "Não, o jogo não funciona em iphone, apenas android e computador.",
  tempo: "Levou 21 dias para ser desenvolvido.",
  celular: "Sim! O jogo funciona no celular também, porém apresenta algumas falhas às vezes.",
  dados: "Não são solicitadas informações pessoais.",
  problema: "Entre em contato pelo email: luanaguidine96@gmail.com."
};

  responder(pergunta: string) {

    const areaResposta = document.getElementById("resposta");

    if (areaResposta) {
      areaResposta.innerHTML = `
        <strong>Assistente:</strong>
        
        <p>${this.respostas[pergunta]}</p>
      `;
    }
  }


}