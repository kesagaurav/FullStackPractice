import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.css']
})
export class InputDecoratorComponent implements OnInit {

  @Input() student!:{
    id: number;
    name: string;
    section: string;
    gender: string;
  };


  @Input('kesaElement') element!:{
    id:number,
    name:string;
    description:string;
  };


  courses=[

  { courseId:1,courseName:'angular'},
  { courseId:2,courseName:'js'},
  { courseId:3,courseName:'java'},
  { courseId:4,courseName:'springboot'},


  ];


  course!:any;

  @Input() set aName(name:string){
    this.course=[];
    for(let i=0;i<this.courses.length;i++){
      if(this.courses[i].courseName===name){
        this.course.push(this.courses[i]);
      }

    }
  }

  ngOnInit(): void {
  }

}
