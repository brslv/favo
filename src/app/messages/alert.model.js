"use strict";
var AlertModel = (function () {
    function AlertModel(message, type) {
        this.message = message;
        this.type = type;
    }
    AlertModel.TYPE_SUCCESS = 'success';
    return AlertModel;
}());
exports.AlertModel = AlertModel;
//# sourceMappingURL=alert.model.js.map