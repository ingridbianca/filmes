import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.css']
})
export class FilmeCardComponent {

  //propriedade de inpout de filme do tipo Filme
  @Input () filme: Filme;

  //                                 tipo da classe generica
  @Output() apaga = new EventEmitter<object>();

  constructor() { }  
//            tipo do retorno
  apagaCard(): void{
    //pega o objeto e devolve pra lista
    this.apaga.emit(this.filme);
  }

}
