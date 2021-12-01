import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './core.routes';
import { CollectionInitComponent } from './init/init.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    CollectionInitComponent
  ]
})
export class FlightsModule { }
