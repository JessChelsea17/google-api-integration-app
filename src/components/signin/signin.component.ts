import { Component } from "@angular/core";
import { AppContext } from "../../infrastructure/app.context";
import { Router } from "@angular/router";

@Component({
    selector: "signin",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.css"]
})
export class SignInComponent {

    constructor(
        private appContext: AppContext,
        private router: Router
    ) {

    }

    signIn() {
        this.appContext.Session.Gapi.signIn()
            .then(() => {
                if (this.appContext.Session.Gapi.isSignedIn) {
                    this.router.navigate(["/home"]);
                }
            });
    }


}