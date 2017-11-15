import { TaskQueue } from 'aurelia-framework';
import { RouteMapper } from './route-mapper';
export declare class MapperHref {
    private element;
    private mapper;
    private taskQueue;
    route: string;
    params: any;
    attribute: string;
    private pendingChanges;
    constructor(element: Element, mapper: RouteMapper, taskQueue: TaskQueue);
    processChange(): void;
    private makeHref();
}
