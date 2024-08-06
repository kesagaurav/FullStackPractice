import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
  @Input() title!:string
  ngOnChanges(changes: any): void {
    console.log("chares atre " + JSON.stringify(changes));

  }

}
