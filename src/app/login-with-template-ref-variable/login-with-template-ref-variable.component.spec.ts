import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithTemplateRefVariableComponent } from './login-with-template-ref-variable.component';

describe('LoginWithTemplateRefVariableComponent', () => {
  let component: LoginWithTemplateRefVariableComponent;
  let fixture: ComponentFixture<LoginWithTemplateRefVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithTemplateRefVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithTemplateRefVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
