"use strict";
var bookmarks_component_1 = require('../bookmarks/bookmarks.component');
var home_component_1 = require('../home/home.component');
var bookmark_add_form_component_1 = require('../bookmarks/bookmark-add-form.component');
var bookmark_detail_component_1 = require('../bookmarks/bookmark-detail.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'bookmarks', component: bookmarks_component_1.BookmarksComponent },
    { path: 'bookmarks/add', component: bookmark_add_form_component_1.BookmarkAddFormComponent },
    { path: 'bookmarks/:id', component: bookmark_detail_component_1.BookmarkDetailComponent }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routes;
//# sourceMappingURL=routes.js.map