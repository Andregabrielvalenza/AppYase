import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UneteYasePage } from './unete-yase.page';

describe('UneteYasePage', () => {
  let component: UneteYasePage;
  let fixture: ComponentFixture<UneteYasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UneteYasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
