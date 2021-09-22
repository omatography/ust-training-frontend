import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Course.ListComponent } from './course.list.component';

describe('Course.ListComponent', () => {
  let component: Course.ListComponent;
  let fixture: ComponentFixture<Course.ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Course.ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Course.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
