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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon slot=\"start\" name=\"menu\" size=\"large\" class=\"ion-padding\" (click)=\"verMenu()\"></ion-icon>\n    <ion-title>Generador QR</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-card-content>\n    <p>Escanee el codigo para asistencia</p>\n    <img src=\"/assets/QR.png\"/>\n  </ion-card-content>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19nZW5lcmFyY29kaWdvX2dlbmVyYXJjb2RpZ29fbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNjO0FBRUU7QUFFekQsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxrRUFBaUI7S0FDN0I7Q0FDRixDQUFDO0lBTVcsOEJBQThCLFNBQTlCLDhCQUE4Qjs7QUFBOUIsOEJBQThCO0lBSjFDLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxrRUFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyx5REFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyw4QkFBOEI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkY7QUFDTTtBQUNGO0FBRUE7QUFFbUM7QUFFdkI7SUFXNUMsdUJBQXVCLFNBQXZCLHVCQUF1Qjs7QUFBdkIsdUJBQXVCO0lBVG5DLHVEQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx5REFBWTtZQUNaLHVEQUFXO1lBQ1gsdURBQVc7WUFDWCx5RkFBOEI7U0FDL0I7UUFDRCxZQUFZLEVBQUUsQ0FBQyxrRUFBaUIsQ0FBQztLQUNsQyxDQUFDO0dBQ1csdUJBQXVCO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CYztBQUNUO0FBQ087SUFPbkMsaUJBQWlCLFNBQWpCLGlCQUFpQjtJQUU1QixZQUNVLE1BQWEsRUFDYixJQUFtQjtRQURuQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBZTtJQUN2QixDQUFDO0lBRVAsUUFBUTtJQUNSLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0FBWlUsaUJBQWlCO0lBTDdCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLDBFQUF3Qzs7S0FFekMsQ0FBQztHQUNXLGlCQUFpQjtBQUFBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvcGFnZXMvZ2VuZXJhcmNvZGlnby9nZW5lcmFyY29kaWdvLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2dlbmVyYXJjb2RpZ28vZ2VuZXJhcmNvZGlnby5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvZ2VuZXJhcmNvZGlnby9nZW5lcmFyY29kaWdvLnBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgR2VuZXJhcmNvZGlnb1BhZ2UgfSBmcm9tICcuL2dlbmVyYXJjb2RpZ28ucGFnZSc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBHZW5lcmFyY29kaWdvUGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgR2VuZXJhcmNvZGlnb1BhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgR2VuZXJhcmNvZGlnb1BhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9nZW5lcmFyY29kaWdvLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgR2VuZXJhcmNvZGlnb1BhZ2UgfSBmcm9tICcuL2dlbmVyYXJjb2RpZ28ucGFnZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgR2VuZXJhcmNvZGlnb1BhZ2VSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0dlbmVyYXJjb2RpZ29QYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmFyY29kaWdvUGFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNZW51Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWdlbmVyYXJjb2RpZ28nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2VuZXJhcmNvZGlnby5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nZW5lcmFyY29kaWdvLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmFyY29kaWdvUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoICAgIFxuICAgIHByaXZhdGUgcm91dGVyOlJvdXRlcixcbiAgICBwcml2YXRlIG1lbnU6TWVudUNvbnRyb2xsZXIsXG4gICAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBcbiAgdmVyTWVudSgpe1xuICAgIHRoaXMubWVudS5vcGVuKCdmaXJzdCcpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=