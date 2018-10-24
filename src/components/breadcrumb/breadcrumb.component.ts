import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BreadCrumbItem } from "../../models/breadCrumbItem";
import { BreadCrumbItemOption } from "../../models/breadCrumbItemOption";

@Component({
    selector: "breadcrumb",
    templateUrl: "./breadcrumb.component.html",
    styleUrls: ["./breadcrumb.component.css"]

})
export class BreadCrumbComponent {
    @Input()
    items: BreadCrumbItem[];

    @Output()
    onSelectedItemChanged: EventEmitter<BreadCrumbItem> = new EventEmitter<BreadCrumbItem>();

    @Output()
    onSelectedOptionChanged: EventEmitter<BreadCrumbItemOption> = new EventEmitter<BreadCrumbItemOption>();
    
    onSelectedHandler($event: BreadCrumbItem){
        this.onSelectedItemChanged.emit($event);
    }

    onSelectedOptionHandler($event:BreadCrumbItemOption){
        this.onSelectedOptionChanged.emit($event);
    }
}