import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeletarElemento } from './pagina-deletar-elemento';

describe('PaginaDeletarElemento', () => {
  let component: PaginaDeletarElemento;
  let fixture: ComponentFixture<PaginaDeletarElemento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDeletarElemento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDeletarElemento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
