import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router'
import "rxjs/add/operator/map";
import { RequestService } from "../../services/request.service";


@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  response;
  fparts: String ="";

  constructor(private router: Router, private http: Http, private REQUEST: RequestService) { }

  ngOnInit() {
  }

  parts(response) {
    if (this.fparts == "") {
      this.fparts = this.fparts + "," + response
    }
    else {
      let fin = (this.fparts).split(",");
      let count = 0;
      for (let i = 0; i < fin.length; i++) {
        if (fin[i] == response) {
          count = count + 1;
        }
      }
      if (count == 0) {
        this.fparts = this.fparts + "," + response
      }
    }

  }



  finalsubmit() {
    var r=prompt('Enter the password to register your Service request');
    if (r) 
    {
      let body = {
        chassiNo: "123456",
        password:r,
        part: this.fparts
      }
      this.fparts = "";
      this.REQUEST.repair(body).subscribe(res => {
        console.log(res.msg);
        if (res.success) {
          alert("Your request has been registered by Service Center")
        }
      });
    }
  }
  ClearAll()
  {
    var c=prompt('Enter service station password to clear the service requests');
    if (c) 
    {
      let body = {
        chassiNo: "123456",
        password:c,
        part: ""
      }
      this.fparts = "";
      this.REQUEST.clear(body).subscribe(res => {
        console.log(res.msg);
        if (res.success) {
          alert("The issues are resolved now")
        }
      });
    }
  }

}
