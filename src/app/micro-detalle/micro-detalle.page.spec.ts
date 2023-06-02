import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicroDetallePage } from './micro-detalle.page';

describe('MicroDetallePage', () => {
  let component: MicroDetallePage;
  let fixture: ComponentFixture<MicroDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MicroDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
