import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCafeComponent } from './view-cafe.component';

describe('ViewCafeComponent', () => {
  let component: ViewCafeComponent;
  let fixture: ComponentFixture<ViewCafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
