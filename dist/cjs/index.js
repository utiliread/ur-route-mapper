"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config.globalResources(aurelia_framework_1.PLATFORM.moduleName('./mapper-href'));
}
exports.configure = configure;
var route_mapper_1 = require("./route-mapper");
exports.RouteMapper = route_mapper_1.RouteMapper;
//# sourceMappingURL=index.js.map