import {Component, inject} from '@angular/core';
import { Rotas } from '../../services/rotas';
import { FormsModule} from '@angular/forms';
import {ElementosService} from '../../services/elementos.service';
import {PaginaBuscarElemento} from '../pagina-buscar-elemento/pagina-buscar-elemento';

@Component({
  selector: 'app-pagina-alugar-elemento',
  imports: [FormsModule, PaginaBuscarElemento],
  templateUrl: './pagina-alugar-elemento.html',
  styleUrl: './pagina-alugar-elemento.css',
})
export class PaginaAlugarElemento {
  Id: string = "";
  tipo: string = "";
  nome: string = "";
  autor: string = "";
  ano: string = "";

  elementoEncontrado: boolean = false;

  elementoService = inject(ElementosService);
  procurarElemento(){
    console.log("Procurando pelo ID:", this.Id);

    if(!this.Id){
      alert("Por favor, digite um ID");
      return;
    }

    this.elementoService.obterElementos().subscribe({
      next: (listaElementos) => {
        const encontrado = listaElementos.find(elemento => elemento.id === this.Id);
        if(encontrado){
          console.log("Elemento encontrado: ", encontrado);
          this.elementoEncontrado = true;

        }else{
          this.elementoEncontrado = false;
          alert("Não foi encontrado um elemento com esse ID!");
        }
      },
      error: (erro) => {
        console.error("Erro ao buscar elementos", erro);
        alert("Erro de conexão com o servidor");
      }
    })
  }
  alugarElemento() {
    console.log("Salvando alterações...");

    const elementoAtualizado = {
      tipo: this.tipo,
      nome: this.nome,
      autor: this.autor,
      ano: this.ano,
      disponivel: false,
    };

    this.elementoService.alugarElemento(this.Id, elementoAtualizado)
      .subscribe({
        next: (resposta) => {
          console.log(resposta);
          alert("Elemento alugado com sucesso!");
          this.voltar();
        },
        error: (erro) => {
          console.error(erro);
          alert("Erro ao alugar elemento, verifique se ele ja foi alugado.");
        }
      });

  }

  constructor(private rotas: Rotas){}

  voltar(): void{
    this.rotas.voltar();
  }
}
