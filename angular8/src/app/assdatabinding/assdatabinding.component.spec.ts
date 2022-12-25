import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssdatabindingComponent } from './assdatabinding.component';

describe('AssdatabindingComponent', () => {
  let component: AssdatabindingComponent;
  let fixture: ComponentFixture<AssdatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssdatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
