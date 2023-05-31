import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaProductoPage } from './galeria-producto.page';

describe('GaleriaProductoPage', () => {
  let component: GaleriaProductoPage;
  let fixture: ComponentFixture<GaleriaProductoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GaleriaProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
