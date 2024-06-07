import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/modelo/Filme';
import { Ator } from 'src/app/modelo/Ator';
import { ServicoFilmesService } from 'src/app/services/servico-filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  listaFilmes: Filme[] = [];

  constructor(private servicoFilmes: ServicoFilmesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.servicoFilmes.getFilmes().subscribe(
      response => {
        this.listaFilmes = response;
      },
      error => {
        console.error('Erro ao buscar dados', error);
      }
    );
  }
}
