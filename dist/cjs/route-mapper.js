"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_route_recognizer_1 = require("aurelia-route-recognizer");
var RouteMapper = /** @class */ (function (_super) {
    __extends(RouteMapper, _super);
    function RouteMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteMapper.prototype.map = function (routes, parentRoute, parentName) {
        var _this = this;
        if (parentRoute === void 0) { parentRoute = ''; }
        if (parentName === void 0) { parentName = ''; }
        routes.forEach(function (config) {
            if (config.name) {
                var name_1 = parentName
                    ? parentName + "." + config.name
                    : config.name;
                var path = parentRoute + "/" + config.route;
                _this.add({
                    path: path,
                    handler: { name: name_1 },
                    caseSensitive: config.caseSensitive === true
                });
                if (config.settings && config.settings.childRoutes) {
                    _this.map(config.settings.childRoutes, path, name_1);
                }
            }
        });
    };
    return RouteMapper;
}(aurelia_route_recognizer_1.RouteRecognizer));
exports.RouteMapper = RouteMapper;
//# sourceMappingURL=route-mapper.js.map