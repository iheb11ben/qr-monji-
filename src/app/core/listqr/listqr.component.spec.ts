import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListqrComponent } from './listqr.component';

describe('ListqrComponent', () => {
  let component: ListqrComponent;
  let fixture: ComponentFixture<ListqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListqrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
