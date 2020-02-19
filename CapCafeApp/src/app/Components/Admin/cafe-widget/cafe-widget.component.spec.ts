import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeWidgetComponent } from './cafe-widget.component';

describe('CafeWidgetComponent', () => {
  let component: CafeWidgetComponent;
  let fixture: ComponentFixture<CafeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
