import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlugarElemento } from './pagina-alugar-elemento';

describe('PaginaAlugarElemento', () => {
  let component: PaginaAlugarElemento;
  let fixture: ComponentFixture<PaginaAlugarElemento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAlugarElemento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAlugarElemento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
