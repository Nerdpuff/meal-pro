import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTotal]',
})
export class TotalDirective {
  constructor(private el: ElementRef, renderer: Renderer2) {
    renderer.addClass(el.nativeElement, 'total-row');
  }
}
