import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import routes from './routes';

import { BookmarksComponent } from '../bookmarks/bookmarks.component';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}