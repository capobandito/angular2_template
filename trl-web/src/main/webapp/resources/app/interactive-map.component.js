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
var map_service_1 = require('./map.service');
var InteractiveMapComponent = (function () {
    function InteractiveMapComponent(router, mapService) {
        this.router = router;
        this.mapService = mapService;
    }
    InteractiveMapComponent.prototype.ngOnInit = function () {
        this.getMap();
    };
    InteractiveMapComponent.prototype.getMap = function () {
        var _this = this;
        this.mapService.getMap().then(function (map) { return _this.map = map; });
    };
    InteractiveMapComponent.prototype.mouseOver = function (path) {
        this.selectedPath = path;
    };
    InteractiveMapComponent.prototype.onclick = function (path) {
        var link = ['/district', path.title];
        this.router.navigate(link);
    };
    InteractiveMapComponent = __decorate([
        core_1.Component({
            selector: 'interactiveMap',
            template: "\n\n    <h3 *ngIf=\"!selectedPath\"> Selected district:</h3>\n    <h3 *ngIf=\"selectedPath\"> Selected district: {{selectedPath.title}}</h3>\n\n    <div *ngIf=\"map\">\n        <svg [attr.viewBox]=\"map.viewBox\"\n             preserveAspectRatio=\"xMidYMid meet\" width=\"800\" height=\"600\" xmlns:svg=\"http://www.w3.org/1999/html\">\n\n          <svg:g *ngFor=\"let district of map.districts\" [attr.title]=\"district.title\" >\n\n              <svg:path [attr.d]=\"district.path.d\"\n                        [attr.title]=\"district.path.title\"\n                        (mouseover)=\"mouseOver(district)\"\n                        (click)=\"onclick(district.path)\">\n              </svg:path>\n\n          </svg:g>\n\n        </svg>\n    </div>\n    ",
            providers: [map_service_1.MapService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, map_service_1.MapService])
    ], InteractiveMapComponent);
    return InteractiveMapComponent;
}());
exports.InteractiveMapComponent = InteractiveMapComponent;
//# sourceMappingURL=interactive-map.component.js.map