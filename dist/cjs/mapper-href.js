"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapperHref = void 0;
var aurelia_framework_1 = require("aurelia-framework");
var route_mapper_1 = require("./route-mapper");
var MapperHref = /** @class */ (function () {
    function MapperHref(element, mapper, taskQueue) {
        this.element = element;
        this.mapper = mapper;
        this.taskQueue = taskQueue;
        this.attribute = 'href';
        this.pendingChanges = false;
    }
    MapperHref.prototype.processChange = function () {
        // Delay the updating until after both route and params are set
        // see https://github.com/aurelia/templating/pull/587
        this.pendingChanges = true;
        this.taskQueue.queueTask(this.makeHref.bind(this));
    };
    MapperHref.prototype.makeHref = function () {
        if (this.pendingChanges) {
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
            this.pendingChanges = false;
        }
    };
    __decorate([
        (0, aurelia_framework_1.bindable)({ changeHandler: 'processChange', primaryProperty: true }),
        __metadata("design:type", String)
    ], MapperHref.prototype, "route", void 0);
    __decorate([
        (0, aurelia_framework_1.bindable)({ changeHandler: 'processChange' }),
        __metadata("design:type", Object)
    ], MapperHref.prototype, "params", void 0);
    __decorate([
        (0, aurelia_framework_1.bindable)(),
        __metadata("design:type", Object)
    ], MapperHref.prototype, "attribute", void 0);
    MapperHref = __decorate([
        (0, aurelia_framework_1.autoinject)(),
        (0, aurelia_framework_1.customAttribute)('mapper-href'),
        __metadata("design:paramtypes", [Element, route_mapper_1.RouteMapper, aurelia_framework_1.TaskQueue])
    ], MapperHref);
    return MapperHref;
}());
exports.MapperHref = MapperHref;
//# sourceMappingURL=mapper-href.js.map