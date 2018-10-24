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

  ngOnInit() {
    this.test();
  }

  test() {
    var reqBody = {
      start: {
        dateTime: '2018-10-24T14:30:00-07:00',
        timeZone: 'America/Los_Angeles'
      },
      end: {
        dateTime: '2018-10-24T14:30:00-07:00',
        timeZone: 'America/Los_Angeles'
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

  addEvent(eventname, location, description, startdate, enddate, timezone) {
    if(!eventname || !startdate || !enddate || !timezone) {
      console.log(eventname)
      console.log(startdate)
      console.log(enddate)
      console.log(timezone)
      alert('Please fill in all required fields');
    } else {
      startdate = startdate + ':00';
      enddate = enddate + ':00';
      console.log(eventname)
      console.log(location)
      console.log(description)
      console.log(startdate)
      console.log(enddate)
      // console.log(timezone)
      // this.eventService.saveEvent({eventname, location, description, startdate, enddate, timezone} as Event).subscribe(event => {
      //   this.newEvent.emit(event);
      // });
    }
  }

  back() {
    this.router.navigate(['/home']);
  }

}
