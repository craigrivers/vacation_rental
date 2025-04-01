import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as ical from 'ical.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  events: any[] = [];
  menuOpen = false;

  ngOnInit() {
   //this.loadCalendarFromFile();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const nav = document.querySelector('.topNav');
    if (nav) {
      nav.classList.toggle('open');
    }
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
}
