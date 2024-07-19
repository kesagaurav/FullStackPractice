import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(e:ElementRef) {
    e.nativeElement.style.color='green';
  }

}
