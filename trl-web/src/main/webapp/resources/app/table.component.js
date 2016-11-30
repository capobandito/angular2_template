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
var phone_service_1 = require('./phone.service');
var order_by_1 = require("./order-by");
var format_1 = require("./format");
var TableComponent = (function () {
    function TableComponent(phoneService) {
        this.phoneService = phoneService;
        this.columns = [
            {
                display: 'Id',
                variable: 'id',
                filter: 'number' //The type data type of the column (number, text, date, etc.)
            },
            {
                display: 'Phone number',
                variable: 'phoneNumber',
                filter: 'text' //The type data type of the column (number, text, date, etc.)
            }
        ];
        this.sorting = {
            column: 'id',
            descending: false
        };
        this.phones = [];
    }
    TableComponent.prototype.getPhones = function () {
        var _this = this;
        this.phoneService
            .searchPhones()
            .then(function (phones) { return _this.phones = phones; });
    };
    TableComponent.prototype.ngOnInit = function () {
        this.getPhones();
    };
    TableComponent.prototype.selectedClass = function (columnName) {
        return columnName == this.sorting.column ? 'sort-' + this.sorting.descending : 'sort-' + false;
    };
    TableComponent.prototype.changeSorting = function (columnName) {
        var sort = this.sorting;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        }
        else {
            sort.column = columnName;
            sort.descending = false;
        }
    };
    TableComponent.prototype.convertSorting = function () {
        return this.sorting.descending ? '-' + this.sorting.column : this.sorting.column;
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table',
            templateUrl: '/resources/app/table.component.html',
            pipes: [order_by_1.OrderBy, format_1.Format]
        }), 
        __metadata('design:paramtypes', [phone_service_1.PhoneService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map