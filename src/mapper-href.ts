import {
  TaskQueue,
  autoinject,
  bindable,
  customAttribute,
} from "aurelia-framework";

import { RouteMapper } from "./route-mapper";

@autoinject()
@customAttribute("mapper-href")
export class MapperHref {
  @bindable({ changeHandler: "processChange", primaryProperty: true })
  route?: string;

  @bindable({ changeHandler: "processChange" })
  params?: any;

  @bindable()
  attribute = "href";

  private pendingChanges = false;

  constructor(
    private element: Element,
    private mapper: RouteMapper,
    private taskQueue: TaskQueue
  ) {}

  processChange() {
    // Delay the updating until after both route and params are set
    // see https://github.com/aurelia/templating/pull/587
    this.pendingChanges = true;
    this.taskQueue.queueTask(this.makeHref.bind(this));
  }

  private makeHref() {
    if (this.pendingChanges) {
      if (this.route) {
        let href = this.mapper.generate(this.route, this.params);
        let element: any = this.element;

        if (element.au.controller) {
          element.au.controller.viewModel[this.attribute] = href;
        } else {
          this.element.setAttribute(this.attribute, href);
        }
      }

      this.pendingChanges = false;
    }
  }
}
