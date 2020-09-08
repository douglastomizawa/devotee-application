(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-login-page-buttons-buttons-module"],{

/***/ "./src/app/login-page/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/login-page/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent, QRSignInModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRSignInModalComponent", function() { return QRSignInModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/translate.service */ "./src/app/shared/translate.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function () { return ["/createaccount"]; };
const _c1 = function () { return ["/signin"]; };
class ButtonsComponent {
    constructor(translatePage, dialog) {
        this.translatePage = translatePage;
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(QRSignInModalComponent, {
            width: '100%',
            height: '80%'
        });
    }
    ngOnInit() {
        this.text = this.translatePage.textTranslate;
    }
}
ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
ButtonsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonsComponent, selectors: [["app-buttons"]], decls: 17, vars: 8, consts: [[1, "buttons-login"], ["href", "", "mat-raised-button", "", 1, "btn-sm", "create-account", 3, "routerLink"], ["mat-raised-button", "", 1, "btn-sm", "login", 3, "routerLink"], ["href", "", "mat-raised-button", "", 1, "btn-lg", "login-fb"], ["src", "../../assets/facebook-logo.svg", "alt", ""], [1, "or", "mat-mb-0"], ["mat-raised-button", "", 1, "btn-lg", "login-qr", 3, "click"], ["src", "../../assets/qa-code.svg", "alt", ""]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ou");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonsComponent_Template_button_click_13_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text.createAccount.btnCreateAccout, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text.btnLogin, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text.btnFb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text.btnQr);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".buttons-login[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \"create-account login\" \"login-fb login-fb\" \"or or\" \"login-qr login-qr\";\n}\n.buttons-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.buttons-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.buttons-login[_ngcontent-%COMP%]   .create-account[_ngcontent-%COMP%] {\n  grid-area: create-account;\n  background-color: #ffffff;\n  color: #EC1200;\n}\n.buttons-login[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  grid-area: login;\n  background-color: #EC1200;\n  color: #ffffff;\n}\n.buttons-login[_ngcontent-%COMP%]   .login-fb[_ngcontent-%COMP%] {\n  grid-area: login-fb;\n  background-color: #1977F5;\n  color: #ffffff;\n}\n.buttons-login[_ngcontent-%COMP%]   .login-fb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 37px;\n}\n.buttons-login[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n  display: none;\n}\n.buttons-login[_ngcontent-%COMP%]   .login-qr[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (min-width: 700px) {\n  .buttons-login[_ngcontent-%COMP%]   .login-qr[_ngcontent-%COMP%] {\n    display: block;\n    grid-area: login-qr;\n    background-color: #ffffff;\n    color: #505050;\n  }\n  .buttons-login[_ngcontent-%COMP%]   .or[_ngcontent-%COMP%] {\n    display: block;\n    grid-area: or;\n    text-align: center;\n    color: #ffffff;\n  }\n\n  .buttons-login[_ngcontent-%COMP%] {\n    grid-area: buttons;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"create-account login\" \"login-fb login-fb\" \"or or\" \"login-qr login-qr\";\n    max-width: 100%;\n    width: 380px;\n  }\n  .buttons-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 45px;\n    font-size: 1.2rem;\n  }\n}\n@media only screen and (min-width: 1250px) {\n  .buttons-login[_ngcontent-%COMP%] {\n    max-width: 395px;\n    width: 395px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJGQUNBO0FBREY7QUFNRTtFQUNFLFlBQUE7QUFKSjtBQUtJO0VBQ0UsWUFBQTtBQUhOO0FBTUU7RUFDRSx5QkFBQTtFQUNBLHlCQ2xCZ0I7RURtQmhCLGNDbEJpQjtBRGNyQjtBQU1FO0VBQ0UsZ0JBQUE7RUFDQSx5QkN0QmlCO0VEdUJqQixjQ3hCZ0I7QURvQnBCO0FBTUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0M3QmdCO0FEeUJwQjtBQUtJO0VBQ0UsZUFBQTtBQUhOO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFNRTtFQUNFLGFBQUE7QUFKSjtBQVFBO0VBRUk7SUFDRSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkMvQ2M7SURnRGQsY0FBQTtFQU5KO0VBUUU7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0N0RGM7RURnRGxCOztFQVNFO0lBQ0Usa0JBQUE7SUFDQSw4QkFBQTtJQUNBLDJGQUNBO0lBSUEsZUFBQTtJQUNBLFlBQUE7RUFWSjtFQVdJO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0VBVE47QUFDRjtBQWFBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFlBQUE7RUFYRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tcGFnZS9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5zY3NzXCI7XHJcbi5idXR0b25zLWxvZ2lue1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgXCJjcmVhdGUtYWNjb3VudCBsb2dpblwiXHJcbiAgXCJsb2dpbi1mYiBsb2dpbi1mYlwiXHJcbiAgXCJvciBvclwiXHJcbiAgXCJsb2dpbi1xciBsb2dpbi1xclwiXHJcbiAgO1xyXG4gIGJ1dHRvbntcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHNwYW57XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNyZWF0ZS1hY2NvdW50e1xyXG4gICAgZ3JpZC1hcmVhOiBjcmVhdGUtYWNjb3VudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tbG9naW4tcHJpbWFyeTtcclxuICAgIGNvbG9yOiAkYnRuLWxvZ2luLXNlY3VuZGFyeTtcclxuICB9XHJcbiAgLmxvZ2lue1xyXG4gICAgZ3JpZC1hcmVhOiBsb2dpbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRidG4tbG9naW4tc2VjdW5kYXJ5O1xyXG4gICAgY29sb3I6ICRidG4tbG9naW4tcHJpbWFyeTtcclxuICB9XHJcbiAgLmxvZ2luLWZie1xyXG4gICAgZ3JpZC1hcmVhOiBsb2dpbi1mYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc3RjU7XHJcbiAgICBjb2xvcjogJGJ0bi1sb2dpbi1wcmltYXJ5O1xyXG4gICAgaW1ne1xyXG4gICAgICBtYXgtd2lkdGg6IDM3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5sb2dpbi1xcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gIC5idXR0b25zLWxvZ2lue1xyXG4gICAgLmxvZ2luLXFye1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZ3JpZC1hcmVhOiBsb2dpbi1xcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJ0bi1sb2dpbi1wcmltYXJ5O1xyXG4gICAgICBjb2xvcjogIzUwNTA1MDtcclxuICAgIH1cclxuICAgIC5vcntcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGdyaWQtYXJlYTogb3I7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICRidG4tbG9naW4tcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcbiAgICAuYnV0dG9ucy1sb2dpbntcclxuICAgICAgZ3JpZC1hcmVhOiBidXR0b25zO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImNyZWF0ZS1hY2NvdW50IGxvZ2luXCJcclxuICAgICAgXCJsb2dpbi1mYiBsb2dpbi1mYlwiXHJcbiAgICAgIFwib3Igb3JcIlxyXG4gICAgICBcImxvZ2luLXFyIGxvZ2luLXFyXCI7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICBidXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTBweCkge1xyXG4gIC5idXR0b25zLWxvZ2lue1xyXG4gICAgbWF4LXdpZHRoOiAzOTVweDtcclxuICAgIHdpZHRoOiAzOTVweDtcclxuICB9XHJcbn1cclxuIiwiJGJ0bi1sb2dpbi1wcmltYXJ5OiAjZmZmZmZmO1xyXG4kYnRuLWxvZ2luLXNlY3VuZGFyeTojRUMxMjAwO1xyXG4kYnRuLXNpZ25pbi1zZWN1bmRhcnk6Izk5OTk5OTtcclxuJHRleHQtYnV0dG9uLWNvbG9yLWJsdWUtcHJpbWFyeTojMkUyQzhBO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buttons',
                templateUrl: './buttons.component.html',
                styleUrls: ['./buttons.component.scss']
            }]
    }], function () { return [{ type: _shared_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();
class QRSignInModalComponent {
    constructor(dialogRef, data, translatePage) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.translatePage = translatePage;
    }
    ngOnInit() {
        this.textQr = this.translatePage.textTranslate;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
QRSignInModalComponent.ɵfac = function QRSignInModalComponent_Factory(t) { return new (t || QRSignInModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"])); };
QRSignInModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QRSignInModalComponent, selectors: [["app-qr-sign-modal"]], decls: 49, vars: 3, consts: [[1, "container-modal-qr"], [1, "content-close"], [1, "close", "close-terms", 3, "click"], [1, "container-itens-qr"], [1, "text-qr"], [1, "qr-title"], [1, "qr-subtitle"], ["src", "", "alt", ""], [1, "container-img-qr"], ["src", "../../../assets/QRCode-criar@2x.png", "alt", ""], [1, "create-account"], [1, "download-copyright"], [1, "download-app"], [1, "buttons-download"], ["href", "https://play.google.com/store/apps/details?id=com.phurshell.devotee&hl=pt_BR", "target", "_blank", "rel", "noopener noreferrer"], ["alt", "Bot\u00E3o play store", 3, "src"], ["href", "https://apps.apple.com/br/app/devotee/id1331331692", "target", "_blank", "rel", "noopener noreferrer"], ["alt", "Bot\u00E3o Apple store", 3, "src"]], template: function QRSignInModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QRSignInModalComponent_Template_div_click_2_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Para fazer o Login com QR Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Abra o Devotee no seu celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Toque em Perfil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "e selecione ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Devotee Web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Toque em ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Escanear c\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Aponte seu celular para essa tela para capturar o c\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Ainda n\u00E3o tem cadastro? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cadastre-se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textQr.getApp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.textQr.btnPlayStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.textQr.btnAppStore, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".container-modal-qr[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 1fr 8fr;\n  height: 100%;\n  color: #2E2C8A;\n}\n.container-modal-qr[_ngcontent-%COMP%]   .close-terms[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.container-modal-qr[_ngcontent-%COMP%]   .content-close[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.container-modal-qr[_ngcontent-%COMP%]   .container-itens-qr[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n.container-modal-qr[_ngcontent-%COMP%]   .container-itens-qr[_ngcontent-%COMP%]   .container-img-qr[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n}\n.container-modal-qr[_ngcontent-%COMP%]   .container-itens-qr[_ngcontent-%COMP%]   .container-img-qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 220px;\n}\n.close[_ngcontent-%COMP%] {\n  display: flex;\n  top: 15px;\n  left: 346px;\n  width: 30px;\n  height: 30px;\n  transform: matrix(0, 1, -1, 0, 0, 0);\n  color: #2E2C8A;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n.close[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::after {\n  content: \"asa\";\n  width: 20px;\n  height: 20px;\n  background-color: #000;\n}\n@media only screen and (min-width: 700px) {\n  .qr-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin: 10px 0;\n  }\n\n  .qr-subtitle[_ngcontent-%COMP%] {\n    margin: 10px 0;\n    font-size: 1.5rem;\n  }\n}\n@media only screen and (min-width: 1250px) {\n  .container-modal-qr[_ngcontent-%COMP%]   .container-itens-qr[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .container-modal-qr[_ngcontent-%COMP%]   .container-itens-qr[_ngcontent-%COMP%]   .container-img-qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 220px;\n  }\n  .container-modal-qr[_ngcontent-%COMP%]   .create-account[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tcGFnZS9xci1zaWduLWluL3FyLXNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxjQ0Y4QjtBREVoQztBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0U7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUNFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFTjtBQURNO0VBQ0UsZ0JBQUE7QUFHUjtBQUdBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGNDaEM4QjtFRGlDOUIsZUFBQTtFQUNBLGlCQUFBO0FBQUY7QUFDRTs7RUFFSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQ047QUFDRTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ047QUFFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGNBQUE7RUFDRjs7RUFDQTtJQUNFLGNBQUE7SUFDQSxpQkFBQTtFQUVGO0FBQ0Y7QUFBQTtFQUVJO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0VBQ0o7RUFFTTtJQUNFLGdCQUFBO0VBQVI7RUFLRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQUhKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1wYWdlL3FyLXNpZ24taW4vcXItc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3NcIjtcclxuLmNvbnRhaW5lci1tb2RhbC1xcntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6ICR0ZXh0LWJ1dHRvbi1jb2xvci1ibHVlLXByaW1hcnk7XHJcbiAgLmNsb3NlLXRlcm1ze1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY29udGVudC1jbG9zZXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgLmNvbnRhaW5lci1pdGVucy1xcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIC5jb250YWluZXItaW1nLXFye1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jbG9zZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0b3A6IDE1cHg7XHJcbiAgbGVmdDogMzQ2cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRyYW5zZm9ybTogbWF0cml4KDAsIDEsIC0xLCAwLCAwLCAwKTtcclxuICBjb2xvcjogJHRleHQtYnV0dG9uLWNvbG9yLWJsdWUtcHJpbWFyeTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgOmhvdmVyLFxyXG4gIDpmb2N1cyB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgOjphZnRlcntcclxuICAgICAgY29udGVudDogJ2FzYSc7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDBweCkge1xyXG4gIC5xci10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbjogMTBweCAwIDtcclxuICB9XHJcbiAgLnFyLXN1YnRpdGxle1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyNTBweCkge1xyXG4gIC5jb250YWluZXItbW9kYWwtcXJ7XHJcbiAgICAuY29udGFpbmVyLWl0ZW5zLXFye1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICAgIC5jb250YWluZXItaW1nLXFye1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jcmVhdGUtYWNjb3VudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIkYnRuLWxvZ2luLXByaW1hcnk6ICNmZmZmZmY7XHJcbiRidG4tbG9naW4tc2VjdW5kYXJ5OiNFQzEyMDA7XHJcbiRidG4tc2lnbmluLXNlY3VuZGFyeTojOTk5OTk5O1xyXG4kdGV4dC1idXR0b24tY29sb3ItYmx1ZS1wcmltYXJ5OiMyRTJDOEE7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRSignInModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qr-sign-modal',
                templateUrl: '../qr-sign-in/qr-sign-in.component.html',
                styleUrls: ['../qr-sign-in/qr-sign-in.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _shared_translate_service__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login-page/buttons/buttons.module.ts":
/*!******************************************************!*\
  !*** ./src/app/login-page/buttons/buttons.module.ts ***!
  \******************************************************/
/*! exports provided: ButtonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPageModule", function() { return ButtonsPageModule; });
/* harmony import */ var _buttons_rounting_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.rounting.module */ "./src/app/login-page/buttons/buttons.rounting.module.ts");
/* harmony import */ var _buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.component */ "./src/app/login-page/buttons/buttons.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






class ButtonsPageModule {
}
ButtonsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ButtonsPageModule });
ButtonsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ButtonsPageModule_Factory(t) { return new (t || ButtonsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            // RouterModule,
            _buttons_rounting_module__WEBPACK_IMPORTED_MODULE_0__["ButtonsRountingModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ButtonsPageModule, { declarations: [_buttons_component__WEBPACK_IMPORTED_MODULE_1__["ButtonsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        // RouterModule,
        _buttons_rounting_module__WEBPACK_IMPORTED_MODULE_0__["ButtonsRountingModule"]], exports: [_buttons_component__WEBPACK_IMPORTED_MODULE_1__["ButtonsComponent"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ButtonsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _buttons_component__WEBPACK_IMPORTED_MODULE_1__["ButtonsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    // RouterModule,
                    _buttons_rounting_module__WEBPACK_IMPORTED_MODULE_0__["ButtonsRountingModule"],
                ],
                exports: [
                    _buttons_component__WEBPACK_IMPORTED_MODULE_1__["ButtonsComponent"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/login-page/buttons/buttons.rounting.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/login-page/buttons/buttons.rounting.module.ts ***!
  \***************************************************************/
/*! exports provided: ButtonsRountingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsRountingModule", function() { return ButtonsRountingModule; });
/* harmony import */ var _buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.component */ "./src/app/login-page/buttons/buttons.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const loginRoutes = [{ path: '', component: _buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"] }];
class ButtonsRountingModule {
}
ButtonsRountingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ButtonsRountingModule });
ButtonsRountingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ButtonsRountingModule_Factory(t) { return new (t || ButtonsRountingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(loginRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ButtonsRountingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ButtonsRountingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(loginRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-login-page-buttons-buttons-module.js.map