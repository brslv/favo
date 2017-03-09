"use strict";
var BookmarkModel = (function () {
    function BookmarkModel(id, title, link, description, weight) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.description = description;
        this.weight = weight;
    }
    BookmarkModel.factory = function (o) {
        var id = o._id || o.id || null, title = o.title || '', link = o.link || '', description = o.description || '', weight = o.weight || '';
        return new BookmarkModel(id, title, link, description, weight);
    };
    return BookmarkModel;
}());
exports.BookmarkModel = BookmarkModel;
//# sourceMappingURL=bookmark.model.js.map