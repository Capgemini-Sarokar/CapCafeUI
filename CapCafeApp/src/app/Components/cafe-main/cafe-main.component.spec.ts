import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeMainComponent } from './cafe-main.component';

describe('CafeMainComponent', () => {
  let component: CafeMainComponent;
  let fixture: ComponentFixture<CafeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
