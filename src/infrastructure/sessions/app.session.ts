import { Injectable } from "@angular/core";
import { UserSession } from "./user.session";
import { GapiSession } from "./gapi.session";
import { BreadCrumbSession } from "./breadcrumb.session";
import { FileSession } from "./file.session";

@Injectable()
export class AppSession {
    constructor(
        private authSession: GapiSession,
        private breadCrumbSession: BreadCrumbSession,
        private fileSession: FileSession,
        private userSession: UserSession
    ) {

    }

    get File():FileSession {
        return this.fileSession;
    }
    get Gapi(): GapiSession {
        return this.authSession;
    }

    get BreadCrumb(): BreadCrumbSession {
        return this.breadCrumbSession;
    }

    get User(): UserSession {
        return this.userSession;
    }


}