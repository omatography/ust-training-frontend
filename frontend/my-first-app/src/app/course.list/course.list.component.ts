import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Course } from './Course';

@Component({
  selector: 'course-list',
  templateUrl: './course.list.component.html',
  styleUrls: ['./course.list.component.css']
})
export class ListComponent implements OnInit {

  public courseList:Array<Course> = []

  constructor(private http:HttpClient) { }

  addCourse(title: string, summary: string, img:string){
    this.http.post('http://localhost:3000/courses/',{title, summary, img})
    .subscribe((res: any) => {
      console.log(res);
      // this.courses = res;
    });
  }

  ngOnInit(): void {

    

    this.http.get('http://localhost:3000/courses')
    .subscribe((res:any) =>{
      // console.log(res)
      this.courseList = res;
      console.log(this.courseList)
    })
    
  }

}
