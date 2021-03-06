import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './core.routes';
import { AdminInitComponent } from './init/init.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    AdminInitComponent
  ]
})
export class AdminCoreModule { }
