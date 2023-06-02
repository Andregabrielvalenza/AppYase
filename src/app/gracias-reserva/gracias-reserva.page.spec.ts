import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraciasReservaPage } from './gracias-reserva.page';

describe('GraciasReservaPage', () => {
  let component: GraciasReservaPage;
  let fixture: ComponentFixture<GraciasReservaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraciasReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
