import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelarComprasPage } from './cancelar-compras.page';

describe('CancelarComprasPage', () => {
  let component: CancelarComprasPage;
  let fixture: ComponentFixture<CancelarComprasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CancelarComprasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
