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
var common_1 = require('@angular/common');
var Format = (function () {
    function Format() {
        this.datePipe = new common_1.DatePipe();
        this.decimalPipe = new common_1.DecimalPipe();
    }
    Format.prototype.transform = function (input, args) {
        var format = '';
        var parsedFloat = 0;
        var pipeArgs = args.split(':');
        for (var i = 0; i < pipeArgs.length; i++) {
            pipeArgs[i] = pipeArgs[i].trim(' ');
        }
        switch (pipeArgs[0].toLowerCase()) {
            case 'text':
                return input;
            case 'decimal':
            case 'number':
                parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
                format = pipeArgs.length > 1 ? pipeArgs[1] : null;
                return this.decimalPipe.transform(parsedFloat, format);
            case 'percentage':
                parsedFloat = !isNaN(parseFloat(input)) ? parseFloat(input) : 0;
                format = pipeArgs.length > 1 ? pipeArgs[1] : null;
                return this.decimalPipe.transform(parsedFloat, format) + '%';
            case 'date':
            case 'datetime':
                var date = !isNaN(parseInt(input)) ? parseInt(input) : new Date(input);
                format = 'MMM d, y h:mm:ss a';
                if (pipeArgs.length > 1) {
                    format = '';
                    for (var i = 1; i < pipeArgs.length; i++) {
                        format += pipeArgs[i];
                    }
                }
                return this.datePipe.transform(date, format);
            default:
                return input;
        }
    };
    Format = __decorate([
        core_1.Pipe({
            name: 'format'
        }), 
        __metadata('design:paramtypes', [])
    ], Format);
    return Format;
}());
exports.Format = Format;
//# sourceMappingURL=format.js.map