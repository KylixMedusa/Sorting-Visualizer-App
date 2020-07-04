import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapsortComponent } from './heapsort.component';

describe('HeapsortComponent', () => {
  let component: HeapsortComponent;
  let fixture: ComponentFixture<HeapsortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeapsortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeapsortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
