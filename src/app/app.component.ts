import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { RequestService } from './services/request.service'


// import { HistoryComponent } from '../app/components/history'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hisData
  title = 'dashboardls';

  constructor(private router: Router,private HISTORY:RequestService) { }

  goto(route) {

    this.router.navigate(["/" + route])
  }
}
