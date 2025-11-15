import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDevolverElemento } from './pagina-devolver-elemento';

describe('PaginaDevolverElemento', () => {
  let component: PaginaDevolverElemento;
  let fixture: ComponentFixture<PaginaDevolverElemento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDevolverElemento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDevolverElemento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
