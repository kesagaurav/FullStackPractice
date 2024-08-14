import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  //encapsulation:ViewEncapsulation.None
})
export class ServerComponent {
  @Input() element!: { type: string; name: string; content: string };
  //passing events out of component we can use @output decorator
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  name = '';
  content = '';
  submitted=true;
  @ViewChild('gaurav',{static:true}) serverContent!:ElementRef;
  onAddServer(inputName:HTMLInputElement) {
    console.log(inputName.value);
    console.log(this.serverContent);
    this.serverCreated.emit({
        name: inputName.value,
        content: this.serverContent.nativeElement.value
      })
    // this.serverCreated.emit({
    //   name: inputName.value,
    //   content: this.content,
    // });
  }
}
