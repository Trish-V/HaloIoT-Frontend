import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificataionsComponent } from './notificataions.component';

describe('NotificataionsComponent', () => {
  let component: NotificataionsComponent;
  let fixture: ComponentFixture<NotificataionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificataionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificataionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
