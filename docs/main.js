(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zagis\Documents\Website Projects\myFlix-Angular-client\src\main.ts */"zUnb");


/***/ }),

/***/ "0xBz":
/*!****************************************************!*\
  !*** ./src/app/movie-card/movie-card.component.ts ***!
  \****************************************************/
/*! exports provided: MovieCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function() { return MovieCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function MovieCardComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Genre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Director ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Synopsis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Directed by: ", movie_r1.Director.Name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", movie_r1.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", movie_r1.Title);
} }
class MovieCardComponent {
    constructor(fetchApiData) {
        this.fetchApiData = fetchApiData;
        this.movies = [];
    }
    ngOnInit() {
        this.getMovies();
    }
    getMovies() {
        this.fetchApiData.getAllMovies().subscribe((resp) => {
            this.movies = resp;
            console.log(this.movies);
            return this.movies;
        });
    }
}
MovieCardComponent.ɵfac = function MovieCardComponent_Factory(t) { return new (t || MovieCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__["GetAllMoviesService"])); };
MovieCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieCardComponent, selectors: [["app-movie-card"]], decls: 2, vars: 1, consts: [[2, "display", "flex"], ["style", "flex: 1 1 auto;", 4, "ngFor", "ngForOf"], [2, "flex", "1 1 auto"], [3, "src", "alt"], ["mat-button", "", "color", "primary"]], template: function MovieCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovieCardComponent_mat_card_1_Template, 16, 4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LVDx":
/*!****************************************************************************!*\
  !*** ./src/app/user-registration-form/user-registration-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserRegistrationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationFormComponent", function() { return UserRegistrationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class UserRegistrationFormComponent {
    constructor(fetchApiData, dialogRef, snackBar) {
        this.fetchApiData = fetchApiData;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.userData = { Username: '', Password: '', Email: '', Birthday: '' };
    }
    ngOnInit() {
    }
    // This is the function responsible for sending the form inputs to the backend
    registerUser() {
        this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
            // Logic for a successful user registration goes here! (To be implemented)
            this.dialogRef.close(); // This will close the modal on success!
            this.snackBar.open(result, 'OK', {
                duration: 2000
            });
        }, (result) => {
            this.snackBar.open(result, 'OK', {
                duration: 2000
            });
        });
    }
}
UserRegistrationFormComponent.ɵfac = function UserRegistrationFormComponent_Factory(t) { return new (t || UserRegistrationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
UserRegistrationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRegistrationFormComponent, selectors: [["app-user-registration-form"]], inputs: { userData: "userData" }, decls: 17, vars: 4, consts: [["matInput", "", "placeholder", "Username", "type", "text", "name", "Username", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "placeholder", "Password", "name", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "email", "placeholder", "Email", "name", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "date", "placeholder", "Birthday", "name", "Birthday", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UserRegistrationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userData.Username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userData.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.userData.Email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserRegistrationFormComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userData.Birthday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserRegistrationFormComponent_Template_button_click_15_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.Username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.Birthday);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'filmFlix';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-registration-form/user-registration-form.component */ "LVDx");
/* harmony import */ var _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-login-form/user-login-form.component */ "r0Ri");
/* harmony import */ var _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./movie-card/movie-card.component */ "0xBz");
/* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "fDIK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");

// HttpClient and routing





// Angular Material







// App Components







const appRoutes = [
    { path: 'welcome', component: _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_17__["WelcomePageComponent"] },
    { path: 'movies', component: _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_16__["MovieCardComponent"] },
    { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"],
        _user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_14__["UserRegistrationFormComponent"],
        _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_15__["UserLoginFormComponent"],
        _movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_16__["MovieCardComponent"],
        _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_17__["WelcomePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]] }); })();


/***/ }),

