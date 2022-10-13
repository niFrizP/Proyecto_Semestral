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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>refresco</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19yZWZyZXNjb19yZWZyZXNjb19tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFUjtBQUUvQyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHdEQUFZO0tBQ3hCO0NBQ0YsQ0FBQztJQU1XLHlCQUF5QixTQUF6Qix5QkFBeUI7O0FBQXpCLHlCQUF5QjtJQUpyQyx1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsa0VBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMseURBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1cseUJBQXlCO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJHO0FBQ007QUFDRjtBQUVBO0FBRXlCO0FBRXZCO0lBV2xDLGtCQUFrQixTQUFsQixrQkFBa0I7O0FBQWxCLGtCQUFrQjtJQVQ5Qix1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AseURBQVk7WUFDWix1REFBVztZQUNYLHVEQUFXO1lBQ1gsK0VBQXlCO1NBQzFCO1FBQ0QsWUFBWSxFQUFFLENBQUMsd0RBQVksQ0FBQztLQUM3QixDQUFDO0dBQ1csa0JBQWtCO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm1CO0lBT3JDLFlBQVksU0FBWixZQUFZO0lBRXZCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7QUFMVSxZQUFZO0lBTHhCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixxRUFBbUM7O0tBRXBDLENBQUM7R0FDVyxZQUFZO0FBQUEiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wYWdlcy9yZWZyZXNjby9yZWZyZXNjby1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9yZWZyZXNjby9yZWZyZXNjby5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvcmVmcmVzY28vcmVmcmVzY28ucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBSZWZyZXNjb1BhZ2UgfSBmcm9tICcuL3JlZnJlc2NvLnBhZ2UnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogUmVmcmVzY29QYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBSZWZyZXNjb1BhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgUmVmcmVzY29QYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcmVmcmVzY28tcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBSZWZyZXNjb1BhZ2UgfSBmcm9tICcuL3JlZnJlc2NvLnBhZ2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFJlZnJlc2NvUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmVmcmVzY29QYWdlXVxufSlcbmV4cG9ydCBjbGFzcyBSZWZyZXNjb1BhZ2VNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZWZyZXNjbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWZyZXNjby5wYWdlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWZyZXNjby5wYWdlLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVmcmVzY29QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==