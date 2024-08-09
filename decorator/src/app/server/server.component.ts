import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
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
  onAddServer() {
    this.serverCreated.emit({
      name: this.name,
      content: this.content,
    });
  }
}
