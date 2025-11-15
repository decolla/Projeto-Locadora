import { RouterModule, Routes } from '@angular/router';
import { PaginaInicial } from './components/pagina-inicial/pagina-inicial';
import { PaginaAdicionarElemento } from './components/pagina-adicionar-elemento/pagina-adicionar-elemento';
import { PaginaAlterarElemento } from './components/pagina-alterar-elemento/pagina-alterar-elemento';
import { PaginaAlugarElemento } from './components/pagina-alugar-elemento/pagina-alugar-elemento';
import { PaginaDeletarElemento } from './components/pagina-deletar-elemento/pagina-deletar-elemento';
import { PaginaConsultarElementos } from './components/pagina-consultar-elementos/pagina-consultar-elementos';
import { PaginaBuscarElemento } from './components/pagina-buscar-elemento/pagina-buscar-elemento';
import { PaginaDevolverElemento } from './components/pagina-devolver-elemento/pagina-devolver-elemento';


export const routes: Routes = [
    {path: '', component:PaginaInicial},
    {path: 'pagina-adicionar-elemento', component: PaginaAdicionarElemento},
    {path: 'pagina-alterar-elemento', component: PaginaAlterarElemento},
    {path: 'pagina-deletar-elemento', component: PaginaDeletarElemento},
    {path: 'pagina-alugar-elemento', component: PaginaAlugarElemento},
    {path: 'pagina-consultar-elementos', component: PaginaConsultarElementos},
    {path: 'pagina-buscar-elemento', component: PaginaBuscarElemento},
    {path: 'pagina-devolver-elemento', component: PaginaDevolverElemento},
];

