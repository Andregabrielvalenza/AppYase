import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegitroUbicacionPage } from './regitro-ubicacion.page';

describe('RegitroUbicacionPage', () => {
  let component: RegitroUbicacionPage;
  let fixture: ComponentFixture<RegitroUbicacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegitroUbicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
