import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponentUsingOutputDecoratorComponent } from './course-component-using-output-decorator.component';

describe('CourseComponentUsingOutputDecoratorComponent', () => {
  let component: CourseComponentUsingOutputDecoratorComponent;
  let fixture: ComponentFixture<CourseComponentUsingOutputDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponentUsingOutputDecoratorComponent]
    });
    fixture = TestBed.createComponent(CourseComponentUsingOutputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
