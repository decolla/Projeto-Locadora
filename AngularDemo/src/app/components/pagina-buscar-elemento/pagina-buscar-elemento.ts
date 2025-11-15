import {Component, inject} from '@angular/core';
import {ElementosService} from '../../services/elementos.service';
import {Elemento} from '../../Models/Elemento';
import {Rotas} from '../../services/rotas';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-pagina-buscar-elemento',
  imports: [FormsModule],
  templateUrl: './pagina-buscar-elemento.html',
  styleUrl: './pagina-buscar-elemento.css',
})
export class PaginaBuscarElemento {

  elementosService = inject(ElementosService);
  elementoImprimir: Elemento[] = [];
  termo: string = '';

  buscarElementos() {
    if (!this.termo) {
      this.elementoImprimir = [];
      return;
    }

    this.elementosService.obterElementos().subscribe((listaVindaDaApi: any[]) => {

      // mapeamento para garantir que estamos lidando com dados limpos
      const listaMapeada = listaVindaDaApi.map(item => ({
        id: item.id,
        tipo: item.tipoObjeto,
        nome: item.nomeObjeto,
        autor: item.autorObjeto,
        ano: item.anoObjeto,
        disponivel: item.disponivel
      }));

      //filtra na lista mapeada
      this.elementoImprimir = listaMapeada.filter((e: any) => {
        const termoBusca = this.termo.toLowerCase();

        return (
          (e.nome && e.nome.toLowerCase().includes(termoBusca)) ||
          (e.autor && e.autor.toLowerCase().includes(termoBusca)) ||
          (e.tipo && e.tipo.toLowerCase().includes(termoBusca)) ||
          (e.ano && String(e.ano).includes(termoBusca)) ||
          (e.id && String(e.id) === termoBusca)
        );
      });

    });
  }

  constructor(private rotas: Rotas){}

  voltar(): void{
    this.rotas.voltar();
  }

}
