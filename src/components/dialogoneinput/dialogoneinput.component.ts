import { Component, ViewChild, ElementRef, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogOneInputData } from "../../models/dialogOneInputData";

@Component({
    selector: "dialogoneinput",
    templateUrl: "./dialogoneinput.component.html",
    styleUrls:['./dialogoneinput.component.css']

})
export class DialogOneInputComponent implements OnInit {

    name: string;
    constructor(
        public dialogRef: MatDialogRef<DialogOneInputComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogOneInputData
    ) {
        this.name = data.DefaultInputText;
    }

    ngOnInit(): void {
    }

    cancel(): void {
        this.dialogRef.close();
    }
}