"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_comunicacion_comunicacion_module_ts"],{

/***/ 7815:
/*!*******************************************************************!*\
  !*** ./src/app/pages/comunicacion/comunicacion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicacionPageRoutingModule": () => (/* binding */ ComunicacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _comunicacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comunicacion.page */ 3473);




const routes = [
    {
        path: '',
        component: _comunicacion_page__WEBPACK_IMPORTED_MODULE_0__.ComunicacionPage
    }
];
let ComunicacionPageRoutingModule = class ComunicacionPageRoutingModule {
};
ComunicacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComunicacionPageRoutingModule);



/***/ }),

/***/ 7933:
/*!***********************************************************!*\
  !*** ./src/app/pages/comunicacion/comunicacion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicacionPageModule": () => (/* binding */ ComunicacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _comunicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comunicacion-routing.module */ 7815);
/* harmony import */ var _comunicacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunicacion.page */ 3473);







let ComunicacionPageModule = class ComunicacionPageModule {
};
ComunicacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comunicacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComunicacionPageRoutingModule
        ],
        declarations: [_comunicacion_page__WEBPACK_IMPORTED_MODULE_1__.ComunicacionPage]
    })
], ComunicacionPageModule);



/***/ }),

/***/ 3473:
/*!*********************************************************!*\
  !*** ./src/app/pages/comunicacion/comunicacion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicacionPage": () => (/* binding */ ComunicacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _comunicacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comunicacion.page.html?ngResource */ 3263);
/* harmony import */ var _comunicacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunicacion.page.scss?ngResource */ 9384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ComunicacionPage = class ComunicacionPage {
    constructor() { }
    ngOnInit() {
    }
};
ComunicacionPage.ctorParameters = () => [];
ComunicacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-comunicacion',
        template: _comunicacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comunicacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComunicacionPage);



/***/ }),

/***/ 9384:
/*!**********************************************************************!*\
  !*** ./src/app/pages/comunicacion/comunicacion.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #012c56;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXVuaWNhY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQVI7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFBWjtBQUdRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFEWjtBQUdZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQURoQjtBQUtPO0VBQ0MscUJBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWiIsImZpbGUiOiJjb211bmljYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDEyYzU2O1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbSAzcmVtIDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTYuNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1JTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLmFib3V0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 3263:
/*!**********************************************************************!*\
  !*** ./src/app/pages/comunicacion/comunicacion.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n  <div class=\"header\">\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"image\">\r\n      <ion-img src=\"../../../assets/imgs/comunicacion.png\"></ion-img>\r\n    </div>\r\n\r\n    <div class=\"card-content\">\r\n      <div class=\"card-title\">\r\n        <h1 class=\"ion-no-margin\">Comunicacion</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"asistencia\">\r\n      <h1>Asistencias: (numero)</h1>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_comunicacion_comunicacion_module_ts.js.map