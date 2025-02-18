import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as ical from 'ical.js';


@Component({
  selector: 'availability',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './availability.component.html' 
})
export class AvailabilityComponent implements OnInit{
  events: any[] = [];
  constructor(private el: ElementRef) {};

  ngOnInit() {
    //this.loadCalendarNew();
    this.triggerAirbnbCalendarClick();
    console.log("Events = " + this.events.length);
  }

  triggerAirbnbCalendarClick() {
    const airbnbCalendarLink =    this.el.nativeElement.querySelector('#airbnbCalendar');
    if (airbnbCalendarLink) {
      airbnbCalendarLink.click();
    } else {
      console.warn('airbnbCalendar link not found.');
    }
  }

  loadCalendar() {
    fetch('/api/calendar/ical/12803248.ics?s=cba0105d4adabc499b886a24651de2e8')
          .catch(error => console.error('Error loading iCal data:', error));
  }

  loadHomeawayCalendar() {
  //  http://www.vrbo.com/icalendar/aa91876e3ab145a5a3a4e38ccd71b433.ics
  }

  loadCalendarNew() {
    fetch('http://localhost:3000/proxy')
      .then(response => response.text())
      .then(data => {
        
        const jcalData = ical.default.parse(data);
        const comp = new ical.default.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        this.events = vevents.map(event => {
          const start = event.getFirstPropertyValue('dtstart');
          const end = event.getFirstPropertyValue('dtend');
          const summary = event.getFirstPropertyValue('summary');
          return { start, end, summary };
        });
      })
      .catch(error => console.error('Error loading iCal data:', error));
  }

  loadCalendarFromFile() {
    fetch('/assets/listing-12803248.ics')
      .then(response => response.text())
      .then(data => {
        
        const jcalData = ical.default.parse(data);
        const comp = new ical.default.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        this.events = vevents.map(event => {
          const start = event.getFirstPropertyValue('dtstart');
          const end = event.getFirstPropertyValue('dtend');
          const summary = event.getFirstPropertyValue('summary');
          return { start, end, summary };
        });
      })
      .catch(error => console.error('Error loading iCal data:', error));
  }

  loadCalendarKeep() {
    fetch('http://www.airbnb.com/calendar/ical/12803248.ics?s=cba0105d4adabc499b886a24651de2e8')
    /*
      .then(response => response.text())
      .then(data => {
        
        const jcalData = ical.default.parse(data);
        const comp = new ical.default.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        this.events = vevents.map(event => {
          const start = event.getFirstPropertyValue('dtstart');
          const end = event.getFirstPropertyValue('dtend');
          const summary = event.getFirstPropertyValue('summary');
          return { start, end, summary };
        });
      })
    */
      .catch(error => console.error('Error loading iCal data:', error));
  }
}