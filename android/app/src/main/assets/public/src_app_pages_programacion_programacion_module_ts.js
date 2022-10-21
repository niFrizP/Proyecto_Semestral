"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_programacion_programacion_module_ts"],{

/***/ 8855:
/*!*******************************************************************!*\
  !*** ./src/app/pages/programacion/programacion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramacionPageRoutingModule": () => (/* binding */ ProgramacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _programacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programacion.page */ 8328);




const routes = [
    {
        path: '',
        component: _programacion_page__WEBPACK_IMPORTED_MODULE_0__.ProgramacionPage
    }
];
let ProgramacionPageRoutingModule = class ProgramacionPageRoutingModule {
};
ProgramacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProgramacionPageRoutingModule);



/***/ }),

/***/ 7556:
/*!***********************************************************!*\
  !*** ./src/app/pages/programacion/programacion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramacionPageModule": () => (/* binding */ ProgramacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _programacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programacion-routing.module */ 8855);
/* harmony import */ var _programacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programacion.page */ 8328);







let ProgramacionPageModule = class ProgramacionPageModule {
};
ProgramacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _programacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgramacionPageRoutingModule
        ],
        declarations: [_programacion_page__WEBPACK_IMPORTED_MODULE_1__.ProgramacionPage]
    })
], ProgramacionPageModule);



/***/ }),

/***/ 8328:
/*!*********************************************************!*\
  !*** ./src/app/pages/programacion/programacion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramacionPage": () => (/* binding */ ProgramacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _programacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programacion.page.html?ngResource */ 2557);
/* harmony import */ var _programacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./programacion.page.scss?ngResource */ 3633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ProgramacionPage = class ProgramacionPage {
    constructor() { }
    ngOnInit() {
    }
};
ProgramacionPage.ctorParameters = () => [];
ProgramacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-programacion',
        template: _programacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_programacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProgramacionPage);



/***/ }),

/***/ 3633:
/*!**********************************************************************!*\
  !*** ./src/app/pages/programacion/programacion.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #012c56;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyYW1hY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQUNSO0FBRUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBQVI7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7QUFBWjtBQUdRO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFEWjtBQUdZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQURoQjtBQUtPO0VBQ0MscUJBQUE7QUFIUjtBQUtRO0VBQ0ksZ0JBQUE7QUFIWiIsImZpbGUiOiJwcm9ncmFtYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDEyYzU2O1xyXG5cclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBoZWlnaHQ6IDc1JTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3JlbSAzcmVtIDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTYuNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1JTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcblxyXG4gICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLmFib3V0IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 2557:
/*!**********************************************************************!*\
  !*** ./src/app/pages/programacion/programacion.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n  <div class=\"header\">\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"image\">\r\n      <ion-img src=\"../../../assets/imgs/programacion.png\"></ion-img>\r\n    </div>\r\n\r\n    <div class=\"card-content\">\r\n      <div class=\"card-title\">\r\n        <h1 class=\"ion-no-margin\">Programación</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"asistencia\">\r\n      <h1>Asistencias: (numero)</h1>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_programacion_programacion_module_ts.js.map