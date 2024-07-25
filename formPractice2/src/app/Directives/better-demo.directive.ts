import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterDemo]',
})
export class BetterDemoDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input() highLightColor = 'green';

  // @HostBinding('style.backgroundColor') backgroundColor='red';

  @HostBinding('style.backgroundColor') backgroundColor!:string;

  constructor(private e: ElementRef, private renderer: Renderer2) {}
  //  this is better appraoch for any directives
  ngOnInit(): void {
    // this.renderer.setStyle(this.e.nativeElement,'background-color','blue');
    // this.renderer.setProperty(this.e.nativeElement,'font-size','100px');
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter(e: Event) {
    // this.renderer.setStyle(this.e.nativeElement,'background-color','blue');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(e: Event) {
    // this.renderer.setStyle(this.e.nativeElement,'background-color','red');
    this.backgroundColor = this.defaultColor;
  }
}
