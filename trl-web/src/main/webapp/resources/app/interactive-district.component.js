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
var found_paths_pipe_1 = require('./found-paths.pipe');
var InteractiveDistrictComponent = (function () {
    function InteractiveDistrictComponent(route, mapService) {
        this.route = route;
        this.mapService = mapService;
        this.search = '';
        this.isFound = false;
    }
    InteractiveDistrictComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var title = params['title'];
            _this.mapService.getDistrict(title)
                .then(function (district) { return _this.district = district; });
        });
    };
    InteractiveDistrictComponent.prototype.mouseOver = function (path) {
        this.selectedPath = path;
    };
    InteractiveDistrictComponent.prototype.onKey = function (event) {
        this.search = event.target.value;
        for (var _i = 0, _a = this.district.paths; _i < _a.length; _i++) {
            var path = _a[_i];
            path.setFound(this.search && path.title.startsWith(this.search));
        }
    };
    InteractiveDistrictComponent = __decorate([
        core_1.Component({
            selector: 'interactiveMap',
            template: "\n\n    <link rel=\"stylesheet\" href=\"../resources/app/interactive-district.component.css\">\n\n    <h3 *ngIf=\"district && !selectedPath\">Selected subdistrict for {{district.title}}:</h3>\n    <h3 *ngIf=\"selectedPath\">Selected subdistrict for {{district.title}}: {{selectedPath.title}}</h3>\n\n    <div>\n        <input (keyup)=\"onKey($event)\">\n        <div *ngIf=\"district\">\n            <div *ngFor=\"let path of district.paths | foundPaths\">\n                {{path.title}}\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"district\">\n        <svg width=\"800\" height=\"600\" viewBox=\"0 0 744.09449 1052.3622\"\n             preserveAspectRatio=\"xMinYMin meet\" xmlns:svg=\"http://www.w3.org/1999/html\">\n\n          <svg:g [attr.title]=\"district.title\" [attr.transform]=\"district.transform\" >\n               <svg:path *ngFor=\"let path of district.paths\" [attr.d]=\"path.d\"\n                        [attr.title]=\"path.title\"\n                        (mouseover)=\"mouseOver(path)\"  [class.path]=\"!path.found\" [class.path-selected]=\"path.found\"></svg:path>\n          </svg:g>\n\n        </svg>\n    </div>\n    ",
            providers: [map_service_1.MapService],
            pipes: [found_paths_pipe_1.FoundPathsPipe]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, map_service_1.MapService])
    ], InteractiveDistrictComponent);
    return InteractiveDistrictComponent;
})();
exports.InteractiveDistrictComponent = InteractiveDistrictComponent;
//# sourceMappingURL=interactive-district.component.js.map