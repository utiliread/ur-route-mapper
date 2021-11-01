import { PLATFORM } from 'aurelia-framework';
export function configure(config) {
    config.globalResources(PLATFORM.moduleName('./mapper-href'));
}
export { RouteMapper } from './route-mapper';
//# sourceMappingURL=index.js.map