(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split {\n    height: 100%;\n    width: 50%;\n    position: fixed;\n    z-index: 1;\n\n    overflow-x: hidden;\n    padding-top: 0%;\n  }\n  \n  /* Control the left side */\n  \n  .left {\n    left: 0;\n    padding: 2%;\n    /* background-color: #111; */\n  }\n  \n  /* Control the right side */\n  \n  .right {\n      padding:4%;\n        right: 0;\n    /* background-color: red; */\n  }\n  \n  .btn-primary{\n      padding: 1.5%;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"split left\">\n    <br><br>\n        <h1>DASHBOARD</h1>\n\n    <p>This is the Default page to be shown.</p>\n    <button  class='btn-primary'(click)='goto(\"notification\")'> Notification </button>\n    <button  class='btn-primary' onclick=\"location.href='http://dtri.eraofiot.in:3000/d/dZFDEPKmz/vibrations?orgId=1'\" type=\"button\"> Grafana</button>\n    <button  class='btn-primary'(click)='goto(\"garage\")'> Service Details</button>\n    <!-- <button  class='btn-primary'(click)='goto(\"history\")'> History</button> -->\n    \n    \n    <!-- <button  class='btn-primary'(click)='logout(\"login\")'> </button><hr> -->\n    <!-- <a href=\"http://dtri.eraofiot.in:3000\">Visit W3Schools</a>  -->\n    <!-- <button onclick=\"location.href='http://www.example.com'\" type=\"button\">www.example.com</button> -->\n    \n\n</div>\n<div class=\"split right\"><br><br><br>\n    <p>ChassiNO=\"ChassiNO\"</p>\n\n</div>\n\n\n\n\n<router-outlet></router-outlet> \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { HistoryComponent } from '../app/components/history'
var AppComponent = /** @class */ (function () {
    function AppComponent(router, HISTORY) {
        this.router = router;
        this.HISTORY = HISTORY;
        this.title = 'dashboardls';
    }
    AppComponent.prototype.goto = function (route) {
        this.router.navigate(["/" + route]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dash/dash.component */ "./src/app/components/dash/dash.component.ts");
/* harmony import */ var _services_influx_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/influx.service */ "./src/app/services/influx.service.ts");
/* harmony import */ var _components_status_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/status/status.component */ "./src/app/components/status/status.component.ts");
/* harmony import */ var _components_garage_garage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/garage/garage.component */ "./src/app/components/garage/garage.component.ts");
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/history/history.component */ "./src/app/components/history/history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    { path: 'dash', component: _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_6__["DashComponent"] },
    { path: 'status', component: _components_status_status_component__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"] },
    { path: 'notification', component: _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"] },
    { path: 'garage', component: _components_garage_garage_component__WEBPACK_IMPORTED_MODULE_9__["GarageComponent"] },
    { path: 'history', component: _components_history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_dash_dash_component__WEBPACK_IMPORTED_MODULE_6__["DashComponent"],
                _components_status_status_component__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"],
                _components_garage_garage_component__WEBPACK_IMPORTED_MODULE_9__["GarageComponent"],
                _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"],
                _components_history_history_component__WEBPACK_IMPORTED_MODULE_11__["HistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"]
            ],
            providers: [_services_influx_service__WEBPACK_IMPORTED_MODULE_7__["InfluxService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dash/dash.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/dash/dash.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dash/dash.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/dash/dash.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <h1>Dashboard</h1>\n  <br>\n  <br>\n\n  <button class=\"btn-warning btn\" (click)=\"graphFunction()\">Data Graph</button>\n  <br>\n  <!-- <h5>{{obj[\"hum\"]}}</h5> -->\n\n  <p>Humidity:{{obj.hum}}</p>\n  <p>Temperature:{{obj.temp}}</p>\n  <br>\n  <button class=\"btn-warning btn\" (click)=\"notificationFunction()\">NotificationsS</button>\n  <br>\n  <br>\n  <button class=\"btn-warning btn\" (click)=\"gpsFunction()\">GPS</button>\n  <br>\n  <br>\n\n\n</div>\n\n<!-- <table class='table'>\n  <thead>\n    <tr>\n      <th>Device Name</th>\n      <th>Fields</th>\n      <th>Controls</th>\n    </tr>\n  </thead>\n  <tbody *ngFor='let device of devices'>\n    <tr>\n      <td>{{device.name}}</td>\n      <td>{{device.fields}}</td>\n      <td>{{device.controls}}</td>\n    </tr>\n  </tbody>\n</table> -->"

/***/ }),

/***/ "./src/app/components/dash/dash.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/dash/dash.component.ts ***!
  \***************************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_influx_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/influx.service */ "./src/app/services/influx.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashComponent = /** @class */ (function () {
    function DashComponent(router, influx) {
        this.router = router;
        this.influx = influx;
    }
    DashComponent.prototype.ngOnInit = function () {
        // console.log("in init");    
        //  this.router.navigate['/']
    };
    DashComponent.prototype.graphFunction = function () {
        var _this = this;
        this.influx.getData("chassiNO").subscribe(function (res) {
            // console.log(res.msg.length);      
            _this.topper = res.msg.length - 1;
            // var top=res.msg.len;
            console.log(typeof (res.msg));
            _this.obj = res.msg[_this.topper];
            console.log(_this.obj);
            console.log(typeof (_this.obj));
        });
        // this.temp=44.45
        // console.log("in graphFunction()");
        // console.log(this.temp);
    };
    DashComponent.prototype.notificationFunction = function () {
        console.log("in notifications ");
    };
    DashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/components/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.css */ "./src/app/components/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_influx_service__WEBPACK_IMPORTED_MODULE_2__["InfluxService"]])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/components/garage/garage.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/garage/garage.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split {\n    height: 100%;\n    width: 50%;\n    position: fixed;\n    z-index: 1;\n\n    overflow-x: hidden;\n    padding-top: 15%;\n  }\n  \n  .left {\n    margin: 15%;\n    padding: 1%;\n    }\n  \n  .right {\n    padding: 4%;\n    right: 0;\n   \n  }\n  \n  .btn-primary btn{\n    padding: 1%;\n    margin: 30%;\n  }"

/***/ }),

/***/ "./src/app/components/garage/garage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/garage/garage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"split left\">\n  <button class=\"btn-primary btn\" (click)=\"parts('tyres')\"><img src=\"../../../../image/download.jpeg\" style=\"width:100px;height:100px;border:0;\"></button>\n  <button class=\"btn-primary btn\" (click)=\"parts('break')\"><img src=\"../../../../image/1.jpeg\" style=\"width:100px;height:100px;border:0\" ></button>\n  <br>\n  <button class=\"btn-primary btn\" (click)=\"parts('viper')\"> <img src=\"../../../../image/images.jpeg\" style=\"width:100px;height:100px;border:0\" ></button>\n  <button class=\"btn-primary btn\" (click)=\"parts('horn')\"><img src=\"../../../../image/horn-500x500.jpg\" style=\"width:100px;height:100px;border:0\"></button>\n  <br>\n  <button class=\"btn-primary btn\" (click)=\"parts('indicators')\"><img src=\"../../../../image/34.jpeg\" style=\"width:100px;height:100px;border:0\"></button>\n  <button class=\"btn-primary btn\" (click)=\"parts('Light')\"><img src=\"../../../../image/2.jpg\" style=\"width:100px;height:100px;border:0\"></button>\n  <br>\n  <!-- <p>response->{{response}}</p> -->\n</div>\n\n<div class=\"split right\">\n  <br><br><br><br><br><br>\n  <button class=\"btn-primary btn\" (click)=\"History()\">service History</button>\n  <br><br>\n  <p>last service date: {{response}}</p>\n  <br>\n  <p>Parts that were replaced in previous service : {{response1}}</p>\n  <br>\n  <p>last service was done at kms :{{response2}}</p>\n  <br>\n  <p>next due kms:{{response3}}</p>\n  <br>\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/garage/garage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/garage/garage.component.ts ***!
  \*******************************************************/
/*! exports provided: GarageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GarageComponent", function() { return GarageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GarageComponent = /** @class */ (function () {
    function GarageComponent(router, http, REQUEST) {
        this.router = router;
        this.http = http;
        this.REQUEST = REQUEST;
    }
    GarageComponent.prototype.ngOnInit = function () {
    };
    GarageComponent.prototype.History = function () {
        var _this = this;
        var body = {
            chassiNo: "chassiNo"
        };
        this.REQUEST.history(body).subscribe(function (res) {
            console.log(res.msg);
            _this.response = res.msg.lastService;
            _this.response1 = res.msg.partsReplaced;
            _this.response2 = res.msg.currentKms;
            _this.response3 = res.msg.nextDueKms;
        });
    };
    GarageComponent.prototype.parts = function (response) {
        var body = {
            chassiNo: "chassiNo",
            part: response
        };
        this.REQUEST.repair(body).subscribe(function (res) {
            console.log(res.msg);
            if (res.success) {
                alert("Your request has been registered by Service Center");
            }
        });
    };
    GarageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-garage',
            template: __webpack_require__(/*! ./garage.component.html */ "./src/app/components/garage/garage.component.html"),
            styles: [__webpack_require__(/*! ./garage.component.css */ "./src/app/components/garage/garage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]])
    ], GarageComponent);
    return GarageComponent;
}());



/***/ }),

