import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { COLLECTION_ROUTES } from './core.routes';
import { CollectionInitComponent } from './init/init.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(COLLECTION_ROUTES)
  ],
  declarations: [
    CollectionInitComponent
  ]
})
export class CollectionCoreModule { }
