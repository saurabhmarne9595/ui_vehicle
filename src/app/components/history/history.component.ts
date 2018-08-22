import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service'
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  response1;
  response2;
  response3;
  response;

  constructor(private HISTORY:RequestService ) { }

  ngOnInit() {

      let body = {
        chassiNo: "123456"
      }
  
      this.HISTORY.history(body).subscribe(res => {
        console.log(res.msg);
        this.response = res.msg.lastService
        this.response1 = res.msg.partsReplaced
        this.response2 = res.msg.currentKms
        this.response3 = res.msg.nextDueKms
      });
    
    

  }
}