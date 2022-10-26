import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Affiche2Component } from './affiche2.component';

describe('Affiche2Component', () => {
  let component: Affiche2Component;
  let fixture: ComponentFixture<Affiche2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Affiche2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Affiche2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
