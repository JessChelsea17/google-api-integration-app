import { Injectable } from "@angular/core";
import { AppSession } from "./sessions/app.session";
import { AppRepository } from "./repositories/app.repository";

@Injectable()
export class AppContext {

    constructor(
        private appRepository: AppRepository,
        private appSession: AppSession
    ) {

    }

    get Repository(): AppRepository {
        return this.appRepository;
    }
    
    get Session(): AppSession {
        return this.appSession;
    }
}