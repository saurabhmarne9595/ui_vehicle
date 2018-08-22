import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { Http, Headers, HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { DashComponent } from './components/dash/dash.component';
import { InfluxService } from './services/influx.service';
import { StatusComponent } from './components/status/status.component';
import { GarageComponent } from './components/garage/garage.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HistoryComponent } from './components/history/history.component'

const appRoutes = [
  { path: '', redirectTo: 'dash', pathMatch: 'full' },
  { path: 'dash', component: DashComponent },
  { path: 'status', component: StatusComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'garage', component: GarageComponent },
  { path: 'history', component: HistoryComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    StatusComponent,
    GarageComponent,
    NotificationComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [InfluxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
