import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AntencionClientePage } from './antencion-cliente.page';

describe('AntencionClientePage', () => {
  let component: AntencionClientePage;
  let fixture: ComponentFixture<AntencionClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AntencionClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
