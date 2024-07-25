import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPractice]'
})
export class PracticeDirective implements OnInit {

  @Input() defaultColor="pink";
  @Input() highLightColor="blue";
  @Input('appPractice') message!:string;

  @HostBinding('style.backgroundColor') backgroundColor!:string;

//basic directive style
  // constructor(private e:ElementRef) {

  //  }
  // ngOnInit(): void {
  //   this.e.nativeElement.style.backgroundColor='red';
  // }

  //using renderer2
  // constructor(private e:ElementRef,private render:Renderer2){
  //   this.render.setStyle(this.e.nativeElement,'background-color','blue');
  // }

  // ngOnInit(): void {

  // }

  //using rendere2 and hostlistener
  // constructor(private e:ElementRef,private render:Renderer2){
  // }

  // ngOnInit(): void {

  // }
  // @HostListener('mouseenter')
  // onMouseEnter(){
  //   this.render.setStyle(this.e.nativeElement,'background-color','blue');
  // }


  // @HostListener('mouseleave')
  // onMouseLeave(){
  //   this.render.setStyle(this.e.nativeElement,'background-color','pink');
  // }


  //using renderer,hostlisterner,hostbinding
  constructor(private e:ElementRef,private render:Renderer2){
    render.setStyle(e.nativeElement, 'cursor', 'pointer');

  }

  ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
  }
  @HostListener('mouseenter')
  onMouseEnter(){
    //this.render.setStyle(this.e.nativeElement,'background-color','blue');
    this.backgroundColor =this.defaultColor;
  }


  @HostListener('mouseleave')
  onMouseLeave(){
    //this.render.setStyle(this.e.nativeElement,'background-color','pink');
    this.backgroundColor=this.defaultColor;
  }



  @HostListener('click')
  onMouseClick(){
    //this.render.setStyle(this.e.nativeElement,'background-color','pink');
    this.e.nativeElement.innerHTML=this.message;
   // this.backgroundColor=this.highLightColor;
    this.render.setStyle(this.e.nativeElement,'background-color','blue');
  }
}
