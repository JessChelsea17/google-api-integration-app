import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './Event';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  postUrl: string = '';
  constructor(private http: HttpClient) { }

  getEvent(id: number): Observable<Event> {
    const url = `${this.postUrl}/${id}`;
    return this.http.get<Event>(url);
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.postUrl);
  }

  saveEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.postUrl, event, httpOptions);
  }

  removeContact(event: Event | number): Observable<Event> {
    const id = typeof event === 'number' ? event : event.id;
    const url = `${this.postUrl}/${id}`;
    return this.http.delete<Event>(url, httpOptions);
  }
}
