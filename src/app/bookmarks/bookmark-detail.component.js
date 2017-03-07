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
var router_1 = require('@angular/router');
var bookmark_model_1 = require('./bookmark.model');
var bookmarks_service_1 = require('./bookmarks.service');
require('rxjs/add/operator/switchMap');
var BookmarkDetailComponent = (function () {
    function BookmarkDetailComponent(route, bookmarksService) {
        this.route = route;
        this.bookmarksService = bookmarksService;
    }
    BookmarkDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.bookmarksService.get({
                engine: 'and',
                id: +params['id']
            });
        })
            .subscribe(function (bookmark) {
            _this.bookmark = bookmark;
            _this.title = "Edit bookmark: " + _this.bookmark.title;
        });
    };
    BookmarkDetailComponent.prototype.onFormSubmit = function (form) {
        this.update();
    };
    BookmarkDetailComponent.prototype.update = function () {
        console.log('updating bookmark...');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', bookmark_model_1.BookmarkModel)
    ], BookmarkDetailComponent.prototype, "bookmark", void 0);
    BookmarkDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fv-bookmark-detail',
            templateUrl: './bookmarks-form.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, bookmarks_service_1.BookmarksService])
    ], BookmarkDetailComponent);
    return BookmarkDetailComponent;
}());
exports.BookmarkDetailComponent = BookmarkDetailComponent;
//# sourceMappingURL=bookmark-detail.component.js.map