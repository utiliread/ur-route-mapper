var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, inject } from 'aurelia-framework';
import { RouteMapper } from './route-mapper';
var MapperHref = /** @class */ (function () {
    function MapperHref(element, mapper) {
        this.element = element;
        this.mapper = mapper;
        this.attribute = 'href';
    }
    MapperHref.prototype.processChange = function () {
        if (this.route) {
            var href = this.mapper.generate(this.route, this.params);
            var element = this.element;
            if (element.au.controller) {
                element.au.controller.viewModel[this.attribute] = href;
            }
            else {
                this.element.setAttribute(this.attribute, href);
            }
        }
    };
    __decorate([
        bindable({ changeHandler: 'processChange', primaryProperty: true }),
        __metadata("design:type", String)
    ], MapperHref.prototype, "route", void 0);
    __decorate([
        bindable({ changeHandler: 'processChange' }),
        __metadata("design:type", Object)
    ], MapperHref.prototype, "params", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MapperHref.prototype, "attribute", void 0);
    MapperHref = __decorate([
        inject(Element, RouteMapper),
        customAttribute('map-href'),
        __metadata("design:paramtypes", [Element, RouteMapper])
    ], MapperHref);
    return MapperHref;
}());
export { MapperHref };
