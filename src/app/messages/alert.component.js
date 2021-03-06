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
var alert_model_1 = require('./alert.model');
var AlertComponent = (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.hide = function () {
        this.alert = null;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', alert_model_1.AlertModel)
    ], AlertComponent.prototype, "alert", void 0);
    AlertComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fv-alert',
            templateUrl: './alert.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AlertComponent);
    return AlertComponent;
}());
exports.AlertComponent = AlertComponent;
//# sourceMappingURL=alert.component.js.map