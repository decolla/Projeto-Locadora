import { Component, inject } from '@angular/core';
import { Router} from '@angular/router';


import { routes } from '../../app.routes';
import {PaginaBuscarElemento} from '../pagina-buscar-elemento/pagina-buscar-elemento';

@Component({
  selector: 'app-pagina-inicial',
  imports: [
    PaginaBuscarElemento
  ],
  templateUrl: './pagina-inicial.html',
  styleUrl: './pagina-inicial.css',
  template: `
    <button (click)="navigateToProfile()">View Profile</button>
  `
})
export class PaginaInicial {
  private router = inject(Router);

  IrAdicionarElemento(){
    this.router.navigate(['/pagina-adicionar-elemento']);
  }
  IrAlterarElemento(){
    this.router.navigate(['/pagina-alterar-elemento']);
  }
  IrDeletarElemento(){
    this.router.navigate(['/pagina-deletar-elemento']);
  }
  IrAlugarElemento(){
    this.router.navigate(['/pagina-alugar-elemento']);
  }
  IrDevolverElemento(){
    this.router.navigate(['/pagina-devolver-elemento']);
  }
  IrConsultarElementos(){
    this.router.navigate(['/pagina-consultar-elementos']);
  }
  IrBuscarElemento(){
    this.router.navigate(['/pagina-buscar-elemento']);
  }
}
