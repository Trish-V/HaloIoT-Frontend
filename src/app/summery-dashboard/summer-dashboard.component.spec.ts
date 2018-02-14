import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerDashboardComponent } from './summer-dashboard.component';

describe('SummerDashboardComponent', () => {
  let component: SummerDashboardComponent;
  let fixture: ComponentFixture<SummerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
