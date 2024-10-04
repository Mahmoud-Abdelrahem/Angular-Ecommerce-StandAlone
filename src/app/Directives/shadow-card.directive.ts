import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[ShadowCard]',
  standalone: true
})
export class ShadowCardDirective implements OnChanges {

  @Input() color1: string = 'green';
  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(): void {
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.border = `2px solid ${this.color1}`;
    nativeElement.style.borderRadius = '10px';
    nativeElement.style.boxShadow = '10px 4px 8px gray';
  }

  @HostListener('mouseover') hover() {
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.boxShadow = '20px 8px 16px gray';
    nativeElement.style.border = '2px solid blue';

  }

  @HostListener('mouseout') leave() {
    const nativeElement = this.elementRef.nativeElement;
    nativeElement.style.boxShadow = '10px 4px 8px gray';
    nativeElement.style.border = `2px solid red`;
  }
}
