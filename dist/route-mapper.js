import { RouteRecognizer } from 'aurelia-route-recognizer';
export class RouteMapper extends RouteRecognizer {
    map(routes, parentRoute = '', parentName = '') {
        routes.forEach(config => {
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
        });
    }
}
