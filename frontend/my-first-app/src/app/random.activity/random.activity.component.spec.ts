import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Random.ActivityComponent } from './random.activity.component';

describe('Random.ActivityComponent', () => {
  let component: Random.ActivityComponent;
  let fixture: ComponentFixture<Random.ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Random.ActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Random.ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
