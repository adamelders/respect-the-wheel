import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWheelModule } from 'ngx-wheel';
import {
  NbCardModule,
  NbListModule,
  NbStatusService,
  NbInputModule,
  NbFocusMonitor,
  NbButtonModule,
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WheelSpinnerComponent } from './wheel-spinner/wheel-spinner.component';
import { WheelEntriesComponent } from './wheel-entries/wheel-entries.component';

@NgModule({
  declarations: [AppComponent, WheelSpinnerComponent, WheelEntriesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWheelModule,
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
  ],
  providers: [NbStatusService, NbFocusMonitor],
  bootstrap: [AppComponent],
})
export class AppModule {}
