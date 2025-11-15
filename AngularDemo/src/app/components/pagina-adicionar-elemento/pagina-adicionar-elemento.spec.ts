import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAdicionarElemento } from './pagina-adicionar-elemento';

describe('PaginaAdicionarElemento', () => {
  let component: PaginaAdicionarElemento;
  let fixture: ComponentFixture<PaginaAdicionarElemento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAdicionarElemento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAdicionarElemento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
