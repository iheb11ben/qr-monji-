import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMenuComponent } from './affiche-menu.component';

describe('AfficheMenuComponent', () => {
  let component: AfficheMenuComponent;
  let fixture: ComponentFixture<AfficheMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
