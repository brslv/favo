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
        if (!id) {
            return json_util_1.unj(localStorage.getItem(key));
        }
        return json_util_1.unj(localStorage.getItem(key))[this.UNIQUE_ID_SIGNIFIER];
    };
    LocalStorageAdapterService.prototype.add = function (data, key) {
        if (!this.keyExists(key)) {
            data = this.injectNewId(data, key);
            localStorage.setItem(key, json_util_1.j([data]));
            return bookmark_model_1.BookmarkModel.factory(data);
        }
        else {
            var existing = this.get(key);
            var newItem = this.injectNewId(data, key);
            existing.push(newItem);
            localStorage.setItem(key, json_util_1.j(existing));
            return bookmark_model_1.BookmarkModel.factory(data);
        }
    };
    LocalStorageAdapterService.prototype.edit = function (id, data, key) {
        console.log('edits a record from local storage');
    };
    LocalStorageAdapterService.prototype.delete = function (data, key) {
        console.log('deletes a record from local storage');
    };
    LocalStorageAdapterService.prototype.keyExists = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageAdapterService.prototype.injectNewId = function (data, key) {
        if (!(data instanceof Object)) {
            data = {
                '_': data // use a default key '_'
            };
        }
        data[this.UNIQUE_ID_SIGNIFIER] = this.generateId(key);
        return data;
    };
    LocalStorageAdapterService.prototype.generateId = function (key) {
        if (!this.keyExists(key)) {
            return 1;
        }
        var existing = this.get(key);
        var biggestId = this.getBiggestId(existing);
        return biggestId + 1;
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