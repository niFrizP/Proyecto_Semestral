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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-icon slot=\"start\" name=\"menu\" size=\"large\" class=\"ion-padding\" (click)=\"verMenu()\"></ion-icon>\n    <ion-title>Lista Asistencia</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list *ngFor=\"let item of ['Mario','Ricardo','Alejandro','Yazna','Mabel']\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"/assets/user.png\"/>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item}}</h2>\n\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19saXN0YWRvX2xpc3RhZG9fbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNjO0FBRVY7QUFFN0MsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzREFBVztLQUN2QjtDQUNGLENBQUM7SUFNVyx3QkFBd0IsU0FBeEIsd0JBQXdCOztBQUF4Qix3QkFBd0I7SUFKcEMsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sRUFBRSxDQUFDLHlEQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHdCQUF3QjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCSTtBQUNNO0FBQ0Y7QUFFQTtBQUV1QjtBQUV2QjtJQVdoQyxpQkFBaUIsU0FBakIsaUJBQWlCOztBQUFqQixpQkFBaUI7SUFUN0IsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHlEQUFZO1lBQ1osdURBQVc7WUFDWCx1REFBVztZQUNYLDZFQUF3QjtTQUN6QjtRQUNELFlBQVksRUFBRSxDQUFDLHNEQUFXLENBQUM7S0FDNUIsQ0FBQztHQUNXLGlCQUFpQjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQm9CO0FBQ1Q7QUFDTztJQU9uQyxXQUFXLFNBQVgsV0FBVztJQUd0QixZQUNVLE1BQWEsRUFDYixJQUFtQjtRQURuQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUo3QixjQUFTLEdBQU0sRUFBRSxDQUFDO0lBS1osQ0FBQztJQUVQLFFBQVE7SUFDUixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQUEsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztBQXJCVSxXQUFXO0lBTHZCLHdEQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixvRUFBa0M7O0tBRW5DLENBQUM7R0FDVyxXQUFXO0FBQUEiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wYWdlcy9saXN0YWRvL2xpc3RhZG8tcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvbGlzdGFkby9saXN0YWRvLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9saXN0YWRvL2xpc3RhZG8ucGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMaXN0YWRvUGFnZSB9IGZyb20gJy4vbGlzdGFkby5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IExpc3RhZG9QYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0YWRvUGFnZVJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBMaXN0YWRvUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xpc3RhZG8tcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMaXN0YWRvUGFnZSB9IGZyb20gJy4vbGlzdGFkby5wYWdlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBMaXN0YWRvUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTGlzdGFkb1BhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RhZG9QYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1lbnVDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdGFkbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0YWRvLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RhZG8ucGFnZS5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RhZG9QYWdlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29sZWNjaW9uOiBhbnk9W107XG5cbiAgY29uc3RydWN0b3IoICAgIFxuICAgIHByaXZhdGUgcm91dGVyOlJvdXRlcixcbiAgICBwcml2YXRlIG1lbnU6TWVudUNvbnRyb2xsZXIsXG4gICAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHZlck1lbnUoKXtcbiAgICB0aGlzLm1lbnUub3BlbignZmlyc3QnKTtcbiAgfVxuXG4gIGRvUmVmcmVzaChldmVudG8pe1xuICAgIGNvbnNvbGUubG9nKFwiUmVmcmVzY2FuZG8gbGEgcMOhZ2luYVwiKTtcbiAgICBjb25zb2xlLmxvZyhldmVudG8pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBldmVudG8udGFyZ2V0LmNvbXBsZXRlKCk7fSwyMDAwKTtcbiAgfVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=