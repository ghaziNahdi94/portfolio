import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { CoreModule } from './core/core.module';
import { ExperienceSectionComponent } from './sections/experience-section/experience-section.component';
import { EducationSectionComponent } from './sections/education-section/education-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { CertificationsSectionComponent } from './sections/certifications-section/certifications-section.component';
import { OrganizationsSectionComponent } from './sections/organizations-section/organizations-section.component';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    CertificationsSectionComponent,
    OrganizationsSectionComponent,
    FooterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    CoreModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
