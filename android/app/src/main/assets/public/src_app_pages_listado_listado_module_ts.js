"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_listado_listado_module_ts"],{

/***/ 9484:
/*!*********************************************************!*\
  !*** ./src/app/pages/listado/listado-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPageRoutingModule": () => (/* binding */ ListadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado.page */ 3027);




const routes = [
    {
        path: '',
        component: _listado_page__WEBPACK_IMPORTED_MODULE_0__.ListadoPage
    }
];
let ListadoPageRoutingModule = class ListadoPageRoutingModule {
};
ListadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListadoPageRoutingModule);



/***/ }),

/***/ 6294:
/*!*************************************************!*\
  !*** ./src/app/pages/listado/listado.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPageModule": () => (/* binding */ ListadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _listado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado-routing.module */ 9484);
/* harmony import */ var _listado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado.page */ 3027);







let ListadoPageModule = class ListadoPageModule {
};
ListadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _listado_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListadoPageRoutingModule
        ],
        declarations: [_listado_page__WEBPACK_IMPORTED_MODULE_1__.ListadoPage]
    })
], ListadoPageModule);



/***/ }),

/***/ 3027:
/*!***********************************************!*\
  !*** ./src/app/pages/listado/listado.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListadoPage": () => (/* binding */ ListadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _listado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listado.page.html?ngResource */ 1936);
/* harmony import */ var _listado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listado.page.scss?ngResource */ 2349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let ListadoPage = class ListadoPage {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
        this.coleccion = [];
    }
    ngOnInit() {
    }
    verMenu() {
        this.menu.open('first');
    }
    doRefresh(evento) {
        console.log("Refrescando la página");
        console.log(evento);
        setTimeout(() => {
            evento.target.complete();
        }, 2000);
    }
};
ListadoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
ListadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listado',
        template: _listado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_listado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListadoPage);



/***/ }),

/***/ 2349:
/*!************************************************************!*\
  !*** ./src/app/pages/listado/listado.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YWRvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 1936:
/*!************************************************************!*\
  !*** ./src/app/pages/listado/listado.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon slot=\"start\" name=\"menu\" size=\"large\" class=\"ion-padding\" (click)=\"verMenu()\"></ion-icon>\r\n    <ion-title>Lista Asistencia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-list *ngFor=\"let item of ['Mario','Ricardo','Alejandro','Yazna','Mabel']\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"/assets/user.png\"/>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>{{item}}</h2>\r\n\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_listado_listado_module_ts.js.map