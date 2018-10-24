import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { GapiSession } from "./gapi.session";

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor (
        private router:Router,
        private gapiSession: GapiSession){
        
    }
    canActivate(){
        var isLoggedIn = this.gapiSession.isSignedIn;
        if (!isLoggedIn)
            this.router.navigate(['/signin']);
        return isLoggedIn;
    }
}