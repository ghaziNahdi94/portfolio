import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';


@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule
  ]
})
export class MaterialUiModule { }
