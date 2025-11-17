import {Component, inject} from '@angular/core';
import { Rotas } from '../../services/rotas';
import { FormsModule} from '@angular/forms';
import {ElementosService} from '../../services/elementos.service';
import {PaginaBuscarElemento} from '../pagina-buscar-elemento/pagina-buscar-elemento';
import Swal from 'sweetalert2'; //biblioteca para alertas

@Component({
  selector: 'app-pagina-alterar-elemento',
  imports: [FormsModule, PaginaBuscarElemento],
  templateUrl: './pagina-alterar-elemento.html',
  styleUrl: './pagina-alterar-elemento.css',
})
export class PaginaAlterarElemento {
  Id: string = ""
  tipo: string = "";
  nome: string = "";
  autor: string = "";
  ano: string = "";

  private elementosService = inject(ElementosService);

  elementoEncontrado: boolean = false;
  procurarElemento(){
    console.log("Procurando pelo ID:", this.Id);

    if(!this.Id){
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, digite um ID.',
        icon: 'error',
        confirmButtonText: 'Entendi',
        confirmButtonColor: '#7e101b',
        iconColor: '#7e101b',
      });
      return;
    }

    this.elementosService.obterElementos().subscribe({
      next: (listaElementos) => {
        const encontrado = listaElementos.find((e: any) => e.id === this.Id || e.Id === this.Id);

        if (encontrado){
          console.log("Elemento encontrado:", encontrado);

          this.elementoEncontrado = true;

          this.tipo = encontrado.tipo || "";
          this.nome = encontrado.nome || "";
          this.autor = encontrado.autor || "";
          this.ano = encontrado.ano || "";

        }else{
          this.elementoEncontrado = false;
          Swal.fire({
            title: 'Erro!',
            text: 'Não foi possível encontrar um elemento com esse ID.',
            icon: 'error',
            confirmButtonText: 'Entendi',
            confirmButtonColor: '#7e101b',
            iconColor: '#7e101b',
          });
        }
      },
      error: (erro) => {
        console.error("Erro ao buscar elementos", erro);
        Swal.fire({
          title: 'Erro!',
          text: 'Erro de conexão com o servidor. Tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'Entendi',
          confirmButtonColor: '#7e101b',
          iconColor: '#7e101b',
        });
      }
    })

  }
  salvarAlteracoes() {
    console.log("Salvando alterações...");

    const elementoAtualizado = {
      tipo: this.tipo,
      nome: this.nome,
      autor: this.autor,
      ano: this.ano
    };

    this.elementosService.atualizarElemento(this.Id, elementoAtualizado)
      .subscribe({
        next: (resposta) => {
          console.log(resposta);
          Swal.fire({
            title: 'Sucesso!',
            text: 'O elemento foi atualizado no sistema.',
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#d51281',
            iconColor: '#d51281',
          });
          this.voltar();
        },
        error: (erro) => {
          console.error(erro);
          Swal.fire({
            title: 'Erro!',
            text: 'Não foi possível realizar a operação.',
            icon: 'error',
            confirmButtonText: 'Entendi',
            confirmButtonColor: '#7e101b',
            iconColor: '#7e101b',
          });
        }
      });
  }

  constructor(private rotas: Rotas){}

  voltar(): void{
    this.rotas.voltar();
  }
}
