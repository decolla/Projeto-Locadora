import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlterarElemento } from './pagina-alterar-elemento';

describe('PaginaAlterarElemento', () => {
  let component: PaginaAlterarElemento;
  let fixture: ComponentFixture<PaginaAlterarElemento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAlterarElemento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAlterarElemento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
