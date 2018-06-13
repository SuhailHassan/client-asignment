import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingonScrollComponent } from './lazy-loadingon-scroll.component';

describe('LazyLoadingonScrollComponent', () => {
  let component: LazyLoadingonScrollComponent;
  let fixture: ComponentFixture<LazyLoadingonScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadingonScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingonScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
