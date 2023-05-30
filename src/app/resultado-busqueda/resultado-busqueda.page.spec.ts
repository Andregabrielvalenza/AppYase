import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoBusquedaPage } from './resultado-busqueda.page';

describe('ResultadoBusquedaPage', () => {
  let component: ResultadoBusquedaPage;
  let fixture: ComponentFixture<ResultadoBusquedaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResultadoBusquedaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
