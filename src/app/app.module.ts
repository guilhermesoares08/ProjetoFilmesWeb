import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListaFilmesComponent } from './components/lista-filmes/lista-filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicoFilmesService } from './services/servico-filmes.service';

@NgModule({
  declarations: [		
    AppComponent,
    NavComponent,
    ListaFilmesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServicoFilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
