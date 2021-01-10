import { Component, OnInit } from '@angular/core';
import { getToolbarHeight } from '../../utils/component-utils';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onEducationClick(): void {
    const educationDiv = document.getElementById('education');
    if (educationDiv) {
      window.scrollTo({
        top: educationDiv.offsetTop - getToolbarHeight(),
        behavior: 'smooth',
      });
    }
  }
}
