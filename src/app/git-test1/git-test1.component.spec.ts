import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitTest1Component } from './git-test1.component';

describe('GitTest1Component', () => {
  let component: GitTest1Component;
  let fixture: ComponentFixture<GitTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitTest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
