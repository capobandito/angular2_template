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
var navigation_menu_service_1 = require('./navigation-menu.service');
var NavigationMenuComponent = (function () {
    function NavigationMenuComponent(menuService) {
        this.menuService = menuService;
        this.notificationsCount = 0;
    }
    NavigationMenuComponent.prototype.ngOnInit = function () {
        // this.menuService
        //     .notificationsCount()
        //     .then(notifCount => this.notificationsCount = notifCount);
        var _this = this;
        this.menuService
            .notificationsCountObs()
            .subscribe(function (notifCount) { return _this.notificationsCount = notifCount; }, function (error) { return console.log(error); });
    };
    NavigationMenuComponent = __decorate([
        core_1.Component({
            selector: 'navigation-menu',
            templateUrl: '/resources/app/navigation-menu.component.html'
        }), 
        __metadata('design:paramtypes', [navigation_menu_service_1.NavigationMenuService])
    ], NavigationMenuComponent);
    return NavigationMenuComponent;
}());
exports.NavigationMenuComponent = NavigationMenuComponent;
//# sourceMappingURL=navigation-menu.component.js.map