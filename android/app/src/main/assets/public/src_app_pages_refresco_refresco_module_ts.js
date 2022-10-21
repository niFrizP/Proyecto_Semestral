"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_refresco_refresco_module_ts"],{

/***/ 6850:
/*!***********************************************************!*\
  !*** ./src/app/pages/refresco/refresco-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrescoPageRoutingModule": () => (/* binding */ RefrescoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _refresco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refresco.page */ 7914);




const routes = [
    {
        path: '',
        component: _refresco_page__WEBPACK_IMPORTED_MODULE_0__.RefrescoPage
    }
];
let RefrescoPageRoutingModule = class RefrescoPageRoutingModule {
};
RefrescoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RefrescoPageRoutingModule);



/***/ }),

/***/ 4609:
/*!***************************************************!*\
  !*** ./src/app/pages/refresco/refresco.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrescoPageModule": () => (/* binding */ RefrescoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _refresco_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refresco-routing.module */ 6850);
/* harmony import */ var _refresco_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresco.page */ 7914);







let RefrescoPageModule = class RefrescoPageModule {
};
RefrescoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _refresco_routing_module__WEBPACK_IMPORTED_MODULE_0__.RefrescoPageRoutingModule
        ],
        declarations: [_refresco_page__WEBPACK_IMPORTED_MODULE_1__.RefrescoPage]
    })
], RefrescoPageModule);



/***/ }),

/***/ 7914:
/*!*************************************************!*\
  !*** ./src/app/pages/refresco/refresco.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefrescoPage": () => (/* binding */ RefrescoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _refresco_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refresco.page.html?ngResource */ 6526);
/* harmony import */ var _refresco_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresco.page.scss?ngResource */ 9858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let RefrescoPage = class RefrescoPage {
    constructor() { }
    ngOnInit() {
    }
};
RefrescoPage.ctorParameters = () => [];
RefrescoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-refresco',
        template: _refresco_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_refresco_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RefrescoPage);



/***/ }),

/***/ 9858:
/*!**************************************************************!*\
  !*** ./src/app/pages/refresco/refresco.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZyZXNjby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6526:
/*!**************************************************************!*\
  !*** ./src/app/pages/refresco/refresco.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>refresco</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_refresco_refresco_module_ts.js.map