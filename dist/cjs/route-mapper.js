"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aurelia_route_recognizer_1 = require("aurelia-route-recognizer");
class RouteMapper extends aurelia_route_recognizer_1.RouteRecognizer {
    map(routes, parentRoute = '', parentName = '') {
        routes.forEach(config => {
            if (config.name) {
                let name = parentName
                    ? `${parentName}.${config.name}`
                    : config.name;
                let path = `${parentRoute}/${config.route}`;
                this.add({
                    path: path,
                    handler: { name: name },
                    caseSensitive: config.caseSensitive === true
                });
                if (config.settings && config.settings.childRoutes) {
                    this.map(config.settings.childRoutes, path, name);
                }
            }
        });
    }
}
exports.RouteMapper = RouteMapper;
//# sourceMappingURL=route-mapper.js.map