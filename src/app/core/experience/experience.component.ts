import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  @Input() public company: string = "";
  @Input() public logoPath: string = "";
  @Input() public position: string = "";
  @Input() public period: string = "";
  @Input() public description: string = "";
}
