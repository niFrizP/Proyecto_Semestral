"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_estadistica_estadistica_module_ts"],{

/***/ 6335:
/*!*****************************************************************!*\
  !*** ./src/app/pages/estadistica/estadistica-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticaPageRoutingModule": () => (/* binding */ EstadisticaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _estadistica_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estadistica.page */ 5237);




const routes = [
    {
        path: '',
        component: _estadistica_page__WEBPACK_IMPORTED_MODULE_0__.EstadisticaPage
    }
];
let EstadisticaPageRoutingModule = class EstadisticaPageRoutingModule {
};
EstadisticaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EstadisticaPageRoutingModule);



/***/ }),

/***/ 1123:
/*!*********************************************************!*\
  !*** ./src/app/pages/estadistica/estadistica.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticaPageModule": () => (/* binding */ EstadisticaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _estadistica_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estadistica-routing.module */ 6335);
/* harmony import */ var _estadistica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estadistica.page */ 5237);







let EstadisticaPageModule = class EstadisticaPageModule {
};
EstadisticaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _estadistica_routing_module__WEBPACK_IMPORTED_MODULE_0__.EstadisticaPageRoutingModule
        ],
        declarations: [_estadistica_page__WEBPACK_IMPORTED_MODULE_1__.EstadisticaPage]
    })
], EstadisticaPageModule);



/***/ }),

/***/ 5237:
/*!*******************************************************!*\
  !*** ./src/app/pages/estadistica/estadistica.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadisticaPage": () => (/* binding */ EstadisticaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _estadistica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./estadistica.page.html?ngResource */ 9242);
/* harmony import */ var _estadistica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estadistica.page.scss?ngResource */ 3234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let EstadisticaPage = class EstadisticaPage {
    constructor() { }
    ngOnInit() {
    }
};
EstadisticaPage.ctorParameters = () => [];
EstadisticaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-estadistica',
        template: _estadistica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_estadistica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EstadisticaPage);



/***/ }),

/***/ 3234:
/*!********************************************************************!*\
  !*** ./src/app/pages/estadistica/estadistica.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #012c56;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 2rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGFkaXN0aWNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUFBUjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQUFaO0FBR1E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURaO0FBR1k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRGhCO0FBS087RUFDQyxxQkFBQTtBQUhSO0FBS1E7RUFDSSxnQkFBQTtBQUhaIiwiZmlsZSI6ImVzdGFkaXN0aWNhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAxMmM1NjtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwIDA7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuXHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC02LjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNSU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIC5hYm91dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 9242:
/*!********************************************************************!*\
  !*** ./src/app/pages/estadistica/estadistica.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n  <div class=\"header\">\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"image\">\r\n      <ion-img src=\"../../../assets/imgs/estadistica.png\"></ion-img>\r\n    </div>\r\n\r\n    <div class=\"card-content\">\r\n      <div class=\"card-title\">\r\n        <h1 class=\"ion-no-margin\">Estadistica</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"asistencia\">\r\n      <h1>Asistencias: (numero)</h1>\r\n    </div>\r\n\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_estadistica_estadistica_module_ts.js.map