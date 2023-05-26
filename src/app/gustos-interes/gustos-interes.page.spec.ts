import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GustosInteresPage } from './gustos-interes.page';

describe('GustosInteresPage', () => {
  let component: GustosInteresPage;
  let fixture: ComponentFixture<GustosInteresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GustosInteresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
