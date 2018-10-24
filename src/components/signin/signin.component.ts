import { Component, NgZone } from "@angular/core";
import { AppContext } from "../../infrastructure/app.context";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: "signin",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.css"]
})
export class SignInComponent {
    showButton = true;

    constructor(
        private appContext: AppContext,
        private router: Router,
        private location: Location,
        private zone: NgZone
    ) {

    }

    signIn() {
        this.appContext.Session.Gapi.signIn()
            .then(() => {
                if (this.appContext.Session.Gapi.isSignedIn) {
                    this.router.navigateByUrl("/home");
                    // console.log('zone: ', this.location);
                    this.location.go('home')
                }
            });
        this.showButton = false;
    }
    public reload(): any {
        return this.zone.runOutsideAngular(() => {
            location.reload()
        });
    }


}