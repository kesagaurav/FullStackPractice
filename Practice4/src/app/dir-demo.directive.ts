import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirDemo]'
})
export class DirDemoDirective implements OnInit {
  @Input() defaultColor='green';
  @Input() highLihtColor='yellow';
  @HostBinding('style.backgroundColor') baclgroundColor!:string;
  constructor(private e:ElementRef,private render:Renderer2) {
    //e.nativeElement.style.backgroundColor='red';
    this.render.setStyle(e.nativeElement,'backgroundColor','blue');
    this.highLihtColor=this.defaultColor;
  }
  ngOnInit(): void {
    this.baclgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseEnter(){
    //this.render.setStyle(this.e.nativeElement,'backgroundColor','green');
    this.baclgroundColor=this.highLihtColor
  }

  @HostListener('mouseleave')
  mouseLeave(){
   // this.render.setStyle(this.e.nativeElement,'backgroundColor','yellow');
   this.baclgroundColor=this.defaultColor;
  }

}
