import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousPipeComponent } from './asynchronous-pipe.component';

describe('AsynchronousPipeComponent', () => {
  let component: AsynchronousPipeComponent;
  let fixture: ComponentFixture<AsynchronousPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsynchronousPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsynchronousPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
