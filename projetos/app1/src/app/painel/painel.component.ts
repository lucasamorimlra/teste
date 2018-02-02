import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Frase} from '../shared/frases.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  public progresso: number = 0

  public resposta: string = ''
  public instrucao: string = 'Traduza a frase:'
  public frases: Frase[] = FRASES

  public rodada: number = 0
  public rodadaFrase: Frase

  public tentativas: number = 3

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    

    if(this.resposta === this.rodadaFrase.frasePtBr){

      alert('A tradução está correta!')

      this.rodada++
      
      this.atualizaRodada()

      this.progresso += (100 / this.frases.length)

      this.resposta = ''
      
      if(this.rodada === 4){
        alert('Você venceu!')
        this.encerrarJogo.emit('Parabéns!!')
      }

    } else {
      alert('A tradução está errada!')
      this.tentativas--

      if(this.tentativas < 0){
        alert('Voce perdeu todos os seus corações!')
        this.encerrarJogo.emit('Tente novamente!!')
      }
    }

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
