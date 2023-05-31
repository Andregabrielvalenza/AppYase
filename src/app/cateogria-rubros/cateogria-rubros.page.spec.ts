import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CateogriaRubrosPage } from './cateogria-rubros.page';

describe('CateogriaRubrosPage', () => {
  let component: CateogriaRubrosPage;
  let fixture: ComponentFixture<CateogriaRubrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CateogriaRubrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
