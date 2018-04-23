import { Injectable } from '@angular/core';
import { Filme } from './filme';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilmeService {

  url: string = 'http://www.omdbapi.com';
  apikey: string = '86740000';

  constructor(
    private http: HttpClient
  ) { }

  getFilmes(nome:string) {
    //usa o crase
    const url = ` ${this.url}?apiKey=${this.apikey}&s=${nome}`
    return this.http.get(url);
  }

}
