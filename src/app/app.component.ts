import { Component } from '@angular/core';
import { Entry } from './interfaces/Entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'respect-the-wheel';
  entries: Entry[];

  onEntriesUpdate(entries: Entry[]): void {
    this.entries = entries;
  }
}