/***/ "fDIK":
/*!********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-login-form/user-login-form.component */ "r0Ri");
/* harmony import */ var _user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-registration-form/user-registration-form.component */ "LVDx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class WelcomePageComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    // registration dialog
    openUserRegistrationDialog() {
        this.dialog.open(_user_registration_form_user_registration_form_component__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationFormComponent"], {
            width: '280px'
        });
    }
    // login dialog
    openUserLoginDialog() {
        this.dialog.open(_user_login_form_user_login_form_component__WEBPACK_IMPORTED_MODULE_0__["UserLoginFormComponent"], {
            width: '280px'
        });
    }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["app-welcome-page"]], decls: 9, vars: 0, consts: [[1, "welcome-container"], [1, "welcome-title"], [1, "btn-container"], ["mat-raised-button", "", "color", "primary", "aria-label", "Sign up button", 3, "click"], ["mat-raised-button", "", "color", "accent", "aria-label", "Login button", 3, "click"]], template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Welcome to filmFlix ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomePageComponent_Template_button_click_5_listener() { return ctx.openUserRegistrationDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WelcomePageComponent_Template_button_click_7_listener() { return ctx.openUserLoginDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".brand[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.welcome-container[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n\n.welcome-container[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n.welcome-container[_ngcontent-%COMP%]   .welcome-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-align: center;\n  font-weight: 500;\n}\n\n.welcome-container[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNFO0VBQ0UsbUJBQUE7QUFDSjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRU47O0FBRUU7RUFDRSxrQkFBQTtBQUFKIiwiZmlsZSI6IndlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZCB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4ud2VsY29tZS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgLy8gdGl0bGVcclxuICAud2VsY29tZS10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gYnV0dG9uXHJcbiAgLmJ0bi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "r0Ri":
/*!**************************************************************!*\
  !*** ./src/app/user-login-form/user-login-form.component.ts ***!
  \**************************************************************/
/*! exports provided: UserLoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginFormComponent", function() { return UserLoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api-data.service */ "trEW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class UserLoginFormComponent {
    constructor(fetchApiData, dialogRef, snackBar, router) {
        this.fetchApiData = fetchApiData;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.router = router;
        this.userData = { Username: '', Password: '' };
    }
    ngOnInit() { }
    /**
     * function to login user
     */
    loginUser() {
        this.fetchApiData.userLogin(this.userData).subscribe((response) => {
            this.dialogRef.close();
            localStorage.setItem('user', response.user.Username);
            localStorage.setItem('token', response.token);
            this.snackBar.open('User logged in successfully!', 'OK', {
                duration: 2000
            });
            this.router.navigate(['movies']);
        }, (response) => {
            console.log(response);
            this.snackBar.open(response, 'OK', {
                duration: 2000
            });
        });
    }
}
UserLoginFormComponent.ɵfac = function UserLoginFormComponent_Factory(t) { return new (t || UserLoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fetch_api_data_service__WEBPACK_IMPORTED_MODULE_1__["UserLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserLoginFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginFormComponent, selectors: [["app-user-login-form"]], inputs: { userData: "userData" }, decls: 13, vars: 2, consts: [["matInput", "", "placeholder", "Username", "type", "text", "name", "Username", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "Password", "required", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function UserLoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginFormComponent_Template_input_ngModelChange_7_listener($event) { return ctx.userData.Username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLoginFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.userData.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginFormComponent_Template_button_click_11_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.Username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userData.Password);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "trEW":
/*!*******************************************!*\
  !*** ./src/app/fetch-api-data.service.ts ***!
  \*******************************************/
/*! exports provided: UserRegistrationService, UserLoginService, GetAllMoviesService, GetSingleMovieService, GetDirectorService, GetGenreService, GetUserService, GetFavoriteMoviesService, AddFavoriteMovieService, EditUserService, DeleteUserService, RemoveFavoriteMovieService, FetchApiDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllMoviesService", function() { return GetAllMoviesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSingleMovieService", function() { return GetSingleMovieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDirectorService", function() { return GetDirectorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGenreService", function() { return GetGenreService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserService", function() { return GetUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFavoriteMoviesService", function() { return GetFavoriteMoviesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteMovieService", function() { return AddFavoriteMovieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserService", function() { return EditUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserService", function() { return DeleteUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFavoriteMovieService", function() { return RemoveFavoriteMovieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchApiDataService", function() { return FetchApiDataService; });
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators */ "yrbL");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






//Declaring the api url that will provide data for the client app
const apiUrl = 'https://myflix-zag.herokuapp.com/';
// User registration
class UserRegistrationService {
    // Inject the HttpClient module to the constructor params
    // This will provide HttpClient to the entire class, making it available via this.http
    constructor(http) {
        this.http = http;
    }
    // Making the api call for the user registration endpoint
    userRegistration(userDetails) {
        console.log(userDetails);
        return this.http.post(apiUrl + 'users', userDetails).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
UserRegistrationService.ɵfac = function UserRegistrationService_Factory(t) { return new (t || UserRegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserRegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserRegistrationService, factory: UserRegistrationService.ɵfac, providedIn: 'root' });
// User login
class UserLoginService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call for the user login endpoint
    userLogin(userDetails) {
        console.log(userDetails);
        return this.http
            .post(apiUrl + 'login', userDetails)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` + `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
UserLoginService.ɵfac = function UserLoginService_Factory(t) { return new (t || UserLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserLoginService, factory: UserLoginService.ɵfac, providedIn: 'root' });
//Get all movies
class GetAllMoviesService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to get all movies
    getAllMovies() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` + `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetAllMoviesService.ɵfac = function GetAllMoviesService_Factory(t) { return new (t || GetAllMoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetAllMoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetAllMoviesService, factory: GetAllMoviesService.ɵfac, providedIn: 'root' });
// Get one movie
class GetSingleMovieService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call for single movie information
    getMovieByTitle() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/:Title', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` + `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetSingleMovieService.ɵfac = function GetSingleMovieService_Factory(t) { return new (t || GetSingleMovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetSingleMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetSingleMovieService, factory: GetSingleMovieService.ɵfac, providedIn: 'root' });
// Get director
class GetDirectorService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to get director information
    getDirector() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/directors/:Name', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetDirectorService.ɵfac = function GetDirectorService_Factory(t) { return new (t || GetDirectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetDirectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetDirectorService, factory: GetDirectorService.ɵfac, providedIn: 'root' });
// Get genre
class GetGenreService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to get genre information
    getGenre() {
        const token = localStorage.getItem('token');
        return this.http.get(apiUrl + 'movies/genres/:Name', { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetGenreService.ɵfac = function GetGenreService_Factory(t) { return new (t || GetGenreService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetGenreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetGenreService, factory: GetGenreService.ɵfac, providedIn: 'root' });
// Get user
class GetUserService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to get user information
    getUser() {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return this.http.get(apiUrl + `users/${user}`, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetUserService.ɵfac = function GetUserService_Factory(t) { return new (t || GetUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetUserService, factory: GetUserService.ɵfac, providedIn: 'root' });
// Get favourite movies for a user
class GetFavoriteMoviesService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to get user's favorite movies
    getUserFavorite(id) {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return this.http.get(apiUrl + `users/${user}/Movies/${id}`, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
GetFavoriteMoviesService.ɵfac = function GetFavoriteMoviesService_Factory(t) { return new (t || GetFavoriteMoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GetFavoriteMoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GetFavoriteMoviesService, factory: GetFavoriteMoviesService.ɵfac, providedIn: 'root' });
// Add a movie to favourite movies
class AddFavoriteMovieService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call for user to add favorite movie
    addFavoriteMovie(id) {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return this.http.post(apiUrl + `users/${user}/Movies/${id}`, id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
AddFavoriteMovieService.ɵfac = function AddFavoriteMovieService_Factory(t) { return new (t || AddFavoriteMovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AddFavoriteMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AddFavoriteMovieService, factory: AddFavoriteMovieService.ɵfac, providedIn: 'root' });
// Edit user
class EditUserService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to edit user information
    editUser(userDetails) {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return this.http.put(apiUrl + `users/${user}`, userDetails, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
EditUserService.ɵfac = function EditUserService_Factory(t) { return new (t || EditUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EditUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: EditUserService, factory: EditUserService.ɵfac, providedIn: 'root' });
// Delete user
class DeleteUserService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to delete user information
    deleteUser() {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return this.http.delete(apiUrl + `users/${user}`, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
DeleteUserService.ɵfac = function DeleteUserService_Factory(t) { return new (t || DeleteUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DeleteUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DeleteUserService, factory: DeleteUserService.ɵfac, providedIn: 'root' });
// Delete a movie from the favorite movies
class RemoveFavoriteMovieService {
    constructor(http) {
        this.http = http;
    }
    //Making the api call to delete movie from user's favorites
    deleteFavoriteMovie(id) {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return this.http.delete(apiUrl + `users/${user}/Movies/${id}`, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Bearer ' + token,
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractResponseData), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.handleError));
    }
    // Non-typed response extraction
    extractResponseData(res) {
        const body = res;
        return body || {};
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Some error occurred:', error.error.message);
        }
        else {
            console.error(`Error Status code ${error.status}, ` +
                `Error body is: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    }
}
RemoveFavoriteMovieService.ɵfac = function RemoveFavoriteMovieService_Factory(t) { return new (t || RemoveFavoriteMovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RemoveFavoriteMovieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RemoveFavoriteMovieService, factory: RemoveFavoriteMovieService.ɵfac, providedIn: 'root' });
class FetchApiDataService {
    constructor() { }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map