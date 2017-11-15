import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources(
        PLATFORM.moduleName('./mapper-href')
    );
}

export { RouteMapper } from './route-mapper';