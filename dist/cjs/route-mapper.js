"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteMapper = void 0;
var aurelia_route_recognizer_1 = require("aurelia-route-recognizer");
var RouteMapper = /** @class */ (function (_super) {
    __extends(RouteMapper, _super);
    function RouteMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteMapper.prototype.map = function (routes, parentRoute, parentName) {
        if (parentRoute === void 0) { parentRoute = ''; }
        if (parentName === void 0) { parentName = ''; }
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var config = routes_1[_i];
            if (config.name) {
                var name_1 = parentName ? parentName + "." + config.name : config.name;
                var routes_3 = Array.isArray(config.route) ? config.route : [config.route];
                for (var _a = 0, routes_2 = routes_3; _a < routes_2.length; _a++) {
                    var route = routes_2[_a];
                    var path = parentRoute + "/" + route;
                    this.add({
                        path: path,
                        handler: { name: name_1 },
                        caseSensitive: config.caseSensitive === true
                    });
                    if (config.settings && config.settings.childRoutes) {
                        this.map(config.settings.childRoutes, path, name_1);
                    }
                }
            }
        }
    };
    return RouteMapper;
}(aurelia_route_recognizer_1.RouteRecognizer));
exports.RouteMapper = RouteMapper;
//# sourceMappingURL=route-mapper.js.map