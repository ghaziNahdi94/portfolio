import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Experience } from './models';

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

 
}
