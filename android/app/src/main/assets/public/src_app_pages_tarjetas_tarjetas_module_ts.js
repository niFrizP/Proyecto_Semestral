"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tarjetas_tarjetas_module_ts"],{

/***/ 7845:
/*!***********************************************************!*\
  !*** ./src/app/pages/tarjetas/tarjetas-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TarjetasPageRoutingModule": () => (/* binding */ TarjetasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tarjetas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarjetas.page */ 2145);




const routes = [
    {
        path: '',
        component: _tarjetas_page__WEBPACK_IMPORTED_MODULE_0__.TarjetasPage
    }
];
let TarjetasPageRoutingModule = class TarjetasPageRoutingModule {
};
TarjetasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TarjetasPageRoutingModule);



/***/ }),

/***/ 7198:
/*!***************************************************!*\
  !*** ./src/app/pages/tarjetas/tarjetas.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TarjetasPageModule": () => (/* binding */ TarjetasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tarjetas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarjetas-routing.module */ 7845);
/* harmony import */ var _tarjetas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarjetas.page */ 2145);







let TarjetasPageModule = class TarjetasPageModule {
};
TarjetasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tarjetas_routing_module__WEBPACK_IMPORTED_MODULE_0__.TarjetasPageRoutingModule
        ],
        declarations: [_tarjetas_page__WEBPACK_IMPORTED_MODULE_1__.TarjetasPage]
    })
], TarjetasPageModule);



/***/ }),

/***/ 2145:
/*!*************************************************!*\
  !*** ./src/app/pages/tarjetas/tarjetas.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TarjetasPage": () => (/* binding */ TarjetasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tarjetas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tarjetas.page.html?ngResource */ 7291);
/* harmony import */ var _tarjetas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tarjetas.page.scss?ngResource */ 1911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TarjetasPage = class TarjetasPage {
    constructor() { }
    ngOnInit() {
    }
};
TarjetasPage.ctorParameters = () => [];
TarjetasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tarjetas',
        template: _tarjetas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tarjetas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TarjetasPage);



/***/ }),

/***/ 1911:
/*!**************************************************************!*\
  !*** ./src/app/pages/tarjetas/tarjetas.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXJqZXRhcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 7291:
/*!**************************************************************!*\
  !*** ./src/app/pages/tarjetas/tarjetas.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button text=\"Regresar\" defaultHref=\"/home\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>Acciones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item *ngFor=\"let item of [0,0,0,0,0]\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-subtitle>Ingenieria en Informatica</ion-card-subtitle>\r\n        <ion-card-title>Semestre 6</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. \r\n        Ipsum dicta quibusdam dolores ipsam dolorem velit alias voluptatem,\r\n        repellat doloremque laborum illo, laudantium corporis ea sed facilis \r\n        quidem rem veritatis delectus.\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-item>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tarjetas_tarjetas_module_ts.js.map