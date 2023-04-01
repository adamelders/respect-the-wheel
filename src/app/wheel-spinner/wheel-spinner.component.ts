import {
  Component,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  Item as NgxWheelItem,
  NgxWheelComponent,
  TextAlignment,
  TextOrientation,
} from 'ngx-wheel';
import Swal from 'sweetalert2';
import { Entry } from '../interfaces/Entry';

@Component({
  selector: 'app-wheel-spinner',
  templateUrl: './wheel-spinner.component.html',
  styleUrls: ['./wheel-spinner.component.css'],
})
export class WheelSpinnerComponent implements OnInit, OnChanges {
  items: Array<NgxWheelItem> = [];
  textOrientation = TextOrientation.HORIZONTAL;
  textAlignment = TextAlignment.INNER;
  idToLandOn = 1;

  @Input()
  winnerMessage: string;
  @Input()
  entries: Entry[];
  @ViewChild('wheel')
  wheel: NgxWheelComponent;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    // if (
    //   changes['entries'] &&
    //   changes['entries'].currentValue !== changes['entries'].previousValue
    // ) {
    //   this.entries.forEach((entry) => {
    //     entry.fillStyle = `#${Math.floor(Math.random() * 16777215).toString(
    //       16
    //     )}`;
    //   });
    //   this.items = this.entries as NgxWheelItem[];
    // }
  }

  beforeSpin(): void {
    const minValue = 0;
    const maxValue = this.items.length - 1;
    this.idToLandOn =
      Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    console.log("it's fixed! " + this.idToLandOn + ' will win!');
  }

  async afterSpin(): Promise<void> {
    await Swal.fire({
      title: `Winner is ${
        this.items.find((item) => item.id === this.idToLandOn)?.text
      }`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
      icon: 'success',
    });

    this.wheel.reset();
  }
}
