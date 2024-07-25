import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectivesDemo]'
})
export class DirectivesDemoDirective implements OnInit{

  constructor(private elementRef:ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor='yellow';
    this.elementRef.nativeElement.style.color='blue';
    this.elementRef.nativeElement.style.fontSize='30px';
  }

}
