import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormswithSearchComponent } from './reactive-formswith-search.component';

describe('ReactiveFormswithSearchComponent', () => {
  let component: ReactiveFormswithSearchComponent;
  let fixture: ComponentFixture<ReactiveFormswithSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormswithSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormswithSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
