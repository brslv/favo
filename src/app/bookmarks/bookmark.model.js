"use strict";
var BookmarkModel = (function () {
    function BookmarkModel(id, title, link, description, weight) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.description = description;
        this.weight = weight;
    }
    return BookmarkModel;
}());
exports.BookmarkModel = BookmarkModel;
//# sourceMappingURL=bookmark.model.js.map