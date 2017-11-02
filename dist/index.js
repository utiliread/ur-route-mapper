import { PLATFORM } from 'aurelia-framework';
export function configure(config) {
    config.globalResources(PLATFORM.moduleName('./map-href'));
}
export { RouteMapper } from './route-mapper';
