import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class FileSession {
    public uploadFinished : EventEmitter<any> = new EventEmitter();
}