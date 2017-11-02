import { RouteMapper } from './route-mapper';
export declare class MapperHref {
    private element;
    private mapper;
    route: string;
    params: any;
    attribute: string;
    constructor(element: Element, mapper: RouteMapper);
    processChange(): void;
}
