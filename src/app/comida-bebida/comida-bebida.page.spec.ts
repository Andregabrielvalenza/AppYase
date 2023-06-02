import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComidaBebidaPage } from './comida-bebida.page';

describe('ComidaBebidaPage', () => {
  let component: ComidaBebidaPage;
  let fixture: ComponentFixture<ComidaBebidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComidaBebidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
