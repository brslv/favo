import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import { HomeComponent } from '../home/home.component';
import { BookmarkAddFormComponent } from '../bookmarks/bookmark-add-form.component';
import { BookmarkDetailComponent } from '../bookmarks/bookmark-detail.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'bookmarks/add', component: BookmarkAddFormComponent },
  { path: 'bookmarks/:id', component: BookmarkDetailComponent }
];

export default routes;
