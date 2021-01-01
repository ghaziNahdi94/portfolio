import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() public name: string = '';
  @Input() public extension: string = '';
  @Input() public alt: string = '';

  @Input() public widthInPx: number = 0;
  @Input() public heightInPx: number = 0;
  @Input() public marginTopInPx: number = 0;
  @Input() public marginLeftInPx: number = 0;
}
