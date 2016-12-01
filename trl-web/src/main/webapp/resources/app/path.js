"use strict";
var Path = (function () {
    function Path(title, d) {
        this.title = title;
        this.d = d;
    }
    Path.prototype.setFound = function (found) {
        this.found = found;
    };
    return Path;
}());
exports.Path = Path;
//# sourceMappingURL=path.js.map