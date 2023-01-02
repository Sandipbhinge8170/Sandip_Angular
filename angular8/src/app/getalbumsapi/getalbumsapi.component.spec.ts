import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalbumsapiComponent } from './getalbumsapi.component';

describe('GetalbumsapiComponent', () => {
  let component: GetalbumsapiComponent;
  let fixture: ComponentFixture<GetalbumsapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetalbumsapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalbumsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
