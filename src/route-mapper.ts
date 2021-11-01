import { RouteConfig } from 'aurelia-router';
import { RouteRecognizer } from 'aurelia-route-recognizer';

export class RouteMapper extends RouteRecognizer {
    public map(routes: RouteConfig[], parentRoute = '', parentName = ''): void {
        for (const config of routes) {
            if (config.name) {
                const name = parentName ? `${parentName}.${config.name}` : config.name;
                const routes = Array.isArray(config.route) ? config.route : [config.route];
                for (const route of routes) {
                    const path = `${parentRoute}/${route}`;
                    this.add({
                        path: path,
                        handler: { name: name },
                        caseSensitive: config.caseSensitive === true
                    });
                    
                    if (config.settings && config.settings.childRoutes) {
                        this.map(config.settings.childRoutes, path, name);
                    }
                }
            }
        }
    }
}