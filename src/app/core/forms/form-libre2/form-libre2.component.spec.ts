import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLibre2Component } from './form-libre2.component';

describe('FormLibre2Component', () => {
  let component: FormLibre2Component;
  let fixture: ComponentFixture<FormLibre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLibre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLibre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
