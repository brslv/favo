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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var bookmark_model_1 = require('./bookmark.model');
var storage_keys_1 = require('../storage/storage-keys');
var BookmarksService = (function () {
    function BookmarksService(storageAdapter) {
        this.storageAdapter = storageAdapter;
        this.bookmarks = [];
        this.init();
    }
    BookmarksService.prototype.init = function () {
        var _this = this;
        var bookmarks = this.storageAdapter.get(storage_keys_1.default.BOOKMARKS);
        if (bookmarks) {
            bookmarks.forEach(function (item) {
                _this.bookmarks.push(bookmark_model_1.BookmarkModel.factory(item));
            });
        }
    };
    BookmarksService.prototype.add = function (bookmark) {
        this.bookmarks.push(this.storageAdapter.add(bookmark, storage_keys_1.default.BOOKMARKS));
    };
    BookmarksService.prototype.getAll = function () {
        return this.bookmarks;
    };
    BookmarksService.prototype.get = function (where) {
        var matchedBookmarks = [];
        var engine = where.engine;
        delete where.engine;
        return this.bookmarks.filter(function (currentBookmark) {
            var matches = {};
            for (var clause in where) {
                var clauseValue = where[clause];
                matches[clause] = false;
                if (clauseValue instanceof Array) {
                    // clause is array
                    if (clauseValue.indexOf(currentBookmark[clause]) !== -1) {
                        matches[clause] = true;
                    }
                }
                else {
                    // clause is a value
                    matches[clause] = currentBookmark[clause] === clauseValue;
                }
            }
            var fullfillsTheCondition;
            if (engine === 'and') {
                var everythingMatches = true;
                for (var match in matches) {
                    if (!matches[match]) {
                        everythingMatches = false;
                    }
                }
                fullfillsTheCondition = everythingMatches;
            }
            else if (engine === 'or') {
                var atLeastOneMatches = false;
                for (var match in matches) {
                    if (matches[match]) {
                        atLeastOneMatches = true;
                    }
                }
                fullfillsTheCondition = atLeastOneMatches;
            }
            return fullfillsTheCondition;
        });
    };
    BookmarksService.prototype.remove = function (bookmark) {
        this.storageAdapter.delete({ id: bookmark.id }, storage_keys_1.default.BOOKMARKS);
        this.bookmarks = this.bookmarks.filter(function (b) {
            return b.id !== bookmark.id;
        });
    };
    BookmarksService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('StorageAdapter')), 
        __metadata('design:paramtypes', [Object])
    ], BookmarksService);
    return BookmarksService;
}());
exports.BookmarksService = BookmarksService;
//# sourceMappingURL=bookmarks.service.js.map