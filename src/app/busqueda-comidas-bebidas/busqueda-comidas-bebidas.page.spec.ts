import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaComidasBebidasPage } from './busqueda-comidas-bebidas.page';

describe('BusquedaComidasBebidasPage', () => {
  let component: BusquedaComidasBebidasPage;
  let fixture: ComponentFixture<BusquedaComidasBebidasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BusquedaComidasBebidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
