import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from "@angular/core";
import { BreadCrumbItem } from "../../../models/breadCrumbItem";
import { BreadCrumbItemOption, OPTION_NEW_FOLDER, OPTION_UPLOAD_FILES } from "../../../models/breadCrumbItemOption";
import { MatButton } from "@angular/material/button";

@Component({
    selector: "breadcrumbitem",
    templateUrl: "./breadcrumbitem.component.html",
    styleUrls: ["./breadcrumbitem.component.css"]
})
export class BreadCrumbItemComponent {

    @Input()
    model: BreadCrumbItem;

    @Output()
    onSelected: EventEmitter<BreadCrumbItem> = new EventEmitter<BreadCrumbItem>();

    @Output()
    onSelectedOption: EventEmitter<BreadCrumbItemOption> = new EventEmitter<BreadCrumbItemOption>();

    newFolder() {
        this.onSelectedOption.emit({ Name: "New folder", Option: OPTION_NEW_FOLDER, Data: null });
    }

    select() {
        this.onSelected.emit(this.model);
    }

    uploadFiles($event) {
        this.onSelectedOption.emit({ Name: "Upload files", Option: OPTION_UPLOAD_FILES, Data: $event.target.files })
    }



}