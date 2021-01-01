import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { ImageComponent } from './image/image.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';

@NgModule({
  declarations: [ExperienceComponent, ImageComponent],
  imports: [CommonModule, MaterialUiModule],
  exports: [ExperienceComponent, ImageComponent],
})
export class CoreModule {}
