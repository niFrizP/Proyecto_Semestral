"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.subjects = [
            {
                img: 'assets/imgs/matematica.png',
                name: 'Matematicas'
            },
            {
                img: 'assets/imgs/antropologia.png',
                name: 'Antropologia'
            },
            {
                img: 'assets/imgs/comunicacion.png',
                name: 'Comunicacion'
            },
            {
                img: 'assets/imgs/estadistica.png',
                name: 'Estadistica'
            },
            {
                img: 'assets/imgs/programacion.png',
                name: 'Programacion'
            },
            {
                img: 'assets/imgs/ingles.png',
                name: 'ingles'
            },
        ];
    }
    goToSubject() {
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: linear-gradient( to right , #012C56, #345678);\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .menu_btn {\n  position: relative;\n  top: 40px;\n  left: 10px;\n}\n\n.main_content_div ion-label {\n  display: block;\n  color: #012C56;\n  text-align: center;\n}\n\n.main_content_div .user_div {\n  padding: 20px;\n  width: 100%;\n  height: 260px;\n  background: linear-gradient(to right, #012C56, #345678);\n  display: flex;\n  padding-top: 40px;\n  justify-content: space-between;\n}\n\n.main_content_div .user_div .first_div {\n  padding-top: 35px;\n}\n\n.main_content_div .user_div .first_div .welcome {\n  font-size: 18px;\n  color: white;\n  font-weight: 500;\n}\n\n.main_content_div .user_div .first_div .username {\n  font-size: 24px;\n  color: white;\n  font-weight: 600;\n}\n\n.main_content_div .user_div .user_back {\n  height: 100px;\n  width: 80px;\n  box-shadow: 1px 3px 5px rgb(36, 36, 36);\n  background-position: top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 7px;\n}\n\n.main_content_div .content_div {\n  background: white;\n  width: 100%;\n  border-top-right-radius: 75px;\n  margin-top: -90px;\n  padding-top: 30px;\n}\n\n.main_content_div .content_div .hola_asignatura {\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n  padding-left: 5px;\n  margin-top: 10px;\n}\n\n.main_content_div .content_div ion-grid {\n  padding: 0px;\n}\n\n.main_content_div .content_div .col_div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 150px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n}\n\n.main_content_div .content_div .col_div img {\n  width: 70px;\n}\n\n.main_content_div .content_div .col_div ion-label {\n  color: var(--ion-color-primary);\n  margin-top: 5px;\n}\n\n.animated {\n  animation-duration: 10s;\n  animation-fill-mode: both;\n}\n\n.bounceInUp {\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(2000px);\n  }\n  60% {\n    opacity: 1;\n    -webkit-transform: translateY(-30px);\n  }\n  80% {\n    -webkit-transform: translateY(10px);\n  }\n  100% {\n    -webkit-transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVEQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFHSTtFQUNFLGlCQUFBO0FBRE47O0FBRU07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBR007RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRFI7O0FBS0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFITjs7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUxKOztBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBTE47O0FBUUk7RUFDRSxZQUFBO0FBTk47O0FBU0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBQVBOOztBQVNNO0VBQ0UsV0FBQTtBQVBSOztBQVVNO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBUlI7O0FBZUE7RUFFRSx1QkFBQTtFQUVBLHlCQUFBO0FBWkY7O0FBa0NBO0VBRUUsMEJBQUE7QUFmRjs7QUFrQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQ0FBQTtFQWZGO0VBaUJBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO0VBZkY7RUFpQkE7SUFFRSxtQ0FBQTtFQWhCRjtFQW1CQTtJQUVFLGdDQUFBO0VBbEJGO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQgLCAjMDEyQzU2LCAjMzQ1Njc4KTtcclxufVxyXG5cclxuLm1haW5fY29udGVudF9kaXZ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5tZW51X2J0bntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMDEyQzU2O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnVzZXJfZGl2e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KCB0byByaWdodCAsICMwMTJDNTYsICMzNDU2NzgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIC5maXJzdF9kaXZ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAud2VsY29tZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51c2VybmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlcl9iYWNre1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDNweCA1cHggcmdiKDM2LCAzNiwgMzYpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50X2RpdntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNzVweDtcclxuICAgIG1hcmdpbi10b3A6IC05MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcblxyXG4gICAgLmhvbGFfYXNpZ25hdHVyYXtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tZ3JpZHtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2xfZGl2e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG4uYW5pbWF0ZWR7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEwcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXB7XHJcbiAgMCV7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0gOnRyYW5zbGF0ZVkoMjAwMHB4KTtcclxuICB9XHJcbiAgNjAle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTtcclxuICB9XHJcbiAgODAle1xyXG5cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJXtcclxuXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuLmJvdW5jZUluVXB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxuICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5VcDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3VuY2VJblVwe1xyXG4gIDAle1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtIDp0cmFuc2xhdGVZKDIwMDBweCk7XHJcbiAgfVxyXG4gIDYwJXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7XHJcbiAgfVxyXG4gIDgwJXtcclxuXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB9XHJcblxyXG4gIDEwMCV7XHJcblxyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59Il19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n    <div class=\"main_content_div\">\r\n\r\n      <ion-buttons slot=\"start\" class=\"menu_btn\">\r\n        <ion-menu-button color=\"light\"></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n      <div class=\"user_div\">\r\n        <div class=\"first_div\">\r\n          <ion-label class=\"welcome\">Bienvenido/a</ion-label>\r\n          <ion-label class=\"username\">Nicolás</ion-label>\r\n        </div>\r\n        <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/01.jpg)'\"></div>\r\n      </div>\r\n\r\n      <div class=\"content_div animated bounceInUp\">\r\n        <ion-label class=\"hola_asignatura\">Hola, elija su asignatura</ion-label>\r\n\r\n        <ion-grid fixed>\r\n          <ion-row>\r\n            <ion-col size=\"6\" (click)=\"goToSubject()\" *ngFor=\"let item of subjects \">\r\n              <div class=\"col_div\">\r\n                <img src=\"{{this.subjects}}\" >\r\n                <ion-label>{{item.name}}</ion-label>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map