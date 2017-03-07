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
var BookmarkAddFormComponent = (function () {
    function BookmarkAddFormComponent(storageService) {
        this.storageService = storageService;
        this.bookmark = {};
        this.title = "Add new bookmark";
    }
    BookmarkAddFormComponent.prototype.onFormSubmit = function (form) {
        this.addBookmark(form);
    };
    BookmarkAddFormComponent.prototype.addBookmark = function (form) {
        this.storageService.add({});
    };
    BookmarkAddFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fv-bookmark-add-form',
            templateUrl: './bookmarks-form.html',
            providers: [storage_service_1.StorageService]
        }), 
        __metadata('design:paramtypes', [storage_service_1.StorageService])
    ], BookmarkAddFormComponent);
    return BookmarkAddFormComponent;
}());
exports.BookmarkAddFormComponent = BookmarkAddFormComponent;
//# sourceMappingURL=bookmark-add-form.component.js.map