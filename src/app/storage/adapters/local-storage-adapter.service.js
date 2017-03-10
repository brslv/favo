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
var json_util_1 = require('../../utils/json.util');
var bookmark_model_1 = require('../../bookmarks/bookmark.model');
var LocalStorageAdapterService = (function () {
    function LocalStorageAdapterService() {
        this.UNIQUE_ID_SIGNIFIER = '_id';
    }
    LocalStorageAdapterService.prototype.get = function (key, id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (!id) {
                resolve(json_util_1.unj(localStorage.getItem(key)));
                return;
            }
            resolve(json_util_1.unj(localStorage.getItem(key))[_this.UNIQUE_ID_SIGNIFIER]);
        });
        return promise;
    };
    LocalStorageAdapterService.prototype.add = function (data, key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.keyExists(key)) {
                _this.injectNewId(data, key)
                    .then(function (data) {
                    localStorage.setItem(key, json_util_1.j([data]));
                    resolve(bookmark_model_1.BookmarkModel.factory(data));
                });
            }
            else {
                _this.get(key)
                    .then(function (existing) {
                    var newItem = _this.injectNewId(data, key)
                        .then(function (data) {
                        existing.push(newItem);
                        localStorage.setItem(key, json_util_1.j(existing));
                        resolve(bookmark_model_1.BookmarkModel.factory(data));
                    });
                });
            }
        });
    };
    LocalStorageAdapterService.prototype.edit = function (id, data, key) {
        return Promise.resolve('edits a record from local storage');
    };
    LocalStorageAdapterService.prototype.delete = function (data, key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get(key).then(function (bookmarks) {
                if (bookmarks) {
                    bookmarks = bookmarks.filter(function (b) {
                        return b[_this.UNIQUE_ID_SIGNIFIER] !== data.id;
                    });
                }
                localStorage.setItem(key, json_util_1.j(bookmarks));
                resolve(bookmarks);
            });
        });
    };
    LocalStorageAdapterService.prototype.keyExists = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageAdapterService.prototype.injectNewId = function (data, key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!(data instanceof Object)) {
                data = {
                    '_': data // use a default key '_'
                };
            }
            _this.generateId(key).then(function (id) {
                data[_this.UNIQUE_ID_SIGNIFIER] = id;
                resolve(data);
            });
        });
    };
    LocalStorageAdapterService.prototype.generateId = function (key) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.keyExists(key)) {
                resolve(1);
                return;
            }
            _this.get(key).then(function (existing) {
                var biggestId = _this.getBiggestId(existing);
                resolve(biggestId + 1);
            });
        });
    };
    LocalStorageAdapterService.prototype.getBiggestId = function (existing) {
        var _this = this;
        var biggestId = 1;
        existing.forEach(function (item) {
            if (item[_this.UNIQUE_ID_SIGNIFIER] > biggestId) {
                biggestId = +item[_this.UNIQUE_ID_SIGNIFIER];
            }
        });
        return biggestId;
    };
    LocalStorageAdapterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageAdapterService);
    return LocalStorageAdapterService;
}());
exports.LocalStorageAdapterService = LocalStorageAdapterService;
//# sourceMappingURL=local-storage-adapter.service.js.map