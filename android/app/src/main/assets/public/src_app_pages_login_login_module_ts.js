"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_proyecto_Ionic_Proyecto_semestral_proyecto_semestral_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let LoginPage = class LoginPage {
  constructor(router, alertController) {
    this.router = router;
    this.alertController = alertController;
    this.usuario = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {}

  onSubmit() {
    if (this.usuario.username == "Admin" && this.usuario.password == "password") {
      let navigationExtras = {
        state: {
          usr: this.usuario
        }
      };
      console.log("Usuario Success");
      console.log(this.usuario);
      this.router.navigate(['/home', navigationExtras]);
    } else {
      this.presentAlert();
      console.log("Acceso Denegado");
    }
  }

  presentAlert() {
    var _this = this;

    return (0,C_proyecto_Ionic_Proyecto_semestral_proyecto_semestral_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Acceso Denegado',
        subHeader: '',
        message: 'Usuario o Contraseña incorrectos',
        buttons: [{
          text: 'Intentar Nuevamente',
          role: 'confirm',
          handler: () => {
            console.log('Confirmado');
          }
        }],
        mode: 'ios',
        backdropDismiss: false,
        cssClass: 'miclase'
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
      console.log(`Dismissed with role: ${role}`);
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #formlogin=\"ngForm\"(ngSubmit)=\"onSubmit()\">\n    <ion-text color=\"primary\">\n      <h1 class=\"animate__animated animate__pulse\">Iniciar sesión</h1>\n    </ion-text>\n\n    <ion-item>\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input required type=\"username\" name=\"username\" [(ngModel)]=\"usuario.username\" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input required type=\"password\" name=\"password\" [(ngModel)]=\"usuario.password\" clearInput></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"block\" class=\"ion-margin-top\" type=\"submit\" [disabled]=\"formlogin.invalid\">Login</ion-button>\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19sb2dpbl9sb2dpbl9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFFZDtBQUV6QyxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLGtEQUFTO0tBQ3JCO0NBQ0YsQ0FBQztJQU1XLHNCQUFzQixTQUF0QixzQkFBc0I7O0FBQXRCLHNCQUFzQjtJQUpsQyx1REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsa0VBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMseURBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1csc0JBQXNCO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJNO0FBQ007QUFDRjtBQUVBO0FBRW1CO0FBRXZCO0lBVzVCLGVBQWUsU0FBZixlQUFlOztBQUFmLGVBQWU7SUFUM0IsdURBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHlEQUFZO1lBQ1osdURBQVc7WUFDWCx1REFBVztZQUNYLHlFQUFzQjtTQUN2QjtRQUNELFlBQVksRUFBRSxDQUFDLGtEQUFTLENBQUM7S0FDMUIsQ0FBQztHQUNXLGVBQWU7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjVCO0FBQ0E7QUFDQTtJQU9hRyxTQUFTLFNBQVRBLFNBQVM7RUFNcEJDLFlBQ1VDLE1BRFYsRUFFVUMsZUFGVixFQUV5QztJQUQvQjtJQUNBO0lBUFYsZUFBUTtNQUNOQyxRQUFRLEVBQUMsRUFESDtNQUVOQyxRQUFRLEVBQUM7SUFGSCxDQUFSO0VBUU07O0VBRU5DLFFBQVEsSUFDUDs7RUFFREMsUUFBUTtJQUVOLElBQUcsS0FBS0MsT0FBTCxDQUFhSixRQUFiLElBQXVCLE9BQXZCLElBQWtDLEtBQUtJLE9BQUwsQ0FBYUgsUUFBYixJQUF1QixVQUE1RCxFQUNBO01BQ0UsSUFBSUksZ0JBQWdCLEdBQWtCO1FBQ3BDQyxLQUFLLEVBQUM7VUFDSkMsR0FBRyxFQUFDLEtBQUtIO1FBREw7TUFEOEIsQ0FBdEM7TUFLQUksT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7TUFDQUQsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0wsT0FBakI7TUFFQSxLQUFLTixNQUFMLENBQVlZLFFBQVosQ0FBcUIsQ0FBQyxPQUFELEVBQVNMLGdCQUFULENBQXJCO0lBQ0QsQ0FYRCxNQVlJO01BQ0YsS0FBS00sWUFBTDtNQUNBSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtJQUNEO0VBQ0Y7O0VBQ0tFLFlBQVk7SUFBQTs7SUFBQTtNQUNoQixNQUFNQyxLQUFLLFNBQVMsS0FBSSxDQUFDYixlQUFMLENBQXFCYyxNQUFyQixDQUE0QjtRQUM5Q0MsTUFBTSxFQUFFLGlCQURzQztRQUU5Q0MsU0FBUyxFQUFFLEVBRm1DO1FBRzlDQyxPQUFPLEVBQUUsa0NBSHFDO1FBSTlDQyxPQUFPLEVBQUUsQ0FDUDtVQUNFQyxJQUFJLEVBQUUscUJBRFI7VUFFRUMsSUFBSSxFQUFFLFNBRlI7VUFHRUMsT0FBTyxFQUFFLE1BQUs7WUFDWlosT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtVQUNEO1FBTEgsQ0FETyxDQUpxQztRQWE5Q1ksSUFBSSxFQUFDLEtBYnlDO1FBYzlDQyxlQUFlLEVBQUMsS0FkOEI7UUFlOUNDLFFBQVEsRUFBQztNQWZxQyxDQUE1QixDQUFwQjtNQWtCQSxNQUFNWCxLQUFLLENBQUNZLE9BQU4sRUFBTjtNQUVBLE1BQU07UUFBRUw7TUFBRixVQUFpQlAsS0FBSyxDQUFDYSxZQUFOLEVBQXZCO01BQ0FqQixPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBd0JVLElBQUksRUFBeEM7SUF0QmdCO0VBdUJqQjs7QUF4RG1COzs7Ozs7OztBQUFUdkIsU0FBUyxzREFMckJILHdEQUFTLENBQUM7RUFDVGlDLFFBQVEsRUFBRSxXQUREO0VBRVRDLFVBQUFBLHdEQUZTOztBQUFBLENBQUQsQ0FLWSxHQUFUL0IsU0FBUyxDQUFUIiwic291cmNlcyI6WyIuL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9sb2dpbi5wYWdlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IExvZ2luUGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlUm91dGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IExvZ2luUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xvZ2luLXJvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSAnLi9sb2dpbi5wYWdlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBMb2dpblBhZ2VSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0xvZ2luUGFnZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLnBhZ2UuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLnBhZ2Uuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpblBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c3VhcmlvPXtcbiAgICB1c2VybmFtZTonJyxcbiAgICBwYXNzd29yZDonJ1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxuICAgIHByaXZhdGUgYWxlcnRDb250cm9sbGVyOkFsZXJ0Q29udHJvbGxlcixcbiAgICApeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBvblN1Ym1pdCgpXG4gIHtcbiAgICBpZih0aGlzLnVzdWFyaW8udXNlcm5hbWU9PVwiQWRtaW5cIiAmJiB0aGlzLnVzdWFyaW8ucGFzc3dvcmQ9PVwicGFzc3dvcmRcIilcbiAgICB7XG4gICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczpOYXZpZ2F0aW9uRXh0cmFzPXtcbiAgICAgICAgc3RhdGU6e1xuICAgICAgICAgIHVzcjp0aGlzLnVzdWFyaW8sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiVXN1YXJpbyBTdWNjZXNzXCIpO1xuICAgICAgY29uc29sZS5sb2codGhpcy51c3VhcmlvKTtcblxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaG9tZScsbmF2aWdhdGlvbkV4dHJhc10pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5wcmVzZW50QWxlcnQoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjZXNvIERlbmVnYWRvXCIpO1xuICAgIH1cbiAgfVxuICBhc3luYyBwcmVzZW50QWxlcnQoKSB7XG4gICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnQWNjZXNvIERlbmVnYWRvJyxcbiAgICAgIHN1YkhlYWRlcjogJycsXG4gICAgICBtZXNzYWdlOiAnVXN1YXJpbyBvIENvbnRyYXNlw7FhIGluY29ycmVjdG9zJyxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdJbnRlbnRhciBOdWV2YW1lbnRlJyxcbiAgICAgICAgICByb2xlOiAnY29uZmlybScsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmZpcm1hZG8nKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG1vZGU6J2lvcycsXG4gICAgICBiYWNrZHJvcERpc21pc3M6ZmFsc2UsXG4gICAgICBjc3NDbGFzczonbWljbGFzZScsXG4gICAgfSk7XG4gICAgXG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuXG4gICAgY29uc3QgeyByb2xlIH0gPSBhd2FpdCBhbGVydC5vbkRpZERpc21pc3MoKTtcbiAgICBjb25zb2xlLmxvZyhgRGlzbWlzc2VkIHdpdGggcm9sZTogJHtyb2xlfWApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUm91dGVyIiwiQWxlcnRDb250cm9sbGVyIiwiTG9naW5QYWdlIiwiY29uc3RydWN0b3IiLCJyb3V0ZXIiLCJhbGVydENvbnRyb2xsZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibmdPbkluaXQiLCJvblN1Ym1pdCIsInVzdWFyaW8iLCJuYXZpZ2F0aW9uRXh0cmFzIiwic3RhdGUiLCJ1c3IiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGUiLCJwcmVzZW50QWxlcnQiLCJhbGVydCIsImNyZWF0ZSIsImhlYWRlciIsInN1YkhlYWRlciIsIm1lc3NhZ2UiLCJidXR0b25zIiwidGV4dCIsInJvbGUiLCJoYW5kbGVyIiwibW9kZSIsImJhY2tkcm9wRGlzbWlzcyIsImNzc0NsYXNzIiwicHJlc2VudCIsIm9uRGlkRGlzbWlzcyIsInNlbGVjdG9yIiwidGVtcGxhdGUiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119