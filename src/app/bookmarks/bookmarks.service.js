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
var BookmarksService = (function () {
    function BookmarksService() {
        this.bookmarks = [
            new bookmark_model_1.BookmarkModel(1, 'Google', 'http://google.com', 'The most advanced search engine out there...', 10),
            new bookmark_model_1.BookmarkModel(2, 'Yahoo', 'http://yahoo.com', 'A pretty decent search engine', 20),
            new bookmark_model_1.BookmarkModel(3, 'Bing', 'http://bing.com', 'Meeeh...', 30),
        ];
    }
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
            console.log(matches);
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
    BookmarksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BookmarksService);
    return BookmarksService;
}());
exports.BookmarksService = BookmarksService;
//# sourceMappingURL=bookmarks.service.js.map