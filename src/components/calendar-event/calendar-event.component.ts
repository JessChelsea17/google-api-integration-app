import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { User } from "../../models/user";
import { AppContext } from "../../infrastructure/app.context";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  defaultTime: string;
  showContactForm: boolean = false;

  constructor(
    private router: Router,
    private zone: NgZone,
    private appContext: AppContext,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.defaultTime = moment().format('YYYY-MM-DD')+'T00:00';
    this.users = this.appContext.Repository.User.getAll();
    this.selectedUserEmail = this.users[0].Email;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  
  }

  users: User[]=[];
  url: string = `[calendar-url]`;
  urlSafe: SafeResourceUrl;
  selectedUserEmail: string;

  addEvent(eventname, eventlocation, description, startdate, enddate, timezone) {
    if(!startdate || !enddate || !timezone) {
      alert('Please fill in all required fields');
    } else {
      startdate = startdate + ':00';
      enddate = enddate + ':00';
      console.log(startdate);
      var reqBody = {
        'summary': eventname,
        'location': eventlocation,
        'description': description,
        'start': {
          'dateTime': startdate,
          'timeZone': timezone
        },
        'end': {
          'dateTime': enddate,
          'timeZone': timezone
        }
      }
      gapi.client['calendar'].events.insert({
        calendarId: 'primary',
        resource:  reqBody
      }).then((res) => {
            this.zone.run(() => {
              console.log('REQUEST: ', res);
              alert('Event has been added.');
            });
            location.reload();
      });
    }
  }

  back() {
    this.router.navigate(['/home']);
  }

}
