import { bindable, customAttribute, inject } from 'aurelia-framework';

import { RouteMapper } from './route-mapper';

@inject(Element, RouteMapper)
@customAttribute('map-href')
export class MapperHref {
    @bindable({ changeHandler: 'processChange', primaryProperty: true })
    route: string;

    @bindable({ changeHandler: 'processChange' })
    params: any;

    @bindable()
    attribute = 'href';

    constructor(private element: Element, private mapper: RouteMapper) {
    }

    processChange() {
        if (this.route) {
            let href = this.mapper.generate(this.route, this.params);
            let element: any = this.element;

            if (element.au.controller) {
                element.au.controller.viewModel[this.attribute] = href;
            }
            else {
                this.element.setAttribute(this.attribute, href);
            }
        }
    }
}