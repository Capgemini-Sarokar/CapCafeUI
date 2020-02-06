import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHelpdeskComponent } from './view-helpdesk.component';

describe('ViewHelpdeskComponent', () => {
  let component: ViewHelpdeskComponent;
  let fixture: ComponentFixture<ViewHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
