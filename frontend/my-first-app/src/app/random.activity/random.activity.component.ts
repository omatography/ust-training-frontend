import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { activity } from './activity';

@Component({
  selector: 'random-activity',
  templateUrl: './random.activity.component.html',
  styleUrls: ['./random.activity.component.css']
})
export class RandomActivityComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public act: Array<activity> = [

  ]

  ngOnInit(): void {

    this.http.get('https://www.boredapi.com/api/activity')
    .subscribe((res:any) =>{
      // console.log(res)
      this.act[0] = res;
      console.log(this.act[0].activity)
    })
    
  }

}
