import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLibreComponent } from './form-libre.component';

describe('FormLibreComponent', () => {
  let component: FormLibreComponent;
  let fixture: ComponentFixture<FormLibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLibreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
