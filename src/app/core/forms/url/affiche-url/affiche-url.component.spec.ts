import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheUrlComponent } from './affiche-url.component';

describe('AfficheUrlComponent', () => {
  let component: AfficheUrlComponent;
  let fixture: ComponentFixture<AfficheUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
