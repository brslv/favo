import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';
import { RouterModule }            from '@angular/router';
import { AppRoutingModule }        from './routing/app-routing.module';

import { AppComponent }            from './app.component';
import { HomeComponent }           from './home/home.component';
import { BookmarksComponent }      from './bookmarks/bookmarks.component';
import { BookmarkDetailComponent } from './bookmarks/bookmark-detail.component';
import { BookmarkAddFormComponent} from './bookmarks/bookmark-add-form.component';
import { StorageAdapterContract }  from './contracts/storage-adapter.contract';
import { LocalStorageAdapterService } from './storage/adapters/local-storage-adapter.service';

import { BookmarksService }        from './bookmarks/bookmarks.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BookmarksComponent,
    BookmarkDetailComponent,
    BookmarkAddFormComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    BookmarksService,
    [{provide: 'StorageAdapter', useClass: LocalStorageAdapterService }]
  ]
})
export class AppModule { }
