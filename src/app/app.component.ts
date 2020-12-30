import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Experience } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public experiences: Array<Experience> = [];
  
  constructor(private titleService: Title) {}

  public ngOnInit(): void {
    this.titleService.setTitle('Ghazi NEHDI');
    this.fillExperiences();
  }

  private fillExperiences(): void {
    this.experiences = [
      {
        logoPath: "/assets/images/s.png",
        company: "Saint-Gobain",
        position: "Consultant Développeur FullStack JS",
        period: "Depuis Sep 2020",
        description: `sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskj
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdf
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhk
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhk
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskj
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskj
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskj
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskj
        sjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskjsjdkfhskdjfhskjdfhksjdhfkjsdhfskj
        `
      }
    ];
  }
}
