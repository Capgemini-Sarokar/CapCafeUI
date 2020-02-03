import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCafeComponent } from './remove-cafe.component';

describe('RemoveCafeComponent', () => {
  let component: RemoveCafeComponent;
  let fixture: ComponentFixture<RemoveCafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
