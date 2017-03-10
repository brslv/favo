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
var storage_service_1 = require('../storage/storage.service');
var bookmarks_service_1 = require('../bookmarks/bookmarks.service');
var bookmark_model_1 = require('../bookmarks/bookmark.model');
var alert_model_1 = require('../messages/alert.model');
var BookmarkAddFormComponent = (function () {
    function BookmarkAddFormComponent(bookmarksService) {
        this.bookmarksService = bookmarksService;
        this.bookmark = {};
        this.title = "Add new bookmark";
    }
    BookmarkAddFormComponent.prototype.onFormSubmit = function (form) {
        this.addBookmark(form);
        form.reset();
        this.displayMessage();
    };
    BookmarkAddFormComponent.prototype.displayMessage = function () {
        this.alert = new alert_model_1.AlertModel('OK, we saved it...', alert_model_1.AlertModel.TYPE_SUCCESS);
    };
    BookmarkAddFormComponent.prototype.addBookmark = function (form) {
        this.bookmarksService.add(bookmark_model_1.BookmarkModel.factory(this.bookmark));
    };
    BookmarkAddFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fv-bookmark-add-form',
            templateUrl: './bookmarks-form.html',
            providers: [storage_service_1.StorageService]
        }), 
        __metadata('design:paramtypes', [bookmarks_service_1.BookmarksService])
    ], BookmarkAddFormComponent);
    return BookmarkAddFormComponent;
}());
exports.BookmarkAddFormComponent = BookmarkAddFormComponent;
//# sourceMappingURL=bookmark-add-form.component.js.map