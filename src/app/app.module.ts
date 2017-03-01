import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { BookmarksComponent } from './bookmarks/bookmarks.component'

import { BookmarksService } from './bookmarks/bookmarks.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    BookmarksComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    BookmarksService
  ]
})
export class AppModule { }
