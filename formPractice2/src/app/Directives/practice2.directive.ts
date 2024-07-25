import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPractice2]'
})
export class Practice2Directive implements OnInit {
  @Input() defaultColor='pink';
  @Input()  highLightColor='blue';
  @HostBinding('style.backgroundColor') backgroundColor!:string;
  constructor(private element:ElementRef,private render:Renderer2) { }
  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter')
  onMouseEnter(){
   // this.element.nativeElement.style.backgroundColor='green';
   //this.backgroundColor=this.highLightColor;
   this.render.setStyle(this.element.nativeElement,'backgroundColor','orange');

  }


  @HostListener('mouseleave')
  onMouseLeave(){
    //this.element.nativeElement.style.backgroundColor=this.backgroundColor;
    //this.backgroundColor=this.defaultColor;
    this.render.setStyle(this.element.nativeElement,'backgroundColor','blue');

  }
}
