import { RouteConfig } from 'aurelia-router';
import { RouteRecognizer } from 'aurelia-route-recognizer';

export class RouteMapper extends RouteRecognizer {
    public map(routes: RouteConfig[], parentRoute = '', parentName = ''): void {
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