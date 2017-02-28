"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var bookmark_model_1 = require('./bookmark.model');
var BookmarksComponent = (function () {
    function BookmarksComponent() {
        this.bookmarks = [
            new bookmark_model_1.BookmarkModel(1, 'Google', 'http://google.com', 'The most advanced search engine out there...', 10),
            new bookmark_model_1.BookmarkModel(1, 'Yahoo', 'http://yahoo.com', 'A pretty decent search engine', 20),
            new bookmark_model_1.BookmarkModel(1, 'Bing', 'http://bing.com', 'Meeeh...', 30),
        ];
    }
    BookmarksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fv-bookmarks',
            templateUrl: './bookmarks.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BookmarksComponent);
    return BookmarksComponent;
}());
exports.BookmarksComponent = BookmarksComponent;
//# sourceMappingURL=bookmarks.component.js.map