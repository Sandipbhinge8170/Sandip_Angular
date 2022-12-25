import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodirectiveComponent } from './demodirective.component';

describe('DemodirectiveComponent', () => {
  let component: DemodirectiveComponent;
  let fixture: ComponentFixture<DemodirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemodirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemodirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
