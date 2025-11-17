import {Component, inject} from '@angular/core';
import { Rotas } from '../../services/rotas';
import { FormsModule} from '@angular/forms';
import {ElementosService} from '../../services/elementos.service';
import Swal from 'sweetalert2'; //biblioteca externa para alertas

@Component({
  selector: 'app-pagina-adicionar-elemento',
  imports: [FormsModule],
  templateUrl: './pagina-adicionar-elemento.html',
  styleUrl: './pagina-adicionar-elemento.css',
})
export class PaginaAdicionarElemento {
  tipo: string = "";
  nome: string = "";
  autor: string = "";
  ano: string = "";

  private elementosService = inject(ElementosService);

  constructor(private rotas: Rotas){}

  // deixa na formatação necessária
  adicionarElemento(){
    const novoElemento = {
      tipo: this.tipo,
      nome: this.nome,
      autor: this.autor,
      ano: this.ano,
    };

    // chama o serviço
    this.elementosService.adicionarElemento(novoElemento)
      .subscribe({
        next: (resposta) =>{
          console.log('Elemento adicionado!', resposta);
          Swal.fire({
            title: 'Sucesso!',
            text: 'O elemento foi adicionado ao sistema.',
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#d51281',
            iconColor: '#d51281',
          });
          this.voltar();
        },
        error: (erro) => {
          console.error('Erro ao adicionar', erro);
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

  voltar(): void{
    this.rotas.voltar();
  }
}
