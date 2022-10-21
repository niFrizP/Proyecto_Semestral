"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_acerca_acerca_module_ts"],{

/***/ 3831:
/*!*******************************************************!*\
  !*** ./src/app/pages/acerca/acerca-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaPageRoutingModule": () => (/* binding */ AcercaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _acerca_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acerca.page */ 1876);




const routes = [
    {
        path: '',
        component: _acerca_page__WEBPACK_IMPORTED_MODULE_0__.AcercaPage
    }
];
let AcercaPageRoutingModule = class AcercaPageRoutingModule {
};
AcercaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcercaPageRoutingModule);



/***/ }),

/***/ 3432:
/*!***********************************************!*\
  !*** ./src/app/pages/acerca/acerca.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaPageModule": () => (/* binding */ AcercaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _acerca_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acerca-routing.module */ 3831);
/* harmony import */ var _acerca_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acerca.page */ 1876);







let AcercaPageModule = class AcercaPageModule {
};
AcercaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _acerca_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcercaPageRoutingModule
        ],
        declarations: [_acerca_page__WEBPACK_IMPORTED_MODULE_1__.AcercaPage]
    })
], AcercaPageModule);



/***/ }),

/***/ 1876:
/*!*********************************************!*\
  !*** ./src/app/pages/acerca/acerca.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaPage": () => (/* binding */ AcercaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _acerca_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acerca.page.html?ngResource */ 6323);
/* harmony import */ var _acerca_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acerca.page.scss?ngResource */ 1687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let AcercaPage = class AcercaPage {
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
AcercaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
AcercaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-acerca',
        template: _acerca_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_acerca_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AcercaPage);



/***/ }),

/***/ 1687:
/*!**********************************************************!*\
  !*** ./src/app/pages/acerca/acerca.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2VyY2EucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6323:
/*!**********************************************************!*\
  !*** ./src/app/pages/acerca/acerca.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon slot=\"start\" name=\"menu\" size=\"large\" class=\"ion-padding\" (click)=\"verMenu()\"></ion-icon>\r\n    <ion-title>Acerca de</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-card>\r\n    <img src=\"/assets/libros.gif\"/>\r\n    <ion-card-header>\r\n      <ion-card-title class=\"ion-text-center\">ListApp</ion-card-title>\r\n      <ion-card-subtitle class=\"ion-text-center\">C&N Dev</ion-card-subtitle>\r\n      <ion-card-subtitle class=\"ion-text-center\">Versión Beta 1.0</ion-card-subtitle>\r\n\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_acerca_acerca_module_ts.js.map