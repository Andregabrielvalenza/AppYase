import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MicroProductoresPage } from './micro-productores.page';

describe('MicroProductoresPage', () => {
  let component: MicroProductoresPage;
  let fixture: ComponentFixture<MicroProductoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MicroProductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
