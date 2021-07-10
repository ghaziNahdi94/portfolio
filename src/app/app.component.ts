import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getToolbarHeight } from './utils/component-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Ghazi NEHDI');
  }

  public onHomeClick(): void {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  public onExperienceClick(): void {
    const experienceDiv = document.getElementById('experience');
    if (experienceDiv) {
      window.scrollTo({
        top: experienceDiv.offsetTop - getToolbarHeight(),
        behavior: 'smooth',
      });
    }
  }

  public onEducationClick(): void {
    const educationDiv = document.getElementById('education');
    if (educationDiv) {
      window.scrollTo({
        top: educationDiv.offsetTop - getToolbarHeight(),
        behavior: 'smooth',
      });
    }
  }

  public onSkillsClick(): void {
    const skillsDiv = document.getElementById('skills');
    if (skillsDiv) {
      window.scrollTo({
        top: skillsDiv.offsetTop - getToolbarHeight(),
        behavior: 'smooth',
      });
    }
  }

  public onCertificationsClick(): void {
    const skillsDiv = document.getElementById('certifications');
    if (skillsDiv) {
      window.scrollTo({
        top: skillsDiv.offsetTop - getToolbarHeight(),
        behavior: 'smooth',
      });
    }
  }

  public onDownloadCV(): void {
    window.open("/assets/CV_Ghazi.pdf");
  }
}
