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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon slot=\"start\" name=\"menu\" size=\"large\" class=\"ion-padding\" (click)=\"verMenu()\"></ion-icon>\n    <ion-title>Acerca de</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <img src=\"/assets/libros.gif\"/>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">ListApp</ion-card-title>\n      <ion-card-subtitle class=\"ion-text-center\">C&N Dev</ion-card-subtitle>\n      <ion-card-subtitle class=\"ion-text-center\">Versión Beta 1.0</ion-card-subtitle>\n\n    </ion-card-header>\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19hY2VyY2FfYWNlcmNhX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYztBQUVaO0FBRTNDLE1BQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsb0RBQVU7S0FDdEI7Q0FDRixDQUFDO0lBTVcsdUJBQXVCLFNBQXZCLHVCQUF1Qjs7QUFBdkIsdUJBQXVCO0lBSm5DLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxrRUFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyx5REFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyx1QkFBdUI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQks7QUFDTTtBQUNGO0FBRUE7QUFFcUI7QUFFdkI7SUFXOUIsZ0JBQWdCLFNBQWhCLGdCQUFnQjs7QUFBaEIsZ0JBQWdCO0lBVDVCLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx5REFBWTtZQUNaLHVEQUFXO1lBQ1gsdURBQVc7WUFDWCwyRUFBdUI7U0FDeEI7UUFDRCxZQUFZLEVBQUUsQ0FBQyxvREFBVSxDQUFDO0tBQzNCLENBQUM7R0FDVyxnQkFBZ0I7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJxQjtBQUNUO0FBQ087SUFPbkMsVUFBVSxTQUFWLFVBQVU7SUFFckIsWUFDVSxNQUFhLEVBQ2IsSUFBbUI7UUFEbkIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLFNBQUksR0FBSixJQUFJLENBQWU7SUFDdkIsQ0FBQztJQUVQLFFBQVE7SUFDUixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7OztBQVpVLFVBQVU7SUFMdEIsd0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLG1FQUFpQzs7S0FFbEMsQ0FBQztHQUNXLFVBQVU7QUFBQSIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3BhZ2VzL2FjZXJjYS9hY2VyY2Etcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvYWNlcmNhL2FjZXJjYS5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvYWNlcmNhL2FjZXJjYS5wYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFjZXJjYVBhZ2UgfSBmcm9tICcuL2FjZXJjYS5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEFjZXJjYVBhZ2VcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFjZXJjYVBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgQWNlcmNhUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FjZXJjYS1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFjZXJjYVBhZ2UgfSBmcm9tICcuL2FjZXJjYS5wYWdlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBBY2VyY2FQYWdlUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBY2VyY2FQYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBBY2VyY2FQYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWNlcmNhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjZXJjYS5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2VyY2EucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFjZXJjYVBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCAgICBcbiAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtZW51Ok1lbnVDb250cm9sbGVyLFxuICAgICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgXG4gIHZlck1lbnUoKXtcbiAgICB0aGlzLm1lbnUub3BlbignZmlyc3QnKTtcbiAgfVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=