import { Component, inject } from '@angular/core';
import {Elemento} from '../../Models/Elemento';
import {Rotas} from '../../services/rotas';
import {ElementosService} from '../../services/elementos.service';

@Component({
  selector: 'app-pagina-consultar-elementos',
  imports: [],
  templateUrl: './pagina-consultar-elementos.html',
  styleUrl: './pagina-consultar-elementos.css',
})
export class PaginaConsultarElementos {

  elementosService = inject(ElementosService);

  elementoImprimir: Elemento[] = [];

  imprimirElementos(){
    this.elementosService.obterElementos().subscribe((listaVindaDaApi: any[]) => {
      this.elementoImprimir = listaVindaDaApi.map(item => {
        return {
          id: item.id,
          tipo: item.tipoObjeto,
          nome: item.nomeObjeto,
          autor: item.autorObjeto,
          ano: item.anoObjeto,
          disponivel: item.disponivel
        };
      });
    });
  }

  constructor(private rotas: Rotas){}

  voltar(): void{
    this.rotas.voltar();
  }

  protected readonly screenLeft = screenLeft;
}
