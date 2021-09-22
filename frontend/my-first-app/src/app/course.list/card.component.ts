import { Component, Input } from "@angular/core"
import { Title } from '@angular/platform-browser';

@Component({
    selector: "card-comp",
    template: `<div class="card bg-dark" >
    <img src={{img}} class="card-img-top" alt="..." height="200"  >
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text"><ng-content></ng-content></p>
      <a href={{img}} class="btn btn-primary">Know more?</a>
    </div>
  </div>`
  
})

export class CardComponent extends Component{

    @Input('title') title:string ="Null";
    @Input('img') img:string ="Null";
}