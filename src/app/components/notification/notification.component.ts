import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notify;

  constructor(private REQUEST: RequestService) { }

  body = {
    carId: "123456"
  }

  ngOnInit() {
    this.REQUEST.getNotification(this.body).subscribe(res=>{
      console.log(res);
      this.notify=res.msg
    })

  }

  notifications() {
    this.REQUEST.getNotification(this.body).subscribe(res => {
      console.log(res.msg);
      this.notify = res.msg
    });
  }



}
