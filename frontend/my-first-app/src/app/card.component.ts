import { Component, Input } from "@angular/core"
import { Title } from '@angular/platform-browser';

@Component({
    selector: "card-comp",
    template: `<div class="card" style="width: 18rem;">
    <img src={{img}} class="card-img-top" alt="..." height="400">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{desc}}</p>
      <a href={{img}} class="btn btn-primary">Know more?</a>
    </div>
  </div>`,
  styleUrls: ['./app.component.css']
})

export class CardComponent extends Component{

    @Input('title') title:string ="Null";
    @Input('desc') desc:string ="Null";
    @Input('img') img:string ="https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" ;
}