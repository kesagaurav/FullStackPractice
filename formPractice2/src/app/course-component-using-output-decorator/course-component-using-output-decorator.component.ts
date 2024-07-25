import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-component-using-output-decorator',
  templateUrl: './course-component-using-output-decorator.component.html',
  styleUrls: ['./course-component-using-output-decorator.component.css'],
})
export class CourseComponentUsingOutputDecoratorComponent implements OnInit {

  courses = [
    { courseId: 1, courseName: 'angular' },
    { courseId: 2, courseName: 'js' },
    { courseId: 3, courseName: 'java' },
    { courseId: 4, courseName: 'springboot' },
  ];

 @Output() onRegister = new EventEmitter<string>();

  createRegister(courseName: string) {
    this.onRegister.emit(courseName);
  }

  ngOnInit(): void {}
}
