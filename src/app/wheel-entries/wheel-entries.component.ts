import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  AfterContentInit,
} from '@angular/core';
import { Entry } from '../interfaces/Entry';

@Component({
  selector: 'app-wheel-entries',
  templateUrl: './wheel-entries.component.html',
  styleUrls: ['./wheel-entries.component.css'],
})
export class WheelEntriesComponent implements OnInit, AfterContentInit {
  entries: Entry[] = [
    { text: 'Carla Espinosa', id: 0 },
    { text: 'Bob Kelso', id: 1 },
    { text: 'Janitor', id: 2 },
    { text: 'Perry Cox', id: 3 },
    { text: 'Ben Sullivan', id: 4 },
  ];
  newEntry: string;

  @Output()
  onEntriesUpdate: EventEmitter<Entry[]> = new EventEmitter();

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.publishEntries();
  }

  onClick() {
    this.entries.push({ text: this.newEntry, id: 0 });
    this.publishEntries();
    this.newEntry = '';
  }

  publishEntries() {
    this.onEntriesUpdate.emit(
      this.entries.map((entry, index) => {
        return { text: user.name, id: index } as Entry;
      })
    );
  }
}
