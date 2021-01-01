import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  @Input() public company: string = '';
  @Input() public logoPath: string = '';
  @Input() public position: string = '';
  @Input() public period: string = '';

  public showDescription: boolean = false;

  public changeDisplayState(): void {
    this.showDescription = !this.showDescription;
  }
}
