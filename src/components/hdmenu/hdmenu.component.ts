import { Component, OnInit } from "@angular/core";
import { AppContext } from "../../infrastructure/app.context";
import { Router } from "@angular/router";
import { User } from "../../models/user";

@Component({
    selector:"hdmenu",
    templateUrl:"./hdmenu.component.html",
    styleUrls:["./hdmenu.component.css"]
})
export class HdMenuComponent implements OnInit {
    

    users: User[]=[];
    selectedUserId:string;

    constructor(
        private appContext:AppContext,
        private router:Router
    ){

    }

    ngOnInit(): void {
        this.users = this.appContext.Repository.User.getAll();
        this.selectedUserId = this.users[0].Id;
    }

    signOut(){
        this.appContext.Session.Gapi.signOut();
        this.router.navigate(['/signin']);
    }
}