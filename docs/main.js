(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\r\n  width: 75%;\r\n  margin: 0 auto;\r\n  background-color: aliceblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <app-navigation></app-navigation>\n  <app-carousel></app-carousel>\n  <app-products-list></app-products-list>\n  <hr>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/products-list/products-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductsListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container {\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  background-color: #E9ECEF;\r\n}\r\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-container\">\n  <ngb-carousel *ngIf=\"images\" class=\"carousel\">\n    <ng-template ngbSlide>\n      <img [src]=\"images[0]\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n        <h3>First slide label</h3>\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img [src]=\"images[1]\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n        <h3>Second slide label</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img [src]=\"images[2]\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>Third slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n</div>\n\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container\">\n  <h2 id=\"contacts\">Contact us</h2>\n  <p>Somewhere on the planet Earth...</p>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"container\" id=\"home\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Vydelka</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link smooth\" href=\"#home\">Home<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link smooth\" href=\"#products\">Products</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link smooth\" href=\"#contacts\">Contacts</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function (_super) {
    __extends(NavigationComponent, _super);
    function NavigationComponent() {
        return _super.call(this) || this;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}(_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]));



/***/ }),

/***/ "./src/app/products-list/products-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/products-list/products-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products-list-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.card {\r\n  margin: 20px;\r\n}\r\n\r\nbutton {\r\n  margin-left: 10px;\r\n}\r\n\r\n.card-image {\r\n  width: 400px;\r\n  height: 300px;\r\n}\r\n\r\n#purchases {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n#purchases td, #purchases th {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n}\r\n\r\n#purchases tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#purchases tr:hover {background-color: #ddd;}\r\n\r\n#purchases th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: left;\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/products-list/products-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/products-list/products-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isProductBought\">\n  <ngb-alert type=\"success\" (close)=\"closeAlert()\">\n    <strong>Success!</strong> You have successfully added this product to your pot!.\n  </ngb-alert>\n</div>\n\n<div>\n  <h1 id=\"products\">Products</h1>\n  <div class=\"pull-right\">\n    <button class=\"btn btn-success\" (click)=\"open(finalBuy, 'final-modal-basic-title')\">Count - {{count}}</button>\n  </div>\n  <div class=\"products-list-container\">\n    <div class=\"card\" *ngFor=\"let product of products\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" src=\"./../../assets/images/{{product.image}}\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{product.title}}</h5>\n        <p class=\"card-text\">{{product.description}}</p>\n        <button class=\"btn btn-info\" (click)=\"open(content, 'modal-basic-title', product)\">Info</button>\n        <button class=\"btn btn-primary\" (click)=\"buyProduct(product)\">${{product.price}} - Buy</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Product Info</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <img class=\"card-image\" src=\"../../assets/images/{{currentProduct.image}}\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{currentProduct.title}}</h5>\n      <p class=\"card-text\">{{currentProduct.description}}</p>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\n    <button class=\"btn btn-primary\" (click)=\"buyProduct(currentProduct)\">${{currentProduct.price}} - Buy</button>\n  </div>\n</ng-template>\n\n<ng-template #finalBuy let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"final-modal-basic-title\">Final Pot</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <table id=\"purchases\">\n      <tr>\n        <th>Product</th>\n        <th>Price</th>\n        <th>Quantity</th>\n      </tr>\n      <tr *ngFor=\"let product of selectedProductsList\">\n        <td>{{product.title}}</td>\n        <td>{{product.price}}</td>\n        <td>{{product.quantity}}</td>\n      </tr>\n    </table>\n    <h2>Total: {{totalPrice | currency}}</h2>\n    <form>\n      <h5>Fill in the form to buy these products:</h5>\n      <div class=\"form-group row\">\n        <label for=\"client-name\" class=\"col-4 col-form-label\">Your name:</label>\n        <input class=\"form-control col-6\" type=\"text\" id=\"client-name\" required>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"client-email\" class=\"col-4 col-form-label\">Your email:</label>\n        <input class=\"form-control col-6\" type=\"email\" id=\"client-email\" required>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Order</button>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Close</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/products-list/products-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products-list/products-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.count = 0;
        this.selectedProductsList = [];
        this.totalPrice = 0;
        this.isProductBought = false;
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProducts().subscribe(function (response) {
            _this.products = response;
        });
    };
    ProductsListComponent.prototype.open = function (content, ariaLabelledBy, product) {
        var _this = this;
        if (product) {
            this.currentProduct = product;
        }
        this.modalService.open(content, { ariaLabelledBy: ariaLabelledBy }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        });
    };
    ProductsListComponent.prototype.getProducts = function () {
        return this.http.get('../../assets/products.json');
    };
    ProductsListComponent.prototype.buyProduct = function (product) {
        var _this = this;
        this.count = this.count + 1;
        this.isProductBought = true;
        if (this.selectedProductsList.includes(product)) {
            var index = this.selectedProductsList.indexOf(product);
            this.selectedProductsList[index].quantity = this.selectedProductsList[index].quantity + 1;
        }
        else {
            this.selectedProductsList.push(product);
        }
        this.selectedProductsList.forEach(function (selectedProduct) {
            _this.totalPrice = _this.totalPrice + (selectedProduct.price * selectedProduct.quantity);
        });
    };
    ProductsListComponent.prototype.closeAlert = function () {
        this.isProductBought = false;
    };
    ProductsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.css */ "./src/app/products-list/products-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ivan\Desktop\Angular 6 training\Lesson 6\online-shop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map