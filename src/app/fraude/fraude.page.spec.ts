import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FraudePage } from './fraude.page';

describe('FraudePage', () => {
  let component: FraudePage;
  let fixture: ComponentFixture<FraudePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FraudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
