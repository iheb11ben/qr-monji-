import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecarteComponent } from './updatecarte.component';

describe('UpdatecarteComponent', () => {
  let component: UpdatecarteComponent;
  let fixture: ComponentFixture<UpdatecarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecarteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
