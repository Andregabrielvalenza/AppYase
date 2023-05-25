import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCorreoPage } from './login-correo.page';

describe('LoginCorreoPage', () => {
  let component: LoginCorreoPage;
  let fixture: ComponentFixture<LoginCorreoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
