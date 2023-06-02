import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoresResultadosPage } from './productores-resultados.page';

describe('ProductoresResultadosPage', () => {
  let component: ProductoresResultadosPage;
  let fixture: ComponentFixture<ProductoresResultadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductoresResultadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
