import { Component, OnInit, EventEmitter, Output, Input, NgZone } from '@angular/core';
import { Event } from './Event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @Output() newEvent: EventEmitter<Event> = new EventEmitter();
  @Input() currentEvent: Event;
  @Input() isEdit: boolean;

  constructor(
    private router: Router,
    private zone: NgZone,
  ) { }

  ngOnInit() {}

  addEvent(eventname, location, description, startdate, enddate, timezone) {
    if(!eventname || !startdate || !enddate || !timezone) {
      alert('Please fill in all required fields');
    } else {
      startdate = startdate + ':00';
      enddate = enddate + ':00';
      var reqBody = {
        'summary': eventname,
        'location': location,
        'description': description,
        'start': {
          'dateTime': startdate,
          'timeZone': timezone
        },
        'end': {
          'dateTime': startdate,
          'timeZone': timezone
        }
      }
      gapi.client['calendar'].events.insert({
        calendarId: 'primary',
        resource:  reqBody
      }).then((res) => {
            this.zone.run(() => {
              console.log('REQUEST: ', res);
            });
      });
    }
  }

  back() {
    this.router.navigate(['/home']);
  }

}
