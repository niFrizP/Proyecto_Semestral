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

module.exports = "<ion-header>\n  <ion-buttons slot=\"start\">\n    <ion-back-button text=\"Regresar\" defaultHref=\"/home\"></ion-back-button>\n  </ion-buttons>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Acciones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let item of [0,0,0,0,0]\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Ingenieria en Informatica</ion-card-subtitle>\n        <ion-card-title>Semestre 6</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n        Ipsum dicta quibusdam dolores ipsam dolorem velit alias voluptatem,\n        repellat doloremque laborum illo, laudantium corporis ea sed facilis \n        quidem rem veritatis delectus.\n      </ion-card-content>\n    </ion-card>\n  </ion-item>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc190YXJqZXRhc190YXJqZXRhc19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFUjtBQUUvQyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHdEQUFZO0tBQ3hCO0NBQ0YsQ0FBQztJQU1XLHlCQUF5QixTQUF6Qix5QkFBeUI7O0FBQXpCLHlCQUF5QjtJQUpyQyx1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsa0VBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMseURBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1cseUJBQXlCO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJHO0FBQ007QUFDRjtBQUVBO0FBRXlCO0FBRXZCO0lBV2xDLGtCQUFrQixTQUFsQixrQkFBa0I7O0FBQWxCLGtCQUFrQjtJQVQ5Qix1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLHVEQUFXO1lBQ1gsK0VBQXlCO1NBQzFCO1FBQ0QsWUFBWSxFQUFFLENBQUMsd0RBQVksQ0FBQztLQUM3QixDQUFDO0dBQ1csa0JBQWtCO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1CO0lBT3JDLFlBQVksU0FBWixZQUFZO0lBRXZCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7QUFMVSxZQUFZO0lBTHhCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixxRUFBbUM7O0tBRXBDLENBQUM7R0FDVyxZQUFZO0FBQUEiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wYWdlcy90YXJqZXRhcy90YXJqZXRhcy1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy90YXJqZXRhcy90YXJqZXRhcy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvdGFyamV0YXMvdGFyamV0YXMucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUYXJqZXRhc1BhZ2UgfSBmcm9tICcuL3RhcmpldGFzLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVGFyamV0YXNQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYXJqZXRhc1BhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgVGFyamV0YXNQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGFyamV0YXMtcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBUYXJqZXRhc1BhZ2UgfSBmcm9tICcuL3RhcmpldGFzLnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFRhcmpldGFzUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbVGFyamV0YXNQYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBUYXJqZXRhc1BhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YXJqZXRhcycsXG4gIHRlbXBsYXRlVXJsOiAnLi90YXJqZXRhcy5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YXJqZXRhcy5wYWdlLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFyamV0YXNQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==