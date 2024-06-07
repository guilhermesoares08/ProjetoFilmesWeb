import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../modelo/Filme';

@Injectable()
export class ServicoFilmesService {

private apiUrl = 'https://localhost:7150/api'; // Substitua pelo seu URL da API


constructor(private http: HttpClient) { }

getFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.apiUrl}/Filmes`);
  }

}
