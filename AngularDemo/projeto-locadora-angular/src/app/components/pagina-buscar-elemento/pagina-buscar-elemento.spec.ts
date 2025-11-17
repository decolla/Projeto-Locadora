import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaBuscarElemento } from './pagina-buscar-elemento';

describe('PaginaBuscarElemento', () => {
  let component: PaginaBuscarElemento;
  let fixture: ComponentFixture<PaginaBuscarElemento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaBuscarElemento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaBuscarElemento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
