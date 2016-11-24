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
var phone_service_1 = require('/resources/app/phone.service');
var ImportComponent = (function () {
    function ImportComponent(phoneService) {
        this.phoneService = phoneService;
        this.phones = [];
    }
    ImportComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService
            .searchPhones()
            .then(function (phones) { return _this.phones = phones; });
    };
    ImportComponent.prototype.ngOnInit = function () {
        this.getPhones();
    };
    ImportComponent = __decorate([
        core_1.Component({
            selector: 'import',
            templateUrl: '/resources/app/import.component.html'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof phone_service_1.PhoneService !== 'undefined' && phone_service_1.PhoneService) === 'function' && _a) || Object])
    ], ImportComponent);
    return ImportComponent;
    var _a;
})();
exports.ImportComponent = ImportComponent;
//# sourceMappingURL=import.component.js.map