/***/ "./src/app/components/history/history.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/history/history.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/history/history.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/history/history.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <button onclick=\"goHistory()\">see history</button> -->\n<button  class='btn-sec'(click)='goHistory()'> HIstory </button>\n\n\n\n<h1>{{hisData}}</h1>"

/***/ }),

/***/ "./src/app/components/history/history.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/history/history.component.ts ***!
  \*********************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(HISTORY) {
        this.HISTORY = HISTORY;
        this.hisData = 0;
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent.prototype.goHistory = function () {
        var _this = this;
        var body = {
            chassiNo: "chassiNo"
        };
        this.HISTORY.history(body).subscribe(function (res) {
            console.log(res);
            _this.hisData = res.msg;
        });
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/components/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/components/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n{{notification}}\n</p>\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(REQUEST) {
        this.REQUEST = REQUEST;
        this.body = {
            chassiNO: "chassiNO"
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        // this.REQUEST.getNotification(this.body).subscribe(res=>{
        //   console.log(res);
        // })
    };
    NotificationComponent.prototype.notifications = function () {
        this.REQUEST.getNotification(this.body).subscribe(function (res) {
            console.log(res);
        });
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/components/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/status/status.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/status/status.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/status/status.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/status/status.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  status works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/status/status.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/status/status.component.ts ***!
  \*******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/components/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/components/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/services/influx.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/influx.service.ts ***!
  \********************************************/
/*! exports provided: InfluxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluxService", function() { return InfluxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/Rx';
var InfluxService = /** @class */ (function () {
    function InfluxService(http) {
        this.http = http;
    }
    InfluxService.prototype.getData = function (chassiNo) {
        var body = {
            chassiNO: chassiNo
        };
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        return this.http
            .post('http://34.224.98.65:3000/data', body, { headers: header })
            .map(function (res) { return res.json(); });
    };
    InfluxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], InfluxService);
    return InfluxService;
}());



/***/ }),

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, OnInit } from '@angular/core';




var RequestService = /** @class */ (function () {
    function RequestService(router, http) {
        this.router = router;
        this.http = http;
    }
    RequestService.prototype.request = function (body) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        return this.http
            .post("http://address:port:4000/users/login", body, { headers: header })
            .map(function (res) { return res.json(); });
    };
    ;
    RequestService.prototype.history = function (body) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        return this.http
            .post("http://dtri.eraofiot.in:5005/service/showDetails", body, { headers: header })
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.repair = function (body) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        return this.http
            .post("http://dtri.eraofiot.in:5005/centre/repair", body, { headers: header })
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.getNotification = function (body) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        header.append("Content-Type", "application/json");
        return this.http
            .post("http://dtri.eraofiot.in:5005/service/notify", body, { headers: header })
            .map(function (res) { return res.json(); });
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/saurabh/Desktop/project/frontend/dashboardls/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /home/saurabh/Desktop/project/frontend/dashboardls/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map