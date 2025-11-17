import {HttpClient} from '@angular/common/http';
import{ Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Elemento} from '../Models/Elemento';
import {environment} from '../../environments/environment';

// torna o serviço disponível em todo app
@Injectable({providedIn: 'root' })
export class ElementosService {
  private http = inject(HttpClient);
  private url = "http://localhost:5119/api/elementos";
  // private url = environment.apiUrl;
  //mudar depois aqui para o IP do servidor, no lugar do localhost

  public obterElementos(): Observable<Elemento[]>{
    return this.http.get<Elemento[]>(this.url);
  }

  public adicionarElemento(novoElemento: any): Observable<any>{
    const elementoApi = {
      TipoObjeto: novoElemento.tipo,
      NomeObjeto: novoElemento.nome,
      AutorObjeto: novoElemento.autor,
      AnoObjeto: novoElemento.ano
    };

    return this.http.post(this.url, elementoApi);
  }

  public atualizarElemento(id: string, elemento: any): Observable<any> {
    const elementoApi = {
      TipoObjeto: elemento.tipo,
      NomeObjeto: elemento.nome,
      AutorObjeto: elemento.autor,
      AnoObjeto: elemento.ano
    };
    return this.http.put(`${this.url}/${id}`, elementoApi);
  }

  public deletarElemento(id: string, elemento: any ): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, elemento);
  }

  public alugarElemento(id: string, elemento: any): Observable<any>{
    return this.http.put(`${this.url}/${id}/alugar`, elemento);
  }

  public devolverElemento(id: string, elemento: any): Observable<any>{
    return this.http.put(`${this.url}/${id}/devolver`, elemento);
  }
}

