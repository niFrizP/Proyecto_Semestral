"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_generarcodigo_generarcodigo_module_ts"],{

/***/ 9427:
/*!*********************************************************************!*\
  !*** ./src/app/pages/generarcodigo/generarcodigo-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerarcodigoPageRoutingModule": () => (/* binding */ GenerarcodigoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _generarcodigo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generarcodigo.page */ 1066);




const routes = [
    {
        path: '',
        component: _generarcodigo_page__WEBPACK_IMPORTED_MODULE_0__.GenerarcodigoPage
    }
];
let GenerarcodigoPageRoutingModule = class GenerarcodigoPageRoutingModule {
};
GenerarcodigoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GenerarcodigoPageRoutingModule);



/***/ }),

/***/ 3145:
/*!*************************************************************!*\
  !*** ./src/app/pages/generarcodigo/generarcodigo.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerarcodigoPageModule": () => (/* binding */ GenerarcodigoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _generarcodigo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generarcodigo-routing.module */ 9427);
/* harmony import */ var _generarcodigo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generarcodigo.page */ 1066);







let GenerarcodigoPageModule = class GenerarcodigoPageModule {
};
GenerarcodigoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _generarcodigo_routing_module__WEBPACK_IMPORTED_MODULE_0__.GenerarcodigoPageRoutingModule
        ],
        declarations: [_generarcodigo_page__WEBPACK_IMPORTED_MODULE_1__.GenerarcodigoPage]
    })
], GenerarcodigoPageModule);



/***/ }),

/***/ 1066:
/*!***********************************************************!*\
  !*** ./src/app/pages/generarcodigo/generarcodigo.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerarcodigoPage": () => (/* binding */ GenerarcodigoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _generarcodigo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generarcodigo.page.html?ngResource */ 6693);
/* harmony import */ var _generarcodigo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generarcodigo.page.scss?ngResource */ 794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let GenerarcodigoPage = class GenerarcodigoPage {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
    }
    ngOnInit() {
    }
    verMenu() {
        this.menu.open('first');
    }
};
GenerarcodigoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
GenerarcodigoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-generarcodigo',
        template: _generarcodigo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generarcodigo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GenerarcodigoPage);



/***/ }),

/***/ 794:
/*!************************************************************************!*\
  !*** ./src/app/pages/generarcodigo/generarcodigo.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFyY29kaWdvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6693:
/*!************************************************************************!*\
  !*** ./src/app/pages/generarcodigo/generarcodigo.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon slot=\"start\" name=\"menu\" size=\"large\" class=\"ion-padding\" (click)=\"verMenu()\"></ion-icon>\r\n    <ion-title>Generador QR</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card-content>\r\n    <p>Escanee el codigo para asistencia</p>\r\n    <img src=\"/assets/QR.png\"/>\r\n  </ion-card-content>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_generarcodigo_generarcodigo_module_ts.js.map