import { Component, OnInit } from '@angular/core';
import { getToolbarHeight } from '../../utils/component-utils';

@Component({
  selector: 'app-certifications-section',
  templateUrl: './certifications-section.component.html',
  styleUrls: ['./certifications-section.component.scss'],
})
export class CertificationsSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public onJavaCertificateClick(): void {
    window.open('https://is.gd/zSL0z6', '_blank');
  }

  public onAngularCertificateClick(): void {
    window.open('https://is.gd/7JS9aD', '_blank');
  }
}
