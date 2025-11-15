import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConsultarElementos } from './pagina-consultar-elementos';

describe('PaginaConsultarElementos', () => {
  let component: PaginaConsultarElementos;
  let fixture: ComponentFixture<PaginaConsultarElementos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaConsultarElementos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaConsultarElementos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
