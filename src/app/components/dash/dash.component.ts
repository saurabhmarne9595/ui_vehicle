import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfluxService } from '../../services/influx.service'
import { getViewData } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  temp;
  obj;
  topper;

  constructor(private router: Router, private influx: InfluxService) { }

  ngOnInit() {
    // console.log("in init");    
    //  this.router.navigate['/']
  }
  graphFunction() {
    this.influx.getData("chassiNO").subscribe(res => {
      // console.log(res.msg.length);      
      this.topper=res.msg.length-1
      // var top=res.msg.len;
      console.log(typeof(res.msg));
      this.obj = res.msg[this.topper];
      console.log(this.obj);
      console.log(typeof(this.obj));

    })
    // this.temp=44.45
    // console.log("in graphFunction()");
    // console.log(this.temp);

  }
  notificationFunction() {
    console.log("in notifications ");


  }

}
