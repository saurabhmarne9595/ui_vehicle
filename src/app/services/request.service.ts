// import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import{Router} from '@angular/router'
import "rxjs/add/operator/map"
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private router:Router, private http: Http) { }

  // request(body){
  //   const header = new Headers();
  //   header.append("Content-Type","application/json");
  //   return this.http
  //   .post("http://address:port:4000/users/login",body,{headers:header})
  //   .map(res=>res.json());
  // };

  history(body){  
    const header = new Headers();
    header.append("Content-Type","application/json");
    return this.http
    .post("http://dtri.eraofiot.in:5005/service/showDetails",body,{headers:header})
    .map(res=>res.json());

  }

  repair(body){
    const header = new Headers();
    header.append("Content-Type","application/json");
    return this.http
    .post("http://dtri.eraofiot.in:5005/centre/repair",body,{headers:header})
    .map(res=>res.json());
  }

  getNotification(body){
    const header = new Headers();
    console.log("in get notification fun");
    header.append("Content-Type","application/json");
    return this.http
    .post("http://dtri.eraofiot.in:5005/alert",body,{headers:header})
    .map(res=>res.json());
  }

  clear(body){
    const header = new Headers();
    header.append("Content-Type","application/json");
    return this.http
    .post("http://dtri.eraofiot.in:5005/centre/clear",body,{headers:header})
    .map(res=>res.json());
  }
} 