import { Component } from "@angular/core";
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
    ) {

    }

    signIn() {
        this.appContext.Session.Gapi.signIn()
            .then(() => {
                if (this.appContext.Session.Gapi.isSignedIn) {
                    this.router.navigateByUrl("/home");
                    this.location.go('home')
                }
                location.reload();
            });
        this.showButton = false;
    }

}