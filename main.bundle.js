webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/entry/craftman/craftman.module": [
		"../../../../../src/app/entry/craftman/craftman.module.ts"
	],
	"app/entry/entry.module": [
		"../../../../../src/app/entry/entry.module.ts"
	],
	"app/entry/product/product.module": [
		"../../../../../src/app/entry/product/product.module.ts"
	],
	"app/entry/professional/professional.module": [
		"../../../../../src/app/entry/professional/professional.module.ts"
	],
	"app/entry/rental/rental.module": [
		"../../../../../src/app/entry/rental/rental.module.ts"
	],
	"app/view/admin/admin.module": [
		"../../../../../src/app/view/admin/admin.module.ts"
	],
	"app/view/formular/formula.module": [
		"../../../../../src/app/view/formular/formula.module.ts"
	],
	"app/view/view.module": [
		"../../../../../src/app/view/view.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet> </router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_view_module__ = __webpack_require__("../../../../../src/app/view/view.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__entry_entry_module__ = __webpack_require__("../../../../../src/app/entry/entry.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_view_service__ = __webpack_require__("../../../../../src/app/view/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_products_product_service__ = __webpack_require__("../../../../../src/app/view/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_suppliers_supplier_service__ = __webpack_require__("../../../../../src/app/view/suppliers/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_manufacturers_manufacturer_service__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_professionals_professional_service__ = __webpack_require__("../../../../../src/app/view/professionals/professional.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_rentals_rental_service__ = __webpack_require__("../../../../../src/app/view/rentals/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRouting */], __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_dialog__["a" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_5__view_view_module__["ViewModule"], __WEBPACK_IMPORTED_MODULE_9__entry_entry_module__["EntryModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__view_view_service__["a" /* ViewService */], __WEBPACK_IMPORTED_MODULE_11__view_products_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_12__view_suppliers_supplier_service__["a" /* SupplierService */], __WEBPACK_IMPORTED_MODULE_13__view_manufacturers_manufacturer_service__["a" /* ManufacturerService */], __WEBPACK_IMPORTED_MODULE_14__view_professionals_professional_service__["a" /* ProfessionalService */], __WEBPACK_IMPORTED_MODULE_15__view_rentals_rental_service__["a" /* RentalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppRoutes = [
    {
        path: 'entry',
        loadChildren: 'app/entry/entry.module#EntryModule',
        data: { preload: true }
    },
    {
        path: 'view',
        loadChildren: 'app/view/view.module#ViewModule',
        data: { preload: true }
    },
    { path: '', redirectTo: '/view', pathMatch: 'full' }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(AppRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/company_product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__craftman_service__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyProductComponent = /** @class */ (function () {
    function CompanyProductComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.Paints_1 = "Weather guards";
        this.Paints_2 = "Silky";
        this.Paints_3 = "Emulsion";
        this.Paints_4 = " Oil Paints";
        this.Paints_5 = " Weather guards";
        this.Elevator_1 = " Lifts";
        this.Elevator_2 = "Escalators ";
        this.Elevator_3 = "Heating ";
        this.Elevator_4 = " Ventilations";
        this.Elevator_5 = " Air Conditions";
        this.Tools_1 = " Hand tools";
        this.Tools_2 = " Machines";
        this.Plastics_1 = "Wood stains ";
        this.Plastics_2 = "Softwood ";
        this.Plastics_3 = "Hardwoods ";
        this.Plastics_4 = " Treated impregnated";
        this.Tele_1 = 'Data cables';
        this.Tele_2 = 'Data accessories';
        this.Tele_3 = 'Telephone Receivers';
        this.Tele_4 = 'Patch panels';
        this.Tele_5 = 'Hardwood Panel';
        this.Tele_6 = 'Flash Doors';
        this.Tele_7 = 'Security Doors';
        this.Tele_8 = 'Aluminium sheets';
        this.Tele_9 = 'PVC';
        this.Stairs_1 = 'Industrial Trough';
        this.Stairs_2 = 'Aluminium sheets';
        this.Stairs_3 = 'Tiles';
        this.Railings_1 = 'Fittings';
        this.Railings_2 = 'Appliances';
        this.Railings_3 = 'Pipes';
        this.lron_1 = 'Mortise locks';
        this.lron_2 = 'Stays';
        this.lron_3 = 'Hinges';
        this.lron_4 = 'Pad locks';
        this.lron_5 = 'Stoppers';
        this.Masonry_1 = 'Paving Slabs';
        this.Masonry_2 = 'Bricks';
        this.Masonry_3 = 'Concrete Blocks';
        this.Masonry_4 = 'Precast concrete';
        this.Masonry_5 = 'Artificial Stones';
        this.Masonry_6 = 'Glass bricks';
        this.Masonry_7 = 'Caravate';
        this.Metal_1 = 'Steel sheets';
        this.Metal_2 = 'Pipes';
        this.Metal_3 = 'Portal frame';
        this.Metal_4 = 'Accessories';
        this.Furniture_1 = 'Timber planks';
        this.Furniture_2 = 'Tiles';
        this.Furniture_3 = 'Carpets';
        this.Furniture_4 = 'Terrazzo';
        this.Security_1 = "Security Doors ";
        this.Security_2 = " Camera installations";
        this.Security_3 = "Smoke detectors ";
        this.surface_1 = 'Plasters';
        this.surface_2 = 'gypsum boards';
        this.surface_3 = 'Cement render';
        this.surface_4 = 'Marbles';
        this.surface_5 = 'Wall covering';
        this.surface_6 = 'Wall papers';
        this.surface_7 = 'Stucco';
        this.surface_8 = 'Wood finishes';
        this.window_1 = 'Aluminium';
        this.window_2 = 'PVC';
        this.window_3 = 'Steel';
        this.fireplace_1 = 'Switches';
        this.fireplace_2 = 'Circuit breakers';
        this.fireplace_3 = 'Sockets and plugs';
        this.fireplace_4 = 'Cables and wires';
        this.fireplace_5 = 'Lightings';
        this.kitchen_1 = 'Helmet';
        this.kitchen_2 = 'Over roll';
        this.facade_1 = 'Aluco Bonds';
        this.facade_2 = 'Curtains';
        this.facade_3 = 'Cladding';
        this.cement_1 = 'Partitions';
        this.cement_2 = 'Dry walls"';
        this.Paints = null;
        this.Elevator = null;
        this.Tools = null;
        this.Plastic = null;
        this.Security = null;
        this.Telecommunication = null;
        this.Stairs = null;
        this.Railling = null;
        this.Iron = null;
        this.Masonry = null;
        this.Metal = null;
        this.Furniture = null;
        this.Fireplaces = null;
        this.Window = null;
        this.surface = null;
        this.kitchen = null;
        this.facsde = null;
        this.cement = null;
        this.id = this.route.snapshot.paramMap.get('id');
        this.ProductForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            product: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            unit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
        this.chosen_category = [];
        this.subs = [];
    }
    CompanyProductComponent.prototype.ngOnInit = function () {
        this.getCategorys();
    };
    CompanyProductComponent.prototype.getCategorys = function () {
        var _this = this;
        this.api.categories()
            .subscribe(function (res) { _this.category = res; });
    };
    CompanyProductComponent.prototype.get_product = function () {
        var _this = this;
        console.log(this.chosen_category);
        this.api.getproduct(this.chosen_category)
            .subscribe(function (res) { _this.subs = res; });
    };
    CompanyProductComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.id, this.ProductForm.value);
        this.api.new_product(this.id, this.ProductForm.value)
            .subscribe(function (res) { _this.ProductForm.reset(); });
    };
    CompanyProductComponent.prototype.redirect = function () {
        this.router.navigate['view'];
    };
    CompanyProductComponent.prototype.select = function (event) {
        console.log(this.name);
        this.chosen_category = event.target[0].label;
        this.get_product();
        switch (this.name) {
            case 1:
                this.Paints = 'true';
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = null;
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 2:
                this.Paints = null;
                this.Elevator = 'true';
                this.Tools = null;
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = null;
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 3:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = 'true';
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = null;
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 4:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = 'true';
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = null;
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 5:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = null;
                this.Security = 'true';
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = null;
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 6:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = 'true';
                this.Stairs = null;
                this.Railling = null;
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 7:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = 'true';
                this.Railling = null;
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 8:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = 'true';
                this.Iron = null;
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 9:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = null;
                this.Iron = 'true';
                this.Masonry = null;
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
            case 10:
                this.Paints = null;
                this.Elevator = null;
                this.Tools = null;
                this.Plastic = null;
                this.Security = null;
                this.Telecommunication = null;
                this.Stairs = null;
                this.Railling = null;
                this.Iron = null;
                this.Masonry = 'true';
                this.Metal = null;
                this.Furniture = null;
                this.Fireplaces = null;
                this.Window = null;
                this.surface = null;
                this.kitchen = null;
                this.facsde = null;
                this.cement = null;
                console.log('d');
                break;
        }
    };
    CompanyProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-company',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8 wrap\">\n    \n<p> WellCome to the Product Form</p>     \n<form [formGroup]=\"ProductForm\" (ngSubmit)=\"onSubmit()\">\n  \n <select formControlName=\"type\" class=\"form-control\" [(ngModel)]='name' (change)=\"select($event)\">\n  <option *ngFor=\"let category of category\"  [ngValue]=\"category.id\">{{category.category_name}}</option>\n  </select>\n\n<div *ngIf=\"Paints\" class=\"Paints\">\n<label> Paints Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Paints_1\">Weather guards </option>\n  <option [ngValue]=\"Paints_2\"> Silky</option>\n  <option [ngValue]=\"Paints_3\"> Emulsion</option>\n  <option [ngValue]=\"Paints_4\"> Oil Paints</option>\n  <option [ngValue]=\"Paints_5\"> Water paints </option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Elevator\" class=\"Elevator\">\n  <label> Elevator Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Elevator_1\"> Lifts</option>\n  <option [ngValue]=\"Elevator_2\"> Escalators</option>\n  <option [ngValue]=\"Elevator_3\">Heating </option>\n  <option [ngValue]=\"Elevator_4\">Ventilations </option>\n  <option [ngValue]=\"Elevator_5\"> Air Conditions</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Tools\" class=\"Tools\">\n<label> Tools and Machines Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Tools_1\">Hand tools</option>\n   <option [ngValue]=\"Tools_2\">Machines</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Plastic\" class=\"Plastics\">\n  <label> Plastics Wood and Carpentry Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Plastics_1\">Wood stains</option>\n  <option [ngValue]=\"Plastics_2\">Softwood</option>\n  <option [ngValue]=\"Plastics_3\">Hardwoods</option>\n  <option [ngValue]=\"Plastics_4\">Treated impregnated</option>\n  </select>\n </div>\n\n\n<div *ngIf=\"Security\" class=\"Security\">\n  <label> Security Systems Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Security_1\">Security Doors</option>\n  <option [ngValue]=\"Security_2\">Camera installations</option>\n  <option [ngValue]=\"Security_3\">Smoke detectors</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Telecommunication\" class=\"Telecommunications\">\n <label> Telecommunications Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Tele_1\">Data cables</option>\n  <option [ngValue]=\"Tele_2\">Data accessories</option>\n  <option [ngValue]=\"Tele_3\">Telephone Receivers</option>\n  <option [ngValue]=\"Tele_4\">Patch panels</option>\n  <option [ngValue]=\"Tele_5\">Hardwood Panel</option>\n  <option [ngValue]=\"Tele_6\">Flash Doors</option>\n  <option [ngValue]=\"Tele_7\">Security Doors</option>\n  <option [ngValue]=\"Tele_8\">Aluminium Doors</option>\n  <option [ngValue]=\"Tele_9\">PVC</option>\n  </select>\n</div>\n\n<div *ngIf=\"Stairs\" class=\"Stairs\">\n  <label> Stairs Siding Roofing Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Stairs_1\">Industrial Trough</option>\n  <option [ngValue]=\"Stairs_2\">Aluminium sheets</option>\n  <option [ngValue]=\"Stairs_3\"> Tiles </option>\n  </select>\n  </div>\n\n<div *ngIf=\"Railling\" class=\"Railings\">\n  <label>Railings Plumbing Security Systems Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Railings_1\">Fittings</option>\n  <option [ngValue]=\"Railings_2\">Appliances</option>\n  <option [ngValue]=\"Railings_3\">Pipes</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Iron\" class=\"lronmongeries\">\n  <label> lronmongeries Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"lron_1\">Mortise locks</option>\n  <option [ngValue]=\"Iron_2\">Stays</option>\n  <option [ngValue]=\"lron_3\">Hinges</option>\n  <option [ngValue]=\"lron_4\">Pad locks</option>\n  <option [ngValue]=\"lron_5\">Stoppers</option>\n  </select>\n</div>\n\n<div *ngIf=\"Masonry\" class=\"Masonry\">\n  <label> Masonry Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Masonry_1\"> Paving Slabs</option>\n  <option [ngValue]=\"Masonry_2\">Bricks</option>\n  <option [ngValue]=\"Masonry_3\">Concrete Blocks</option>\n  <option [ngValue]=\"Masonry_4\">Precast concrete</option>\n  <option [ngValue]=\"Masonry_5\">Artificial Stones</option>\n  <option [ngValue]=\"Masonry_6\">Glass bricks</option>\n  <option [ngValue]=\"Masonry_7\">Caravate</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Metal\" class=\"Metal\">\n  <label> Metal and steels Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Metal_1\">Steel sheets</option>\n   <option [ngValue]=\"Metal_2\">Pipes</option>\n    <option [ngValue]=\"Metal_3\">Portal frame </option>\n     <option [ngValue]=\"Metal_4\">Accessories</option>\n  </select>\n  </div>\n\n<div *ngIf=\"Furniture\" class=\"Furniture\">\n  <label> Furniture Flooring Sub Category Name</label>\n  <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"Furniture_1\">Timber planks</option>\n  <option [ngValue]=\"Furniture_2\">Tiles</option>\n  <option [ngValue]=\"Furniture_3\">Carpets</option>\n  <option [ngValue]=\"Furniture_4\">Terrazzo</option>\n  </select>\n</div>\n\n<div *ngIf=\"Fireplace\" class=\"Fireplace\">\n  <label> Fireplace Electrical Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"fireplace_1\">Switches</option>\n  <option [ngValue]=\"fireplace_2\">Circuit breakers</option>\n  <option [ngValue]=\"fireplace_3\">Sockets and plugs</option>\n  <option [ngValue]=\"fireplace_4\">Cables and wires</option>\n  <option [ngValue]=\"fireplace_5\">Lightings</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Window\" class=\"Window\">\n   <label> Window Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"window_1\">Aluminium</option>\n  <option [ngValue]=\"window_2\">PVC</option>\n   <option [ngValue]=\"window_3\">Stee</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Surface\" class=\"Surface\">\n  <label> Surface Finishes Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option  [ngValue]=\"surface_1\">Plasters</option>\n  <option  [ngValue]=\"surface_2\">gypsum boards</option>\n  <option [ngValue]=\"surface_3\"> Cement render</option>\n  <option [ngValue]=\"surface_4\"> Marbles </option>\n  <option [ngValue]=\"surface_5\"> Wall covering</option>\n  <option [ngValue]=\"surface_6\"> Wall papers </option>\n  <option [ngValue]=\"surface_7\"> Stucco </option>\n  <option [ngValue]=\"surface_8\"> Wood finishes </option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Kitchen\" class=\"Kitchen\">\n  <label> Kitchen Garments sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"kitchen_1\">Helmet</option>\n    <option [ngValue]=\"kitchen_2\">Over roll</option>\n  </select>\n</div>\n\n\n<div *ngIf=\"Facade\" class=\"Facade\">\n  <label> Facade Sub Category Name</label>\n   <select class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"facade_1\">Aluco Bonds</option>\n    <option [ngValue]=\"facade_2\">Curtains</option>\n      <option [ngValue]=\"facade_3\"> Cladding</option>\n  </select>\n</div>\n\n<div *ngIf=\"Cements\" class=\"Cements\">\n  <label> Cements Bathroom Walls Sub Category Name</label>\n   <select  class=\"form-control\" formControlName=\"product\">\n  <option [ngValue]=\"cement_1\">Partitions</option>\n  <option [ngValue]=\"cement_2\">Dry walls</option>\n  </select>\n</div> \n\n\n\n    <div class=\"form-group\">\n    <label>Product Code</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Product Code Number\" formControlName=\"code\">\n  </div>\n    <div class=\"form-group\">\n    <label>Size</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"Size\" formControlName=\"size\">\n  </div>\n    <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"Price\" formControlName=\"price\">\n  </div>\n\n   <div class=\"form-group\">\n    <label>Units</label>\n  \n\n    <select class=\"form-control\" formControlName=\"unit\">  \n    <option  [ngValue]=\"Centimeters\"> Centimeters</option>\n     <option  [ngValue]=\" Meter\">  Meter   </option>\n      <option  [ngValue]=\" Kilometer\">  Kilometer  </option>\n       <option  [ngValue]=\" Litres\">  Litres  </option>\n       <option  [ngValue]=\" Gallons\">  Gallons </option>\n       <option  [ngValue]=\" Tons\">  Tons  </option>\n      <option  [ngValue]=\"Feet\"> Feet </option>\n       <option  [ngValue]=\"Inches\">Inches </option>\n      <option  [ngValue]=\"Grams\"> Grams</option>\n      <option  [ngValue]=\"Pices\"> Pices</option>\n    </select>\n  </div>\n \n  \n\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n<div class=\"form-group\">\n       <button (click)=\"redirect()\">Complete</button>\n      </div>\n\n</form>\n\n   </div>\n  </div>\n</div>\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/craftman/craftman.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__craftman_service__["a" /* CraftmanService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CompanyProductComponent);
    return CompanyProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/craftman.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap {\r\n\tbackground-color: #F8F8F8;\r\n   padding: 10px 10px 15px 10px;\r\n  \tborder-radius: 5px;\r\n  \tmargin-top: 20px;\r\n\r\n}\r\n\r\n.recit {\r\n\ttext-align: center;\r\n\tbackground-color: #FFFFFE  ;\r\n   padding: 10px 10px 15px 10px;\r\n  \tborder-radius: 5px;\r\n  \tmargin-top: 20px;\r\n\r\n}\r\n\r\n.form-control { \r\n  -webkit-box-shadow: 1px 1px 1px #9F9F9F; \r\n          box-shadow: 1px 1px 1px #9F9F9F;\r\n  border: none;\r\n\r\n }\r\n\r\n.form-control:hover { \r\n  -webkit-box-shadow: 3px 3px 5px #ACABAA; \r\n          box-shadow: 3px 3px 5px #ACABAA;\r\n\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/craftman/craftman.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n\r\n<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/entry/craftman/craftman.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CraftmanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__craftman_service__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CraftmanComponent = /** @class */ (function () {
    function CraftmanComponent() {
    }
    CraftmanComponent.prototype.ngOnInit = function () {
    };
    CraftmanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'craftman',
            template: __webpack_require__("../../../../../src/app/entry/craftman/craftman.component.html"),
            styles: [__webpack_require__("../../../../../src/app/entry/craftman/craftman.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__craftman_service__["a" /* CraftmanService */]]
        }),
        __metadata("design:paramtypes", [])
    ], CraftmanComponent);
    return CraftmanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/craftman.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CraftmanModule", function() { return CraftmanModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__craftman_routing__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__craftman_component__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_component__ = __webpack_require__("../../../../../src/app/entry/craftman/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__company_product_component__ = __webpack_require__("../../../../../src/app/entry/craftman/company_product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__professionals_component__ = __webpack_require__("../../../../../src/app/entry/craftman/professionals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__equipments_component__ = __webpack_require__("../../../../../src/app/entry/craftman/equipments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__indexes_component__ = __webpack_require__("../../../../../src/app/entry/craftman/indexes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CraftmanModule = /** @class */ (function () {
    function CraftmanModule() {
    }
    CraftmanModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__craftman_component__["a" /* CraftmanComponent */], __WEBPACK_IMPORTED_MODULE_6__logo_component__["a" /* LogoComponent */], __WEBPACK_IMPORTED_MODULE_7__company_product_component__["a" /* CompanyProductComponent */], __WEBPACK_IMPORTED_MODULE_8__professionals_component__["a" /* ProfessionalComponent */], __WEBPACK_IMPORTED_MODULE_9__equipments_component__["a" /* EquipmentComponent */], __WEBPACK_IMPORTED_MODULE_10__indexes_component__["a" /* IndexComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__craftman_routing__["a" /* CraftmanRouting */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */]],
            exports: []
        })
    ], CraftmanModule);
    return CraftmanModule;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/craftman.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CraftmanRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__craftman_component__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logo_component__ = __webpack_require__("../../../../../src/app/entry/craftman/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_product_component__ = __webpack_require__("../../../../../src/app/entry/craftman/company_product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__professionals_component__ = __webpack_require__("../../../../../src/app/entry/craftman/professionals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__equipments_component__ = __webpack_require__("../../../../../src/app/entry/craftman/equipments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__indexes_component__ = __webpack_require__("../../../../../src/app/entry/craftman/indexes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CraftRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__craftman_component__["a" /* CraftmanComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_7__indexes_component__["a" /* IndexComponent */],
                children: [
                    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__logo_component__["a" /* LogoComponent */] }
                ]
            },
            { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_4__company_product_component__["a" /* CompanyProductComponent */] },
            { path: 'professionalin/:id', component: __WEBPACK_IMPORTED_MODULE_5__professionals_component__["a" /* ProfessionalComponent */] },
            { path: 'rental_equipment/:id', component: __WEBPACK_IMPORTED_MODULE_6__equipments_component__["a" /* EquipmentComponent */] }
        ] },
];
var CraftmanRouting = /** @class */ (function () {
    function CraftmanRouting() {
    }
    CraftmanRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(CraftRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CraftmanRouting);
    return CraftmanRouting;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/craftman.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CraftmanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CraftmanService = /** @class */ (function () {
    function CraftmanService(http) {
        this.http = http;
        this.get_company_typeUrl = "http://127.0.0.1:8000/api/types-company";
        this.new_companyUrl = "http://127.0.0.1:8000/api/store-company";
        this.uploadUrl = "http://127.0.0.1:8000/api/upload-logo";
        this.galleryUrl = "http://127.0.0.1:8000/api/pro-gallery";
        this.typeUrl = "http://127.0.0.1:8000/api/select-types";
        this.product_categoryUrl = "http://127.0.0.1:8000/api/categories";
        this.productUrl = "http://127.0.0.1:8000/api/products-categories";
        this.serialUrl = "http://127.0.0.1:8000/api/new_serial";
        this.equipmentUrl = "http://127.0.0.1:8000/api/new-equipment";
        this.equipment_typeUrl = "http://127.0.0.1:8000/api/types-equip";
    }
    CraftmanService.prototype.company_type = function () {
        return this.http.get(this.get_company_typeUrl)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.store_company = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_companyUrl, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.types = function (id) {
        return this.http.get(this.typeUrl + '/' + id)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.equipment_type = function () {
        return this.http.get(this.equipment_typeUrl)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.upload = function (id, data) {
        return this.http.post(this.uploadUrl + '/' + id, data)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.categories = function () {
        return this.http.get(this.product_categoryUrl)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.getproduct = function (data) {
        return this.http.get(this.productUrl + '/' + data)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.new_product = function (id, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.serialUrl + '/' + id, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.new_equipment = function (id, data) {
        console.log(id, data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.equipmentUrl + '/' + id, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    CraftmanService.prototype.professional_image = function (id, data) {
        return this.http.post(this.galleryUrl + '/' + id, data)
            .map(function (response) { return response.json(); });
    };
    CraftmanService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CraftmanService);
    return CraftmanService;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/equipments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__craftman_service__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentComponent = /** @class */ (function () {
    function EquipmentComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.types = [];
        this.EquipmentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            specific: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            month: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            week: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        this.get_type();
    };
    EquipmentComponent.prototype.get_type = function () {
        var _this = this;
        this.api.equipment_type()
            .subscribe(function (res) { _this.types = res; });
    };
    EquipmentComponent.prototype.onSubmit = function () {
        console.log(this.EquipmentForm.value);
        this.api.new_equipment(this.id, this.EquipmentForm.value)
            .subscribe(function (res) { console.log('works'); });
    };
    EquipmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product-company',
            template: "\n\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-8 wrap\">\n    \n   \n    <form [formGroup]=\"EquipmentForm\" (ngSubmit)=\"onSubmit()\"> \n  \n    <div class=\"form-group\">\n    <label> Choose Company Type</label>\n    <select formControlName=\"type\">\n       <option *ngFor=\"let type of types\" [ngValue]=\"type.id\"> {{type.type_name}}</option>\n\n    </select> \n  </div>\n \n  \n\n    <div class=\"form-group\">\n    <label>Equipment Name</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"name\">\n  </div>\n  \n    <div class=\"form-group\">\n    <label>specification</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"specific\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Rental per Month </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"month\" formControlName=\"month\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Rental per Week </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"week\" formControlName=\"week\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Rental per Day</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"day\" formControlName=\"day\">\n  </div>\n\n    <div class=\"form-group\">\n    <label>Equipment Code</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"code\" formControlName=\"code\">\n  </div>\n\n <div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n</form>\n\n   </div>\n</div>\n</div>\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/craftman/craftman.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__craftman_service__["a" /* CraftmanService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EquipmentComponent);
    return EquipmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/indexes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__craftman_service__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndexComponent = /** @class */ (function () {
    function IndexComponent(api, router) {
        this.api = api;
        this.router = router;
        this.showState = 'inactive';
        this.show_professional = null;
        this.types = [];
        this.subs = [];
        this.prolism = null;
        this.arts = null;
        this.cons = null;
        this.engin = null;
        this.CraftmanForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('rfd'),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            person: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            district: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            regional: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            professional: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sub_professional: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        /*--------------------professional---------------------*/
        this.qs = 'QS';
        this.artin = 'Architect';
        this.contrator = 'Contrator';
        this.consultant = 'Engineering Consultant';
        /*--------------------sub---------------------------*/
        this.landscape = 'Landscape';
        this.technology = 'Technologist';
        this.interior = 'Interior';
        this.art = 'Artchitechy';
        this.civil = 'Civil';
        this.build = 'Building';
        this.build_civil = 'Building & Civil';
        this.electric = 'Electrical';
        this.mechan = 'Mechanical';
        this.tele = 'Telecommunication';
        this.structure = 'Structural';
        this.highway = 'Highway';
        this.arusha = 'Arusha';
        this.dar = 'Dar es Salaam';
        this.dodoma = 'Dodoma';
        this.geita = 'Geita';
        this.iringa = 'Iringa';
        this.kagera = 'Kagera';
        this.katavi = 'Katavi';
        this.kigoma = 'Kigoma';
        this.kilimanjaro = 'Kilimanjaro';
        this.lindi = 'Lindi';
        this.manyara = 'Manyara';
        this.mara = 'Mara';
        this.mbeya = 'Mbeya';
        this.moro = 'Morogoro';
        this.mtwara = 'Mtwara';
        this.mwanza = 'Mwanza';
        this.njombe = 'Njombe';
        this.pwani = 'Pwani';
        this.rukwa = 'Rukwa';
        this.ruvuma = 'Ruvuma';
        this.shinyanga = 'Shinyanga';
        this.simiyu = 'Simiyu';
        this.singida = 'Singida';
        this.songwe = 'Songwe';
        this.tabora = 'Tabora';
        this.tanga = 'Tanga';
        /*-----------------------district values---------------------*/
        this.arusha_d1 = 'Arusha';
        this.arusha_d2 = 'Meru';
        this.arusha_d3 = 'Arusha';
        this.arusha_d4 = 'Karatu';
        this.arusha_d5 = 'Longido';
        this.arusha_d6 = 'Monduli';
        this.arusha_d7 = 'Ngorongoro';
        this.dar_d1 = 'Kigamboni';
        this.dar_d2 = 'Kinondoni';
        this.dar_d3 = 'Ilala';
        this.dar_d4 = 'Temeke';
        this.dar_d5 = 'Ubungo';
        this.dodoma_d1 = 'Bahi';
        this.dodoma_d2 = 'Chamwino';
        this.dodoma_d3 = 'Chemba';
        this.dodoma_d4 = 'Dodoma Mjini';
        this.dodoma_d5 = 'Kondoa';
        this.dodoma_d6 = 'Kongwa';
        this.dodoma_d7 = 'Mpwapwa';
        this.geita_d1 = 'Bukombe';
        this.geita_d2 = 'Geita Chato';
        this.geita_d3 = 'Mbogwe';
        this.geita_d4 = "Nyang'hwale";
        this.iringa_d1 = 'Iringa Vijijini';
        this.iringa_d2 = 'Mufindi';
        this.iringa_d3 = 'Kilolo';
        this.iringa_d4 = 'Iringa Mjini';
        this.iringa_d5 = 'Mufindi ';
        this.iringa_d6 = 'Mafinga Mjini';
        this.kagera_d1 = 'Biharamulo';
        this.kagera_d2 = 'Bukoba Vijijini';
        this.kagera_d3 = 'Bukoba Mjini';
        this.kagera_d4 = 'Karagwe';
        this.kagera_d5 = 'Kyerwa';
        this.kagera_d6 = 'Misenyi';
        this.kagera_d7 = 'Muleba';
        this.kagera_d8 = 'Ngara';
        this.katavi_d1 = 'Mlele';
        this.katavi_d2 = 'Mpanda Mjini';
        this.katavi_d3 = 'Mpanda Vijijini';
        this.kigoma_d1 = 'Buhigwe';
        this.kigoma_d2 = 'Kakonko';
        this.kigoma_d3 = 'Kasulu Vijijini';
        this.kigoma_d4 = 'Kasulu Mjini';
        this.kigoma_d5 = 'Kibondo';
        this.kigoma_d6 = 'Kigoma Vijijini';
        this.kigoma_d7 = 'Uvinza';
        this.kilimanjaro_d1 = 'Hai';
        this.kilimanjaro_d2 = 'Moshi Mjini';
        this.kilimanjaro_d3 = 'Moshi Vijijini';
        this.kilimanjaro_d4 = 'Mwanga';
        this.kilimanjaro_d5 = 'Rombo';
        this.kilimanjaro_d6 = 'Same';
        this.kilimanjaro_d7 = 'Siha';
        this.lindi_d1 = 'Kilwa';
        this.lindi_d2 = 'Lindi Vijijini';
        this.lindi_d3 = 'Lindi Mjini';
        this.lindi_d4 = 'Liwale';
        this.lindi_d5 = 'Ruangwa';
        this.manyara_d1 = 'Babati Mjini';
        this.manyara_d2 = 'Babati Vijijini';
        this.manyara_d3 = 'Hanang';
        this.manyara_d4 = 'Kiteto';
        this.manyara_d5 = 'Mbulu';
        this.manyara_d6 = 'Simanjiro';
        this.mara_d1 = 'Bunda';
        this.mara_d2 = 'utiama';
        this.mara_d3 = 'Musoma Mjini';
        this.mara_d4 = 'Musoma Vijijini';
        this.mara_d5 = 'Rorya';
        this.mara_d6 = 'Serengeti';
        this.mara_d7 = 'Tarime';
        this.mbeya_d1 = 'Chunya';
        this.mbeya_d2 = 'Ileje';
        this.mbeya_d3 = 'Kyela';
        this.mbeya_d4 = 'Mbarali';
        this.mbeya_d5 = 'Mbeya Vijijini';
        this.mbeya_d6 = 'Mbeya Mjini';
        this.mbeya_d7 = 'Mbozi';
        this.mbeya_d8 = 'Momba';
        this.mbeya_d9 = 'Rungwe';
        this.mbeya_d10 = 'Tunduma';
        this.morogoro_d1 = 'Gairo';
        this.morogoro_d2 = 'Kilombero';
        this.morogoro_d3 = 'Kilosa';
        this.morogoro_d4 = 'Morogoro Mjini';
        this.morogoro_d5 = 'Morogoro Vijijini';
        this.morogoro_d6 = 'Mvomero';
        this.morogoro_d7 = 'Ulanga';
        this.mtwara_d1 = 'Masasi Mjini';
        this.mtwara_d2 = 'Masasi Vijijini';
        this.mtwara_d3 = 'Mtwara Vijijini';
        this.mtwara_d4 = 'Mtwara Mjini';
        this.mtwara_d5 = 'Nanyumbu';
        this.mtwara_d6 = 'Newala';
        this.mtwara_d7 = 'Tandahimba';
        this.mwanza_d1 = 'Ilemela';
        this.mwanza_d2 = 'Nyamagana';
        this.mwanza_d3 = 'Sengerema';
        this.mwanza_d4 = 'Kwimba';
        this.mwanza_d5 = 'Magu';
        this.mwanza_d6 = 'Misungwi';
        this.mwanza_d7 = 'Ukerewe';
        this.njombe_d1 = 'Ludewa';
        this.njombe_d2 = 'Makambako';
        this.njombe_d3 = 'Makete';
        this.njombe_d4 = 'Njombe Vijijini';
        this.njombe_d5 = 'Njombe Mjini';
        this.njombe_d6 = "Wanging'ombe";
        this.pemba_d1 = 'Wete';
        this.pemba_d2 = 'Micheweni';
        this.pemba_d3 = 'Chake Chake';
        this.pemba_d4 = 'Mkoani';
        this.pwani_d1 = 'Bagamoyo';
        this.pwani_d2 = 'Kibaha Mjini';
        this.pwani_d3 = ' Kibaha Vijijini';
        this.pwani_d4 = 'Kisarawe';
        this.pwani_d5 = 'Mafia';
        this.pwani_d6 = 'Mkuranga';
        this.pwani_d7 = 'Rufiji';
        this.rukwa_d1 = 'Kalambo';
        this.rukwa_d2 = 'Nkasi';
        this.rukwa_d3 = 'Sumbawanga Vijijini ';
        this.rukwa_d4 = 'Sumbawanga Mjini';
        this.ruvuma_d1 = 'Mbinga';
        this.ruvuma_d2 = 'Namtumbo';
        this.ruvuma_d3 = 'Nyasa';
        this.ruvuma_d4 = 'Songea Vijijini';
        this.ruvuma_d5 = 'Songea Mjini';
        this.ruvuma_d6 = 'Tunduru';
        this.shinyanga_d1 = 'Kahama Mjini';
        this.shinyanga_d2 = 'Kahama Vijijini';
        this.shinyanga_d3 = 'Kishapu';
        this.shinyanga_d4 = 'Shinyanga Vijijini';
        this.shinyanga_d5 = 'Shinyanga Mjini';
        this.simiyu_d1 = 'Bariadi';
        this.simiyu_d2 = 'Busega';
        this.simiyu_d3 = 'Itilima';
        this.simiyu_d4 = 'Maswa';
        this.simiyu_d6 = 'Meatu';
        this.singida_d1 = 'Iramba';
        this.singida_d2 = 'Manyoni';
        this.singida_d3 = 'Singida Vijijini';
        this.singida_d4 = 'Singida Mjini';
        this.tabora_d1 = 'Igunga';
        this.tabora_d2 = 'Kaliua';
        this.tabora_d3 = 'Nzega';
        this.tabora_d4 = 'Sikonge';
        this.tabora_d5 = 'Uyui';
        this.tabora_d6 = 'Tabora Mjini';
        this.tabora_d7 = 'Urambo';
        this.tanga_d1 = 'Handeni';
        this.tanga_d2 = 'Kilindi';
        this.tanga_d3 = 'Lushoto';
        this.tanga_d4 = 'Korogwe';
        this.tanga_d5 = 'Mkinga';
        this.tanga_d6 = 'Muheza';
        this.tanga_d7 = 'Pangani';
        this.tanga_d8 = 'Tanga Mjini';
        this.zanzibar_d1 = 'Zanzibar Kati';
        this.zanzibar_d2 = 'Zanzibar Mjini Magharibi "A" ';
        this.zanzibar_d3 = 'Zanzibar Mjini Magharibi "B" ';
        this.zanzibar_d4 = 'Zanzibar Mjini';
        this.zanzibar_d5 = 'Zanzibar Mjini Magharibi';
        /*----------------- district-view values -----------------*/
        this.arusha_view = null;
        this.dar_view = null;
        this.dodoma_view = null;
        this.geita_view = null;
        this.iringa_view = null;
        this.kagera_view = null;
        this.katavi_view = null;
        this.kigoma_view = null;
        this.kilimanjaro_view = null;
        this.lindi_view = null;
        this.manyara_view = null;
        this.mara_view = null;
        this.mbeya_view = null;
        this.moro_view = null;
        this.mtwara_view = null;
        this.mwanza_view = null;
        this.njombe_view = null;
        this.pwani_view = null;
        this.rukwa_view = null;
        this.ruvuma_view = null;
        this.shinyanga_view = null;
        this.simiyu_view = null;
        this.singida_view = null;
        this.zanzibar_view = null;
        this.songwe_view = null;
        this.tabora_view = null;
        this.tanga_view = null;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.get_company_type();
    };
    IndexComponent.prototype.get_company_type = function () {
        var _this = this;
        this.api.company_type()
            .subscribe(function (res) { _this.types = res; });
    };
    IndexComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.CraftmanForm.value);
        this.api.store_company(this.CraftmanForm.value)
            .subscribe(function (res) {
            var id = res;
            console.log(res);
            if (id > 0) {
                _this.router.navigate([id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    IndexComponent.prototype.status = function (event) {
        console.log(event);
        this.content = event.target.value;
        var pro = 11;
        console.log(this.content);
        if (+this.content == +pro) {
            this.show_professional = 'true';
        }
        else {
            this.show_professional = null;
        }
        console.log(this.type_pro);
        switch (this.type_pro) {
            case 11:
                this.prolism = 'true';
                break;
            default:
                this.prolism = null;
                break;
        }
    };
    IndexComponent.prototype.togglepop = function () {
        this.showState = (this.showState === 'inactive') ? 'active' : 'inactive';
    };
    IndexComponent.prototype.prof = function (event) {
        console.log(this.pro);
        switch (this.pro) {
            case this.qs:
                this.arts = null;
                this.cons = null;
                this.engin = null;
                break;
            case this.artin:
                this.arts = 'true';
                this.cons = null;
                this.engin = null;
                break;
            case this.contrator:
                this.arts = null;
                this.cons = 'true';
                this.engin = null;
                break;
            case this.consultant:
                this.arts = null;
                this.cons = null;
                this.engin = 'true';
                break;
        }
    };
    IndexComponent.prototype.selected = function (event) {
        console.log(this.region);
        switch (this.region) {
            case 'Arusha':
                this.arusha_view = 'true';
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = null;
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Dar es Salaam':
                this.arusha_view = null;
                this.dar_view = 'true';
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = null;
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Dodoma':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = 'true';
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = null;
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Geita':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = 'true';
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = null;
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Iringa':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = 'true';
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = null;
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Kagera':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = 'true';
                this.katavi_view = null;
                this.kigoma_view = null;
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Katavi':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = 'true';
                this.kigoma_view = null;
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Kigoma':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'true';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Kilimanjaro':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = 'true';
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Lindi':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = 'true';
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Manyara':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = 'true';
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Mara':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = 'true';
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Mbeya':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = 'true';
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Morogoro':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = 'true';
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Mtwara':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = 'true';
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Mwanza':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = 'true';
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Njombe':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = 'true';
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Pwani':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = 'true';
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Rukwa':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = 'true';
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Ruvuma':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = 'true';
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Shinyanga':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = 'true';
                this.simiyu_view = null;
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Simiyu':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = 'true';
                this.singida_view = null;
                this.zanzibar_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Singida':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = 'Singida';
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Songwe':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.songwe_view = 'true';
                this.tabora_view = null;
                this.tanga_view = null;
                break;
            case 'Tabora':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.songwe_view = null;
                this.tabora_view = 'true';
                this.tanga_view = null;
                break;
            case 'Tanga':
                this.arusha_view = null;
                this.dar_view = null;
                this.dodoma_view = null;
                this.geita_view = null;
                this.iringa_view = null;
                this.kagera_view = null;
                this.katavi_view = null;
                this.kigoma_view = 'null';
                this.kilimanjaro_view = null;
                this.lindi_view = null;
                this.manyara_view = null;
                this.mara_view = null;
                this.mbeya_view = null;
                this.moro_view = null;
                this.mtwara_view = null;
                this.mwanza_view = null;
                this.njombe_view = null;
                this.pwani_view = null;
                this.rukwa_view = null;
                this.ruvuma_view = null;
                this.shinyanga_view = null;
                this.simiyu_view = null;
                this.singida_view = null;
                this.songwe_view = null;
                this.tabora_view = null;
                this.tanga_view = 'true';
                break;
        }
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: "\n<div class=\"container\">\n <div class=\"row\">\n \t<div class=\"col-md-7 wrap\">\n  <p> Data Entry Form </p>\t\t\n \n\n <form [formGroup]=\"CraftmanForm\"  (ngSubmit)=\"onSubmit()\"> \n \n\n\n\n  <div class=\"form-group\">\n    <p> Choose Company Type</p>\n    <select  formControlName=\"type\" [(ngModel)]=\"type_pro\" (change)=\"status($event)\">\n       <option *ngFor=\"let type of types\" [ngValue]=\"type.id\"> {{type.type_name}}</option>\n    </select> \n  </div>\n\n\n\n  <div class=\"form-group\" *ngIf=\"prolism\">\n    <p> Choose Professional Category </p>\n    <select  formControlName=\"professional\" [(ngModel)]=\"pro\" (change)=\"prof($event)\">\n       <option [ngValue]=\"qs\"> QS </option>\n       <option [ngValue]=\"artin\"> Architect </option>\n       <option [ngValue]=\"contrator\"> Contrator </option>\n       <option [ngValue]=\"consultant\"> Engineering Consultant </option>\n\n    </select> \n  </div>\n\n\n  <div class=\"form-group\" *ngIf=\"prolism\">\n    <p> Choose professional </p>\n    <select  formControlName=\"sub_professional\">\n       <option *ngIf=\"arts\" [ngValue]=\"landscape\"> Landscape </option>\n       <option *ngIf=\"arts\" [ngValue]=\"technology\"> Technologist </option>\n       <option *ngIf=\"arts\" [ngValue]=\"interior\"> Interior </option>\n       <option *ngIf=\"arts\" [ngValue]=\"art\"> Artchitechy </option>\n       <option *ngIf=\"cons\" [ngValue]=\"civil\"> Civil </option>\n       <option *ngIf=\"cons\" [ngValue]=\"build\">  Building </option>\n       <option *ngIf=\"cons\" [ngValue]=\"build_civil\">  Building & Civil </option>\n       <option *ngIf=\"cons\" [ngValue]=\"electric\">  Electrical </option>\n       <option *ngIf=\"cons\" [ngValue]=\"mechan\">  Mechanical </option>\n       <option *ngIf=\"cons\" [ngValue]=\"tele\">  Telecommunication </option>\n       <option *ngIf=\"engin\" [ngValue]=\"structure\">  Structural </option>\n       <option *ngIf=\"engin\" [ngValue]=\"highway\">  Highway </option>\n\n    </select> \n  </div>\n\n\n\n\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"name\" [(ngModel)]=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" [(ngModel)]=\"address\">\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"contact person\" formControlName=\"person\" [(ngModel)]=\"person\">\n  </div>\n\n  <div class=\"form-group\">\n    <input type=\"email\" class=\"form-control\" placeholder=\"email\" formControlName=\"email\" [(ngModel)]=\"email\">\n  </div>\n\n\n  <div class=\"form-group\">\n    <input type=\"integer\" class=\"form-control\" placeholder=\"contact phone\" formControlName=\"phone\" [(ngModel)]=\"phone\">\n  </div>\n\n\n   <div class=\"form-group\">\n    <select  formControlName=\"regional\" [(ngModel)]=\"region\" (change)=\"selected($event)\">\n       <option [ngValue]=\"arusha\"> Arusha </option>\n       <option [ngValue]=\"dar\"> Dar es Salaam </option>\n       <option [ngValue]=\"dodoma\"> Dodoma </option>\n       <option [ngValue]=\"geita\">   Geita  </option>\n       <option [ngValue]=\"iringa\">   Iringa  </option>\n       <option [ngValue]=\"kagera\">   Kagera  </option>\n       <option [ngValue]=\"katavi\">   Katavi  </option>\n        <option [ngValue]=\"kigoma\">    Kigoma </option>\n        <option [ngValue]=\"kilimanjaro\">  Kilimanjaro  </option>\n        <option [ngValue]=\"lindi\">    Lindi </option>\n        <option [ngValue]=\"manyara\">  Manyara  </option>\n        <option [ngValue]=\"mara\">  Mara  </option>\n        <option [ngValue]=\"mbeya\">    Mbeya </option>\n        <option [ngValue]=\"moro\">    Morogoro </option>\n        <option [ngValue]=\"mtwara\">  Mtwara  </option>\n        <option [ngValue]=\"mwanza\">    Mwanza </option>\n        <option [ngValue]=\"njombe\">  Njombe  </option>\n        <option [ngValue]=\"pwani\">  Pwani  </option>\n        <option [ngValue]=\"rukwa\">  Rukwa </option>\n        <option [ngValue]=\"ruvuma\">  Ruvuma  </option>\n        <option [ngValue]=\"shinyanga\">    Shinyanga </option>\n        <option [ngValue]=\"simiyu\">  Simiyu  </option>\n        <option [ngValue]=\"singida\">    Singida </option>\n        <option [ngValue]=\"songwe\">  Songwe  </option>\n        <option [ngValue]=\"tabora\"> Tabora  </option>\n        <option [ngValue]=\"tanga\"> Tanga  </option>\n    </select> \n  </div>\n\n   <div class=\"form-group\">\n    <select formControlName=\"district\" [(ngModel)]=\"district\">\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_d1\"> Meru District </option>\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_d2\"> Arusha Mjini District </option>\n    <option *ngIf=\"dar_view\" [ngValue]=\"dar_d1\"> Kigamboni District </option>\n    <option *ngIf=\"dar_view\" [ngValue]=\"dar_d2\"> Kinondoni District </option>\n\n\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_1\"> Meru District </option>\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_2\"> Arusha Mjini District</option>\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_3\"> Arusha Vijijini District</option>\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_4\">  Karatu Mjini District</option>\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_5\">  Longido District</option>\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_6\"> Monduli District</option>\n    <option *ngIf=\"arusha_view\" [ngValue]=\"arusha_7\"> Ngorongoro District</option>\n\n\n\n\n    \n    <option *ngIf=\"dar_view\" [ngValue]=\"dar_d3\">   Ilala District    </option>\n    <option *ngIf=\"dar_view\" [ngValue]=\"dar_d2\">  Kinondoni  District   </option>\n    <option *ngIf=\"dar_view\" [ngValue]=\"dar_d4\"> Temeke  District    </option>\n    <option *ngIf=\"dar_view\" [ngValue]=\"dar_d5\">  Ubungo   District  </option>\n    <option *ngIf=\"dar_view\" [ngValue]=\"dar_d1\">  Kigamboni  District   </option>\n  \n    <option *ngIf=\"dodoma_view\" [ngValue]=\"dodoma_d1\">    Bahi District    </option>\n    <option *ngIf=\"dodoma_view\" [ngValue]=\"dodoma_d2\">  Chamwino District     </option>\n    <option *ngIf=\"dodoma_view\" [ngValue]=\"dodoma_d3\">   Chemba  District  </option>\n    <option *ngIf=\"dodoma_view\" [ngValue]=\"dodoma_d4\"> Dodoma Mjini  District     </option>\n    <option *ngIf=\"dodoma_view\" [ngValue]=\"dodoma_d5\">  Kondoa District     </option>\n    <option *ngIf=\"dodoma_view\" [ngValue]=\" dodoma_d6\">    Kongwa District    </option>\n    <option *ngIf=\"dodoma_view\" [ngValue]=\"dodoma_d7\">   Mpwapwa District    </option>\n  \n    <option *ngIf=\"geita_view\" [ngValue]=\"geita_d1\"> Bukombe  District    </option>\n    <option *ngIf=\"geita_view\" [ngValue]=\"geita_d2\">  Geita Chato District    </option>\n    <option *ngIf=\"geita_view\" [ngValue]=\"geita_d3\">  Mbogwe District    </option>\n    <option *ngIf=\"geita_view\" [ngValue]=\" geita_d4\">  Nyang'hwale District    </option>\n  \n  \n    <option *ngIf=\"iringa_view\" [ngValue]=\" iringa_d1\"> Iringa Vijijini  District    </option>\n    <option *ngIf=\"iringa_view\" [ngValue]=\"iringa_d2\">   Mufindi District    </option>\n    <option *ngIf=\"iringa_view\" [ngValue]=\"iringa_d3\"> Kilolo  District    </option>\n    <option *ngIf=\"iringa_view\" [ngValue]=\"iringa_d4\">   Iringa Mjini  District    </option>\n    <option *ngIf=\"iringa_view\" [ngValue]=\"iringa_d5\"> Mufindi  District    </option>\n    <option *ngIf=\"iringa_view\" [ngValue]=\"iringa_d6\">  Mafinga Mjini  District    </option>\n  \n  \n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d1\">  Biharamulo District    </option>\n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d2\">   Bukoba Vijijini District    </option>\n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d3\">  Bukoba Mjini District    </option>\n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d4\">  Karagwe District    </option>\n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d5\">  Kyerwa District    </option>\n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d6\">   Misenyi District    </option>\n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d7\">  Muleba District    </option>\n    <option *ngIf=\"kagera_view\" [ngValue]=\"kagera_d8\">  Ngara District    </option>\n  \n  \n    <option *ngIf=\"katavi_view\" [ngValue]=\" katavi_d1\">   Mlele District    </option>\n    <option *ngIf=\"katavi_view\" [ngValue]=\" katavi_d2\">   Mpanda Mjini District    </option>\n    <option *ngIf=\"katavi_view\" [ngValue]=\" katavi_d3\">   Mpanda Vijijini District    </option>\n  \n  \n    <option *ngIf=\"kigoma_view\" [ngValue]=\" kigoma_d1\">  Buhigwe District    </option>\n    <option *ngIf=\"kigoma_view\" [ngValue]=\" kigoma_d2\"> Kakonko  District    </option>\n    <option *ngIf=\"kigoma_view\" [ngValue]=\" kigoma_d3\">  Kasulu Vijijini  District    </option>\n    <option *ngIf=\"kigoma_view\" [ngValue]=\" kigoma_d4\"> Kasulu Mjini  District    </option>\n    <option *ngIf=\"kigoma_view\" [ngValue]=\" kigoma_d5\">  Kibondo District    </option>\n    <option *ngIf=\"kigoma_view\" [ngValue]=\" kigoma_d6\"> Kigoma Vijijini District    </option>\n    <option *ngIf=\"kigoma_view\" [ngValue]=\" kigoma_d7\">  Uvinza District    </option>\n  \n  \n    <option *ngIf=\"kilimanjaro_view\" [ngValue]=\"kilimanjaro_d1\">   Hai District    </option>\n    <option *ngIf=\"kilimanjaro_view\" [ngValue]=\"kilimanjaro_d2\">   Moshi Mjini District    </option>\n    <option *ngIf=\"kilimanjaro_view\" [ngValue]=\"kilimanjaro_d3\">  Moshi Vijijini  District    </option>\n    <option *ngIf=\"kilimanjaro_view\" [ngValue]=\"kilimanjaro_d4\">  Mwanga District    </option>\n    <option *ngIf=\"kilimanjaro_view\" [ngValue]=\"kilimanjaro_d5\">   Rombo District    </option>\n    <option *ngIf=\"kilimanjaro_view\" [ngValue]=\"kilimanjaro_d6\">  Same District    </option>\n    <option *ngIf=\"kilimanjaro_view\" [ngValue]=\"kilimanjaro_d7\"> Siha  District    </option>\n  \n  \n    <option *ngIf=\"lindi_view\" [ngValue]=\"lindi_d1\">  Kilwa District    </option>\n    <option *ngIf=\"lindi_view\" [ngValue]=\"lindi_d2\">  Lindi Vijijini  District    </option>\n    <option *ngIf=\"lindi_view\" [ngValue]=\"lindi_d3\"> Lindi Mjini  District    </option>\n    <option *ngIf=\"lindi_view\" [ngValue]=\"lindi_d4\">  Liwale District    </option>\n   <option *ngIf=\"lindi_view\" [ngValue]=\"lindi_d5\">  Ruangwa District    </option>\n   \n    <option *ngIf=\"manyara_view\" [ngValue]=\"manyara_d1\">  Babati Mjini District    </option>\n    <option *ngIf=\"manyara_view\" [ngValue]=\"manyara_d2\">  Babati Vijijini District    </option>\n    <option *ngIf=\"manyara_view\" [ngValue]=\"manyara_d3\"> Hanang  District    </option>\n    <option *ngIf=\"manyara_view\" [ngValue]=\"manyara_d4\"> Kiteto  District    </option>\n    <option *ngIf=\"manyara_view\" [ngValue]=\"manyara_d5\">  Mbulu District    </option>\n    <option *ngIf=\"manyara_view\" [ngValue]=\"manyara_d6\"> Simanjiro  District    </option>\n  \n  \n    <option *ngIf=\"mara_view\" [ngValue]=\"mara_d1\">   Bunda District    </option>\n    <option *ngIf=\"mara_view\" [ngValue]=\"mara_d2\">  utiama District    </option>\n    <option *ngIf=\"mara_view\" [ngValue]=\"mara_d3\"> Musoma Mjini  District    </option>\n    <option *ngIf=\"mara_view\" [ngValue]=\"mara_d4\"> Musoma Vijijini  District    </option>\n    <option *ngIf=\"mara_view\" [ngValue]=\"mara_d5\">  Rorya District    </option>\n    <option *ngIf=\"mara_view\" [ngValue]=\"mara_d6\">  Serengeti District    </option>\n    <option *ngIf=\"mara_view\" [ngValue]=\"mara_d7\">  Tarime District    </option>\n  \n  \n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d1\"> Chunya  District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d2\">   Ileje District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d3\"> Kyela  District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d4\">  Mbarali District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d5\">   Mbeya Vijijini District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d6\">  Mbeya Mjini District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d7\">  Mbozi District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d8\">  Momba District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d9\">  Rungwe District    </option>\n    <option *ngIf=\"mbeya_view\" [ngValue]=\"mbeya_d10\">  Tunduma District    </option>\n  \n  \n\n    <option *ngIf=\"moro_view\" [ngValue]=\"morogoro_d1\">   Gairo District    </option>\n    <option *ngIf=\"moro_view\" [ngValue]=\"morogoro_d2\">  Kilombero District    </option>\n    <option *ngIf=\"moro_view\" [ngValue]=\"morogoro_d3\">   Kilosa District    </option>\n    <option *ngIf=\"moro_view\" [ngValue]=\"morogoro_d4\">   Morogoro Mjini District    </option>\n    <option *ngIf=\"moro_view\" [ngValue]=\"morogoro_d5\">  Morogoro Vijijini District    </option>\n    <option *ngIf=\"moro_view\" [ngValue]=\"morogoro_d6\">  Mvomero District    </option>\n    <option *ngIf=\"moro_view\" [ngValue]=\"morogoro_d7\">  Ulanga District    </option>\n  \n  \n    <option *ngIf=\"mtwara_view\" [ngValue]=\"mtwara_d1\">  Masasi Mjini District    </option>\n    <option *ngIf=\"mtwara_view\" [ngValue]=\"mtwara_d2\">  Masasi Vijijini District    </option>\n    <option *ngIf=\"mtwara_view\" [ngValue]=\"mtwara_d3\">   Mtwara Vijijini District    </option>\n    <option *ngIf=\"mtwara_view\" [ngValue]=\"mtwara_d4\">   Mtwara Mjini District    </option>\n    <option *ngIf=\"mtwara_view\" [ngValue]=\"mtwara_d5\">  Nanyumbu District    </option>\n    <option *ngIf=\"mtwara_view\" [ngValue]=\"mtwara_d6\">   Newala District    </option>\n    <option *ngIf=\"mtwara_view\" [ngValue]=\"mtwara_d7\">  Tandahimba District    </option>\n  \n  \n    <option *ngIf=\"mwanza_view\" [ngValue]=\"mwanza_d1\">  Ilemela District    </option>\n    <option *ngIf=\"mwanza_view\" [ngValue]=\"mwanza_d2\">  Nyamagana District    </option>\n    <option *ngIf=\"mwanza_view\" [ngValue]=\"mwanza_d3\">  Sengerema District    </option>\n    <option *ngIf=\"mwanza_view\" [ngValue]=\"mwanza_d4\">  Kwimba District    </option>\n    <option *ngIf=\"mwanza_view\" [ngValue]=\"mwanza_d5\">  Magu District    </option>\n    <option *ngIf=\"mwanza_view\" [ngValue]=\"mwanza_d6\">   Misungwi District    </option>\n    <option *ngIf=\"mwanza_view\" [ngValue]=\"mwanza_d7\">  Ukerewe District    </option>\n  \n  \n  \n    <option *ngIf=\"njombe_view\" [ngValue]=\"njombe_d1\">  Ludewa District    </option>\n    <option *ngIf=\"njombe_view\" [ngValue]=\"njombe_d2\">  Makambako District    </option>\n    <option *ngIf=\"njombe_view\" [ngValue]=\"njombe_d3\">  Makete District    </option>\n    <option *ngIf=\"njombe_view\" [ngValue]=\"njombe_d4\">  Njombe Vijijini District    </option>\n    <option *ngIf=\"njombe_view\" [ngValue]=\"njombe_d5\">  Njombe Mjini District    </option>\n    <option *ngIf=\"njombe_view\" [ngValue]=\"njombe_d6\">  Wanging'ombe District    </option>\n  \n  \n\n  \n  \n    <option *ngIf=\"pwani_view\" [ngValue]=\"pwani_d1\">   Bagamoyo District    </option>\n    <option *ngIf=\"pwani_view\" [ngValue]=\"pwani_d2\">  Kibaha Mjini  District    </option>\n    <option *ngIf=\"pwani_view\" [ngValue]=\"pwani_d3\">  Kibaha Vijijini District    </option>\n    <option *ngIf=\"pwani_view\" [ngValue]=\"pwani_d4\">  Kisarawe  District    </option>\n    <option *ngIf=\"pwani_view\" [ngValue]=\"pwani_d5\">  Mafia District    </option>\n    <option *ngIf=\"pwani_view\" [ngValue]=\"pwani_d6\">  Mkuranga District    </option>\n  \n  \n    <option  *ngIf=\"rukwa_view\" [ngValue]=\"rukwa_d1\">   Rufiji District    </option>\n    <option  *ngIf=\"rukwa_view\" [ngValue]=\"rukwa_d2\">   Kalambo District    </option>\n    <option  *ngIf=\"rukwa_view\" [ngValue]=\"rukwa_d3\">  Nkasi District    </option>\n    <option  *ngIf=\"rukwa_view\" [ngValue]=\"rukwa_d4\">  Sumbawanga Vijijini District    </option>\n    <option  *ngIf=\"rukwa_view\" [ngValue]=\"rukwa_d5\">  Sumbawanga Mjini District    </option>\n   \n  \n  \n    <option  *ngIf=\"ruvuma_view\" [ngValue]=\"ruvuma_d1\">   Mbinga District    </option>\n    <option  *ngIf=\"ruvuma_view\" [ngValue]=\"ruvuma_d2\">   Namtumbo District    </option>\n    <option  *ngIf=\"ruvuma_view\" [ngValue]=\"ruvuma_d3\">  Nyasa District    </option>\n    <option  *ngIf=\"ruvuma_view\" [ngValue]=\"ruvuma_d4\">  Songea Vijijini District    </option>\n    <option  *ngIf=\"ruvuma_view\" [ngValue]=\"ruvuma_d5\">  Songea Mjini District    </option>\n    <option  *ngIf=\"ruvuma_view\" [ngValue]=\"ruvuma_d6\"> Tunduru  District    </option>\n\n    \n    <option *ngIf=\"shinyanga_view\" [ngValue]=\"shinyanga_d1\"> Kahama Mjini  District    </option>\n    <option *ngIf=\"shinyanga_view\" [ngValue]=\"shinyanga_d2\">  Kahama Vijijini District    </option>\n    <option *ngIf=\"shinyanga_view\" [ngValue]=\"shinyanga_d3\">  Kishapu District    </option>\n    <option *ngIf=\"shinyanga_view\" [ngValue]=\"shinyanga_d4\">  Shinyanga Vijijini District    </option>\n    <option *ngIf=\"shinyanga_view\" [ngValue]=\"shinyanga_d5\">  Shinyanga Mjini District    </option>\n    \n  <option *ngIf=\"simiyu_view\" [ngValue]=\"simiyu_d1\"> Bariadi  District    </option>\n    <option *ngIf=\"simiyu_view\" [ngValue]=\"simiyu_d2\">   Busega District    </option>\n    <option *ngIf=\"simiyu_view\" [ngValue]=\"simiyu_d3\">   Itilima District    </option>\n    <option *ngIf=\"simiyu_view\" [ngValue]=\"simiyu_d4\">  Maswa District    </option>\n    <option *ngIf=\"simiyu_view\" [ngValue]=\"simiyu_d5\"> Meatu  District    </option>\n  \n    <option *ngIf=\"singida_view\" [ngValue]=\"singida_d1\">   Iramba District    </option>\n    <option *ngIf=\"singida_view\" [ngValue]=\"singida_d2\">  Manyoni District    </option>\n    <option *ngIf=\"singida_view\" [ngValue]=\"singida_d3\">  Singida Vijijini District    </option>\n    <option *ngIf=\"singida_view\" [ngValue]=\"singida_d4\">  Singida Mjini District    </option>\n   \n   <option *ngIf=\"tabora_view\" [ngValue]=\"tabora_d1\">  Igunga District    </option>\n    <option *ngIf=\"tabora_view\" [ngValue]=\"tabora_d2\"> Kaliua  District    </option>\n    <option *ngIf=\"tabora_view\" [ngValue]=\"tabora_d3\">  Nzega District    </option>\n    <option *ngIf=\"tabora_view\" [ngValue]=\"tabora_d4\"> Sikonge  District    </option>\n    <option *ngIf=\"tabora_view\" [ngValue]=\"tabora_d5\">  Uyui District    </option>\n    <option *ngIf=\"tabora_view\" [ngValue]=\"tabora_d6\">  Tabora Mjini District    </option>\n    <option *ngIf=\"tabora_view\" [ngValue]=\"tabora_d7\">  Urambo District    </option>\n  \n    <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d1\">  Handeni  District    </option>\n    <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d2\">  Kilindi District    </option>\n    <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d3\">  Lushoto District    </option>\n  <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d4\">   Korogwe District    </option>\n    <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d5\">  Mkinga District    </option>\n    <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d6\">  Muheza District    </option>\n    <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d7\"> Pangani  District    </option>\n    <option *ngIf=\"tanga_view\" [ngValue]=\"tanga_d8\">  Tanga Mjini District    </option>\n  \n\n</select>\n</div>\n<textarea class=\"form-control\" rows=\"3\"  placeholder=\"Profile\" formControlName=\"profile\" [(ngModel)]=\"profile\"></textarea>\n<br>\n<br>\n <div class=\"form-group\" [@pop]=\"showState\" class=\"pop\">\n       <input type=\"submit\" value=\"Register\" id=\"register\">\n  </div>\n\n</form>\n\n\n\n</div>\n\n\n<div class=\"col-md-5 recit\">\n\n<div class=\"panel panel-default\">\n  <!-- Default panel contents -->\n  <div class=\"panel-heading\">Panel heading</div>\n  <div class=\"panel-body\">\n   \n\n<ul class=\"list-group\">\n\n    <li class=\"list-group-item\"> Company name.........{{name}} </li>\n    <li class=\"list-group-item\"> Adress............ {{address}}</li>\n    <li class=\"list-group-item\">Contact person.............{{person}}</li>\n     <li class=\"list-group-item\">phone.......{{phone}}</li>\n    <li class=\"list-group-item\">Email.......... {{email}}</li>\n    <li class=\"list-group-item\">Region.........{{region}}</li>\n      <li class=\"list-group-item\">District.......{{district}}</li>\n\n  </ul>\n\n <button type=\"button\" class=\"btn btn-danger\" (click)=\"togglepop()\">Accept Verifications</button>\n \n<router-outlet> </router-outlet>\n\n  </div>\n\n</div>\n\n\n</div>\n</div>\n</div>\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/craftman/craftman.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* trigger */])('pop', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ transform: 'translateX(0) scale(0)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ transform: 'translateX(0) scale(1)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__craftman_service__["a" /* CraftmanService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__craftman_service__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoComponent = /** @class */ (function () {
    function LogoComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.logo = null;
        this.type = [];
        this.id = this.route.snapshot.paramMap.get('id');
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent.prototype.select = function (event) {
        this.logo = event.target.files[0];
    };
    LogoComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.logo);
        var formData = new FormData();
        formData.append('Logo', this.logo, this.logo.name);
        this.api.upload(this.id, formData)
            .subscribe(function (res) {
            console.log(res);
            if (_this.id) {
                _this.api.types(_this.id)
                    .subscribe(function (res) {
                    _this.type = res;
                    console.log(_this.type);
                    switch (_this.type[0].type_name) {
                        case "Professional":
                            _this.router.navigate(['professionalin', _this.id]);
                            break;
                        case "Rental":
                            _this.router.navigate(['rental_equipment', _this.id]);
                            break;
                        default:
                            _this.router.navigate(['product', _this.id]);
                            break;
                    }
                });
            }
            else {
                console.log('no access');
            }
        });
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo',
            template: "\n\n\n     <p> Please Upload Company Logo </p><br>\n\n    <input type=\"file\"   (change)=\"select($event)\"><br>\n    <button (click)=\"upload()\"> upload </button>\n\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/craftman/craftman.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__craftman_service__["a" /* CraftmanService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/craftman/professionals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__craftman_service__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent.prototype.upload = function (event) {
        var file = null;
        file = event.target.files[0];
        var formData = new FormData();
        formData.append('Logo', file);
        console.log(file.name);
        this.api.professional_image(this.id, formData)
            .subscribe(function (res) { });
    };
    ProfessionalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'professional',
            template: "\n  <div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12 wrap\">\n\n <label>Company</label>\n<input type=\"file\" (change)=\"upload($event)\">\n\n</div> \n</div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/craftman/craftman.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__craftman_service__["a" /* CraftmanService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.box-top { \r\n padding-top: 100px;\r\n padding-left:200px; }\r\n\r\n.box-bottom { \r\n padding-top: 15px;\r\n padding-left:200px; }\r\n\r\n.button-row > button { width:35%;\r\nheight: 150px;padding: 22px }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/entry.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/entry/entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntryComponent = /** @class */ (function () {
    function EntryComponent() {
    }
    EntryComponent.prototype.ngOnInit = function () {
    };
    EntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entry',
            template: __webpack_require__("../../../../../src/app/entry/entry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/entry/entry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/entry.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryModule", function() { return EntryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entry_routing__ = __webpack_require__("../../../../../src/app/entry/entry.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_module__ = __webpack_require__("../../../../../src/app/entry/product/product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__professional_professional_module__ = __webpack_require__("../../../../../src/app/entry/professional/professional.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rental_rental_module__ = __webpack_require__("../../../../../src/app/entry/rental/rental.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__craftman_craftman_module__ = __webpack_require__("../../../../../src/app/entry/craftman/craftman.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entry_component__ = __webpack_require__("../../../../../src/app/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entry_index_component__ = __webpack_require__("../../../../../src/app/entry/entry_index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EntryModule = /** @class */ (function () {
    function EntryModule() {
    }
    EntryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__entry_component__["a" /* EntryComponent */], __WEBPACK_IMPORTED_MODULE_7__entry_index_component__["a" /* EntryIndexComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__entry_routing__["a" /* EntryRouting */], __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__product_product_module__["ProductModule"], __WEBPACK_IMPORTED_MODULE_3__professional_professional_module__["ProfessionalModule"], __WEBPACK_IMPORTED_MODULE_4__rental_rental_module__["RentalModule"], __WEBPACK_IMPORTED_MODULE_5__craftman_craftman_module__["CraftmanModule"]],
            exports: []
        })
    ], EntryModule);
    return EntryModule;
}());



/***/ }),

/***/ "../../../../../src/app/entry/entry.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entry_component__ = __webpack_require__("../../../../../src/app/entry/entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entry_index_component__ = __webpack_require__("../../../../../src/app/entry/entry_index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EntryRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__entry_component__["a" /* EntryComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__entry_index_component__["a" /* EntryIndexComponent */] },
            {
                path: 'add',
                loadChildren: 'app/entry/product/product.module#ProductModule',
                data: { preload: true }
            },
            {
                path: 'professional',
                loadChildren: 'app/entry/professional/professional.module#ProfessionalModule',
                data: { preload: true }
            },
            {
                path: 'rental',
                loadChildren: 'app/entry/rental/rental.module#RentalModule',
                data: { preload: true }
            },
            {
                path: 'craftman',
                loadChildren: 'app/entry/craftman/craftman.module#CraftmanModule',
                data: { preload: true }
            }
        ] }
];
var EntryRouting = /** @class */ (function () {
    function EntryRouting() {
    }
    EntryRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(EntryRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], EntryRouting);
    return EntryRouting;
}());



/***/ }),

/***/ "../../../../../src/app/entry/entry_index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntryIndexComponent = /** @class */ (function () {
    function EntryIndexComponent() {
    }
    EntryIndexComponent.prototype.ngOnInit = function () {
    };
    EntryIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index-entry',
            template: "\n\n<div class=\"container\">\n<div class=\"row box-top\">\n\n<div class=\"col-md-12\">\n<div class=\"button-row\">\n  <button mat-raised-button color=\"primary\"> <a routerLink=\"/entry/add\" routerLinkActive=\"active\">Add Products</a></button>\n  <button mat-raised-button color=\"primary\"><a routerLink=\"/entry/professional\" routerLinkActive=\"active\">Add Professional</a></button>  \n</div>\n\n</div>\n</div>\n\n<div class=\"row box-bottom\">\n<div class=\"col-md-12\">\n<div class=\"button-row\">\n  <button mat-raised-button color=\"primary\"><a routerLink=\"/entry/rental\" routerLinkActive=\"active\">Equipment Rental</a></button>\n  <button mat-raised-button color=\"primary\"><a routerLink=\"/entry/craftman\" routerLinkActive=\"active\">Fundis</a></button>  \n</div>\n\n</div>\n</div>\n\n\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/entry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntryIndexComponent);
    return EntryIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/add_product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.get_categoryUrl = "http://127.0.0.1:8000/api/product-categories";
        this.get_subcategoryUrl = "http://127.0.0.1:8000/api/category-sub";
        this.suppliersURL = "http://127.0.0.1:8000/api/suppliers";
        this.AgenciesURL = "http://127.0.0.1:8000/api/agents";
        this.manufacturesURL = "http://127.0.0.1:8000/api/manufacturers";
        this.agent_locationUrl = "http://127.0.0.1:8000/api/agent_regions";
        this.supplier_locationUrl = "http://127.0.0.1:8000/api/supplier_regions";
        this.manufacturer_locationUrl = "http://127.0.0.1:8000/api/manufacturer_regions";
        this.NewAgencyStoreURL = "http://127.0.0.1:8000/api/agent-store";
        this.new_manufactureURL = "http://127.0.0.1:8000/api/manufacturer-store";
        this.new_supplierURL = "http://127.0.0.1:8000/api/new_supplier";
        this.new_productURL = "http://127.0.0.1:8000/api/product-store";
        this.agent_productURL = "http://127.0.0.1:8000/api/agent-product";
        this.manu_productURL = "http://127.0.0.1:8000/api/manu-product";
        this.supplier_productURL = "http://127.0.0.1:8000/api/supplier-product";
        this.upload_agentUrl = "http://127.0.0.1:8000/api/upload-agent";
        this.upload_manuUrl = "http://127.0.0.1:8000/api/upload-manu";
        this.upload_supplierUrl = "http://127.0.0.1:8000/api/upload-supplier";
    }
    ProductService.prototype.agent_location = function () {
        return this.http.get(this.agent_locationUrl)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.supplier_location = function () {
        return this.http.get(this.supplier_locationUrl)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.manufacturer_location = function () {
        return this.http.get(this.manufacturer_locationUrl)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.new_agency = function (agency) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.NewAgencyStoreURL, JSON.stringify(agency), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.upload_agent = function (id, data) {
        return this.http.post(this.upload_agentUrl + '/' + id, data);
    };
    ProductService.prototype.upload_manu = function (id, data) {
        return this.http.post(this.upload_manuUrl + '/' + id, data);
    };
    ProductService.prototype.upload_supplier = function (id, data) {
        return this.http.post(this.upload_supplierUrl + '/' + id, data);
    };
    ProductService.prototype.new_product = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_productURL, JSON.stringify(product), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.new_manufacture = function (manu) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_manufactureURL, JSON.stringify(manu), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.new_supplier = function (supplier) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_supplierURL, JSON.stringify(supplier), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.agent_product = function (detail) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.agent_productURL, JSON.stringify(detail), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.manu_product = function (detail) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.manu_productURL, JSON.stringify(detail), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.supplier_product = function (detail) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.supplier_productURL, JSON.stringify(detail), options)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getCategory = function () {
        return this.http.get(this.get_categoryUrl)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.getSubCategory = function (data) {
        return this.http.get(this.get_subcategoryUrl + '/' + data)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.suppliers = function () {
        return this.http.get(this.suppliersURL)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.agencies = function () {
        return this.http.get(this.AgenciesURL)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.manufactures = function () {
        return this.http.get(this.manufacturesURL)
            .map(function (response) { return response.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/agents/agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgentsComponent = /** @class */ (function () {
    function AgentsComponent() {
    }
    AgentsComponent.prototype.ngOnInit = function () {
    };
    AgentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'agents',
            template: "\n <div class=\"container\"> \n  <div class=\"row\">\n   <div class=\"col-md-12\">\n\n<div class=\"row\">\n       <div class=\"col-md-4 below\">\n  <button mat-raised-button><a [routerLink]=\"['new']\" routerLinkActive=\"active\">New </a></button>\n   </div>\n      <div class=\"col-md-4 below\">\n  <button mat-raised-button> <a [routerLink]=\"['exist']\" routerLinkActive=\"active\"> Exist </a></button>  \n     </div>\n\n</div>\n</div>\n</div>\n</div>\n  <router-outlet> </router-outlet>",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgentsComponent);
    return AgentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/agents/exist_agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExistAgentComponent = /** @class */ (function () {
    function ExistAgentComponent(api, router) {
        this.api = api;
        this.router = router;
        this.agent = [];
        this.AgentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            agent: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ExistAgentComponent.prototype.ngOnInit = function () {
        this.get_agent();
    };
    ExistAgentComponent.prototype.get_agent = function () {
        var _this = this;
        this.api.agencies()
            .subscribe(function (res) { _this.agent = res; });
    };
    ExistAgentComponent.prototype.onSubmit = function () {
        var id = this.AgentForm.value;
        this.router.navigate(['/agent-form/agent-product', id.agent]);
    };
    ExistAgentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'agent',
            template: "\n  <div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n   <form [formGroup]=\"AgentForm\" (ngSubmit)=\"onSubmit()\">\n  \n  <select class=\"form-control\" formControlName=\"agent\">\n  <option *ngFor=\"let agent of agent\" [ngValue]=\"agent.id\">{{agent.company_name}}</option>\n  </select>\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n   </div>\n\n  </form>\n  </div>\n  </div>\n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ExistAgentComponent);
    return ExistAgentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/agents/logo_form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoComponent = /** @class */ (function () {
    function LogoComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.logo = null;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent.prototype.select = function (event) {
        this.logo = event.target.files[0];
    };
    LogoComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.logo);
        var formData = new FormData();
        formData.append('Logo', this.logo, this.logo.name);
        this.api.upload_agent(this.id, formData)
            .subscribe(function (res) {
            if (_this.id) {
                _this.router.navigate(['/agent-form/agent-product', _this.id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo',
            template: "\n\n   <div class=\"container\">\n   <div class=\"row\">\n   <div class=\"col-md-12\">\n    <label>Logo Company</label>\n    <input type=\"file\"   (change)=\"select($event)\">\n    <button (click)=\"upload()\"> upload </button>\n </div>\n </div>\n </div>\n\n\t",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/agents/new_agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewAgentComponent = /** @class */ (function () {
    function NewAgentComponent(api, router) {
        this.api = api;
        this.router = router;
        this.locations = [];
        this.AgencyForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            person: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    NewAgentComponent.prototype.ngOnInit = function () {
        this.get_locations();
    };
    NewAgentComponent.prototype.get_locations = function () {
        var _this = this;
        this.api.agent_location()
            .subscribe(function (res) { _this.locations = res; });
    };
    NewAgentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.api.new_agency(this.AgencyForm.value)
            .subscribe(function (res) {
            var id = res;
            console.log(res);
            if (id) {
                _this.router.navigate(['/agent-form/logo', id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    NewAgentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'new-agent',
            template: "\n <div class=\"container\"> \n <div class=\"row\">\n    <div class=\"col-md-8\">\n    \n   \n    <form [formGroup]=\"AgencyForm\" id=\"agent\" (ngSubmit)=\"onSubmit()\"> \n  \n  <div class=\"form-group\">\n    <label>Locations </label>\n    <select formControlName=\"location\">\n       <option *ngFor=\"let location of locations\" [ngValue]=\"location.id\">{{location.location_name}} </option>\n    </select>\n  </div>\n    \n    <div class=\"form-group\">\n    <label>Company</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"name\">\n  </div>\n  \n    <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"address\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Contact person</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"contact person\" formControlName=\"person\">\n  </div>\n\n    <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"email\" formControlName=\"email\">\n  </div>\n\n\n      <div class=\"form-group\">\n    <label>Contact Phone</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"contact phone\" formControlName=\"phone\">\n  </div>\n\n<textarea class=\"form-control\" rows=\"3\" formControlName=\"profile\"></textarea>\n\n\n <div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n\n</form>\n\n   </div>\n  </div>\n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewAgentComponent);
    return NewAgentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/agents/product_agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductAgentComponent = /** @class */ (function () {
    function ProductAgentComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.ProductForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            unit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            quantity: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.category = [];
        this.chosen_category = null;
        this.subs = [];
    }
    ProductAgentComponent.prototype.ngOnInit = function () {
        this.getCategorys();
    };
    ProductAgentComponent.prototype.getCategorys = function () {
        var _this = this;
        this.api.getCategory()
            .subscribe(function (res) { _this.category = res; });
    };
    ProductAgentComponent.prototype.get_sub = function () {
        var _this = this;
        this.api.getSubCategory(this.chosen_category)
            .subscribe(function (res) { _this.subs = res; });
    };
    ProductAgentComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ProductForm.value);
        this.api.new_product(this.ProductForm.value)
            .subscribe(function (res) {
            var id = res;
            var agent_id = _this.route.snapshot.paramMap.get('id');
            console.log(agent_id, id);
            var detail = { aid: agent_id, pid: id };
            _this.api.agent_product(detail)
                .subscribe(function (res) { });
        });
    };
    ProductAgentComponent.prototype.select = function (event) {
        this.chosen_category = event.target.value;
        console.log(this.chosen_category);
        this.get_sub();
    };
    ProductAgentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product',
            template: "\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n    \n    \n<form [formGroup]=\"ProductForm\" (ngSubmit)=\"onSubmit()\">\n  \n <select class=\"form-control\" (change)=\"select($event)\">\n  <option *ngFor=\"let category of category\" [ngValue]=\"category.id\">{{category.category_name}}</option>\n  </select>\n\n   <select class=\"form-control\" formControlName=\"type\">\n  <option *ngFor=\"let sub of subs\" [ngValue]=\"sub.id\">{{sub.product_name}}</option>\n  </select>\n\n    <div class=\"form-group\">\n    <label>Product Code</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Product Code Number\" formControlName=\"name\">\n  </div>\n    <div class=\"form-group\">\n    <label>Size</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Size\" formControlName=\"size\">\n  </div>\n    <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"Price\" formControlName=\"price\">\n  </div>\n\n   <div class=\"form-group\">\n    <label>Units</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Units\" formControlName=\"unit\">\n  </div>\n \n    <div class=\"form-group\">\n    <label>quantity</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"quantity\" formControlName=\"quantity\">\n  </div>\n\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n\n</form>\n\n   </div>\n  </div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProductAgentComponent);
    return ProductAgentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/manufacturer/exist_manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistManufacturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExistManufacturerComponent = /** @class */ (function () {
    function ExistManufacturerComponent(api, router) {
        this.api = api;
        this.router = router;
        this.manufacturer = [];
        this.ManufacturerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            manufacturer: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ExistManufacturerComponent.prototype.ngOnInit = function () {
        this.get_manufacturer();
    };
    ExistManufacturerComponent.prototype.get_manufacturer = function () {
        var _this = this;
        this.api.manufactures()
            .subscribe(function (res) { _this.manufacturer = res; });
    };
    ExistManufacturerComponent.prototype.onSubmit = function () {
        var id = this.ManufacturerForm.value;
        this.router.navigate(['/manu-form/manu-product', id.manufacturer]);
    };
    ExistManufacturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'exist-manu',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n   <form [formGroup]=\"ManufacturerForm\" (ngSubmit)=\"onSubmit()\">\n  \n  <select class=\"form-control\" formControlName=\"manufacturer\">\n  <option *ngFor=\"let manufacturer of manufacturer\" [ngValue]=\"manufacturer.id\">{{manufacturer.company_name}}</option>\n  </select>\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n   </div>\n\n  </form>\n  </div>\n  </div> \n</div>\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ExistManufacturerComponent);
    return ExistManufacturerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/manufacturer/manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManufacturersComponent = /** @class */ (function () {
    function ManufacturersComponent() {
    }
    ManufacturersComponent.prototype.ngOnInit = function () {
    };
    ManufacturersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'manu',
            template: "\n<div class=\"container\"> \n  <div class=\"row\">\n   <div class=\"col-md-12\">\n\n<div class=\"row\">\n       <div class=\"col-md-4 below\">\n  <button mat-raised-button><a [routerLink]=\"['new']\" routerLinkActive=\"active\">New Manufacturer Product </a></button>\n   </div>\n      <div class=\"col-md-4 below\">\n  <button mat-raised-button> <a [routerLink]=\"['exist']\" routerLinkActive=\"active\"> Exist Manufacturer product</a></button>  \n     </div>\n\n</div>\n</div>\n</div>\n</div>\n  <router-outlet> </router-outlet>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManufacturersComponent);
    return ManufacturersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/manufacturer/manufacturer_logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManufacturerLogoComponent = /** @class */ (function () {
    function ManufacturerLogoComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.logo = null;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    ManufacturerLogoComponent.prototype.ngOnInit = function () {
    };
    ManufacturerLogoComponent.prototype.select = function (event) {
        this.logo = event.target.files[0];
    };
    ManufacturerLogoComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.logo);
        var formData = new FormData();
        formData.append('Logo', this.logo, this.logo.name);
        this.api.upload_manu(this.id, formData)
            .subscribe(function (res) {
            if (_this.id) {
                _this.router.navigate(['/manu-form/manu-product', _this.id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    ManufacturerLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo',
            template: "\n    <div class=\"container\">\n   <div class=\"row\">\n   <div class=\"col-md-12\">\n     <label>Logo Company</label>\n    <input type=\"file\"   (change)=\"select($event)\">\n    <button (click)=\"upload()\"> upload </button>\n </div>\n </div>\n </div>\n\t",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ManufacturerLogoComponent);
    return ManufacturerLogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/manufacturer/new_manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewManufacturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewManufacturerComponent = /** @class */ (function () {
    function NewManufacturerComponent(api, router) {
        this.api = api;
        this.router = router;
        this.locations = [];
        this.ManuForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            location: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            person: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    NewManufacturerComponent.prototype.ngOnInit = function () {
        this.get_locations();
    };
    NewManufacturerComponent.prototype.get_locations = function () {
        var _this = this;
        this.api.manufacturer_location()
            .subscribe(function (res) { _this.locations = res; });
    };
    NewManufacturerComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ManuForm.value);
        this.api.new_manufacture(this.ManuForm.value)
            .subscribe(function (res) {
            var id = res;
            console.log(res);
            if (id > 0) {
                _this.router.navigate(['/manu-form/manu_logo', id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    NewManufacturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'new-manu',
            template: "\n <div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n     \n   \n    <form [formGroup]=\"ManuForm\" (ngSubmit)=\"onSubmit()\">\n \n  <div class=\"form-group\">\n    <label>Locations </label>\n    <select formControlName=\"location\">\n       <option *ngFor=\"let location of locations\" [ngValue]=\"location.id\">{{location.location_name}} </option>\n    </select>\n  </div>\n    \n\n    <div class=\"form-group\">\n    <label>Company</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"name\">\n  </div>\n  \n    <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"address\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Contact person</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"contact person\" formControlName=\"person\">\n  </div>\n\n    <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"email\" formControlName=\"email\">\n  </div>\n\n\n      <div class=\"form-group\">\n    <label>Contact Phone</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"contact phone\" formControlName=\"phone\">\n  </div>\n\n<textarea class=\"form-control\" rows=\"3\" formControlName=\"profile\"></textarea>\n\n\n <div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n\n</form>\n\n   </div>\n  </div> \n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewManufacturerComponent);
    return NewManufacturerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/manufacturer/product_manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductManufacturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductManufacturerComponent = /** @class */ (function () {
    function ProductManufacturerComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.ProductForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            unit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            quantity: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.category = [];
        this.chosen_category = null;
        this.subs = [];
    }
    ProductManufacturerComponent.prototype.ngOnInit = function () {
        this.getCategorys();
    };
    ProductManufacturerComponent.prototype.getCategorys = function () {
        var _this = this;
        this.api.getCategory()
            .subscribe(function (res) { _this.category = res; });
    };
    ProductManufacturerComponent.prototype.get_sub = function () {
        var _this = this;
        this.api.getSubCategory(this.chosen_category)
            .subscribe(function (res) { _this.subs = res; });
    };
    ProductManufacturerComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ProductForm.value);
        this.api.new_product(this.ProductForm.value)
            .subscribe(function (res) {
            var id = res;
            var manu_id = _this.route.snapshot.paramMap.get('id');
            console.log(_this.id, id);
            var detail = { mid: manu_id, pid: id };
            _this.api.manu_product(detail)
                .subscribe(function (res) { });
        });
    };
    ProductManufacturerComponent.prototype.select = function (event) {
        this.chosen_category = event.target.value;
        console.log(this.chosen_category);
        this.get_sub();
    };
    ProductManufacturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product',
            template: "\n <div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n    \n    \n    <form [formGroup]=\"ProductForm\" (ngSubmit)=\"onSubmit()\">\n  \n <select class=\"form-control\" (change)=\"select($event)\">\n  <option *ngFor=\"let category of category\" [ngValue]=\"category.id\">{{category.category_name}}</option>\n  </select>\n\n   <select class=\"form-control\" formControlName=\"type\">\n  <option *ngFor=\"let sub of subs\" [ngValue]=\"sub.id\">{{sub.sub_category_name}}</option>\n  </select>\n\n    <div class=\"form-group\">\n    <label>Product Code</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Product Code Number\" formControlName=\"name\">\n  </div>\n    <div class=\"form-group\">\n    <label>Size</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Size\" formControlName=\"size\">\n  </div>\n    <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"Price\" formControlName=\"price\">\n  </div>\n\n   <div class=\"form-group\">\n    <label>Units</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Units\" formControlName=\"unit\">\n  </div>\n \n    <div class=\"form-group\">\n    <label>quantity</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"quantity\" formControlName=\"quantity\">\n  </div>\n\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n      </form>\n\n   </div>\n  </div>\n</div>\n\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProductManufacturerComponent);
    return ProductManufacturerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.row { \r\npadding-top: 20px; }\r\n\r\n\r\n\r\n button { width:300px;\r\nheight: 30px;\r\nborder-bottom: 1px solid #F4F4F4;}\r\n\r\n\r\n\r\n a { text-decoration: none;\r\n    color:black;\r\n    font-weight: bold; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/entry/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product',
            template: __webpack_require__("../../../../../src/app/entry/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__add_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_routing__ = __webpack_require__("../../../../../src/app/entry/product/product.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_component__ = __webpack_require__("../../../../../src/app/entry/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_index_component__ = __webpack_require__("../../../../../src/app/entry/product/product_index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agents_product_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/product_agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manufacturer_product_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/product_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__suppliers_product_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/product_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agents_new_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/new_agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agents_exist_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/exist_agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__agents_logo_form_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/logo_form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__suppliers_new_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/new_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__suppliers_exist_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/exist_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__suppliers_supplier_logo_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/supplier_logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manufacturer_new_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/new_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__manufacturer_exist_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/exist_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manufacturer_manufacturer_logo_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/manufacturer_logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__agents_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__manufacturer_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__suppliers_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_5__product_index_component__["a" /* ProductIndexComponent */], __WEBPACK_IMPORTED_MODULE_6__agents_product_agent_component__["a" /* ProductAgentComponent */], __WEBPACK_IMPORTED_MODULE_8__suppliers_product_supplier_component__["a" /* ProductSupplierComponent */], __WEBPACK_IMPORTED_MODULE_7__manufacturer_product_manufacturer_component__["a" /* ProductManufacturerComponent */], __WEBPACK_IMPORTED_MODULE_9__agents_new_agent_component__["a" /* NewAgentComponent */], __WEBPACK_IMPORTED_MODULE_10__agents_exist_agent_component__["a" /* ExistAgentComponent */], __WEBPACK_IMPORTED_MODULE_12__suppliers_new_supplier_component__["a" /* NewSupplierComponent */], __WEBPACK_IMPORTED_MODULE_13__suppliers_exist_supplier_component__["a" /* ExistSupplierComponent */], __WEBPACK_IMPORTED_MODULE_15__manufacturer_new_manufacturer_component__["a" /* NewManufacturerComponent */], __WEBPACK_IMPORTED_MODULE_16__manufacturer_exist_manufacturer_component__["a" /* ExistManufacturerComponent */], __WEBPACK_IMPORTED_MODULE_19__agents_agent_component__["a" /* AgentsComponent */], __WEBPACK_IMPORTED_MODULE_20__manufacturer_manufacturer_component__["a" /* ManufacturersComponent */], __WEBPACK_IMPORTED_MODULE_21__suppliers_supplier_component__["a" /* SuppliersComponent */], __WEBPACK_IMPORTED_MODULE_11__agents_logo_form_component__["a" /* LogoComponent */], __WEBPACK_IMPORTED_MODULE_17__manufacturer_manufacturer_logo_component__["a" /* ManufacturerLogoComponent */], __WEBPACK_IMPORTED_MODULE_14__suppliers_supplier_logo_component__["a" /* SupplierLogoComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__product_routing__["a" /* ProductRouting */], __WEBPACK_IMPORTED_MODULE_23__angular_material_button__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_22__angular_material_stepper__["a" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_24__angular_material_form_field__["b" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_25__angular_material_input__["a" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_18__angular_forms__["d" /* FormsModule */]],
            exports: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/product.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_component__ = __webpack_require__("../../../../../src/app/entry/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_index_component__ = __webpack_require__("../../../../../src/app/entry/product/product_index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agents_product_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/product_agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manufacturer_product_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/product_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__suppliers_product_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/product_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agents_new_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/new_agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agents_exist_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/exist_agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__suppliers_new_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/new_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__suppliers_exist_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/exist_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manufacturer_new_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/new_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__manufacturer_exist_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/exist_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__manufacturer_manufacturer_logo_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/manufacturer_logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agents_logo_form_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/logo_form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__suppliers_supplier_logo_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/supplier_logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agents_agent_component__ = __webpack_require__("../../../../../src/app/entry/product/agents/agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__manufacturer_manufacturer_component__ = __webpack_require__("../../../../../src/app/entry/product/manufacturer/manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__suppliers_supplier_component__ = __webpack_require__("../../../../../src/app/entry/product/suppliers/supplier.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var ProductRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__product_component__["a" /* ProductComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__product_index_component__["a" /* ProductIndexComponent */],
                children: [
                    { path: 'agent-form', component: __WEBPACK_IMPORTED_MODULE_16__agents_agent_component__["a" /* AgentsComponent */],
                        children: [
                            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_7__agents_new_agent_component__["a" /* NewAgentComponent */] },
                            { path: 'exist', component: __WEBPACK_IMPORTED_MODULE_8__agents_exist_agent_component__["a" /* ExistAgentComponent */] },
                            { path: 'logo/:id', component: __WEBPACK_IMPORTED_MODULE_14__agents_logo_form_component__["a" /* LogoComponent */] },
                            { path: 'agent-product/:id', component: __WEBPACK_IMPORTED_MODULE_4__agents_product_agent_component__["a" /* ProductAgentComponent */] }
                        ] },
                    { path: 'supplier-form', component: __WEBPACK_IMPORTED_MODULE_18__suppliers_supplier_component__["a" /* SuppliersComponent */],
                        children: [
                            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_9__suppliers_new_supplier_component__["a" /* NewSupplierComponent */] },
                            { path: 'exist', component: __WEBPACK_IMPORTED_MODULE_10__suppliers_exist_supplier_component__["a" /* ExistSupplierComponent */] },
                            { path: 'supplier_logo/:id', component: __WEBPACK_IMPORTED_MODULE_15__suppliers_supplier_logo_component__["a" /* SupplierLogoComponent */] },
                            { path: 'supplier-product/:id', component: __WEBPACK_IMPORTED_MODULE_6__suppliers_product_supplier_component__["a" /* ProductSupplierComponent */] }
                        ] },
                    { path: 'manu-form', component: __WEBPACK_IMPORTED_MODULE_17__manufacturer_manufacturer_component__["a" /* ManufacturersComponent */],
                        children: [
                            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_11__manufacturer_new_manufacturer_component__["a" /* NewManufacturerComponent */] },
                            { path: 'exist', component: __WEBPACK_IMPORTED_MODULE_12__manufacturer_exist_manufacturer_component__["a" /* ExistManufacturerComponent */] },
                            { path: 'manu_logo/:id', component: __WEBPACK_IMPORTED_MODULE_13__manufacturer_manufacturer_logo_component__["a" /* ManufacturerLogoComponent */] },
                            { path: 'manu-product/:id', component: __WEBPACK_IMPORTED_MODULE_5__manufacturer_product_manufacturer_component__["a" /* ProductManufacturerComponent */] }
                        ] }
                ] }
        ]
    }
];
var ProductRouting = /** @class */ (function () {
    function ProductRouting() {
    }
    ProductRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ProductRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ProductRouting);
    return ProductRouting;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/product_index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductIndexComponent = /** @class */ (function () {
    function ProductIndexComponent() {
    }
    ProductIndexComponent.prototype.ngOnInit = function () {
    };
    ProductIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index-product',
            template: "\n  <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-md-4 top\">\n  <button mat-raised-button color=\"primary\"><a routerLink=\"/add/agent-form\" routerLinkActive=\"active\">Agent</a></button>\n   </div>\n      <div class=\"col-md-4 top\">\n  <button mat-raised-button color=\"primary\"> <a routerLink=\"/add/manu-form\" routerLinkActive=\"active\">Manufacturer </a></button>  \n     </div>\n      <div class=\"col-md-4 top\">\n  <button mat-raised-button color=\"primary\"><a routerLink=\"/add/supplier-form\" routerLinkActive=\"active\"> Supplier </a></button>  \n  </div>\n\n       \n     </div>\n </div>\n\n <router-outlet> </router-outlet>\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductIndexComponent);
    return ProductIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/suppliers/exist_supplier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistSupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExistSupplierComponent = /** @class */ (function () {
    function ExistSupplierComponent(api, router) {
        this.api = api;
        this.router = router;
        this.supplier = [];
        this.SupplierForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            supplier: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ExistSupplierComponent.prototype.ngOnInit = function () {
        this.get_supplier();
    };
    ExistSupplierComponent.prototype.get_supplier = function () {
        var _this = this;
        this.api.suppliers()
            .subscribe(function (res) { _this.supplier = res; });
    };
    ExistSupplierComponent.prototype.onSubmit = function () {
        var id = this.SupplierForm.value;
        this.router.navigate(['/supplier-form/supplier-product', id.supplier]);
    };
    ExistSupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'exist-supplier',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n   <form [formGroup]=\"SupplierForm\" (ngSubmit)=\"onSubmit()\">\n  \n  <select class=\"form-control\" formControlName=\"supplier\">\n  <option *ngFor=\"let supplier of supplier\" [ngValue]=\"supplier.id\">{{supplier.company_name}}</option>\n  </select>\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n   </div>\n\n  </form>\n  </div>\n  </div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ExistSupplierComponent);
    return ExistSupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/suppliers/new_supplier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewSupplierComponent = /** @class */ (function () {
    function NewSupplierComponent(api, router) {
        this.api = api;
        this.router = router;
        this.locations = [];
        this.SupplierForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            person: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    NewSupplierComponent.prototype.ngOnInit = function () {
        this.get_locations();
    };
    NewSupplierComponent.prototype.get_locations = function () {
        var _this = this;
        this.api.supplier_location()
            .subscribe(function (res) { _this.locations = res; });
    };
    NewSupplierComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.SupplierForm.value);
        this.api.new_supplier(this.SupplierForm.value)
            .subscribe(function (res) {
            var id = res;
            console.log(res);
            if (id > 0) {
                _this.router.navigate(['/supplier-form/supplier_logo', id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    NewSupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'new-supplier',
            template: "\n <div class=\"container\">\n<div class=\"row\"> \n    <div class=\"col-md-8\">\n    \n   \n    <form [formGroup]=\"SupplierForm\" (ngSubmit)=\"onSubmit()\">\n   \n <div class=\"form-group\">\n    <label>Locations </label>\n    <select formControlName=\"location\">\n       <option *ngFor=\"let location of locations\" [ngValue]=\"location.id\">{{location.location_name}} </option>\n    </select>\n  </div>\n    \n\n\n    <div class=\"form-group\">\n    <label>Company</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"name\">\n  </div>\n  \n    <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"address\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Contact person</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"contact person\" formControlName=\"person\">\n  </div>\n\n    <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"email\" formControlName=\"email\">\n  </div>\n\n\n      <div class=\"form-group\">\n    <label>Contact Phone</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"contact phone\" formControlName=\"phone\">\n  </div>\n\n<textarea class=\"form-control\" rows=\"3\" formControlName=\"profile\"></textarea>\n\n\n <div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n\n\n</form>\n\n   </div>\n  </div>\n</div>\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewSupplierComponent);
    return NewSupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/suppliers/product_supplier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductSupplierComponent = /** @class */ (function () {
    function ProductSupplierComponent(api, route) {
        this.api = api;
        this.route = route;
        this.ProductForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            unit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            quantity: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
        this.category = [];
        this.chosen_category = null;
        this.subs = [];
    }
    ProductSupplierComponent.prototype.ngOnInit = function () {
        this.getCategorys();
    };
    ProductSupplierComponent.prototype.getCategorys = function () {
        var _this = this;
        this.api.getCategory()
            .subscribe(function (res) { _this.category = res; });
    };
    ProductSupplierComponent.prototype.get_sub = function () {
        var _this = this;
        this.api.getSubCategory(this.chosen_category)
            .subscribe(function (res) { _this.subs = res; });
    };
    ProductSupplierComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ProductForm.value);
        this.api.new_product(this.ProductForm.value)
            .subscribe(function (res) {
            var id = res;
            var supplier_id = _this.route.snapshot.paramMap.get('id');
            console.log(supplier_id, id);
            var detail = { sid: supplier_id, pid: id };
            _this.api.supplier_product(detail)
                .subscribe(function (res) { });
        });
    };
    ProductSupplierComponent.prototype.select = function (event) {
        this.chosen_category = event.target.value;
        console.log(this.chosen_category);
        this.get_sub();
    };
    ProductSupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'product',
            template: "\n\n <div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n    \n    \n    <form [formGroup]=\"ProductForm\" (ngSubmit)=\"onSubmit()\">\n  \n  <select class=\"form-control\" (change)=\"select($event)\">\n  <option *ngFor=\"let category of category\" [ngValue]=\"category.id\">{{category.category_name}}</option>\n  </select>\n\n\n   <select class=\"form-control\" formControlName=\"type\">\n  <option *ngFor=\"let sub of subs\" [ngValue]=\"sub.id\">{{sub.sub_category_name}}</option>\n  </select>\n\n    <div class=\"form-group\">\n    <label>Product Code</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Product Code Number\" formControlName=\"name\">\n  </div>\n    <div class=\"form-group\">\n    <label>Size</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Size\" formControlName=\"size\">\n  </div>\n    <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"Price\" formControlName=\"price\">\n  </div>\n\n   <div class=\"form-group\">\n    <label>Units</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Units\" formControlName=\"unit\">\n  </div>\n \n    <div class=\"form-group\">\n    <label>quantity</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"quantity\" formControlName=\"quantity\">\n  </div>\n\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n</form>\n\n   </div>\n  </div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProductSupplierComponent);
    return ProductSupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/suppliers/supplier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuppliersComponent = /** @class */ (function () {
    function SuppliersComponent() {
    }
    SuppliersComponent.prototype.ngOnInit = function () {
    };
    SuppliersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'supplier',
            template: "\n\n<div class=\"container\"> \n  <div class=\"row\">\n   <div class=\"col-md-12\">\n\n<div class=\"row\">\n       <div class=\"col-md-4 below\">\n  <button mat-raised-button><a routerLink=\"/supplier-form/new\" routerLinkActive=\"active\">New Supplier Product </a></button>\n   </div>\n      <div class=\"col-md-4 below\">\n  <button mat-raised-button> <a routerLink=\"/supplier-form/exist\" routerLinkActive=\"active\"> Exist Supplier product</a></button>  \n     </div>\n\n</div>\n</div>\n</div>\n</div>\n  <router-outlet> </router-outlet>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuppliersComponent);
    return SuppliersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/product/suppliers/supplier_logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_product_service__ = __webpack_require__("../../../../../src/app/entry/product/add_product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierLogoComponent = /** @class */ (function () {
    function SupplierLogoComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.logo = null;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    SupplierLogoComponent.prototype.ngOnInit = function () {
    };
    SupplierLogoComponent.prototype.select = function (event) {
        this.logo = event.target.files[0];
    };
    SupplierLogoComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.logo);
        var formData = new FormData();
        formData.append('Logo', this.logo, this.logo.name);
        this.api.upload_supplier(this.id, formData)
            .subscribe(function (res) {
            if (_this.id) {
                _this.router.navigate(['/supplier-form/supplier-product', _this.id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    SupplierLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo',
            template: "\n    <div class=\"container\">\n   <div class=\"row\">\n   <div class=\"col-md-12\"> \n<label>Logo Company</label>\n    <input type=\"file\"   (change)=\"select($event)\">\n    <button (click)=\"upload()\"> upload </button>\n</div>\n</div>\n</div>\n\t ",
            styles: [__webpack_require__("../../../../../src/app/entry/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__add_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SupplierLogoComponent);
    return SupplierLogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/professional/new_professional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProfessionalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__professional_service__ = __webpack_require__("../../../../../src/app/entry/professional/professional.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewProfessionalComponent = /** @class */ (function () {
    function NewProfessionalComponent(api, router) {
        this.api = api;
        this.router = router;
        this.expert_1 = 'Masonry';
        this.expert_2 = 'Electricial';
        this.expert_3 = 'Plumber';
        this.expert_4 = 'Steel Fixer';
        this.expert_5 = 'Painter';
        this.expert_6 = 'ICT';
        this.expert_7 = 'Interior';
        this.expert_8 = 'Silks';
        this.fundi = [];
        this.check = null;
        this.ProfessionalForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            expert: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            regional: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            district: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
    }
    NewProfessionalComponent.prototype.ngOnInit = function () { };
    NewProfessionalComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.ProfessionalForm.value);
        this.api.new_fundi(this.ProfessionalForm.value)
            .subscribe(function (res) { _this.fundi = res; _this.check = 'true'; _this.ProfessionalForm.reset(); });
    };
    NewProfessionalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'new-pro',
            template: "\n<div class=\"container\">\n <div class=\"row\">\n    <div class=\"col-md-8\">\n    \n   \n    <form [formGroup]=\"ProfessionalForm\" (ngSubmit)=\"onSubmit()\"> \n  \n      <div class=\"form-group\">\n    <label>Fundi's</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" formControlName=\"name\">\n    </div>\n  \n\n\n  <label> Experience </label>\n   <select class=\"form-control\" formControlName=\"expert\">\n  <option [ngValue]=\"expert_1\"> Masonry </option>\n  <option [ngValue]=\"expert_2\"> Electricial </option>\n  <option [ngValue]=\"expert_3\"> Plumber </option>\n  <option [ngValue]=\"expert_4\"> Steel Fixer </option>\n  <option [ngValue]=\"expert_5\"> Painter </option>\n  <option [ngValue]=\"expert_6\"> ICT </option>\n  <option [ngValue]=\"expert_7\"> Interior </option>\n  <option [ngValue]=\"expert_8\"> Silks </option>\n  </select>\n\n    <div class=\"form-group\">\n    <label>Regional </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Regional\" formControlName=\"regional\">\n    </div>\n\n\n    <div class=\"form-group\">\n    <label>District </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"District\" formControlName=\"district\">\n    </div>\n\n    <div class=\"form-group\">\n    <label>Phone</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"Phone\" formControlName=\"phone\">\n    </div>\n\n\n <div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n\n</form>\n\n<div *ngIf=\"check\" class=\"show\">\n\n<table class=\"table\">\n<tr>\n <td>Name</td>  <td class=\"ans\"> {{fundi.name}} </td>\n</tr>\n<tr>\n <td> Experience  </td> <td class=\"ans\"> {{fundi.expert}} </td>\n</tr>\n<tr>\n <td> Regional </td>  <td class=\"ans\"> {{fundi.regional}} </td>\n</tr>\n<tr>\n <td> District  </td>  <td class=\"ans\">{{fundi.district}} </td>\n</tr>\n<tr>\n <td> Phone  </td>  <td class=\"ans\"> {{fundi.phone}}</td>\n</tr>\n</table>\n\nsuccesfully Registered!!!\n</div>\n\n   </div>\n  </div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/professional/professional.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__professional_service__["a" /* ProfessionalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewProfessionalComponent);
    return NewProfessionalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/professional/professional.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a { color: #FFF;\r\ntext-decoration:none;  }\r\n\r\n.ans { color:red; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/professional/professional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__professional_service__ = __webpack_require__("../../../../../src/app/entry/professional/professional.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent() {
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pro',
            template: "\n <router-outlet> </router-outlet>\n  ",
            styles: [__webpack_require__("../../../../../src/app/entry/professional/professional.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__professional_service__["a" /* ProfessionalService */]]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/professional/professional.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalModule", function() { return ProfessionalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__professional_routing__ = __webpack_require__("../../../../../src/app/entry/professional/professional.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__professional_component__ = __webpack_require__("../../../../../src/app/entry/professional/professional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_professional_component__ = __webpack_require__("../../../../../src/app/entry/professional/new_professional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfessionalModule = /** @class */ (function () {
    function ProfessionalModule() {
    }
    ProfessionalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__professional_component__["a" /* ProfessionalComponent */], __WEBPACK_IMPORTED_MODULE_5__new_professional_component__["a" /* NewProfessionalComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__professional_routing__["a" /* ProfessionalRouting */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */]],
            exports: []
        })
    ], ProfessionalModule);
    return ProfessionalModule;
}());



/***/ }),

/***/ "../../../../../src/app/entry/professional/professional.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professional_component__ = __webpack_require__("../../../../../src/app/entry/professional/professional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_professional_component__ = __webpack_require__("../../../../../src/app/entry/professional/new_professional.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfessionalRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__professional_component__["a" /* ProfessionalComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__new_professional_component__["a" /* NewProfessionalComponent */] }
        ] }
];
var ProfessionalRouting = /** @class */ (function () {
    function ProfessionalRouting() {
    }
    ProfessionalRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ProfessionalRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ProfessionalRouting);
    return ProfessionalRouting;
}());



/***/ }),

/***/ "../../../../../src/app/entry/professional/professional.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessionalService = /** @class */ (function () {
    function ProfessionalService(http) {
        this.http = http;
        this.fundiUrl = "http://127.0.0.1:8000/api/fundi";
        this.new_fundiUrl = "http://127.0.0.1:8000/api/fundi-store";
        this.galleryUrl = "http://127.0.0.1:8000/api/upload";
        this.LogoUrl = "http://127.0.0.1:8000/api/upload-professional";
    }
    ProfessionalService.prototype.fundi = function () {
        return this.http.get(this.fundiUrl)
            .map(function (response) { return response.json(); });
    };
    ProfessionalService.prototype.new_fundi = function (fundi) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_fundiUrl, JSON.stringify(fundi), options)
            .map(function (response) { return response.json(); });
    };
    ProfessionalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProfessionalService);
    return ProfessionalService;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/equipment_rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentRentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rental_service__ = __webpack_require__("../../../../../src/app/entry/rental/rental.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EquipmentRentalComponent = /** @class */ (function () {
    function EquipmentRentalComponent(api, route) {
        this.api = api;
        this.route = route;
        this.EquipmentForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            specific: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            month: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            week: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            day: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            hour: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            code: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    EquipmentRentalComponent.prototype.ngOnInit = function () {
    };
    EquipmentRentalComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.EquipmentForm.value);
        this.api.new_equipment(this.EquipmentForm.value)
            .subscribe(function (res) {
            var equip_id = res;
            var rental_id = _this.route.snapshot.paramMap.get('id');
            var detail = { rid: rental_id, eid: equip_id };
            console.log(equip_id, rental_id);
            _this.api.rental_equipment(detail)
                .subscribe(function (res) { });
        });
    };
    EquipmentRentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rental-equipment',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-8\">\n    \n   \n    <form [formGroup]=\"EquipmentForm\" (ngSubmit)=\"onSubmit()\"> \n  \n  \n\n    <div class=\"form-group\">\n    <label>Equipment Name</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"name\">\n  </div>\n  \n    <div class=\"form-group\">\n    <label>specification</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"specific\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Rental per Month </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"month\" formControlName=\"month\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Rental per Week </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"week\" formControlName=\"week\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Rental per Day</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"day\" formControlName=\"day\">\n  </div>\n\n\n\n\n    <div class=\"form-group\">\n    <label>Equipment Code</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"code\" formControlName=\"code\">\n  </div>\n\n\n\n <div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n\n</form>\n\n   </div>\n</div>\n</div>\n\n\n\t",
            styles: [__webpack_require__("../../../../../src/app/entry/rental/rental.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EquipmentRentalComponent);
    return EquipmentRentalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/new_rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rental_service__ = __webpack_require__("../../../../../src/app/entry/rental/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewRentalComponent = /** @class */ (function () {
    function NewRentalComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.RentalForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            person: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](),
            profile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
    }
    NewRentalComponent.prototype.ngOnInit = function () {
    };
    NewRentalComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.RentalForm.value);
        this.api.new_rental(this.RentalForm.value)
            .subscribe(function (res) {
            var id = res;
            console.log(res);
            if (id) {
                _this.router.navigate(['/rental/logo', id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    NewRentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'new-rental',
            template: "\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-8\">\n    \n   \n    <form [formGroup]=\"RentalForm\" (ngSubmit)=\"onSubmit()\"> \n  \n\n    <div class=\"form-group\">\n    <label>Company</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"name\">\n  </div>\n  \n    <div class=\"form-group\">\n    <label>Address</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Company Name\" formControlName=\"address\">\n  </div>\n\n\n    <div class=\"form-group\">\n    <label>Contact person</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"contact person\" formControlName=\"person\">\n  </div>\n\n    <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"email\" formControlName=\"email\">\n  </div>\n\n\n      <div class=\"form-group\">\n    <label>Contact Phone</label>\n    <input type=\"integer\" class=\"form-control\" placeholder=\"contact phone\" formControlName=\"phone\">\n  </div>\n\n<textarea class=\"form-control\" rows=\"3\" formControlName=\"profile\"></textarea>\n\n\n <div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n      </div>\n\n\n</form>\n\n   </div>\n</div>\n</div>\n\t",
            styles: [__webpack_require__("../../../../../src/app/entry/rental/rental.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NewRentalComponent);
    return NewRentalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/rental.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry/rental/rental.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/entry/rental/rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rental_service__ = __webpack_require__("../../../../../src/app/entry/rental/rental.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RentalComponent = /** @class */ (function () {
    function RentalComponent() {
    }
    RentalComponent.prototype.ngOnInit = function () {
    };
    RentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rental',
            template: __webpack_require__("../../../../../src/app/entry/rental/rental.component.html"),
            styles: [__webpack_require__("../../../../../src/app/entry/rental/rental.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__rental_service__["a" /* RentalService */]]
        }),
        __metadata("design:paramtypes", [])
    ], RentalComponent);
    return RentalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/rental.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalModule", function() { return RentalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rental_routing__ = __webpack_require__("../../../../../src/app/entry/rental/rental.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rental_component__ = __webpack_require__("../../../../../src/app/entry/rental/rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rental_index_component__ = __webpack_require__("../../../../../src/app/entry/rental/rental_index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_rental_component__ = __webpack_require__("../../../../../src/app/entry/rental/new_rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__equipment_rental_component__ = __webpack_require__("../../../../../src/app/entry/rental/equipment_rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rentals_component__ = __webpack_require__("../../../../../src/app/entry/rental/rentals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rental_logo_component__ = __webpack_require__("../../../../../src/app/entry/rental/rental_logo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var RentalModule = /** @class */ (function () {
    function RentalModule() {
    }
    RentalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__rental_component__["a" /* RentalComponent */], __WEBPACK_IMPORTED_MODULE_6__rental_index_component__["a" /* RentalIndexComponent */], __WEBPACK_IMPORTED_MODULE_7__new_rental_component__["a" /* NewRentalComponent */], __WEBPACK_IMPORTED_MODULE_8__equipment_rental_component__["a" /* EquipmentRentalComponent */], __WEBPACK_IMPORTED_MODULE_9__rentals_component__["a" /* RentalsComponent */], __WEBPACK_IMPORTED_MODULE_10__rental_logo_component__["a" /* RentalLogoComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__rental_routing__["a" /* RentalRouting */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */]],
            exports: []
        })
    ], RentalModule);
    return RentalModule;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/rental.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rental_component__ = __webpack_require__("../../../../../src/app/entry/rental/rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rental_index_component__ = __webpack_require__("../../../../../src/app/entry/rental/rental_index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_rental_component__ = __webpack_require__("../../../../../src/app/entry/rental/new_rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__equipment_rental_component__ = __webpack_require__("../../../../../src/app/entry/rental/equipment_rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rentals_component__ = __webpack_require__("../../../../../src/app/entry/rental/rentals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rental_logo_component__ = __webpack_require__("../../../../../src/app/entry/rental/rental_logo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RentalRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__rental_component__["a" /* RentalComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__rental_index_component__["a" /* RentalIndexComponent */],
                children: [
                    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__new_rental_component__["a" /* NewRentalComponent */] },
                    { path: 'exist', component: __WEBPACK_IMPORTED_MODULE_6__rentals_component__["a" /* RentalsComponent */] },
                    { path: 'equipment/:id', component: __WEBPACK_IMPORTED_MODULE_5__equipment_rental_component__["a" /* EquipmentRentalComponent */] },
                    { path: 'logo/:id', component: __WEBPACK_IMPORTED_MODULE_7__rental_logo_component__["a" /* RentalLogoComponent */] }
                ] }
        ] }
];
var RentalRouting = /** @class */ (function () {
    function RentalRouting() {
    }
    RentalRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(RentalRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RentalRouting);
    return RentalRouting;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/rental.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentalService = /** @class */ (function () {
    function RentalService(http) {
        this.http = http;
        this.new_rentalUrl = "http://127.0.0.1:8000/api/new-rental";
        this.rentalsUrl = "http://127.0.0.1:8000/api/rentals";
        this.rentalUrl = "http://127.0.0.1:8000/api/rental";
        this.new_equipmentUrl = "http://127.0.0.1:8000/api/new-equipment";
        this.rental_equipmentUrl = "http://127.0.0.1:8000/api/rental-equipment";
        this.uploadUrl = "http://127.0.0.1:8000/api/upload-rental";
    }
    RentalService.prototype.new_rental = function (rental) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_rentalUrl, JSON.stringify(rental), options)
            .map(function (response) { return response.json(); });
        ;
    };
    RentalService.prototype.rentals = function () {
        return this.http.get(this.rentalsUrl)
            .map(function (response) { return response.json(); });
    };
    RentalService.prototype.rental = function (id) {
        return this.http.get(this.rental_equipmentUrl + '/' + id)
            .map(function (response) { return response.json(); });
    };
    RentalService.prototype.rental_equipment = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.rental_equipmentUrl, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    RentalService.prototype.new_equipment = function (detail) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_equipmentUrl, JSON.stringify(detail), options)
            .map(function (response) { return response.json(); });
    };
    RentalService.prototype.upload = function (id, data) {
        return this.http.post(this.uploadUrl + '/' + id, data);
    };
    RentalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RentalService);
    return RentalService;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/rental_index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RentalIndexComponent = /** @class */ (function () {
    function RentalIndexComponent() {
    }
    RentalIndexComponent.prototype.ngOnInit = function () {
    };
    RentalIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: "\n<button><a [routerLink]=\"['new']\" routerLinkactive=\"active\"> New </a> </button>\n<button><a [routerLink]=\"['exist']\" routerLinkactive=\"active\"> Exist </a></button>\n<router-outlet> </router-outlet>\n   ",
            styles: [__webpack_require__("../../../../../src/app/entry/rental/rental.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RentalIndexComponent);
    return RentalIndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/rental_logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rental_service__ = __webpack_require__("../../../../../src/app/entry/rental/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentalLogoComponent = /** @class */ (function () {
    function RentalLogoComponent(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.logo = null;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    RentalLogoComponent.prototype.ngOnInit = function () {
    };
    RentalLogoComponent.prototype.selected = function (event) {
        this.logo = event.target.files[0];
    };
    RentalLogoComponent.prototype.upload = function () {
        var _this = this;
        console.log(this.logo);
        var formData = new FormData();
        formData.append('Logo', this.logo, this.logo.name);
        this.api.upload(this.id, formData)
            .subscribe(function (res) {
            if (_this.id) {
                _this.router.navigate(['/rental/equipment', _this.id]);
            }
            else {
                console.log('no access');
            }
        });
    };
    RentalLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo',
            template: "\n\n   <label>Logo Company</label>\n    <input type=\"file\" (change)=\"selected($event)\">\n    <input type=\"submit\" value=\"upload\" (click)=\"upload()\">\n \n\t",
            styles: [__webpack_require__("../../../../../src/app/entry/rental/rental.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RentalLogoComponent);
    return RentalLogoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/entry/rental/rentals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rental_service__ = __webpack_require__("../../../../../src/app/entry/rental/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RentalsComponent = /** @class */ (function () {
    function RentalsComponent(api, router) {
        this.api = api;
        this.router = router;
        this.RentalForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            rental: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]()
        });
        this.rentals = [];
    }
    RentalsComponent.prototype.ngOnInit = function () {
        this.get_rentals();
    };
    RentalsComponent.prototype.get_rentals = function () {
        var _this = this;
        return this.api.rentals()
            .subscribe(function (res) { return _this.rentals = res; });
    };
    RentalsComponent.prototype.onSubmit = function () {
        var id = this.RentalForm.value;
        this.router.navigate(['/entry/rental/equipment', id.rental]);
    };
    RentalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rentals',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-8\">\n   <form [formGroup]=\"RentalForm\" (ngSubmit)=\"onSubmit()\">\n  \n  <select class=\"form-control\" formControlName=\"rental\">\n  <option *ngFor=\"let rental of rentals\" [ngValue]=\"rental.id\"> {{rental.company_name}}</option>\n  </select>\n\n<div class=\"form-group\">\n       <input type=\"submit\" value=\"Register\">\n   </div>\n\n  </form>\n  </div>\n  </div>\n</div>\n\n\n\t",
            styles: [__webpack_require__("../../../../../src/app/entry/rental/rental.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RentalsComponent);
    return RentalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar { \r\n   border-right: 1px solid #f4f2f2;\r\n }\r\n\r\n.main { padding-top: 10px;\r\n        padding-bottom: 10px;\r\n        margin-top: 10px; \r\n        background-color: #fcfcfc;}\r\n\r\n#contener{\r\n position:relative;\r\n left:auto;\r\n right:auto;\r\n height: auto;\r\n margin-left: auto; \r\n margin-right:auto;\r\n width: 900px;\r\n padding-bottom: 10px;\r\n}\r\n\r\n#form{\r\n\twidth: 500px;\r\n\theight: auto;\r\n\tbackground-color:transparent;\r\n\tposition:relative;\r\n  left:auto;\r\n  right:auto;\r\n  margin-left:130px; \r\n \r\n}\r\n\r\n#center{\r\n\tposition: relative;\r\n\twidth:auto;\r\n\theight:auto;\r\n\tmargin-top: auto;\r\n\tleft:auto;\r\n\tright:auto;\r\n\tbackground-color:transparent; \r\n\t border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n#field{  \r\n    width: 300px;\r\n    height: 35px;\r\n    border-radius: 5px 5px 5px 5px;\r\n    border: 1px black solid; \r\n    margin-top:10px; \r\n\r\n    }\r\n\r\n#jay{  \r\n    width: 145px;\r\n    height: 30px;\r\n    border-radius: 5px 5px 5px 5px;\r\n    border: 1px black solid; \r\n    margin-top:10px;\r\n    }\r\n\r\n#coment {\r\n    margin-left:100px;\r\n    margin-top:10px;\r\n    width: 100px;\r\n    height: 30px;\r\n    border-radius: 5px 5px 5px 5px;\r\n    border: 2px blue solid;\r\n    }\r\n\r\n#coments {\r\n    margin-left:50px;\r\n    margin-top:10px;\r\n    width: 200px;\r\n    height: 40px;\r\n    border-radius: 5px 5px 5px 5px;\r\n    border: 2px blue solid;\r\n    }\r\n\r\n#contener2{\r\n  position:relative;\r\n left:auto;\r\n right:auto;\r\n margin-left: auto; \r\n margin-right:auto;\r\nheight: auto;\r\n width: 900px;\r\n\r\n background-color: transparent;\r\n}\r\n\r\n#form2{\r\n  position:relative;\r\n left:auto;\r\n right:auto;\r\n margin-left: auto; \r\n margin-right:auto;\r\npadding-top: 10px;\r\npadding-bottom:10px; \r\n  width:900px;\r\n  height:830PX;\r\n  background-color:transparent; \r\n   border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n#form3{\r\n  position:relative;\r\n left:auto;\r\n right:auto;\r\n margin-left: auto; \r\n margin-right:auto;\r\npadding-top: 0px;\r\npadding-bottom:0px; \r\n  width:900px;\r\n  height:800PX;\r\n  background-color:#999999; \r\n   border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\n#plane{\r\n  width:900px;\r\n  height:175px;\r\n  margin-top: 2px;\r\n  border: 0px #FAFAFA solid; \r\n  background-color:#FFFFFF; \r\n}\r\n\r\n#jayp{\r\n  width:900px;\r\n  height:175px;\r\n  margin-top: 2px;\r\n  height: auto;\r\n  border: 0px #FAFAFA solid; \r\n  background-color:#FFFFFF; \r\n}\r\n\r\n#line{\r\n  width: 900px;\r\n  height: 20px;\r\n  margin-top: 2px;\r\n  background-color:white;\r\n}\r\n\r\n#diva{\r\n  width: 250px;\r\n  height: auto;\r\n  background-color: white;\r\n  float: right;\r\n  border: 0px #FAFAFA solid;\r\n  text-align: right;\r\n    margin-top: 5px;\r\n    margin-right: 8px;\r\n   border-radius: 10px 10px 10px 10px; \r\n\r\n}\r\n\r\n#divb{\r\n  width:250px;\r\n  height: auto;\r\n  background-color: white;\r\n  border: 0px #FAFAFA solid; \r\n    margin-top: 4px;\r\n  float: left;\r\n  margin-left: 7px;\r\n  border-radius: 10px 10px 10px 10px; \r\n}\r\n\r\n#divjay{\r\n  width:900px;\r\n  height: auto;\r\n  background-color: grey;\r\n  border: 0px #FAFAFA solid; \r\n  float: left;\r\n  margin-left: 7px;\r\n  border-radius: 10px 10px 10px 10px; \r\n}\r\n\r\n#flow{\r\n\r\n  width: 900px;\r\n  height: 70px;\r\n  margin-top: 2px;\r\n  background-color:white;\r\n  border-top:  1px #000000 solid;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 col-md-3 sidebar\">\r\n          <ul class=\"nav nav-sidebar\">\r\n            <li><a routerLink=\"#\" routerLinkActive=\"active\">Create Tax Invoice</a></li>\r\n            <li><a routerLink=\"/#\" routerLinkActive=\"active\">Add Products</a></li>\r\n            <li><a routerLink=\"/#\" routerLinkActive=\"active\">Modify Products</a></li>\r\n            <li><a routerLink=\"/#\" routerLinkActive=\"active\">Approve Products</a></li>\r\n            <li><a routerLink=\"/#\" routerLinkActive=\"active\">Publish Company</a></li>\r\n            <li><a routerLink=\"/#\" routerLinkActive=\"active\">Create New User</a></li>\r\n            <li><a routerLink=\"/#\" routerLinkActive=\"active\">My Account</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-8  col-md-9 content\">\r\n          <router-outlet> </router-outlet>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/view/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoices_invoice_service__ = __webpack_require__("../../../../../src/app/view/admin/invoices/invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin',
            template: __webpack_require__("../../../../../src/app/view/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/admin/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__invoices_invoice_service__["a" /* InvoiceService */]]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing__ = __webpack_require__("../../../../../src/app/view/admin/admin.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("../../../../../src/app/view/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_form_1_component__ = __webpack_require__("../../../../../src/app/view/admin/invoices/form_1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoices_form_2_component__ = __webpack_require__("../../../../../src/app/view/admin/invoices/form_2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoices_generate_component__ = __webpack_require__("../../../../../src/app/view/admin/invoices/generate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_5__invoices_form_1_component__["a" /* FormOneComponent */], __WEBPACK_IMPORTED_MODULE_6__invoices_form_2_component__["a" /* FormTwoComponent */], __WEBPACK_IMPORTED_MODULE_7__invoices_generate_component__["a" /* GenerateComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__admin_routing__["a" /* AdminRouting */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */]],
            exports: []
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/view/admin/admin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/view/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoices_form_1_component__ = __webpack_require__("../../../../../src/app/view/admin/invoices/form_1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoices_form_2_component__ = __webpack_require__("../../../../../src/app/view/admin/invoices/form_2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoices_generate_component__ = __webpack_require__("../../../../../src/app/view/admin/invoices/generate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AdminRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__invoices_form_1_component__["a" /* FormOneComponent */] },
            { path: 'generate/:id', component: __WEBPACK_IMPORTED_MODULE_4__invoices_form_2_component__["a" /* FormTwoComponent */] },
            { path: 'pdf/:id', component: __WEBPACK_IMPORTED_MODULE_5__invoices_generate_component__["a" /* GenerateComponent */] }
        ]
    }
];
var AdminRouting = /** @class */ (function () {
    function AdminRouting() {
    }
    AdminRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(AdminRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AdminRouting);
    return AdminRouting;
}());



/***/ }),

/***/ "../../../../../src/app/view/admin/invoices/form_1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_service__ = __webpack_require__("../../../../../src/app/view/admin/invoices/invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormOneComponent = /** @class */ (function () {
    function FormOneComponent(api, router) {
        this.api = api;
        this.router = router;
        this.FormOne = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            person: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            phone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            regional: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
    }
    FormOneComponent.prototype.ngOnInit = function () {
    };
    FormOneComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.FormOne.value);
        this.api.store_company(this.FormOne.value)
            .subscribe(function (res) {
            var id = res;
            _this.FormOne.reset();
            if (id > 0) {
                _this.router.navigate(['generate', id]);
            }
        });
    };
    FormOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'one',
            template: "\n\n\n\n\t<div id=\"contener\">\n\n\t\t<div id=\"center\">\n\t<div id=\"side\">\n\t\t\t\n\t\t\t\t\n\t\t</div>\n\n\t\t<div id=\"form\">\n\t\t\t<form [formGroup]=\"FormOne\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\n\t\t\t<table width=\"500\" border=\"0\" >\n\t\t\t\t  <tr>\n                <th  scope=\"col\" width=\"170\">BILL TO:\t</th>\n                <th>\n \n             </th>\n              </tr>\n               <tr>\n                <th  scope=\"col\">Creation Setup\t</th>\n                <td><select id=\"field\">\n\t\t\t\t\t\t\t\t<option>individual</option> \n\t\t\t\t\t\t\t\t<option>company</option>\n\t\t\t\t</select> </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Company Name </th>\n                <td><input type=\"text\" formControlName=\"name\" placeholder=\"Enter Creation Name\"  id=\"field\"  required/><br/></td>\n              </tr>\n              <tr>\n              <th scope=\"row\">Status\t</th>\n                <td><select  id=\"field\" formControlName=\"type\">\n                  <option [ngValue]=\"8\">Manufacturer</option> \n               \t  <option [ngValue]=\"9\">Supplier</option>\n\t                <option [ngValue]=\"7\">Specialist</option>\n\t                <option [ngValue]=\"10\">Equipment Rental</option>\n\t                <option [ngValue]=\"12\"> Quality surveying </option>\n\t                <option [ngValue]=\"13\"> Architect </option>\n\t                <option [ngValue]=\"14\"> Land scape designer </option>\n\t                <option [ngValue]=\"15\"> Interior designer </option>\n\t               <option [ngValue]=\"16\"> Technologists </option>\n\t               <option [ngValue]=\"17\"> Civil contractors </option>\n\t               <option [ngValue]=\"18\">  Building contractors</option>\n\t               <option [ngValue]=\"19\"> Building and civil contractors </option>\n\t               <option [ngValue]=\"20\">  Mecanical enginear</option>\n\t               <option [ngValue]=\"21\">  Electrical enginearing</option>\n\n\t\t\t\t</select></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">location </th>\n                <td> <input type=\"text\" formControlName=\"address\" placeholder=\"Enter location\" required=\"\" id=\"field\"/></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Region</th>\n                <td><input type=\"text\" formControlName=\"regional\" placeholder=\"Enter region\" required=\"\" id=\"field\" /></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">company TIN;</th>\n                <td> <input type=\"integer\" formControlName=\"tin\" placeholder=\"Enter company Tin\" required=\"\" id=\"field\"/></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Contact Person;</th>\n                <td>\t<input type=\"text\" formControlName=\"person\" placeholder=\"Enter First Mame\" id=\"jay\"> </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">\tEmail;</th>\n                <td>\t <input type=\"text \" formControlName=\"email\" placeholder=\"Enter Email\"  id=\"field\" required/></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">Mobile No ;</th>\n                <td>\t   <input type=\"integer\" formControlName=\"phone\" placeholder=\"Enter your Mobile Nom\"  id=\"field\" /></td>\n              </tr>\n              <tr>\n                <th scope=\"row\">&nbsp;</th>\n                <td><input type=\"submit\" value=\"NEXT\"  id=\"coments\" /></td>\n              </tr>\n            </table>\n\t\t\t<br/>\n\t\t\t</form>\n</div>\n\t\t\n\t\t</div>\n\n\n\t</div>\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/admin/admin.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], FormOneComponent);
    return FormOneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/admin/invoices/form_2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_service__ = __webpack_require__("../../../../../src/app/view/admin/invoices/invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormTwoComponent = /** @class */ (function () {
    function FormTwoComponent(api, router, route) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.items = [];
        this.service = [];
        this.id = this.route.snapshot.paramMap.get('id');
        this.FormOne = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            item: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
        this.FormTwo = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            month: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            start: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            end: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            amount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            total: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            display: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            vat: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            discount: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    FormTwoComponent.prototype.ngOnInit = function () {
        this.get_items();
    };
    FormTwoComponent.prototype.get_items = function () {
        var _this = this;
        this.api.get_items().
            subscribe(function (res) { _this.service = res; });
    };
    FormTwoComponent.prototype.oneSubmit = function () {
        this.api.add_item(this.FormOne.value, this.id)
            .subscribe(function (res) { console.log('yes'); });
        console.log(this.FormOne.value, this.id);
    };
    FormTwoComponent.prototype.twoSubmit = function () {
        console.log(this.FormTwo.value);
    };
    FormTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'two',
            template: "\n\n\n<div class=\"col-md-4\">\n\n\n</div>\n\n<div class=\"col-md-8\">\n\n\n     <h5> company </h5>\n\n\n <form class=\"form-horizontal\" [formGroup]=\"FormOne\" (ngSubmit)=\"oneSubmit()\">\n\n   \n \n   <div class=\"form-group\">\n     <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Choose planning</label>\n     <div class=\"col-sm-10\">\n      <select formControlName=\"item\">\n       <option *ngFor=\"let service of service\" [ngValue]=\"service.id\">{{service.invoice_name}} </option>\n     </select>\n  </div>\n  </div>\n \n\n <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-default\">ADD</button>\n    </div>\n  </div>\n</form>\n\n\n <form class=\"form-horizontal\" [formGroup]=\"FormTwo\" (ngSubmit)=\"twoSubmit()\">\n <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <div class=\"checkbox\">\n        <label>\n           <input type=\"radio\" id=\"optionsRadios2\" value='3' formControlName=\"month\"> 1 months\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <div class=\"checkbox\">\n        <label>\n           <input type=\"radio\"  id=\"optionsRadios2\" value='2' formControlName=\"month\">3 months\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <div class=\"checkbox\">\n        <label>\n           <input type=\"radio\"  id=\"optionsRadios2\" value=\"1\" formControlName=\"month\"> 6 months\n        </label>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\"  id=\"optionsRadios2\" formControlName=\"month\"> 12 months\n        </label>\n      </div>\n    </div>\n  </div>\n   <div class=\"form-group\">\n     <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">From</label>\n     <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"From\" formControlName=\"start\">\n  </div>\n  </div>\n   <div class=\"form-group\">\n     <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">TO</label>\n     <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"To\" formControlName=\"end\">\n  </div>\n  </div>\n   <div class=\"form-group\">\n     <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Amount </label>\n     <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Amount to Display here\" formControlName=\"display\">\n  </div>\n  </div>\n   <div class=\"form-group\">\n     <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Total</label>\n     <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Total\" formControlName=\"total\">\n  </div>\n  </div>\n   <div class=\"form-group\">\n     <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">VAT</label>\n     <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"VAT\" formControlName=\"vat\">\n  </div>\n  </div>\n   <div class=\"form-group\">\n     <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Discount</label>\n     <div class=\"col-sm-10\">\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Discount\" formControlName=\"discount\">\n  </div>\n  </div>\n\n    <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-default\">Generate</button>\n    </div>\n  </div>\n  </form>\n\n</div>\n\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/admin/admin.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FormTwoComponent);
    return FormTwoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/admin/invoices/generate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("../../../../../src/app/view/admin/invoices/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenerateComponent = /** @class */ (function () {
    function GenerateComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.data = [];
        this.company = [];
    }
    GenerateComponent.prototype.ngOnInit = function () {
        this.get_data();
        this.get_client();
    };
    GenerateComponent.prototype.get_data = function () {
        var _this = this;
        this.api.get_invoices(this.id)
            .subscribe(function (res) { return _this.data = res; });
    };
    GenerateComponent.prototype.get_client = function () {
        var _this = this;
        this.api.get_company(this.id)
            .subscribe(function (res) { return _this.company = res; });
    };
    GenerateComponent.prototype.download = function () {
        var elementToPrint = document.getElementById('contener2');
        var pdf = new __WEBPACK_IMPORTED_MODULE_3_jspdf__('p', 'pt', 'a4');
        pdf.addHTML(elementToPrint, function () {
            pdf.save('web.pdf');
        });
    };
    GenerateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: "\n\n<div id=\"contener2\"> \n\t\t<div id=\"form2\">\n\t\t<div id=\"form3\">\n\t\t\t<div id=\"plane\">\n\t\t\t\t<div id=\"diva\">\n\t\t\t\t\t\t<table width=\"250\" align=\"right\"  border=\"0\">\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t    <td><img src=\"../../../assets/web log.png\" width=\"229\" height=\"88\"></td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t    <td><div align=\"right\">Invoice Date: <strong>3/12/2012</strong></div></td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t\t    <td><div align=\"right\">Invoice No: <strong>001256</strong></div></td>\n\t\t\t\t\t\t\t  </tr>\n\t\t\t\t  </table>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"divb\"><br/>\n\t\t\t\t\t\t<table width=\"250\" border=\"0\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Copro Tanzania</strong></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td>Bungoni/Binti Kamba Street</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td>Ilala</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td>Dar es Salaam</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td>Tanzania</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td>Our TIN: 175-451-997</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div id=\"line\">\n\t\t\t\t <div align=\"center\"><strong>PROFORMA INVOICE</strong></div>\n\t\t\t</div>\n\t\t\t<div id=\"plane\">\n\t\t\t\t<div id=\"divb\">\n\t\t\t\t\t<div id=\"divb\">\n\t\t\t\t\t\t<table width=\"300\" border=\"0\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Bill To</strong><br/></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <br/>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Customer</strong>: {{company.contact_person}} </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Company Name</strong>:{{company.company_name}}</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Region</strong>:{{company.regional}} </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Customer TIN </strong>:{{company.TIN}}</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Attn to: Contact Person</strong></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t</table>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div id=\"plane\">\n\t\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t\t<div id=\"jayp\">\n\t\t\n\t\t\t\t <div id=\"plane\"><table width=\"900\" height=\"168\" align=\"center\" border=\"0\" >\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <th scope=\"col\" width=\"200\" ><div align=\"center\">Item No.</div></th>\n\t\t\t\t\t    <th scope=\"col\" width=\"1500\" ><div align=\"center\">Description</div></th>\n\t\t\t\t\t    <th scope=\"col\" width=\"300\" >&nbsp;</th>\n\t\t\t\t\t    <th scope=\"col\" width=\"250\" ><div align=\"center\">Amount</div></th>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr *ngFor=\"let data of data\">\n\t\t\t\t\t    <td><div align=\"center\">{{data.id}} </div></td>\n\t\t\t\t\t    <td><div align=\"center\">{{data.invoice_name}} </div></td>\n\t\t\t\t\t    <td></td>\n\t\t\t\t\t    <td><div align=\"center\">{{data.amount}}TZS.</div></td>\n\t\t\t\t\t  </tr>\n\t\t\t\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td></td>\n\t\t\t\t\t    <td></td>\n\t\t\t\t\t    <td><b><div align=\"center\">Total</div></b></td>\n\t\t\t\t\t    <td></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td></td>\n\t\t\t\t\t    <td></td>\n\t\t\t\t\t    <td><b><div align=\"center\">VAT</div></b></td>\n\t\t\t\t\t    <td><div align=\"center\">0.00 TZS</div></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td></td>\n\t\t\t\t\t    <td> </td>\n\t\t\t\t\t    <td><b><div align=\"center\">Discount</div></b></td>\n\t\t\t\t\t    <td><div align=\"center\">0.00 TZS</div></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t    <td> </td>\n\t\t\t\t\t    <td> </td>\n\t\t\t\t\t    <td><b><div align=\"center\">Grand Total</div></b></td>\n\t\t\t\t\t    <td><b><div align=\"center\">0.00 TZS</div></b></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t</table>\n\t\t \t  </div>\n\n\t\t\t</div>\n\t\t\t<div id=\"plane\">\n\t\t\t\t<div id=\"diva\">\n\t\t\t\t\t<table width=\"250\" border=\"0\">\n\t\t\t\t\t\t \n\t\t\t\t\t\t\n\t\t\t\t\t\t  <br/>\n\t\t\t\t\t\t  <br/>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t    <td><div align=\"right\"><strong>Bank Details</strong></div></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t \n\t\t\t\t\t\t   \n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td><div align=\"right\">ACC Name : Copro Tanzania</div></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td><div align=\"right\">CRDB Acc No: 0714 000 000 </div></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> <div align=\"right\">NMB Acc No: 0784 000 000</div></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  \n\t\t\t\t  </table>\n\t\t\t\t</div>\n\n\t\t\t\t<div id=\"divb\"><br/>\n\n\t\t\t\t\t<table width=\"300\" border=\"0\">\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t    <td><strong>Terms and Condition</strong><br/></td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td>Please pay through </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td>MPESA : 0767 000 000 </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td> TIGOPESA: 0714 000 000</td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t   <tr>\n\t\t\t\t\t\t  \t<td> </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  \t<td>AIRTEL MONEY: 0784 000 000 </td>\n\t\t\t\t\t\t  </tr>\n\t\t\t\t  </table>\n\t\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div id=\"flow\">\n\t\t\t\t <div align=\"center\"><em>Please send your Proof of Payment to accounts@copro.co.tz or Call: 0677 700 001</em></div> \n\t\t\t\t <br/>\n\t\t\t\t <div align=\"center\"><em>This invoice is generated by (Name of login Person)</em></div> \n\t\t\t\t <br/>\n\n\t\t\t</div>\n\t\t\t\n\n\t\t</div>\n<button (click)=\"download()\"> down </button>\n\t</div>\n\n\n\n\t</div>\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], GenerateComponent);
    return GenerateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/admin/invoices/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
        this.itemUrl = "http://127.0.0.1:8000/api/items";
        this.new_companyUrl = "http://127.0.0.1:8000/api/store-company";
        this.new_itemUrl = "http://127.0.0.1:8000/api/store_invoice";
        this.invoiceUrl = "http://127.0.0.1:8000/api/company_invoice";
        this.companyUrl = "http://127.0.0.1:8000/api/company";
    }
    InvoiceService.prototype.get_items = function () {
        return this.http.get(this.itemUrl)
            .map(function (response) { return response.json(); });
    };
    InvoiceService.prototype.store_company = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_companyUrl, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    InvoiceService.prototype.add_item = function (data, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.new_itemUrl + '/' + id, JSON.stringify(data), options)
            .map(function (response) { return response.json(); });
    };
    InvoiceService.prototype.get_invoices = function (id) {
        return this.http.get(this.invoiceUrl + '/' + id)
            .map(function (response) { return response.json(); });
    };
    InvoiceService.prototype.get_company = function (id) {
        return this.http.get(this.companyUrl + '/' + id)
            .map(function (response) { return response.json(); });
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "../../../../../src/app/view/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .footer {\r\n \tbackground-color:#999999;\r\n \tpadding: 20px 10px 5px 10px;\r\n \tcolor:#ffffff;\r\n }\r\n\r\n li { list-style: none;\r\n        padding-top: 10px; \t\r\n        text-align: left; }\r\n\r\n .intro { text-align: center;  }\r\n\r\n .center { padding-bottom: 10px; padding-top:0px; border-top: 1px solid #fcf6ef; background-color:#454545;}\r\n\r\n .center > p > img {\r\n   \twidth: 70px;\r\n   \theight: 70px;\r\n   }\r\n\r\n .cont { padding-left: 0px; padding-top: 0px; }\r\n\r\n .cont2 { padding-left: 0px; padding-top: 0px; margin-left:100px; }\r\n\r\n .cont3 { padding-left: 0px; padding-top: 0px; width:100px; margin-left: 50px;}\r\n\r\n .cont3 > ul > li > img {\r\n   \twidth: 40px;\r\n   \theight: 40px;\r\n   }\r\n\r\n .term {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    padding-left: 35px;\r\n    padding-right: 35px; \r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\">\r\n\r\n\r\n \r\n  <div class=\"row contact\">\r\n   <div class=\"col-md-4 cont\">\r\n     \r\n        <ul>\r\n            <li><strong>About Us</strong></li>\r\n            <li>company overview</li>\r\n            <li><a routerLink=\"/term\" routerLinkActive=\"active\"> Term and Condition </a></li>\r\n            <li><a routerLink=\"/privacy\" routerLinkActive=\"active\">privacy </a></li>\r\n            <li>Contact Us</li>\r\n       \r\n        </ul>\r\n  </div> \r\n\r\n <div class=\"col-md-4 cont2\">\r\n     \r\n        <ul>\r\n           <li><strong>Quick links</strong></li>\r\n            <li><a href=\"http://www.aqrb.go.tz\">AQRB</a></li>\r\n            <li><a href=\"http://www.tiqs.co.tz\">TIQS</a></li>\r\n            <li><a href=\"http://www.crb.go.tz\">CRB</a></li>\r\n            <li><a href=\"http://www.arb.go.tz\">ERB</a></li>\r\n            <li><a href=\"http://www.ppra.go.tz\">PPRA</a></li>\r\n\r\n       \r\n        </ul>\r\n  </div>\r\n\r\n\r\n\r\n    <div class=\"col-md-4 cont3\">\r\n           <strong>Share Us On</strong>\r\n              <ul>\r\n           \r\n          <li><img src=\"..\\..\\assets\\footer\\facebook.png\"></li>\r\n            <li><img src=\"..\\..\\assets/footer/instagram.png\"></li>\r\n            <li><img src=\"..\\..\\assets/footer/twiter.png\"></li>\r\n            <li><img src=\"..\\..\\assets/footer/youtube.png\"></li>\r\n        </ul>\r\n  </div>\r\n\r\n </div>\r\n\r\n  <div class=\"row\">\r\n   <div class=\"col-md-12 center\">\r\n   <p><img src=\"..\\..\\assets/footer/footer-logo.png\"> \r\n    \r\n   &copy; Copyright 2018 COPRO TANZANIA\r\n    </p>\r\n   </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n "

/***/ }),

/***/ "../../../../../src/app/view/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'footer',
            template: __webpack_require__("../../../../../src/app/view/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/footer/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'privacy',
            template: "\n  <div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12 term\">\n<h4>Privacy Policy</h4>\n\n<p>This privacy Policy governs the privacy terms of our Website, located at www.copro.co.tz. Any capitalized terms not defined in our Privacy Policy, have the meaning as specified in our Terms of Use accessible at https://copro.co.tz/terms-and-conditions\n\n<h4>Your Privacy</h4>\n\n<p>Copro Tanzania follows all legal requirements to protect your privacy. Our Privacy Policy is a legal statement that explains how we may collect information from you, how we may share your information, and how you can limit our sharing of your information. You will see terms in our Privacy Policy that are capitalized. These terms have meanings as described in the Definitions section below.</p>\n\n<h4>Definitions</h4>\n\n<p>\"Non Personal Information\" is information that is not personally identifiable to you and that we automatically collect when you access our Website with a web browser. It may also include publicly available information that is shared between you and others.</p>\n\n<p>\"Personally Identifiable Information\" is non-public information that is personally identifiable to you and obtained in order for us to provide you within our Website. Personally Identifiable Information may include information such as your name, email address, and other related information that you provide to us or that we obtain about you.</p>\n\n<h4>Information We Collect</h4>\n\n<p>Generally, you control the amount and type of information you provide to us when using our Website.\nAs a Visitor, you can browse our website to find out more about our Website. You are not required to provide us with any Personally Identifiable Information as a Visitor.\nComputer Information Collected\nWhen you use our Website, we automatically collect certain computer information by the interaction of your mobile phone or web browser with our Website. Such information is typically considered Non Personal Information. We also collect the following:</p>\n\n<h4>\u2022\tCookies</h4>\n\n<p><p>Our Website uses \"Cookies\" to identify the areas of our Website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to personalize the Content that you see on our Website. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our Website correctly or at all. We never place Personally Identifiable Information in Cookies.</p>\n\n<h4>\u2022\tThird Party Tracking Tools</h4>\n\n<p>We also use third party tracking tools to improve the performance and features of our Website. These third party tracking tools are designed to collect only Non-Personal Information about your use of our Website. However, you understand that such tools are created and managed by parties outside our control. As such, we are not responsible for what information is actually captured by such third parties or how such third parties use and protect that information.</p>\n\n<p>\u2022\tWe use Remarketing with Google Analytics to advertise on third party sites to you after you visited our Site. We and our third party vendors, like Google, use first party cookies (such as the Google Analytics cookie) and third party cookies (such as the DoubleClick cookie) to inform, optimize and serve ads based on your past visits to our Site.</p>\n\n<p>You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page. Google also recommends installing the Google Analytics Opt-out Browser Add-on for your browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.</p>\n\n<h4>\u2022\tAutomatic Information</h4>\n\n<p>We automatically receive information from your web browser or mobile device. This information includes the name of the website from which you entered our Website, if any, as well as the name of the website to which you're headed when you leave our website. This information also includes the IP address of your computer/proxy server that you use to access the Internet, your Internet Website provider name, web browser type, type of mobile device, and computer operating system. We use all of this information to analyze trends among our Users to help improve our Website.</p>\n\nHow We Use Your Information\n\nWe use the information we receive from you as follows:\n\n<h4>\u2022\tCustomizing Our Website</h4>\n\n<p>We may use the Personally Identifiable information you provide to us along with any computer information we receive to customize our Website.</p>\n\n<h4>\u2022\tSharing Information with Affiliates and Other Third Parties</h4>\n\n<p>We do not sell, rent, or otherwise provide your Personally Identifiable Information to third parties for marketing purposes. We may provide your Personally Identifiable Information to affiliates that provide services to us with regards to our Website (i.e. payment processors, Website hosting companies, etc.); such affiliates will only receive information necessary to provide the respective services and will be bound by confidentiality agreements limiting the use of such information.</p>\n\n<h4>\u2022\tData Aggregation</h4>\n\n<p>We retain the right to collect and use any Non Personal Information collected from your use of our Website and aggregate such data for internal analytics that improve our Website and Service as well as for use or resale to others. At no time is your Personally Identifiable Information included in such data aggregations.</p>\n\n<h4>\u2022\tLegally Required Releases of Information</h4>\n\n<p>We may be legally required to disclose your Personally Identifiable Information, if such disclosure is (a) required by subpoena, law, or other legal process; (b) necessary to assist law enforcement officials or government enforcement agencies; (c) necessary to investigate violations of or otherwise enforce our Legal Terms; (d) necessary to protect us from legal action or claims from third parties including you and/or other Members; and/or (e) necessary to protect the legal rights, personal/real property, or personal safety of Copro Tanzania, our Users, employees, and affiliates.</p>\n\n<h4>Do Not Track (\"DNT\")</h4>\n\n<p>We do not support Do Not Track (\"DNT\"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked. You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.\nProtecting Your Child's Privacy</p>\n\n<p>Our Website is not designed for use by anyone under the age of 13 (\"Child\"), though we realize we may have a Child attempt to make purchases through our Website. We do not verify the age of our Users nor do we have any liability for verifying a User's age. If you are a Child, please seek the permission of a parent or guardian before using our Website.If you are a parent or guardian and believe your Child is using our Website, please contact us to remove your Child's account; we reserve the right to ask you for verification of your relationship to the Child before we honor such a request. If we discover that a Child has created an account on our Website, we will immediately delete the account as soon as we discover it, we will not use the information for any purpose, and we will not disclose the information to third parties. However, as parent of such a Child, you understand that you are legally liable for any transactions created by the Child.\nLinks to Other Websites</p>\n\n<p>Our Website may contain links to other websites that are not under our direct control. These websites may have their own policies regarding privacy. We have no control of or responsibility for linked websites and provide these links solely for the convenience and information of our visitors. You access such linked Websites at your own risk. These websites are not subject to this Privacy Policy. You should check the privacy policies, if any, of those individual websites to see how the operators of those third-party websites will utilize your personal information. In addition, these websites may contain a link to Websites of our affiliates. The websites of our affiliates are not subject to this Privacy Policy, and you should check their individual privacy policies to see how the operators of such websites will utilize your personal information.</p>\n\n<h4>Our Email Policy</h4>\n\n<p>Our affiliates and we fully comply with national laws regarding SPAM. You can always opt out of receipt of further email correspondence from us and/or our affiliates. We agree that we will not sell, rent, or trade your email address to any unaffiliated third-party without your permission.\nPrivacy Policy Updates</p>\n\n<p>We reserve the right to modify this Privacy Policy at any time. You should review this Privacy Policy frequently. If we make material changes to this policy, we may notify you on our Website, by a blog post, by email, or by any method we determine. The method we chose is at our sole discretion. We will also change the \"Last Updated\" date at the beginning of this Privacy Policy. Any changes we make to our Privacy Policy are effective as of this Last Updated date and replace any prior Privacy Policies.</p>\n\n<p>Questions About Our Privacy Practices or This Privacy Policy\nIf you have any questions about our Privacy Practices or this Policy, please contact us.</p>\n\n</div>\n</div>\n</div>\n \n  ",
            styles: [__webpack_require__("../../../../../src/app/view/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/footer/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'terms',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12 term\">\n\n<h2>Our Terms and conditions</h2>\n<h3>Last updated: (\u2026\u2026..)</h3>\n<h4> Introduction </h4>\n<p>copro.co.tz is a market place which is open for everybody to promote their construction products on our Site. None of the products listed on the Site are owned or sold by copro.co.tz, neither is copro.co.tz involved in the actual sale transaction between the buyers and sellers on its Site. For the purpose of this website \"we\", us\" and \"our\" all refer to copro.co.tz.</p>\n\n<p>By accessing the Site, you confirm your understanding of the Terms and Conditions. If you do not agree to these Terms and Conditions of use, you shall not use this website. The Site reserves the right to change, modify, add, or remove portions of these Terms and Conditions of use at any time. Changes will be effective when posted on the Site with no other notice provided. Please check these Terms and Conditions of use regularly for updates. Your continued use of the Site following the posting of changes to these Terms and Conditions of use constitutes your acceptance of those changes.</p> \n\n<h3>Use of the site</h3>\n\n<p>You confirm that you are at least 18 years of age or are accessing the Site under the supervision of a parent or legal guardian. We grant you a non-transferable, revocable and non-exclusive license to use the Site, in accordance with the Terms and Conditions described herein, for the purpose of promoting for construction products advertised on the Site. Commercial use or use on behalf of any third party is prohibited, except as explicitly permitted by us in advance. Any breach of these Terms and Conditions shall result in the immediate revocation of the license granted in this paragraph without notice to you. Content provided on this site is solely for informational purposes. Product representations expressed on this Site are those of the vendors and are not made by us. Submissions or opinions expressed on this Site are those of the individual posting such content and may not reflect our opinions. Certain services and related features that may be made available on the Site may require registration or subscription. Should you choose to register or subscribe for any such services or related features, you agree to provide accurate and current information about yourself, and to promptly update such information if there are any changes. Every user of the Site is solely responsible for keeping passwords and other account identifiers safe and secure. The account owner is entirely responsible for all activities that occur under such password or account. Furthermore, you must notify us of any unauthorized use of your password or account. The Site shall not be responsible or liable, directly or indirectly, in any way for any loss or damage of any kind incurred as a result of, or in connection with, your failure to comply with this section. During the registration process you agree to receive promotional emails from the Site. You can subsequently opt out of receiving such promotional e-mails by clicking on the link at the bottom of any promotional email.</p> \n\n<h3>Accessibility of website</h3>\n\n<p>Our aim is to ensure accessibility to the website at all times, however, we make to representations of that nature and reserve the right to terminate the website at any time and without notice. You accept that service interruption may occur in order to allow for website improvements, scheduled maintenance or may also be due to outside factors beyond our control.</p> \n\n<h3>Abusing 'Copro'</h3>\n\n<p>'Copro' and the construction stakeholders together to keep our sites and services working properly and the community safe. Please report problems, offensive content and policy breaches to us to our email complaints@copro.co.tz. We work to ensure that listed items do not infringe upon the copyright, trademark or other intellectual property rights of third parties. If you believe that your intellectual property rights have been infringed, please notify our team through the email above and we will investigate.</p> \n\n<h3>User submissions</h3>\n\n<p>Anything that you submit to the Site and/or provide to us, including but not limited to, questions, reviews, comments, and suggestions (collectively, \"Submissions\") will become our sole and exclusive property and shall not be returned to you. In addition to the rights applicable to any Submission, when you post comments or reviews to the Site, you also grant us the right to use the name that you submit, in connection with such review, comment, or other content. You shall not use a false e-mail address, pretend to be someone other than yourself or otherwise mislead us or third parties as to the origin of any Submissions. We may, but shall not be obligated to, remove or edit any Submissions.</p> \n\n<h3>Trademarks and copyrights</h3>\n\n<p>All intellectual property rights, whether registered or unregistered, in the Site, information content on the Site and all the website design, including, but not limited to, text, graphics, software, photos, video, music, sound, and their selection and arrangement, and all software compilations, underlying source code and software shall remain our property. The entire contents of the Site also are protected by copyright as a collective work under Tanzania copyright laws and international conventions. All rights are reserved.</p> \n\n<h3>Legal disputes</h3>\n\n<p>If a dispute arises between you and 'Copro', our goal is to provide you with a neutral and cost effective means of resolving the dispute quickly. Accordingly, you and 'Copro' agree that we will resolve any claim or controversy at law or equity that arises out of this Agreement or our services in accordance with one of the subsections below or as we and you otherwise agree in writing. Before resorting to these alternatives, we strongly encourage you to first contact us directly to seek a resolution. We will consider reasonable requests to resolve the dispute through alternative dispute resolution procedures, such as arbitration, as alternatives to litigation.</p> \n\n<h3>Limitation of liability</h3>\n\n<p>All construction stakeholders agree that copro.co.tz would be held free from any liability in contract, pre-contract or other representations, in tort, including, without limitation, negligence, or otherwise out of or in connection with the terms and conditions for any economic losses, such as, but not limited to profits, anticipated savings, revenues, contracts or general business; loss of goodwill or reputation; and any special or indirect losses suffered or incurred by any of the parties arising out of or in connection with the provisions of any matter under these terms and conditions. All stakeholders accept that the copro.co.tz will not be responsible or liable for any loss of content or materials uploaded or transmitted through the website and accept no liability of any kind for any loss or damage from action taken or taken in reliance on material or information contained on the site. All construction stakeholders accept that the copro.co.tz does not guarantee continuous, uninterrupted or secure access to our services, and operation of the website may be interfered with by numerous factors outside of our control. In addition, the Site and the services are provided \"as is, where is\" and as and when available, and to the extent permissible by law all implied warranties, conditions or other terms, whether implied by statute or otherwise, including without limitation, any terms as to skill and care or timeliness of performance, are excluded.</p> \n\n<h3>Applicable law and jurisdiction</h3>\n\n<p>These Terms and Conditions shall be interpreted and governed by the laws in force in the United Republic of Tanzania. Subject to the Arbitration section below, each party hereby agrees to submit to the jurisdiction of the courts of Tanzania and to waive any objections based upon venue.</p> \n\n<h3>Arbitration</h3>\n\n<p>Any controversy, claim or dispute arising out of or relating to these Terms and Conditions will be referred to and finally settled by private and confidential binding arbitration before a single arbitrator governed by Tanzanian law pursuant to the Arbitration Act Cap 15 Laws of Federation of Tanzania, as amended, replaced or re-enacted from time to time. The arbitrator shall be a person who is legally trained and who has experience in the information technology field in Tanzania and is independent of either party. Notwithstanding the foregoing, the Site reserves the right to pursue the protection of intellectual property rights and confidential information through \ninjunctive or other equitable relief through the courts.</p> \n\n<h3>Privacy</h3>\n\n<p>We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. We use your information only as described in the 'Copro' Privacy and Confidentiality Policy. We view protection of users' privacy as a very important community principle. We store and process your information on computers that are protected by physical as well as technological security devices. You can access and modify the information you provide us and choose not to receive certain communications by signing-in to your account. We use third parties to verify and certify our privacy principles. For a complete description of how we use and protect your personal information, see the 'Copro' Privacy and Confidentiality Policy. If you object to your information being transferred or used in this way please do not use our services.</p> \n\n<h3>Indemnity</h3>\n\n<p>You will indemnify and hold us (and our officers, directors, agents, subsidiaries, joint ventures and employees) harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of this Agreement, or your violation of any law or the rights of a third party.</p> \n\n<h3>No Agency</h3>\n\n<p>No agency, partnership, joint venture, employee-employer or franchiser-franchisee relationship is intended or created by this Agreement. \nNotices\nWe shall send notices to you by email to the email address you provide to 'Copro' during the registration process. Notice shall be deemed given 24 hours after email is sent, unless the sending party is notified that the email address is invalid. Alternatively, we may give you legal notice by registered mail to the address provided during the registration process. Notices sent to you by registered mail shall be deemed to have been received by that party three days after the date of mailing.</p> \n\n<h3>Termination</h3>\n\n<p>In addition to any other legal or equitable remedies, we may, without prior notice to you, immediately terminate the Terms and Conditions or revoke any or all of your rights granted under the Terms and Conditions. Upon any termination of this Agreement, you shall immediately cease all access to and use of the Site and we shall, in addition to any other legal or equitable remedies, immediately revoke all password(s) and account identification issued to you and deny your access to and use of this Site in whole or in part. Any termination of this agreement shall not affect the respective rights and obligations (including without limitation, payment obligations) of the parties arising before the date of termination. You furthermore agree that the Site shall not be liable to you or to any other person as a result of any such suspension or termination. If you are dissatisfied with the Site or with any terms, conditions, rules, policies, guidelines, or practices of Copro Tanzania in operating the Site, your sole and exclusive remedy is to discontinue using the Site.</p> \n\n<h3>Severability</h3>\n\n<p>If any portion of these Terms and Conditions is held by any court or tribunal to be invalid or unenforceable, either in whole or in part, then that part shall be severed from these Terms and Conditions and shall not affect the validity or enforceability of any other section listed in this document.</p> \n\n<h3>Miscellaneous provisions</h3>\n\n<p>You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. Assigning or sub-contracting any of your rights or obligations under these Terms and Conditions to any third party is prohibited unless agreed upon in writing by the seller. We reserve the right to transfer, assign or sub-contract the benefit of the whole or part of any rights or obligations under these Terms and Conditions to any third party. </p>\n\n\n\n</div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/blockwork/block.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main { border:1px solid #f2f2f2;\r\n        border-radius: 5px;\r\n        padding-top: 10px; }\r\n\r\n.radio { padding-left:50px;  }\r\n\r\n.control-label {\r\n  font-weight: lighter;\r\n  font-size: 13px;\r\n  text-align: left;\r\n}\r\n\r\n.insert {\r\n   padding-left: 50px;\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.answer {\r\n\tpadding-top: 100px;\r\n\tpadding-left: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/blockwork/block.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['small']\" routerLinkActive=\"\"> 150mm </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['large']\" routerLinkActive=\"\"> 230mm </a>\r\n<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/view/formular/blockwork/block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockworkComponent = /** @class */ (function () {
    function BlockworkComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cement: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            block: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            wage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    BlockworkComponent.prototype.ngOnInit = function () {
    };
    BlockworkComponent.prototype.solution = function () {
        var x = this.BlockForm.value.cement;
        var y = this.BlockForm.value.block;
        var z = this.BlockForm.value.sand;
        var o = this.BlockForm.value.overhead;
        var p = this.BlockForm.value.profit;
        var w = this.BlockForm.value.wage;
        this.cement = 9 * x;
        this.sand = 1.2 * z;
        this.h_cement = 9 * 16 * 12;
        this.h_sand = 1.2 * 237 * 12;
        this.sub_1 = +this.cement + +this.sand + +this.h_cement + +this.h_sand;
        this.mortar = this.sub_1 * 0.2;
        this.block = y * 90;
        this.sub_2 = +this.mortar + +this.block;
        this.wastage = 0.05 * this.sub_2;
        this.skilled = 1.81 * 2 * (w / 25) * 1.5;
        this.unskilled = +this.wastage / 2;
        this.sub_3 = +this.sub_2 + +this.wastage + +this.skilled + +this.unskilled;
        this.overhead = o * +this.sub_3;
        this.profit = p * +this.sub_3;
        this.rate = (+this.sub_3 + +this.overhead + +this.profit) / 10;
        console.log(this.rate);
    };
    BlockworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'block',
            template: __webpack_require__("../../../../../src/app/view/formular/blockwork/block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/blockwork/block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlockworkComponent);
    return BlockworkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/blockwork/large.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LargeBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LargeBlockComponent = /** @class */ (function () {
    function LargeBlockComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cement: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            block: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            wage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    LargeBlockComponent.prototype.ngOnInit = function () {
    };
    LargeBlockComponent.prototype.solution = function () {
        var x = this.BlockForm.value.cement;
        var y = this.BlockForm.value.block;
        var z = this.BlockForm.value.sand;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        var w = this.BlockForm.value.wage;
        this.cement = 9 * x;
        this.sand = 1.2 * z;
        this.h_cement = 9 * 16 * 12;
        this.h_sand = 1.2 * 237 * 12;
        this.sub_1 = +this.cement + +this.sand + +this.h_cement + +this.h_sand;
        this.mortar = this.sub_1 * 0.3;
        this.block = y * 140;
        this.sub_2 = +this.mortar + +this.block;
        this.wastage = 0.05 * this.sub_2;
        this.sub_3 = +this.sub_2 + +this.wastage;
        this.skilled = (1.81 * 2 * (w / 25)) * 1.5;
        this.unskilled = +this.skilled * 0.5;
        this.sub_4 = +this.sub_3 + +this.skilled + +this.unskilled;
        this.overhead = o * +this.sub_4;
        this.profit = p * +this.sub_4;
        this.rate = (+this.sub_4 + +this.overhead + +this.profit) / 10;
        console.log(this.rate);
    };
    LargeBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'large',
            template: "\n\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Cement Price per bag</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"cement\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">450 x 230 x 150 block price</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"block\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Sand price per meter cubic </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"sand\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govt Basic Wages per month </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"wage\">\n    </div>\n   </div>\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre square </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/blockwork/block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LargeBlockComponent);
    return LargeBlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/blockwork/small.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmallBlockComponent = /** @class */ (function () {
    function SmallBlockComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cement: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            block: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            wage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    SmallBlockComponent.prototype.ngOnInit = function () {
    };
    SmallBlockComponent.prototype.solution = function () {
        var x = this.BlockForm.value.cement;
        var y = this.BlockForm.value.block;
        var z = this.BlockForm.value.sand;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        var w = this.BlockForm.value.wage;
        this.cement = 9 * x;
        this.sand = 1.2 * z;
        this.h_cement = 9 * 16 * 12;
        this.h_sand = 1.2 * 237 * 12;
        this.sub_1 = +this.cement + +this.sand + +this.h_cement + +this.h_sand;
        this.mortar = this.sub_1 * 0.2;
        this.block = y * 90;
        this.sub_2 = +this.mortar + +this.block;
        this.wastage = 0.05 * this.sub_2;
        this.sub_3 = +this.sub_2 + +this.wastage;
        this.skilled = (1.81 * 2 * (w / 25)) * 1.5;
        this.unskilled = +this.skilled * 0.5;
        this.sub_4 = +this.sub_3 + +this.skilled + +this.unskilled;
        this.overhead = o * +this.sub_4;
        this.profit = p * +this.sub_4;
        this.rate = (+this.sub_4 + +this.overhead + +this.profit) / 10;
        console.log(this.rate);
    };
    SmallBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'smallt',
            template: "\n\n\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Cement Price per bag</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"cement\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">450 x 230 x 150 block price</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"block\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Sand price per meter cubic </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"sand\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govt Basic Wages per month </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"wage\">\n    </div>\n   </div>\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre square </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/blockwork/block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmallBlockComponent);
    return SmallBlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/concrete/concrete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/concrete/concrete.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['A']\" routerLinkActive=\"\">Concrete 20 </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['B']\" routerLinkActive=\"\"> Concrete 25 </a>\r\n<router-outlet> </router-outlet> "

/***/ }),

/***/ "../../../../../src/app/view/formular/concrete/concrete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConreteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConreteComponent = /** @class */ (function () {
    function ConreteComponent() {
    }
    ConreteComponent.prototype.ngOnInit = function () {
    };
    ConreteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'block',
            template: __webpack_require__("../../../../../src/app/view/formular/concrete/concrete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/concrete/concrete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConreteComponent);
    return ConreteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/concrete/concreteA.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConreteAComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConreteAComponent = /** @class */ (function () {
    function ConreteAComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cement: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            aggregate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            formwork: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            mixer: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tool: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            transport: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ConreteAComponent.prototype.ngOnInit = function () {
    };
    ConreteAComponent.prototype.solution = function () {
        var x = this.BlockForm.value.cement;
        var x2 = this.BlockForm.value.aggregate;
        var x3 = this.BlockForm.value.sand;
        var x4 = this.BlockForm.value.formwork;
        var x5 = this.BlockForm.value.mixer;
        var x6 = this.BlockForm.value.tool;
        var x7 = this.BlockForm.value.days;
        var x8 = this.BlockForm.value.govt;
        var x9 = this.BlockForm.value.overhead;
        var x10 = this.BlockForm.value.profit;
        var x11 = this.BlockForm.value.transport;
        this.cement = 6 * x;
        this.aggregrate = 0.84 * x2;
        this.sand = 0.5 * x3;
        this.formwork = 0.175 * x4;
        this.sub_one = +this.cement + +this.aggregrate + +this.sand + +this.formwork;
        this.waste = 0.05 * +this.sub_one;
        this.sub_two = +this.sub_one + +this.waste;
        this.transport = x11 * this.sub_two;
        this.sub_three = +this.sub_two + +this.transport;
        this.operator = 1.81 * 2 * (x8 / 25) * 0.8;
        this.labour = 1.81 * 2 * (x8 / 25) / 0.8 * 7;
        this.sub_four = +this.operator + +this.labour;
        this.cost_labour = +this.sub_four / 2.4;
        this.hire = x5 / 2.5;
        this.cost_person = (x6 / x7) / 2.4;
        this.sub_four = +this.sub_three + +this.cost_labour + +this.hire + +this.cost_person;
        this.overhead = x9 * +this.sub_four;
        this.profit = x10 * +this.sub_four;
        this.rate = (+this.sub_four + +this.overhead + +this.profit);
        console.log(this.profit);
    };
    ConreteAComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'concreteA',
            template: "\n\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Cement</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"cement\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Aggregate</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"aggregate\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> sand </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"sand\">\n    </div>\n   </div>\n   \n        <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> FormWork </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"formwork\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> concrete mixer </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"mixer\">\n    </div>\n   </div>\n\n        <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> total cost of tools </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tool\">\n    </div>\n   </div>\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> personal days  </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n\n      <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> govermnent </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n        <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> transportation </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"transport\">\n    </div>\n   </div>\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre cubic </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/concrete/concrete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConreteAComponent);
    return ConreteAComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/concrete/concreteB.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConreteBComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConreteBComponent = /** @class */ (function () {
    function ConreteBComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cement: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            aggregate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            formwork: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            mixer: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tool: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            transport: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ConreteBComponent.prototype.ngOnInit = function () {
    };
    ConreteBComponent.prototype.solution = function () {
        var x = this.BlockForm.value.cement;
        var x2 = this.BlockForm.value.aggregate;
        var x3 = this.BlockForm.value.sand;
        var x4 = this.BlockForm.value.formwork;
        var x5 = this.BlockForm.value.mixer;
        var x6 = this.BlockForm.value.tool;
        var x7 = this.BlockForm.value.days;
        var x8 = this.BlockForm.value.govt;
        var x9 = this.BlockForm.value.overhead;
        var x10 = this.BlockForm.value.profit;
        var x11 = this.BlockForm.value.transport;
        this.cement = 6 * x;
        this.aggregrate = 0.84 * x2;
        this.sand = 0.5 * x3;
        this.formwork = 0.175 * x4;
        this.sub_one = +this.cement + +this.aggregrate + +this.sand + +this.formwork;
        this.waste = 0.05 * +this.sub_one;
        this.sub_two = +this.sub_one + +this.waste;
        this.transport = x11 * this.sub_two;
        this.sub_three = +this.sub_two + +this.transport;
        this.operator = 1.81 * 2 * (x8 / 25) * 0.8;
        this.labour = 1.81 * 2 * (x8 / 25) / 0.8 * 7;
        this.sub_four = +this.operator + +this.labour;
        this.cost_labour = +this.sub_four / 2.4;
        this.hire = x5 / 2.5;
        this.cost_person = (x6 / x7) / 2.4;
        this.sub_four = +this.sub_three + +this.cost_labour + +this.hire + +this.cost_person;
        this.overhead = x9 * +this.sub_four;
        this.profit = x10 * +this.sub_four;
        this.rate = (+this.sub_four + +this.overhead + +this.profit);
        console.log(this.profit);
    };
    ConreteBComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'concreteB',
            template: "\n\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Cement</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"cement\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Aggregate</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"aggregate\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> sand </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"sand\">\n    </div>\n   </div>\n   \n        <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> FormWork </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"formwork\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> concrete mixer </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"mixer\">\n    </div>\n   </div>\n\n        <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> total cost of tools </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tool\">\n    </div>\n   </div>\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> personal days  </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n\n      <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> govermnent </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n        <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> transportation </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"transport\">\n    </div>\n   </div>\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre cubic </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/concrete/concrete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConreteBComponent);
    return ConreteBComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/backfill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackfillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackfillComponent = /** @class */ (function () {
    function BackfillComponent() {
        this.BackfillForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tools: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    BackfillComponent.prototype.ngOnInit = function () {
    };
    BackfillComponent.prototype.solution = function () {
        var g = this.BackfillForm.value.govt;
        var t = this.BackfillForm.value.tools;
        var d = this.BackfillForm.value.days;
        var o = this.BackfillForm.value.overhead / 100;
        var p = this.BackfillForm.value.profit / 100;
        this.labour = 1.81 * (g / 25) * 0.25;
        this.cost = t;
        this.replacement = this.cost * 0.1;
        this.sub_one = +this.cost + +this.replacement;
        this.tools = 0.5 * this.sub_one;
        this.days = d;
        this.incidentals = 0.15 * this.days;
        this.mandays = +this.days + +this.incidentals;
        this.cost_tools = (this.tools / this.mandays) * 0.25;
        this.sub_two = +this.labour + +this.cost_tools;
        this.overhead = o * this.sub_two;
        this.profit = p * this.sub_two;
        this.rate = (+this.sub_two + +this.overhead + +this.profit);
        console.log(this.rate);
    };
    BackfillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'backill',
            template: "\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BackfillForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govrt Basic Salary</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Cost of Tools</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tools\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Persnaldays required </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre square </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n   ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BackfillComponent);
    return BackfillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/cart_away.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartAwayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartAwayComponent = /** @class */ (function () {
    function CartAwayComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tools: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tipper: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    CartAwayComponent.prototype.ngOnInit = function () {
    };
    CartAwayComponent.prototype.solution = function () {
        var g = this.BlockForm.value.govt;
        var t = this.BlockForm.value.tools;
        var d = this.BlockForm.value.days;
        var tip = this.BlockForm.value.tipper;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        this.labour = (1.81 * g / 25) * 0.888888889;
        this.cost = t;
        this.replacement = this.cost * 0.1;
        this.sub_one = +this.cost + +this.replacement;
        this.tools = 0.5 * this.sub_one;
        this.days = d;
        this.incidentals = 0.15 * this.days;
        this.mandays = +this.days + +this.incidentals;
        this.cost_tools = (this.tools / this.mandays) * 0.888889;
        this.sub_two = +this.labour + +this.cost_tools;
        this.tipper = tip;
        this.sub_three = +this.sub_two + +this.tipper;
        this.overhead = o * this.sub_three;
        this.profit = p * this.sub_three;
        this.rate = (+this.sub_three + +this.overhead + +this.profit) / 4;
        console.log(this.rate);
    };
    CartAwayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'Cart',
            template: "\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govrt Basic Salary</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Cost of Tools</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tools\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Persnaldays required </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Tipper</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tipper\">\n    </div>\n    </div>\n\n\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre cubic </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n   ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartAwayComponent);
    return CartAwayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/clearance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClearanceComponent = /** @class */ (function () {
    function ClearanceComponent() {
        this.ClearForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tools: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ClearanceComponent.prototype.ngOnInit = function () {
    };
    ClearanceComponent.prototype.solution = function () {
        var g = this.ClearForm.value.govt;
        var t = this.ClearForm.value.tools;
        var d = this.ClearForm.value.days;
        var o = this.ClearForm.value.overhead / 100;
        var p = this.ClearForm.value.profit / 100;
        this.labour = (1.81 * g / 25) * 0.33333333;
        this.cost = t;
        this.replacement = this.cost * 0.1;
        this.sub_one = +this.cost + +this.replacement;
        this.tools = 0.5 * this.sub_one;
        this.days = d;
        this.incidentals = 0.15 * this.days;
        this.mandays = +this.days + +this.incidentals;
        this.cost_tools = (this.tools / this.mandays) * 0.33333333;
        this.sub_two = +this.labour + +this.cost_tools;
        this.overhead = o * this.sub_two;
        this.profit = p * this.sub_two;
        this.rate = (+this.sub_two + +this.overhead + +this.profit) * 0.15;
        console.log(this.rate);
    };
    ClearanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'clearance',
            template: "\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"ClearForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govrt Basic Salary</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Cost of Tools</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tools\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Persnaldays required </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre square </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n\n   ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClearanceComponent);
    return ClearanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/earth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/earth.component.html":
/***/ (function(module, exports) {

module.exports = " <a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['clearance']\" routerLinkActive=\"\">\r\n site clearance  </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['evcavation']\" routerLinkActive=\"\">excavation </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['site']\" routerLinkActive=\"\">site excavate </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['backfill']\" routerLinkActive=\"\">back fills</a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['cart']\" routerLinkActive=\"\">cart away material </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['fill']\" routerLinkActive=\"\">selected fill </a>\r\n<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/earth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EarthWorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EarthWorkComponent = /** @class */ (function () {
    function EarthWorkComponent() {
    }
    EarthWorkComponent.prototype.ngOnInit = function () {
    };
    EarthWorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'earthwork',
            template: __webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EarthWorkComponent);
    return EarthWorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/evcavation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvcavationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EvcavationComponent = /** @class */ (function () {
    function EvcavationComponent() {
        this.ExcavationForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tools: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    EvcavationComponent.prototype.ngOnInit = function () {
    };
    EvcavationComponent.prototype.solution = function () {
        var g = this.ExcavationForm.value.govt;
        var t = this.ExcavationForm.value.tools;
        var d = this.ExcavationForm.value.days;
        var o = this.ExcavationForm.value.overhead / 100;
        var p = this.ExcavationForm.value.profit / 100;
        this.labour = (1.81 * g / 25) * 0.4;
        this.cost = t;
        this.replacement = this.cost * 0.1;
        this.sub_one = +this.cost + +this.replacement;
        this.tools = 0.5 * this.sub_one;
        this.days = d;
        this.incidentals = 0.15 * this.days;
        this.mandays = +this.days + +this.incidentals;
        this.cost_tools = (this.tools / this.mandays) * 0.4;
        this.sub_two = +this.labour + +this.cost_tools;
        this.overhead = o * this.sub_two;
        this.profit = p * this.sub_two;
        this.rate = (+this.sub_two + +this.overhead + +this.profit);
        console.log(this.rate);
    };
    EvcavationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'evcavation',
            template: "\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n</div>\n</div>\n\n<div class=\"row\"> \n<form [formGroup]=\"ExcavationForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govrt Basic Salary</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Cost of Tools</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tools\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Persnaldays required </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre cubic </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n   ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EvcavationComponent);
    return EvcavationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/selected-fills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FillComponent = /** @class */ (function () {
    function FillComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tools: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            murram: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tipper: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            roller: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    FillComponent.prototype.ngOnInit = function () {
    };
    FillComponent.prototype.solution = function () {
        var g = this.BlockForm.value.govt;
        var t = this.BlockForm.value.tools;
        var d = this.BlockForm.value.days;
        var tip = this.BlockForm.value.tipper;
        var r = this.BlockForm.value.roller;
        var m = this.BlockForm.value.murram;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        this.labour = (1.81 * g / 25) * 0.888888889;
        this.cost = t;
        this.replacement = this.cost * 0.1;
        this.sub_one = +this.cost + +this.replacement;
        this.tools = 0.5 * this.sub_one;
        this.days = d;
        this.incidentals = 0.15 * this.days;
        this.mandays = +this.days + +this.incidentals;
        this.cost_tools = (this.tools / this.mandays) * 0.888888889;
        this.sub_two = +this.labour + +this.cost_tools;
        this.tipper = tip;
        this.murram = m;
        this.sub_three = +this.sub_two + +this.murram + +this.tipper;
        this.compation = 0.2 * this.sub_three;
        this.roller = r;
        this.sub_four = +this.sub_three + +this.compation + +this.roller;
        this.overhead = o * this.sub_four;
        this.profit = p * this.sub_four;
        this.rate = (+this.sub_four + +this.overhead + +this.profit) / 4;
        console.log(this.rate);
    };
    FillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'fill',
            template: "\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govrt Basic Salary</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Cost of Tools</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tools\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Persnaldays required </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n   \n    <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Murram</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"murram\">\n    </div>\n    </div>\n\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Tipper</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tipper\">\n    </div>\n    </div>\n\n         <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Roller </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"roller\">\n    </div>\n    </div>\n\n\n\n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre cubic </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n   ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FillComponent);
    return FillComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/earthwork/site_evcavation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteEvcavationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteEvcavationComponent = /** @class */ (function () {
    function SiteEvcavationComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            gort: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tools: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    SiteEvcavationComponent.prototype.ngOnInit = function () {
    };
    SiteEvcavationComponent.prototype.solution = function () {
        var g = this.BlockForm.value.govt;
        var t = this.BlockForm.value.tools;
        var d = this.BlockForm.value.days;
        var o = this.BlockForm.value.overhead;
        var p = this.BlockForm.value.profit;
        this.labour = 1.81 * (g / 25) * 0.333;
        this.cost = t;
        this.replacement = this.cost * 0.1;
        this.sub_one = this.cost + this.replacement;
        this.tools = 0.5 * this.sub_one;
        this.days = d;
        this.incidentals = 0.15 * this.days;
        this.mandays = this.days + this.incidentals;
        this.cost_tools = (this.tools / this.mandays) * 0.3;
        this.sub_two = this.labour + this.cost_tools;
        this.overhead = o * this.sub_two;
        this.profit = p * this.sub_two;
        this.rate = (+this.sub_two + +this.overhead + +this.profit) * 0.15;
        console.log(this.rate);
    };
    SiteEvcavationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'site_evcavation',
            template: "\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govrt Basic Salary</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Cost of Tools</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tools\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Persnaldays required </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per metre square </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n   ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SiteEvcavationComponent);
    return SiteEvcavationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/formula.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar { \r\n   border-right: 1px solid #f4f2f2;\r\n }\r\n\r\n.main { padding-top: 10px;\r\n        padding-bottom: 10px;\r\n        margin-top: 10px; \r\n        background-color: #fcfcfc;}\r\n\r\n.content {\r\n  background-color: #ffffff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/formula.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container main\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4 col-md-3 sidebar\">\r\n          <ul class=\"nav nav-sidebar\">\r\n            <li><a routerLink=\"/buliding-rates/reinforce\" routerLinkActive=\"active\">REINFORCEMENT BARS</a></li>\r\n            <li><a routerLink=\"/buliding-rates/block\" routerLinkActive=\"active\">BLOCKWORK</a></li>\r\n            <li><a routerLink=\"/buliding-rates/foundation\" routerLinkActive=\"active\">FOUNDATION</a></li>\r\n            <li><a routerLink=\"/buliding-rates/paint\" routerLinkActive=\"active\">PAINTS</a></li>\r\n            <li><a routerLink=\"/buliding-rates/tile\" routerLinkActive=\"active\">TILING</a></li>\r\n            <li><a routerLink=\"/buliding-rates/plaster\" routerLinkActive=\"active\">PLASTERING</a></li>\r\n            <li><a routerLink=\"/buliding-rates/concrete\" routerLinkActive=\"active\">CONCRETE</a></li>\r\n            <li><a routerLink=\"/buliding-rates/earthwork\" routerLinkActive=\"active\">EARTHWORK</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-sm-8  col-md-9 content\">\r\n          <router-outlet> </router-outlet>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view/formular/formula.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormularComponent = /** @class */ (function () {
    function FormularComponent() {
    }
    FormularComponent.prototype.ngOnInit = function () {
    };
    FormularComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-formula',
            template: __webpack_require__("../../../../../src/app/view/formular/formula.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/formula.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormularComponent);
    return FormularComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/formula.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularModule", function() { return FormularModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formular_routing_module__ = __webpack_require__("../../../../../src/app/view/formular/formular.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formula_component__ = __webpack_require__("../../../../../src/app/view/formular/formula.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blockwork_block_component__ = __webpack_require__("../../../../../src/app/view/formular/blockwork/block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blockwork_small_component__ = __webpack_require__("../../../../../src/app/view/formular/blockwork/small.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blockwork_large_component__ = __webpack_require__("../../../../../src/app/view/formular/blockwork/large.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__concrete_concrete_component__ = __webpack_require__("../../../../../src/app/view/formular/concrete/concrete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__concrete_concreteA_component__ = __webpack_require__("../../../../../src/app/view/formular/concrete/concreteA.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__concrete_concreteB_component__ = __webpack_require__("../../../../../src/app/view/formular/concrete/concreteB.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__foundation_foundation_component__ = __webpack_require__("../../../../../src/app/view/formular/foundation/foundation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__foundation_hardcore_component__ = __webpack_require__("../../../../../src/app/view/formular/foundation/hardcore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__foundation_soil_component__ = __webpack_require__("../../../../../src/app/view/formular/foundation/soil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__paint_paint_component__ = __webpack_require__("../../../../../src/app/view/formular/paint/paint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plaster_plaster_component__ = __webpack_require__("../../../../../src/app/view/formular/plaster/plaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__plaster_plastering_component__ = __webpack_require__("../../../../../src/app/view/formular/plaster/plastering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plaster_screen_component__ = __webpack_require__("../../../../../src/app/view/formular/plaster/screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reinforce_reinforce_component__ = __webpack_require__("../../../../../src/app/view/formular/reinforce/reinforce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tile_tile_component__ = __webpack_require__("../../../../../src/app/view/formular/tile/tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__earthwork_earth_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__earthwork_site_evcavation_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/site_evcavation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__earthwork_clearance_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/clearance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__earthwork_evcavation_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/evcavation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__earthwork_backfill_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/backfill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__earthwork_cart_away_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/cart_away.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__earthwork_selected_fills_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/selected-fills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var FormularModule = /** @class */ (function () {
    function FormularModule() {
    }
    FormularModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__formula_component__["a" /* FormularComponent */], __WEBPACK_IMPORTED_MODULE_3__blockwork_block_component__["a" /* BlockworkComponent */], __WEBPACK_IMPORTED_MODULE_6__concrete_concrete_component__["a" /* ConreteComponent */], __WEBPACK_IMPORTED_MODULE_9__foundation_foundation_component__["a" /* FoundationComponent */], __WEBPACK_IMPORTED_MODULE_10__foundation_hardcore_component__["a" /* HardcoreComponent */], __WEBPACK_IMPORTED_MODULE_11__foundation_soil_component__["a" /* SoilComponent */], __WEBPACK_IMPORTED_MODULE_12__paint_paint_component__["a" /* PaintComponent */], __WEBPACK_IMPORTED_MODULE_13__plaster_plaster_component__["a" /* PlasterComponent */], __WEBPACK_IMPORTED_MODULE_16__reinforce_reinforce_component__["a" /* ReinforceComponent */], __WEBPACK_IMPORTED_MODULE_17__tile_tile_component__["a" /* TileComponent */], __WEBPACK_IMPORTED_MODULE_4__blockwork_small_component__["a" /* SmallBlockComponent */], __WEBPACK_IMPORTED_MODULE_5__blockwork_large_component__["a" /* LargeBlockComponent */], __WEBPACK_IMPORTED_MODULE_7__concrete_concreteA_component__["a" /* ConreteAComponent */], __WEBPACK_IMPORTED_MODULE_8__concrete_concreteB_component__["a" /* ConreteBComponent */], __WEBPACK_IMPORTED_MODULE_14__plaster_plastering_component__["a" /* PlasteringComponent */], __WEBPACK_IMPORTED_MODULE_15__plaster_screen_component__["a" /* ScreenComponent */], __WEBPACK_IMPORTED_MODULE_18__earthwork_earth_component__["a" /* EarthWorkComponent */], __WEBPACK_IMPORTED_MODULE_19__earthwork_site_evcavation_component__["a" /* SiteEvcavationComponent */], __WEBPACK_IMPORTED_MODULE_20__earthwork_clearance_component__["a" /* ClearanceComponent */], __WEBPACK_IMPORTED_MODULE_21__earthwork_evcavation_component__["a" /* EvcavationComponent */], __WEBPACK_IMPORTED_MODULE_22__earthwork_backfill_component__["a" /* BackfillComponent */], __WEBPACK_IMPORTED_MODULE_23__earthwork_cart_away_component__["a" /* CartAwayComponent */], __WEBPACK_IMPORTED_MODULE_24__earthwork_selected_fills_component__["a" /* FillComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__formular_routing_module__["a" /* FormulaRouting */], __WEBPACK_IMPORTED_MODULE_25__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_25__angular_forms__["d" /* FormsModule */]],
            exports: []
        })
    ], FormularModule);
    return FormularModule;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/formular.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormulaRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formula_component__ = __webpack_require__("../../../../../src/app/view/formular/formula.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blockwork_block_component__ = __webpack_require__("../../../../../src/app/view/formular/blockwork/block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__concrete_concrete_component__ = __webpack_require__("../../../../../src/app/view/formular/concrete/concrete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__foundation_foundation_component__ = __webpack_require__("../../../../../src/app/view/formular/foundation/foundation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__foundation_hardcore_component__ = __webpack_require__("../../../../../src/app/view/formular/foundation/hardcore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__foundation_soil_component__ = __webpack_require__("../../../../../src/app/view/formular/foundation/soil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__paint_paint_component__ = __webpack_require__("../../../../../src/app/view/formular/paint/paint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__plaster_plaster_component__ = __webpack_require__("../../../../../src/app/view/formular/plaster/plaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reinforce_reinforce_component__ = __webpack_require__("../../../../../src/app/view/formular/reinforce/reinforce.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tile_tile_component__ = __webpack_require__("../../../../../src/app/view/formular/tile/tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blockwork_small_component__ = __webpack_require__("../../../../../src/app/view/formular/blockwork/small.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blockwork_large_component__ = __webpack_require__("../../../../../src/app/view/formular/blockwork/large.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__plaster_plastering_component__ = __webpack_require__("../../../../../src/app/view/formular/plaster/plastering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__plaster_screen_component__ = __webpack_require__("../../../../../src/app/view/formular/plaster/screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__earthwork_earth_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/earth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__earthwork_site_evcavation_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/site_evcavation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__earthwork_clearance_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/clearance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__earthwork_evcavation_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/evcavation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__earthwork_backfill_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/backfill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__earthwork_cart_away_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/cart_away.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__earthwork_selected_fills_component__ = __webpack_require__("../../../../../src/app/view/formular/earthwork/selected-fills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__concrete_concreteA_component__ = __webpack_require__("../../../../../src/app/view/formular/concrete/concreteA.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__concrete_concreteB_component__ = __webpack_require__("../../../../../src/app/view/formular/concrete/concreteB.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var FormulaRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__formula_component__["a" /* FormularComponent */],
        children: [
            { path: 'block', component: __WEBPACK_IMPORTED_MODULE_3__blockwork_block_component__["a" /* BlockworkComponent */],
                children: [
                    { path: 'small', component: __WEBPACK_IMPORTED_MODULE_12__blockwork_small_component__["a" /* SmallBlockComponent */] },
                    { path: 'large', component: __WEBPACK_IMPORTED_MODULE_13__blockwork_large_component__["a" /* LargeBlockComponent */] }
                ]
            },
            { path: 'plaster', component: __WEBPACK_IMPORTED_MODULE_9__plaster_plaster_component__["a" /* PlasterComponent */],
                children: [
                    { path: 'plastering', component: __WEBPACK_IMPORTED_MODULE_14__plaster_plastering_component__["a" /* PlasteringComponent */] },
                    { path: 'screen', component: __WEBPACK_IMPORTED_MODULE_15__plaster_screen_component__["a" /* ScreenComponent */] }
                ]
            },
            { path: 'reinforce', component: __WEBPACK_IMPORTED_MODULE_10__reinforce_reinforce_component__["a" /* ReinforceComponent */] },
            { path: 'tile', component: __WEBPACK_IMPORTED_MODULE_11__tile_tile_component__["a" /* TileComponent */] },
            { path: 'concrete', component: __WEBPACK_IMPORTED_MODULE_4__concrete_concrete_component__["a" /* ConreteComponent */],
                children: [
                    { path: 'A', component: __WEBPACK_IMPORTED_MODULE_23__concrete_concreteA_component__["a" /* ConreteAComponent */] },
                    { path: 'B', component: __WEBPACK_IMPORTED_MODULE_24__concrete_concreteB_component__["a" /* ConreteBComponent */] }
                ]
            },
            { path: 'foundation', component: __WEBPACK_IMPORTED_MODULE_5__foundation_foundation_component__["a" /* FoundationComponent */],
                children: [
                    { path: 'hardcore', component: __WEBPACK_IMPORTED_MODULE_6__foundation_hardcore_component__["a" /* HardcoreComponent */] },
                    { path: 'soil', component: __WEBPACK_IMPORTED_MODULE_7__foundation_soil_component__["a" /* SoilComponent */] }
                ] },
            { path: 'paint', component: __WEBPACK_IMPORTED_MODULE_8__paint_paint_component__["a" /* PaintComponent */] },
            { path: 'earthwork', component: __WEBPACK_IMPORTED_MODULE_16__earthwork_earth_component__["a" /* EarthWorkComponent */],
                children: [
                    { path: 'site', component: __WEBPACK_IMPORTED_MODULE_17__earthwork_site_evcavation_component__["a" /* SiteEvcavationComponent */] },
                    { path: 'clearance', component: __WEBPACK_IMPORTED_MODULE_18__earthwork_clearance_component__["a" /* ClearanceComponent */] },
                    { path: 'evcavation', component: __WEBPACK_IMPORTED_MODULE_19__earthwork_evcavation_component__["a" /* EvcavationComponent */] },
                    { path: 'backfill', component: __WEBPACK_IMPORTED_MODULE_20__earthwork_backfill_component__["a" /* BackfillComponent */] },
                    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_21__earthwork_cart_away_component__["a" /* CartAwayComponent */] },
                    { path: 'fill', component: __WEBPACK_IMPORTED_MODULE_22__earthwork_selected_fills_component__["a" /* FillComponent */] },
                ]
            }
        ]
    }
];
var FormulaRouting = /** @class */ (function () {
    function FormulaRouting() {
    }
    FormulaRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(FormulaRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], FormulaRouting);
    return FormulaRouting;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/foundation/foundation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main { border:1px solid #f2f2f2;\r\n        border-radius: 5px;\r\n        padding-top: 10px; }\r\n\r\n.radio { padding-left:50px;  }\r\n\r\n.control-label {\r\n  font-weight: lighter;\r\n  font-size: 13px;\r\n  text-align: left;\r\n}\r\n\r\n.insert {\r\n   padding-left: 50px;\r\n\tpadding-top: 15px;\r\n}\r\n\r\n.answer {\r\n\tpadding-top: 100px;\r\n\tpadding-left: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/foundation/foundation.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['hardcore']\" routerLinkActive=\"\">Hardcore filling </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['soil']\" routerLinkActive=\"\">Soil Poisoning </a>\r\n<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/view/formular/foundation/foundation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoundationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoundationComponent = /** @class */ (function () {
    function FoundationComponent() {
    }
    FoundationComponent.prototype.ngOnInit = function () {
    };
    FoundationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'foundation',
            template: __webpack_require__("../../../../../src/app/view/formular/foundation/foundation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/foundation/foundation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FoundationComponent);
    return FoundationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/foundation/hardcore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardcoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HardcoreComponent = /** @class */ (function () {
    function HardcoreComponent() {
        this.HardForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            stone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            wage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tool: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            day: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    HardcoreComponent.prototype.ngOnInit = function () {
    };
    HardcoreComponent.prototype.solution = function () {
        var x = this.HardForm.value.stone;
        var w = this.HardForm.value.wage;
        var t = this.HardForm.value.tool;
        var o = this.HardForm.value.overhead / 100;
        var p = this.HardForm.value.profit / 100;
        var d = this.HardForm.value.day;
        this.stone = +1.25 * x;
        this.replacement = +0.1 * t;
        this.sub_1 = +t + +this.replacement;
        this.average = +this.sub_1 / 2;
        this.incidental = 0.15 * +d;
        this.sub_2 = +d + +this.incidental;
        this.sub_3 = +this.sub_1 / +this.sub_2;
        this.wastage = 0.05 * +this.stone;
        this.labour = (1.81 * (+w / 25) * +0.25);
        this.tool = +this.sub_3 * 0.25;
        this.sub_4 = +this.stone + +this.wastage + +this.labour + +this.tool;
        this.overhead = o * +this.sub_4;
        this.profit = p * +this.sub_4;
        this.rate = (+this.sub_4 + +this.overhead + +this.profit);
        console.log(this.rate);
    };
    HardcoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'hardcore',
            template: "\n \n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n<form [formGroup]=\"HardForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">\n\n<div class=\"row\">\n<div class=\"col-md-7 insert\">\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Stone price per meter cubic</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"stone\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Govt Basic Wages per month</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"wage\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Total Cost of tools purchased </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tool\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n\n    <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">days </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"day\">\n    </div>\n   </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n\n</div>  \n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per Metre Cubic </p>\n<p> {{rate}} </p>\n\n\n</div>\n</div>\n</form>\n</div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/foundation/foundation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HardcoreComponent);
    return HardcoreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/foundation/soil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoilComponent = /** @class */ (function () {
    function SoilComponent() {
    }
    SoilComponent.prototype.ngOnInit = function () {
    };
    SoilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'soil',
            template: "\n\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n<form class=\"form-horizontal\">\n\n\n<div class=\"row\">\n<div class=\"col-md-7 insert\">\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Stone price per meter cubic</label>\n    <div class=\"col-sm-3\">\n      <input type=\"email\" class=\"form-control\">\n    </div>\n   </div>\n\n     <div class=\"form-group\">\n    <label class=\"col-sm-6 control-label\">Govt Basic Wages per month</label>\n    <div class=\"col-sm-3\">\n      <input type=\"email\" class=\"form-control\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Total Cost of tools purchased </label>\n    <div class=\"col-sm-3\">\n      <input type=\"email\" class=\"form-control\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"email\" class=\"form-control\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"email\" class=\"form-control\">\n    </div>\n   </div>\n   \n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per Metre Square </p>\n\n  {{rate}}\n\n</div>\n</div>\n</form>\n</div>\n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/foundation/foundation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SoilComponent);
    return SoilComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/paint/paint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/paint/paint.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n<div class=\"col-md-11 main\">\r\n\r\n<h4> Unit Rate Formula </h4>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \r\n<div class=\"col-md-7 insert\">\r\n\r\n\r\n   <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">paint Per Litre</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"paint\">\r\n    </div>\r\n   </div>\r\n\r\n     <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\">goverment wages</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\r\n    </div>\r\n    </div>\r\n\r\n         <div class=\"form-group\">\r\n    <label class=\"col-sm-6 control-label\">Total cost of tools</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tools\">\r\n    </div>\r\n    </div>\r\n    \r\n    \r\n     <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">Personaldays required </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"days\">\r\n    </div>\r\n   </div>\r\n   \r\n     <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\r\n    </div>\r\n    </div>\r\n    \r\n     <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">Profit </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\r\n    </div>\r\n   </div>\r\n   \r\n\r\n\r\n</div>\t\r\n\r\n<div class=\"col-md-5 answer\">\r\n\r\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\r\n<p> Unit Rate Per Metre Square </p>\r\n<p> {{rate}}</p>\r\n\r\n</div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view/formular/paint/paint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaintComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaintComponent = /** @class */ (function () {
    function PaintComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            paint: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            tools: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            days: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    PaintComponent.prototype.ngOnInit = function () {
    };
    PaintComponent.prototype.solution = function () {
        var x = this.BlockForm.value.paint;
        var g = this.BlockForm.value.govt;
        var t = this.BlockForm.value.tools;
        var d = this.BlockForm.value.days;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        this.painting = 0.35 * x;
        this.waste = 0.1 * +this.painting;
        this.sub_one = +this.painting + +this.waste;
        this.transport = 0.1 * +this.sub_one;
        this.sub_two = +this.sub_one + +this.transport;
        this.skilled = ((1.81 * 2 * (g / 25)) / 8) * 0.44;
        this.unskilled = 0.5 * +this.skilled;
        this.sub_three = +this.sub_two + +this.skilled + +this.unskilled;
        this.material = 0.2 * +this.sub_three;
        this.sub_four = +this.sub_three + +this.material;
        this.overhead = o * +this.sub_four;
        this.profit = p * +this.sub_four;
        this.rate = (+this.sub_four + +this.overhead + +this.profit);
        console.log(this.rate);
    };
    PaintComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'paint',
            template: __webpack_require__("../../../../../src/app/view/formular/paint/paint.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/paint/paint.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaintComponent);
    return PaintComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/plaster/plaster.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/plaster/plaster.component.html":
/***/ (function(module, exports) {

module.exports = " <a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['plastering']\" routerLinkActive=\"\">\r\n plastering  </a>\r\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['screen']\" routerLinkActive=\"\">screen floor </a>\r\n<router-outlet> </router-outlet>"

/***/ }),

/***/ "../../../../../src/app/view/formular/plaster/plaster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlasterComponent = /** @class */ (function () {
    function PlasterComponent() {
    }
    PlasterComponent.prototype.ngOnInit = function () {
    };
    PlasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'plaster',
            template: __webpack_require__("../../../../../src/app/view/formular/plaster/plaster.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/plaster/plaster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlasterComponent);
    return PlasterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/plaster/plastering.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlasteringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlasteringComponent = /** @class */ (function () {
    function PlasteringComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cement: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            wage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    PlasteringComponent.prototype.ngOnInit = function () {
    };
    PlasteringComponent.prototype.solution = function () {
        var x = this.BlockForm.value.cement;
        var y = this.BlockForm.value.sand;
        var g = this.BlockForm.value.wage;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        this.cement = 0.2 * x;
        this.sand = 0.03 * y;
        this.sub_one = +this.cement + +this.sand;
        this.waste = 0.05 * this.sub_one;
        this.sub_two = +this.sub_one + +this.waste;
        this.skilled = ((1.81 * 2 * (g / 25)) / 8) * 0.75;
        this.unskilled = 0.5 * +this.skilled;
        this.sub_three = +this.sub_two + +this.skilled + +this.unskilled;
        this.overhead = o * this.sub_three;
        this.profit = p * this.sub_three;
        this.rate = (+this.sub_three + +this.overhead + +this.profit);
        console.log(this.rate);
    };
    PlasteringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'plastering',
            template: "\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Cement Price per bag</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"cement\">\n    </div>\n   </div>\n\n\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Sand price per meter cubic </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"sand\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govt Basic Wages per month </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"wage\">\n    </div>\n   </div>\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per Metre Square </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n\n\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/plaster/plaster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlasteringComponent);
    return PlasteringComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/plaster/screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenComponent = /** @class */ (function () {
    function ScreenComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            cement: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            sand: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            wage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ScreenComponent.prototype.ngOnInit = function () {
    };
    ScreenComponent.prototype.solution = function () {
        var x = this.BlockForm.value.cement;
        var y = this.BlockForm.value.sand;
        var g = this.BlockForm.value.wage;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        this.cement = 0.4 * x;
        this.sand = 0.05 * y;
        this.sub_one = +this.cement + +this.sand;
        this.waste = 0.05 * this.sub_one;
        this.sub_two = +this.sub_one + +this.waste;
        this.skilled = ((1.81 * 2 * g / 25) / 8) * 0.75;
        this.unskilled = 0.5 * +this.skilled;
        this.sub_three = +this.sub_two + +this.skilled + +this.unskilled;
        this.overhead = o * this.sub_three;
        this.profit = p * this.sub_three;
        this.rate = (+this.sub_three + +this.overhead + +this.profit);
        console.log(this.rate);
    };
    ScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'screen',
            template: "\n\n\n<div class=\"row\">\n<div class=\"col-md-11 main\">\n\n<h4> Unit Rate Formula </h4>\n\n<div class=\"row\">\n<div class=\"col-md-12 radio\">\n<p> Select Wall  thinkness</p>\n<form class=\"form-horizontal\">\n<label class=\"radio-inline\">\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> 150mm\n</label>\n<label class=\"radio-inline\">\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> 230mm\n</label>\n\n</form>\n</div>\n</div>\n</div>\n</div>\n\n<div class=\"row\">\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \n<div class=\"col-md-7 insert\">\n\n\n   <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Cement Price per bag</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"cement\">\n    </div>\n   </div>\n\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Sand price per meter cubic </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"sand\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\n    </div>\n    </div>\n    \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Profit </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\n    </div>\n   </div>\n   \n     <div class=\"form-group\">\n    <label  class=\"col-sm-6 control-label\">Govt Basic Wages per month </label>\n    <div class=\"col-sm-3\">\n      <input type=\"integer\" class=\"form-control\" formControlName=\"wage\">\n    </div>\n   </div>\n\n\n</div>\t\n\n<div class=\"col-md-5 answer\">\n\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\n<p> Unit Rate Per Metre Square </p>\n<p> {{rate}}\n\n</div>\n</form>\n</div>\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/formular/plaster/plaster.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreenComponent);
    return ScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/reinforce/reinforce.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main { border:1px solid #f2f2f2;\r\n        border-radius: 5px;\r\n        padding-top: 10px; }\r\n\r\n.radio { padding-left:50px;  }\r\n\r\n.control-label {\r\n  font-weight: lighter;\r\n  font-size: 13px;\r\n  text-align: left;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/reinforce/reinforce.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"row\">\r\n<div class=\"col-md-12 radio\">\r\n<h4> Unit Rate Formula </h4>\r\n\r\n<form class=\"form-horizontal\" #reinforce=\"ngForm\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit(reinforce.value)\">\r\n\r\n<p> Select Bar Size</p>\r\n\r\n<label class=\"radio-inline\">\r\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\"> 8mm\r\n</label>\r\n<label class=\"radio-inline\">\r\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\"> 10mm\r\n</label>\r\n<label class=\"radio-inline\">\r\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"> 12mm\r\n</label>\r\n<label class=\"radio-inline\">\r\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"> 16mm\r\n</label>\r\n<label class=\"radio-inline\">\r\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"> 20mm\r\n</label>\r\n<label class=\"radio-inline\">\r\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"> 25mm\r\n</label>\r\n<label class=\"radio-inline\">\r\n  <input type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio3\" value=\"option3\"> 35mm\r\n</label>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n<div class=\"col-md-7 insert\">\r\n<form [formGroup]=\"FormulaForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n   <div class=\"form-group\">\r\n    <label>RE-bar Price per Ton</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"ton\">\r\n    </div>\r\n   </div>\r\n\r\n     <div class=\"form-group\">\r\n    <label>Binding wire price per kg</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"bind\">\r\n    </div>\r\n    </div>\r\n    \r\n     <div class=\"form-group\">\r\n    <label>Govrt Basic Wages per month </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"wage\">\r\n    </div>\r\n   </div>\r\n\r\n     <div class=\"form-group\">\r\n    <label> Overhead </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" placeholder=\"%\" formControlName=\"overhead\">\r\n    </div>\r\n   </div>\r\n\r\n        <div class=\"form-group\">\r\n    <label> Transportation</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" placeholder=\"%\" formControlName=\"transportation\">\r\n    </div>\r\n   </div>\r\n\r\n        <div class=\"form-group\">\r\n    <label>Profit </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" placeholder=\"%\" formControlName=\"profit\">\r\n    </div>\r\n   </div>\r\n <div class=\"form-group\">\r\n<button type=\"submit\"> calculate</button>  \r\n</div>\r\n<p> Unit Rate per Kg</p>\r\n<p>{{this.rate}} <p>\r\n</form>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/view/formular/reinforce/reinforce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReinforceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReinforceComponent = /** @class */ (function () {
    function ReinforceComponent() {
        this.FormulaForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            ton: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            bind: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            wage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            transportation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    ReinforceComponent.prototype.ngOnInit = function () {
    };
    ReinforceComponent.prototype.onSubmit = function () {
        this.data = this.FormulaForm.value;
        var x = this.data.ton;
        var y = this.data.bind;
        var w = this.data.wage;
        var o = this.data.overhead / 100;
        var p = this.data.profit / 100;
        var t = this.data.transportation / 100;
        this.wastage = 0.05 * +x;
        this.bind = 10 * +y;
        this.total_one = +x + +this.wastage + +this.bind;
        this.transport = +t * +this.total_one;
        this.total_two = +this.total_one + +this.transport;
        this.fix = 1.81 * 2 * (+w / 25) * 7.5;
        this.unskilled = +this.fix;
        this.total_three = +this.total_two + +this.fix + +this.unskilled;
        this.overhead = o * +this.total_three;
        this.profit = p * +this.total_three;
        this.rate = (+this.total_three + +this.overhead + +this.profit) / 1000;
        console.log(this.rate);
    };
    ReinforceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'reinforce',
            template: __webpack_require__("../../../../../src/app/view/formular/reinforce/reinforce.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/reinforce/reinforce.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReinforceComponent);
    return ReinforceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/formular/tile/tile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/formular/tile/tile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n<div class=\"col-md-11 main\">\r\n\r\n<h4> Unit Rate Formula </h4>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<form [formGroup]=\"BlockForm\" class=\"form-horizontal\" (ngSubmit)=\"solution()\">  \r\n<div class=\"col-md-7 insert\">\r\n\r\n\r\n   <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\"> Tile</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"tile\">\r\n    </div>\r\n   </div>\r\n   \r\n    <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">White Cement</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"white\">\r\n    </div>\r\n   </div>\r\n\r\n\r\n   <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">Portland Cement</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"portland\">\r\n    </div>\r\n   </div>\r\n\r\n   <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">Govrt Basic Salary</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"govt\">\r\n    </div>\r\n   </div>\r\n\r\n\r\n    \r\n     <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">Transportation </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"transport\">\r\n    </div>\r\n   </div>\r\n   \r\n     <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\"> Overhead Expenses</label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"overhead\">\r\n    </div>\r\n    </div>\r\n    \r\n     <div class=\"form-group\">\r\n    <label  class=\"col-sm-6 control-label\">Profit </label>\r\n    <div class=\"col-sm-3\">\r\n      <input type=\"integer\" class=\"form-control\" formControlName=\"profit\">\r\n    </div>\r\n   </div>\r\n   \r\n\r\n\r\n</div>\t\r\n\r\n<div class=\"col-md-5 answer\">\r\n\r\n<p>  <button type=\"submit\" class=\"btn btn-primary\">CALCULATE</button></p>\r\n<p> Unit Rate Per Metre Square </p>\r\n<p> {{rate}}\r\n\r\n</div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view/formular/tile/tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TileComponent = /** @class */ (function () {
    function TileComponent() {
        this.BlockForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            tile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            white: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            govt: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            portland: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            overhead: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            profit: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            transport: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    TileComponent.prototype.ngOnInit = function () {
    };
    TileComponent.prototype.solution = function () {
        var t = this.BlockForm.value.tile;
        var wc = this.BlockForm.value.white;
        var pw = this.BlockForm.value.portland;
        var g = this.BlockForm.value.govt;
        var o = this.BlockForm.value.overhead / 100;
        var p = this.BlockForm.value.profit / 100;
        var tr = this.BlockForm.value.transport / 100;
        this.tile = 10 * t;
        this.white = 0.25 * wc;
        this.portland = 0.5 * pw;
        this.sub_one = +this.tile + +this.white + +this.portland;
        this.waste = 0.05 * this.sub_one;
        this.sub_two = +this.sub_one + +this.waste;
        this.transport = 0.1 * this.sub_two;
        this.sub_three = +this.sub_two + +this.transport;
        this.labour = (1.81 * 2 * g / 25) * 0.78;
        this.sub_four = +this.sub_three + +this.labour;
        this.overhead = o * this.sub_three;
        this.profit = p * this.sub_four;
        this.rate = (+this.sub_four + +this.overhead + +this.profit) / 10;
        console.log(this.rate);
    };
    TileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tile',
            template: __webpack_require__("../../../../../src/app/view/formular/tile/tile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/formular/tile/tile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TileComponent);
    return TileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/home/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n\t<div id=\"flow\">\n\t\t<form>\n    <label>Contact Form</label>\n\tFirst name<input type=\"text\" name=\"\"><br/>\n\tlast Name<input type=\"text\" name=\"\">\n\tEmail<input type=\"text\" name=\"\"><br/>\n\tphone No<input type=\"\" name=\"\">\n\t\n\t<textarea rows=\"4\"></textarea>>\n\t<input type=\"submit\" name=\"\"  value=\"Submit\">\n\n\n\t</form>\n\t</div>\n\n\n</div>\n</div>\n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.slides { margin-top: 20px }\r\n.carousel-inner {height: 400px}\r\n.carousel-inner > img { \r\n   height:250px; \r\n}\r\n.main{ margin-top: 20px;\r\n        margin-bottom: 20px \r\n}\r\n.frame,.thumbnail {\r\n   height: 250px;\r\n    }\r\n.thumbnail {\r\n   height: 170px;\r\n    }\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row slides\">\r\n\r\n<div class=\"col-md-3 sidebar\"> \r\n\r\n\r\n<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\"> Trending News</div>\r\n  <div class=\"panel-body\">\r\n     \r\nquis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus quis viverra ornare, eros Suspendisse varius enim in eros \r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-primary\">\r\n  <div class=\"panel-body\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare </p>\r\n<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" routerLink=\"/form\" routerLinkActive=\"active\">Join Us</button>\r\n \r\n    \r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"col-md-7\">\r\n   \r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\r\n  </ol>\r\n\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"item active\">\r\n      <img src=\"../assets/1.jpg\"  style=\"width:100%\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"../assets/2.jpeg\"  style=\"width:100%\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"../assets/3.jpg\"  style=\"width:100%\">\r\n    </div>\r\n\r\n\r\n   <div class=\"item\">\r\n      <img src=\"../assets/4.jpeg\"  style=\"width:100%\">\r\n    </div>\r\n    <div class=\"item\">\r\n      <img src=\"../assets/5.png\"  style=\"width:100%\">\r\n    </div>\r\n  \r\n\r\n\r\n  </div>\r\n\r\n\r\n  <!-- Left and right controls -->\r\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n\r\n</div>\r\n\r\n<div class=\"col-md-2\">\r\n<div class=\"panel panel-primary\">\r\n  <div class=\"panel-body\">\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus\r\nquis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus quis viverra ornare, eros </p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container main\">\r\n<div class=\"row\">\r\n\r\n\r\n<div class=\"col-md-12 infro\">\r\n\r\n<div class=\"row\">\r\n\r\n   <div class=\"col-xs-6 col-md-2\">\r\n    <a href=\"#\" class=\"thumbnail\">\r\n      <img src=\"../../assets/ads-logo/logo7.png\" alt=\"logos\">\r\n    </a>\r\n  </div>\r\n\r\n   <div class=\"col-xs-4 col-md-2\">\r\n    <a href=\"#\" class=\"thumbnail\">\r\n      <img src=\"../../assets/ads-logo/logo16.png\" alt=\"logos\">\r\n    </a>\r\n  </div>\r\n\r\n   <div class=\"col-xs-4 col-md-2\">\r\n    <a href=\"#\" class=\"thumbnail\">\r\n      <img src=\"../../assets/ads-logo/log3.png\" alt=\"logos\">\r\n    </a>\r\n  </div>\r\n\r\n   <div class=\"col-xs-4 col-md-2\">\r\n    <a href=\"#\" class=\"thumbnail\">\r\n      <img src=\"../../assets/ads-logo/logo4.png\" alt=\"logos\">\r\n    </a>\r\n  </div>\r\n\r\n   <div class=\"col-xs-4 col-md-2\">\r\n    <a href=\"#\" class=\"thumbnail\">\r\n      <img src=\"../../assets/ads-logo/logo5.png\" alt=\"logos\">\r\n    </a>\r\n  </div>\r\n\r\n   <div class=\"col-xs-4 col-md-2\">\r\n    <a href=\"#\" class=\"thumbnail\">\r\n      <img src=\"../../assets/ads-logo/logo12.png\" alt=\"logos\">\r\n    </a>\r\n    <h4><a href=\"#\">View All</a> </h4>\r\n\r\n  </div>\r\n\r\n</div>\r\n \r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/view/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'view-home',
            template: __webpack_require__("../../../../../src/app/view/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/manufacturers/index_manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexManufacturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manufacturer_service__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexManufacturerComponent = /** @class */ (function () {
    function IndexManufacturerComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.company = [];
    }
    IndexManufacturerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe((function (data) {
            _this.company = data.res;
            console.log(data.res);
        }));
    };
    IndexManufacturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: "\n<div class=\"container\">\n<div class=\"row intro\">\n<div class=\"col-md-12\">\n \n\n<div class=\"row\">\n<div class=\"col-md-12\">\n\n<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\"> Manufacturer</a></li>\n<li *ngFor=\"let company of company\">{{company.company_name}}</li>\n</ol>\n\n</div>\n</div>\n\n<table>\n\n<tr *ngFor=\"let company of company\">\n<td> <img [src]=\"'http://localhost:8000/images/'+company.logo\"></td>\n</tr>\n</table>\n\n<div class=\"row\">\n\n<div class=\"col-md-10\">\n\n<ul class=\"nav nav-pills\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Company Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Products</a></li>\n  <li role=\"presentation\"><a href=\"#\">News </a></li>\n</ul>\n\n<table>\n\n<tr *ngFor=\"let company of company\">\n<td> {{company.company_name}}</td>\n</tr>\n<tr *ngFor=\"let company of company\">\n<td id=\"profile\"> {{company.profile}} </td>\n</tr>\n\n</table>\n</div>\n<div class=\"col-md-2\">\n<table class=\"table\">\n\n <tr *ngFor=\"let company of company\">\n <td> {{company.address}}</td>\n </tr>\n <tr *ngFor=\"let company of company\">\n <td> {{company.contact_person}}</td> \n </tr>\n   <tr *ngFor=\"let company of company\">\n <td>{{company.regional}} </td>\n </tr>\n  <tr *ngFor=\"let company of company\">\n <td>{{company.district}} </td>\n </tr>\n  <tr *ngFor=\"let company of company\">\n <td> {{company.contact_email}}</td>\n </tr>\n <tr *ngFor=\"let company of company\">\n <td> {{company.contact_phone}}</td>\n</tr>\n</table>\n</div>\n</div>\n</div>\n</div>\n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__manufacturer_service__["a" /* ManufacturerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], IndexManufacturerComponent);
    return IndexManufacturerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/manufacturers/manufacturer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#profile {\r\n\tpadding-top: 10px;\r\n\tfont-size: 17px;\r\n}\r\n\r\n table { font-size: 16px;\r\n          }\r\n\r\n td {  padding:5px 5px 5px 10px; }        ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/manufacturers/manufacturer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manufacturer_service__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManufacturerComponent = /** @class */ (function () {
    function ManufacturerComponent() {
    }
    ManufacturerComponent.prototype.ngOnInit = function () {
    };
    ManufacturerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'manufacturer',
            template: "\n  <router-outlet> </router-outlet> \n  \n  ",
            styles: [__webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__manufacturer_service__["a" /* ManufacturerService */]]
        }),
        __metadata("design:paramtypes", [])
    ], ManufacturerComponent);
    return ManufacturerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/manufacturers/manufacturer.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manufacturer_service__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManufacturerResolver = /** @class */ (function () {
    function ManufacturerResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    ManufacturerResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.api.filter_manufacturer(id).take(1).map(function (res) {
            if (res) {
                return res;
            }
            else {
                _this.router.navigate(['/view']);
                return null;
            }
        });
    };
    ManufacturerResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__manufacturer_service__["a" /* ManufacturerService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ManufacturerResolver);
    return ManufacturerResolver;
}());



/***/ }),

/***/ "../../../../../src/app/view/manufacturers/manufacturer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManufacturerService = /** @class */ (function () {
    function ManufacturerService(http) {
        this.http = http;
        this.manuUlr = "http://127.0.0.1:8000/api/companies";
    }
    ManufacturerService.prototype.get_manu = function () {
        return this.http.get(this.manuUlr)
            .map(function (response) { return response.json(); });
    };
    ManufacturerService.prototype.filter_manufacturer = function (id) {
        return this.get_manu()
            .map(function (result) { return result.filter(function (res) { return res.id === +id; }); });
    };
    ManufacturerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ManufacturerService);
    return ManufacturerService;
}());



/***/ }),

/***/ "../../../../../src/app/view/manufacturers/manufacturers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManufacturersComponent = /** @class */ (function () {
    function ManufacturersComponent() {
    }
    ManufacturersComponent.prototype.ngOnInit = function () {
    };
    ManufacturersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'manufacturers',
            template: "\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManufacturersComponent);
    return ManufacturersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.navbar-default {\r\n  background-color: #00B4CC;\r\n  border-radius: 0px;\r\n  padding-right: 20px;\r\n  border-bottom: none;\r\n\r\n}\r\n\r\n.collapse {\r\n  margin-top: 50px;\r\n  background-color: #fff;\r\n}\r\n\r\n#search{\r\n  height:50px;\r\n  width:250;\r\n  float:right;\r\n  clear:right;\r\n}\r\n\r\n.drops > li > a:hover {\r\n background-color: #00B4CC;\r\n   color:#fff;\r\n}\r\n\r\n.drops > li > a:active {\r\n background-color: #00B4CC;\r\n   color:#fff;\r\n}\r\n\r\n.test {\r\n   position: absolute;\r\n     z-index:5;\r\n     background-color: #00B4CC;\r\n     width: 100%;\r\n     left: 0px;\r\n     width:1150px;\r\n      margin-left:-15px;\r\n  height:470px;\r\n  padding:2em;\r\n  -webkit-transition:all 3s cease;\r\n  transition:all 3s cease;\r\n    font-size:12px;\r\n    color: #ffffff;\r\n      text-align: left;\r\n}\r\n\r\n.test_pro {\r\n     position: absolute;\r\n     z-index:5;\r\n     background-color: #00B4CC;\r\n     width: 100%;\r\n     left: 0px;\r\n     width:1150px;\r\n      margin-left:-350px;\r\n  height:470px;\r\n  padding:2em;\r\n  -webkit-transition:all 3s cease;\r\n  transition:all 3s cease;\r\n    font-size:12px;\r\n    color: #ffffff;\r\n      text-align: left;\r\n}\r\n\r\n.test  a {\r\n  color:#ffffff;\r\n    text-align: left;\r\n    font-weight: lighter;\r\n    padding-top: 15px;\r\n\r\n}\r\n\r\n.menu-categories {\r\n  text-decoration:underline;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  color: #FFFFFF;\r\n      margin-left:2.8em;\r\n}\r\n\r\n.test li {\r\n  list-style: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img alt=\"Brand\" src=\"...\">\r\n      </a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li><a href=\"#\">Home</a></li>\r\n        <li><a href=\"#\">About</a></li>\r\n        <li><a href=\"#\">Contact Us</a></li>\r\n        <li><a href=\"#\"> Careers</a></li>\r\n        <li><a href=\"#\">Login</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n <div class=\"container\">\r\n   <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n\r\n\r\n\r\n     <ul class=\"nav navbar-nav drops\">\r\n\r\n       <li  (mouseenter)=\"toggleDrop()\" (mouseleave)=\"toggleDrop()\" class=\"active\"><a href=\"#\">PRODUCTS</a>\r\n\r\n\r\n\r\n<div class=\"row test\" [@dropdown]=\"showState\">\r\n<div class=\"col-md-3\">  \r\n\r\n                  <h3 class=\"menu-categories\">Paints</h3>\r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',paint_1]\" routerLinkActive=\"active\">Weatherguards</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',paint_2]\" routerLinkActive=\"active\">Silky</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',paint_3]\" routerLinkActive=\"active\">Emulsion</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',paint_4]\" routerLinkActive=\"active\">High Gloss</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',paint_5]\" routerLinkActive=\"active\">Vanish</a></li>\r\n                  </ul>\r\n                              \r\n                  <h3 class=\"menu-categories\">Tools, Devices & Machines</h3>\r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',Tools_1]\" routerLinkActive=\"active\">Hand Tools</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Tools_2]\" routerLinkActive=\"active\">Machines Tools</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Tools_3]\" routerLinkActive=\"active\">Air Conditions</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Tools_4]\" routerLinkActive=\"active\">Heating</a></li>\r\n                  </ul>\r\n                              \r\n                  <h3 class=\"menu-categories\">Wood</h3>\r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',Wood_1]\" routerLinkActive=\"active\">Softwood</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Wood_2]\" routerLinkActive=\"active\">Hardwood</a></li>\r\n                  </ul>\r\n              \r\n                                                \r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"col-md-3\">  \r\n<h3 class=\"menu-categories\">Plastics, Pipes & Fittings</h3>\r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_1]\" routerLinkActive=\"active\">Hand Wash Basins</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_2]\" routerLinkActive=\"active\">Water Closets</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_3]\" routerLinkActive=\"active\">Water Tanks</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_4]\" routerLinkActive=\"active\">IPS Pipes</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_5]\" routerLinkActive=\"active\">UPVC Pipes</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_6]\" routerLinkActive=\"active\">Bathtubes</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_7]\" routerLinkActive=\"active\">HDPE PIpes</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_8]\" routerLinkActive=\"active\">PVC Pipes</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_9]\" routerLinkActive=\"active\">Water Pumps</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_10]\" routerLinkActive=\"active\">Solar Heater Water</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Hand_11]\" routerLinkActive=\"active\">Electric Water Heater</a></li>\r\n                  </ul>\r\n                     \r\n                  <h3 class=\"menu-categories\">Timber, Aluminium, PVC & Glass</h3>\r\n                    <ul>\r\n                      <li><a [routerLink]=\"['sub_product',Timber_1]\" routerLinkActive=\"active\">PVC</a></li>\r\n                      <li><a [routerLink]=\"['sub_product',Timber_2]\" routerLinkActive=\"active\">Wood Stains</a></li>\r\n                      <li><a [routerLink]=\"['sub_product',Timber_3]\" routerLinkActive=\"active\">Softwood</a></li>\r\n                      <li><a [routerLink]=\"['sub_product',Timber_4]\" routerLinkActive=\"active\">Hardwoods</a></li>\r\n                      <li><a [routerLink]=\"['sub_product',Timber_5]\" routerLinkActive=\"active\">Treated Impregnated</a></li>\r\n                      <li><a [routerLink]=\"['sub_product',Timber_6]\" routerLinkActive=\"active\">Glass</a></li>\r\n                      <li><a [routerLink]=\"['sub_product',Timber_6]\" routerLinkActive=\"active\">Aluminium</a></li>\r\n                    </ul>\r\n              \r\n                              \r\n                  <h3 class=\"menu-categories\">Electrical & Telecommunications</h3>\r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_1]\" routerLinkActive=\"active\">Data Cables</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_1]\" routerLinkActive=\"active\">Data Accessories</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_2]\" routerLinkActive=\"active\">Telephones Receivers</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_3]\" routerLinkActive=\"active\">Patch Panels</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_4]\" routerLinkActive=\"active\">Switches</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_5]\" routerLinkActive=\"active\">Circuit Breakers</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_6]\" routerLinkActive=\"active\">Main Switches</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_7]\" routerLinkActive=\"active\">Sockets & Plugs</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_8]\" routerLinkActive=\"active\">Cables & Wires</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_]\" routerLinkActive=\"active\">Amoured Cables</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Electrical_10]\" routerLinkActive=\"active\">Lights</a></li>\r\n                  </ul>\r\n                  \r\n                  <h3 class=\"menu-categories\">Masonry</h3>                  \r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_1]\" routerLinkActive=\"active\">Pavings Slabs</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_2]\" routerLinkActive=\"active\">Bricks & Blocks</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_3]\" routerLinkActive=\"active\">Precast Concrete</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_4]\" routerLinkActive=\"active\">Stones</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_5]\" routerLinkActive=\"active\">Culvates</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_6]\" routerLinkActive=\"active\">Agregates</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_7]\" routerLinkActive=\"active\">Sands</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_8]\" routerLinkActive=\"active\">Cements</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Masonry_9]\" routerLinkActive=\"active\">Chippings</a></li>\r\n                  </ul>\r\n            </div>      \r\n\r\n\r\n\r\n\r\n                 <h3 class=\"menu-categories\">Construction Chemicals</h3>\r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',Construction_1]\" routerLinkActive=\"active\">Waterproofing & Dampproofing</a></li>\r\n                    <li> <a [routerLink]=\"['sub_product',Construction_2]\" routerLinkActive=\"active\">Grouts</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Construction_3]\" routerLinkActive=\"active\">Sealands</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Construction_4]\" routerLinkActive=\"active\">Coatings</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Construction_5]\" routerLinkActive=\"active\">Primers & Adhesives</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',Construction_6]\" routerLinkActive=\"active\">Silicon</a></li>\r\n                  </ul>\r\n                  \r\n                  <h3 class=\"menu-categories\">Metal & Steels</h3>                 \r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Steel Sheets</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Hollow Sections</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Black Pipes</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Portal Frames</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Bolts & Nuts</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Reinforcement Bars</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Nails</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Screws</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Accessories</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Wire Mesh</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Flat Bars</a></li>\r\n                  </ul>\r\n                  \r\n                  <h3 class=\"menu-categories\">Finishes</h3>                 \r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Wall Finishes</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Flooring</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Roofing</a></li>\r\n                  </ul>\r\n              \r\n                              \r\n                  <h3 class=\"menu-categories\">Doors, Windows & Ironmongery</h3>\r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Mortise Locks</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Stays</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Hinges</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Pad Locks</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Stoppers</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Hardwood Panels Doors</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Flash Doors</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Security Doors</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Aluminum</a></li>\r\n                    <li> <a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">PVC Doors</a></li>\r\n                  </ul>\r\n                  \r\n                  <h3 class=\"menu-categories\">Boards & Partitions</h3>                  \r\n                  <ul>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">MDF Boards</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Gypsum Boards</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Gypsum Powders</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Drywall Screws</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Metal Studs</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Sound Proofing Materials</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Laminated Boards</a></li>\r\n                    <li><a [routerLink]=\"['sub_product',landscape]\" routerLinkActive=\"active\">Acrylic Sheets</a></li>\r\n                  </ul>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n       </li>\r\n       <li><a href=\"#contact\">SUPPLIERS</a></li>\r\n       <li><a href=\"#about\">SPECIALISTS</a></li>\r\n\r\n <li (mouseenter)=\"toggleProfessional()\" (mouseleave)=\"toggleProfessional()\"><a href=\"#about\">PROFESSIONALS</a>\r\n\r\n<div class=\"row test_pro\" [@dropProfessional]=\"showProfessional\">\r\n\r\n<div class=\"col-md-3\">  \r\n  <h3 class=\"menu-categories\">Architects</h3>\r\n                  <ul>\r\n                  <li><a href=\"#\">Architects</a></li>\r\n                    <li><a href=\"#\">Landscape</a></li>\r\n                    <li><a href=\"#\">Interior Designing</a></li>\r\n                    <li><a href=\"#\">Technologists</a></li>\r\n                  </ul>\r\n\r\n </div>\r\n\r\n <div class=\"col-md-3\">  \r\n\r\n <h3 class=\"menu-categories\">Contractors</h3>\r\n                  <ul>\r\n      <li><a href=\"#\">Civil</a></li>\r\n                    <li><a href=\"#\">Building</a></li>\r\n                    <li><a href=\"#\">Civil & Buildings</a></li>\r\n                    <li><a href=\"#\">Electrical</a></li>\r\n                    <li><a href=\"#\">Mechanical</a></li>\r\n                    <li><a href=\"#\">Labour Base</a></li>\r\n                  </ul>\r\n\r\n </div>\r\n\r\n  <div class=\"col-md-3\"> \r\n       <h3 class=\"menu-categories\">Consulting Engineers</h3>\r\n                  <ul>\r\n                      <li><a href=\"#\">Highway</a></li>\r\n                      <li><a href=\"#\">Structures</a></li>\r\n                      <li><a href=\"#\">Electrical</a></li>\r\n                  </ul>   \r\n\r\n   </div>\r\n\r\n       <div class=\"col-md-3\"> \r\n         <h3 class=\"menu-categories\">Quantity Surveyors</h3>\r\n          <ul>  <li><a href=\"#\">Quantity Surveyors</a></li> </ul>\r\n       </div>\r\n\r\n\r\n</div>\r\n       </li>\r\n\r\n\r\n       <li><a href=\"#contact\">EQUIPMENT HIRE</a></li>\r\n       <li><a href=\"#contact\">CALCULATORS</a></li>\r\n\r\n\r\n\r\n\r\n        \r\n          </ul>\r\n        </div>\r\n      </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/view/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_service__ = __webpack_require__("../../../../../src/app/view/nav/nav.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(api) {
        this.api = api;
        this.qs = 'QS';
        this.artin = 'Architect';
        this.contrator = 'Contrator';
        this.consultant = 'Engineering Consultant';
        this.landscape = 'Landscape';
        this.technology = 'Technologist';
        this.interior = 'Interior';
        this.art = 'Artchitechy';
        this.civil = 'Civil';
        this.build = 'Building';
        this.build_civil = 'Building & Civil';
        this.electric = 'Electrical';
        this.mechan = 'Mechanical';
        this.tele = 'Telecommunication';
        this.structure = 'Structural';
        this.highway = 'Highway';
        this.paint_1 = 'Weather guards';
        this.paint_2 = 'Silky';
        this.paint_3 = 'Emulsion';
        this.paint_4 = 'High Gloss';
        this.paint_5 = 'Vanish';
        this.Tools_1 = 'Hand tools';
        this.Tools_2 = 'Machines Tools';
        this.Tools_3 = 'Air Conditions';
        this.Tool_4 = 'Heating';
        this.Wood_1 = 'Softwood';
        this.Wood_2 = 'Hardwood';
        this.Hand_1 = 'Hand wash basin';
        this.Hand_2 = 'Water closet';
        this.Hand_3 = 'Water tanks';
        this.Hand_4 = 'IPS pipes';
        this.Hand_5 = 'UPVC pipes';
        this.Hand_6 = 'Bathtub';
        this.Hand_7 = 'HDPE pipes';
        this.Hand_8 = 'PVC pipes';
        this.Hand_9 = 'Water pumps';
        this.Hand_10 = 'Bath Accessories';
        this.Hand_11 = 'Solar heater water';
        this.Hand_12 = 'Electric water heater';
        this.Electrical_1 = 'Data cables';
        this.Electrical_2 = 'Data accessories';
        this.Electrical_3 = 'Telephone Receivers';
        this.Electrical_4 = 'Patch panels';
        this.Electrical_5 = 'Switches';
        this.Electrical_6 = 'Circuit breakers';
        this.Electrical_7 = 'Sockets and plugs';
        this.Electrical_8 = 'Cables and wires';
        this.Electrical_9 = 'Amoured Cables';
        this.Electrical_10 = 'Lights';
        this.Masonry_1 = 'Paving Slabs';
        this.Masonry_2 = 'Bricks';
        this.Masonry_3 = 'Concrete Blocks';
        this.Masonry_4 = 'Precast concrete';
        this.Masonry_5 = 'Artificial Stones';
        this.Masonry_6 = 'Culvert';
        this.Masonry_7 = 'Agregates';
        this.Masonry_8 = 'Sands';
        this.Masonry_9 = 'Cements';
        this.Finishes_1 = 'Wall surface';
        this.Finishes_2 = 'Flooring';
        this.Finishes_3 = 'Roofing';
        this.Timber_1 = 'PVC';
        this.Timber_2 = 'Wood stains';
        this.Timber_3 = 'Softwood';
        this.Timber_4 = 'Hardwoods';
        this.Timber_5 = 'Treated impregnated';
        this.Timber_6 = 'Glass bricks';
        this.Construction_1 = 'Waterproofing & Dampproofing';
        this.Construction_2 = 'Grouts';
        this.Construction_3 = 'Sealants';
        this.Construction_4 = 'Coatings';
        this.Construction_5 = 'Primers & Adhesives';
        this.Construction_6 = 'Silicon';
        this.Metal_1 = 'Steel sheets';
        this.Metal_2 = 'Pipes';
        this.Metal_3 = 'Portal frame';
        this.Metal_4 = 'Accessories';
        this.Doors_1 = 'Mortise locks';
        this.Doors_2 = 'Stays';
        this.Doors_3 = 'Hinges';
        this.Doors_4 = 'Pad locks';
        this.Doors_5 = 'Stoppers';
        this.Doors_6 = 'Hardwood Panel';
        this.Doors_7 = 'Flash Doors';
        this.Doors_8 = 'Security Doors';
        this.Doors_9 = 'Aluminium Doors';
        this.results = [];
        this.showState = 'inactive';
        this.showProduct = 'inactive';
        this.showSupplier = 'inactive';
        this.showAgent = 'inactive';
        this.showProfessional = 'inactive';
        this.showRental = 'inactive';
        this.subpaint = 'inactive';
        this.sub1 = 'inactive';
        this.sub2 = 'inactive';
        this.sub3 = 'inactive';
        this.sub4 = 'inactive';
        this.sub5 = 'inactive';
        this.sub6 = 'inactive';
        this.sub7 = 'inactive';
        this.sub8 = 'inactive';
        this.sub9 = 'inactive';
        this.sub10 = 'inactive';
        this.sub11 = 'inactive';
        this.sub12 = 'inactive';
        this.sub13 = 'inactive';
        this.sub14 = 'inactive';
        this.sub15 = 'inactive';
        this.sub16 = 'inactive';
        this.sub17 = 'inactive';
        this.subArt = 'inactive';
        this.subContractor = 'inactive';
        this.subConsultants = 'inactive';
        this.categorys = [];
        this.products = [];
        this.manufactures = [];
        this.suppliers = [];
        this.agents = [];
        this.professionals = [];
        this.rentals = [];
        this.fundis = [];
    }
    NavComponent.prototype.ngOnInit = function () { this.categories(); this.get_manufacture(); this.get_supplier(); this.get_professional(), this.get_rental(); };
    NavComponent.prototype.onSearch = function (event) {
        var _this = this;
        var search_data = event.target.value;
        this.api.search_agent(search_data)
            .subscribe(function (res) { return _this.results = res; });
    };
    NavComponent.prototype.categories = function () {
        var _this = this;
        this.api.get_Categorys()
            .subscribe(function (res) { _this.categorys = res; });
    };
    NavComponent.prototype.get_professional = function () {
        var _this = this;
        this.api.professional()
            .subscribe(function (res) { _this.professionals = res; });
    };
    NavComponent.prototype.get_manufacture = function () {
        var _this = this;
        this.api.manufactures()
            .subscribe(function (res) { _this.manufactures = res; });
    };
    NavComponent.prototype.get_supplier = function () {
        var _this = this;
        this.api.suppliers()
            .subscribe(function (res) { _this.suppliers = res; });
    };
    NavComponent.prototype.get_agent = function () {
        var _this = this;
        this.api.agents()
            .subscribe(function (res) { _this.agents = res; });
    };
    NavComponent.prototype.get_rental = function () {
        var _this = this;
        this.api.get_rental()
            .subscribe(function (res) { _this.rentals = res; });
    };
    NavComponent.prototype.get_fundi = function () {
        var _this = this;
        this.api.get_fundi()
            .subscribe(function (res) { return _this.fundis = res; });
    };
    NavComponent.prototype.toggleDrop = function () {
        this.showState = (this.showState === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleProduct = function () {
        this.showProduct = (this.showProduct === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleSupplier = function () {
        this.showSupplier = (this.showSupplier === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleAgent = function () {
        this.showAgent = (this.showAgent === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleProfessional = function () {
        this.showProfessional = (this.showProfessional === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleRental = function () {
        this.showRental = (this.showRental === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesubpaint = function () {
        this.subpaint = (this.subpaint === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesubElevators = function () {
        this.sub1 = (this.sub1 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub1 = function () {
        this.sub2 = (this.sub2 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub2 = function () {
        this.sub3 = (this.sub3 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub3 = function () {
        this.sub4 = (this.sub4 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub4 = function () {
        this.sub5 = (this.sub5 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub5 = function () {
        this.sub6 = (this.sub6 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub6 = function () {
        this.sub7 = (this.sub7 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub7 = function () {
        this.sub8 = (this.sub8 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub8 = function () {
        this.sub9 = (this.sub9 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub9 = function () {
        this.sub10 = (this.sub10 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub10 = function () {
        this.sub11 = (this.sub11 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub11 = function () {
        this.sub12 = (this.sub12 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub12 = function () {
        this.sub13 = (this.sub13 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub13 = function () {
        this.sub14 = (this.sub14 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub14 = function () {
        this.sub15 = (this.sub15 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub15 = function () {
        this.sub16 = (this.sub16 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.togglesub16 = function () {
        this.sub17 = (this.sub17 === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleArt = function () {
        this.subArt = (this.subArt === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleContractor = function () {
        this.subContractor = (this.subContractor === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent.prototype.toggleConsultants = function () {
        this.subConsultants = (this.subConsultants === 'inactive') ? 'active' : 'inactive';
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/view/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/nav/nav.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropdown', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropProduct', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropManu', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropSupplier', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropAgent', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropProfessional', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropRental', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('subPaint', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Elevators', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Tools', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Plastics', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Security', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Telecommunications', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Stairs', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Railings', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('lronmongeries', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Masonry', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Metal', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Furniture', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Fireplaces', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Windows', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Surface', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Kitchen', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Facade', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('Cements', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropArt', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropContractor', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('dropConsultants', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'none' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ display: 'block' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('inactive => active', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('active => inactive', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('100ms ease-out'))
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__nav_service__["a" /* NavService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nav_service__["a" /* NavService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/nav/nav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavService = /** @class */ (function () {
    function NavService(http) {
        this.http = http;
        this.pros = 11;
        this.get_categoryUrl = "http://127.0.0.1:8000/api/categories";
        this.get_pro_categoryUrl = "http://127.0.0.1:8000/api/pro-category";
        this.professionalURL = "http://127.0.0.1:8000/api/professionals";
        this.manuURL = "http://127.0.0.1:8000/api/companies_manu";
        this.supplierURL = "http://127.0.0.1:8000/api/companies_supplier";
        this.agentsURL = "http://127.0.0.1:8000/api/agent_regions";
        this.rentalsUrl = "http://127.0.0.1:8000/api/types-equip";
        this.search_agentUrl = "http://127.0.0.1:8000/api/agent-search";
        this.search_supplierUrl = "http://127.0.0.1:8000/api/search_supplier";
        this.search_manuUrl = "http://127.0.0.1:8000/api/search_manu";
        this.search_productUrl = "http://127.0.0.1:8000/api/search_product";
        this.fundiUrl = "http://127.0.0.1:8000/api/fundi";
    }
    NavService.prototype.search_agent = function (data) {
        return this.http.get(this.search_agentUrl + '/' + data)
            .map(function (response) { return response.json(); });
    };
    NavService.prototype.get_Categorys = function () {
        return this.http.get(this.get_categoryUrl)
            .map(function (response) { return response.json(); });
    };
    NavService.prototype.professional = function () {
        return this.http.get(this.get_pro_categoryUrl)
            .map(function (response) { return response.json(); });
    };
    NavService.prototype.manufactures = function () {
        return this.http.get(this.manuURL)
            .map(function (response) { return response.json(); });
    };
    NavService.prototype.suppliers = function () {
        return this.http.get(this.supplierURL)
            .map(function (response) { return response.json(); });
    };
    NavService.prototype.agents = function () {
        return this.http.get(this.agentsURL)
            .map(function (response) { return response.json(); });
    };
    NavService.prototype.get_rental = function () {
        return this.http.get(this.rentalsUrl)
            .map(function (response) { return response.json(); });
    };
    NavService.prototype.get_fundi = function () {
        return this.http.get(this.fundiUrl)
            .map(function (response) { return response.json(); });
    };
    NavService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "../../../../../src/app/view/products/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/view/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCompanyComponent = /** @class */ (function () {
    function ProductCompanyComponent(api, route) {
        this.api = api;
        this.route = route;
        this.name = this.route.snapshot.paramMap.get('name');
        this.company = [];
    }
    ProductCompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.get_company(this.name)
            .subscribe(function (res) { _this.company = res; });
    };
    ProductCompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'company',
            template: "\n<div class=\"container\">\n<div class=\"row intro\">\n<div class=\"col-md-12\">\n\n\n<div class=\"row\">\n<div class=\"col-md-12\">\n<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\"> Manufacturer</a></li>\n\n</ol>\n\n</div>\n</div>\n\n\n\n<div class=\"row\">\n\n<div class=\"col-md-10\">\n\n\n<table>\n\n<tr *ngFor=\"let company of company\">\n<td><img [src]=\"'http://localhost:8000/images/'+company.logo\"> </td><td> <h3>{{company.company_name}} </h3></td>\n</tr>\n</table>\n\n<ul class=\"nav nav-pills\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Company Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Products</a></li>\n  <li role=\"presentation\"><a href=\"#\">News </a></li>\n</ul>\n\n<table>\n\n<tr *ngFor=\"let company of company\">\n<td id=\"profile\"> {{company.profile}} </td>\n</tr>\n\n</table>\n</div>\n<div class=\"col-md-2\">\n<table class=\"table\">\n\n <tr *ngFor=\"let company of company\">\n <td> {{company.address}}</td>\n </tr>\n <tr *ngFor=\"let company of company\">\n <td> {{company.contact_person}}</td> \n </tr>\n   <tr *ngFor=\"let company of company\">\n <td>{{company.regional}} </td>\n </tr>\n  <tr *ngFor=\"let company of company\">\n <td>{{company.district}} </td>\n </tr>\n  <tr *ngFor=\"let company of company\">\n <td> {{company.contact_email}}</td>\n </tr>\n <tr *ngFor=\"let company of company\">\n <td> {{company.contact_phone}}</td>\n</tr>\n</table>\n</div>\n</div>\n</div>\n</div>\n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/products/product.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductCompanyComponent);
    return ProductCompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/products/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: "<router-outlet> </router-outlet>",
            styles: [__webpack_require__("../../../../../src/app/view/products/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/products/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.intro { margin-top: 10px; }\r\n\r\nli { list-style: none; }\r\n\r\n#profile {\r\n\tpadding-top: 10px;\r\n\tfont-size: 19px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/products/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/view/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.products = [];
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe((function (data) {
            _this.products = data.res;
            console.log(data.res);
        }));
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'products',
            template: "\n\n\n<div class=\"container\">\n<div class=\"row intro\">\n<div class=\"col-md-12\">\n<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home></a></li>\n  <li><a href=\"#\">product categories></a></li>\n  <li class=\"active\">Paints</li>\n</ol>\n</div>\n</div>\n\n<div class=\"row\">\n<div class=\"col-md-2\">\n\n</div> \n\n<div class=\"col-md-10\">\n<table class=\"table\"> \n  <tr>\n    <th>  Image </th>\n    <th> Sub Category </th> \n <th> size </th>\n <th> price </th> \n\n     <th> Company Name </th> <th> Status </th>\n  </tr>\n\n  <tr *ngFor=\"let product of products\">\n    <td> <img [src]=\"'http://localhost:8000/images/'+product.logo\"> </td>\n     <td>{{product.product_name}} </td> \n      <td>{{product.size}} </td> \n      <td> {{product.price}}</td>  \n      <td><a [routerLink]=\"['/company',product.company_name]\" routerLinkActive=\"active\">{{product.company_name}}</a> </td>\n      <td> {{product.type_name}} <td>\n  </tr>\n\n</table>\n</div>\n</div>\n</div>\n\n  \n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/products/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/products/product.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_service__ = __webpack_require__("../../../../../src/app/view/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductResolver = /** @class */ (function () {
    function ProductResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    ProductResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.api.filter_category(id).take(1).map(function (res) {
            if (res) {
                return res;
            }
            else {
                _this.router.navigate(['/view']);
                return null;
            }
        });
    };
    ProductResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProductResolver);
    return ProductResolver;
}());



/***/ }),

/***/ "../../../../../src/app/view/products/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.product_categoryUrl = "http://127.0.0.1:8000/api/product-category";
        this.productUrl = "http://127.0.0.1:8000/api/product-detail";
        this.companyUrl = "http://127.0.0.1:8000/api/company_name";
    }
    ProductService.prototype.get_products = function (id) {
        return this.http.get(this.product_categoryUrl + '/' + id)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.get_product = function (name) {
        return this.http.get(this.productUrl + '/' + name)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.filter_category = function (id) {
        return this.get_products(id)
            .map(function (cate) { return cate.filter(function (res) { return res.category_id === +id; }); });
    };
    ProductService.prototype.filter_sub = function (name) {
        return this.get_product(name)
            .map(function (sub) { return sub.filter(function (res) { return res.product_name === name; }); });
    };
    ProductService.prototype.get_company = function (name) {
        return this.http.get(this.companyUrl + '/' + name)
            .map(function (response) { return response.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/view/products/product_serie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSeriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/view/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductSeriesComponent = /** @class */ (function () {
    function ProductSeriesComponent(api, route) {
        this.api = api;
        this.route = route;
        this.products = [];
        this.name = this.route.snapshot.paramMap.get('name');
    }
    ProductSeriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe((function (data) {
            _this.products = data.res;
            console.log(data.res);
        }));
    };
    ProductSeriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'series',
            template: "\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\">product categories</a></li>\n  <li *ngFor=\"let product of products\" class=\"active\">{{product.product_name}}</li>\n</ol>\n</div>\n</div> \n\n<div class=\"row\">\n<div class=\"col-md-2\">\n\n\n</div>\n\n<div class=\"col-md-10\">\n<table class=\"table\">\n  <tr>\n    <th>  Image </th>  <th> Size  </th> <th> Price </th> <th> Company </th> <th> Status </th> \n  </tr>\n<tr  *ngFor=\"let product of products\">\n\n      <td><img [src]=\"'http://localhost:8000/images/'+product.logo\"> </td> \n      <td> {{product.size}}</td>  \n      <td> {{product.price}}</td>  \n      <td><a [routerLink]=\"['/company',product.company_name]\" routerLinkActive=\"active\">{{product.company_name}}</a> </td>\n      <td> {{product.type_name}} <td>\n  </tr>\n</table>\n</div>\n</div>\n</div>\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/products/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProductSeriesComponent);
    return ProductSeriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/products/sub_product.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubProductResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_service__ = __webpack_require__("../../../../../src/app/view/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubProductResolver = /** @class */ (function () {
    function SubProductResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    SubProductResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var name = route.paramMap.get('name');
        return this.api.filter_sub(name).take(1).map(function (res) {
            if (res) {
                return res;
            }
            else {
                _this.router.navigate(['/view']);
                return null;
            }
        });
    };
    SubProductResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SubProductResolver);
    return SubProductResolver;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'gallery',
            template: "",
            styles: [__webpack_require__("../../../../../src/app/view/professionals/professional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/index_professional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexProfessionlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexProfessionlComponent = /** @class */ (function () {
    function IndexProfessionlComponent() {
    }
    IndexProfessionlComponent.prototype.ngOnInit = function () {
    };
    IndexProfessionlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: " \n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['small']\" routerLinkActive=\"\">Company Profile </a>\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['large']\" routerLinkActive=\"\">Project Gallery  </a>\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['small']\" routerLinkActive=\"\">News </a>\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['large']\" routerLinkActive=\"\">Contacts </a>\n<router-outlet> </router-outlet>\n\n</div>\n</div> \n</div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/professionals/professional.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexProfessionlComponent);
    return IndexProfessionlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/professional.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nli { list-style: none; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/professionals/professional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent() {
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'professional',
            template: "<router-outlet> </router-outlet>",
            styles: [__webpack_require__("../../../../../src/app/view/professionals/professional.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/professional.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__professional_service__ = __webpack_require__("../../../../../src/app/view/professionals/professional.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfessionalResolver = /** @class */ (function () {
    function ProfessionalResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    ProfessionalResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var name = route.paramMap.get('name');
        return this.api.filter_category(name).take(1).map(function (res) {
            if (res) {
                return res;
            }
            else {
                _this.router.navigate(['/view']);
                return null;
            }
        });
    };
    ProfessionalResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__professional_service__["a" /* ProfessionalService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProfessionalResolver);
    return ProfessionalResolver;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/professional.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessionalService = /** @class */ (function () {
    function ProfessionalService(http) {
        this.http = http;
        this.categoryUrl = "http://127.0.0.1:8000/api/companies";
    }
    ProfessionalService.prototype.pro_category = function () {
        return this.http.get(this.categoryUrl)
            .map(function (response) { return response.json(); });
    };
    ProfessionalService.prototype.filter_category = function (name) {
        return this.pro_category()
            .map(function (cate) { return cate.filter(function (res) { return res.professional_category === name; }); });
    };
    ProfessionalService.prototype.filter_sub = function (name) {
        return this.pro_category()
            .map(function (sub) { return sub.filter(function (res) { return res.professional_name === name; }); });
    };
    ProfessionalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProfessionalService);
    return ProfessionalService;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/professional_type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professional_service__ = __webpack_require__("../../../../../src/app/view/professionals/professional.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessionalTypesComponent = /** @class */ (function () {
    function ProfessionalTypesComponent(api, route) {
        this.api = api;
        this.route = route;
        this.name = this.route.snapshot.paramMap.get('name');
        this.types = [];
    }
    ProfessionalTypesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe((function (data) {
            _this.types = data.res;
            console.log(data.res);
        }));
    };
    ProfessionalTypesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'types',
            template: "\n\n<div class=\"container\">\n<div class=\"row intro\">\n<div class=\"col-md-12\">\n \n\n<div class=\"row\">\n<div class=\"col-md-12\">\n<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\"> Professional Type</a></li>\n\n</ol>\n\n</div>\n</div>\n\n<div class=\"row\">\n<div class=\"col-md-9\">\n\n<div class=\"row\">\n<div class=\"col-md-12 header\">\n <ul>\n    <li *ngFor=\"let type of types\"><h1> {{type.company_name}} </h1></li>\n </ul>\n </div>\n</div>\n\n</div>\n\n\n<div class=\"col-md-3\">\n\n<ul>\n    <li *ngFor=\"let type of types\"> {{type.id}} </li>\n </ul>\n <ul>\n    <li *ngFor=\"let type of types\"> {{type.contact_person}} </li>\n </ul>\n <ul>\n    <li *ngFor=\"let type of types\"> {{type.contact_email}} </li>\n </ul>\n <ul>\n    <li *ngFor=\"let type of types\"> {{type.address}} </li>\n </ul>\n<ul>\n    <li *ngFor=\"let type of types\"> {{type.contact_phone}} </li>\n </ul>\n <ul>\n    <li *ngFor=\"let type of types\"> {{type.regional}} </li>\n </ul>\n <ul>\n    <li *ngFor=\"let type of types\"> {{type.district}} </li>\n </ul>\n</div>\n</div>\n\n\n </div>\n </div>\n </div>\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/professionals/professional.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__professional_service__["a" /* ProfessionalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProfessionalTypesComponent);
    return ProfessionalTypesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/professionals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professional_service__ = __webpack_require__("../../../../../src/app/view/professionals/professional.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessionlsComponent = /** @class */ (function () {
    function ProfessionlsComponent(api, route) {
        this.api = api;
        this.route = route;
        this.name = this.route.snapshot.paramMap.get('name');
        this.subs = [];
    }
    ProfessionlsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe((function (data) {
            _this.subs = data.res;
            console.log(data.res);
        }));
    };
    ProfessionlsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'professionals',
            template: "\n   <div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\"> Professional Type</a></li>\n<li><a href=\"#\">--</a></li>\n</ol>\n\n</div>\n</div>\n  <ul>\n    <li *ngFor=\"let sub of subs\"> {{sub.id}} </li>\n  </ul>\n</div>\n</div>\n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/professionals/professional.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__professional_service__["a" /* ProfessionalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ProfessionlsComponent);
    return ProfessionlsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/professionals/sub_professional.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubProfessionalResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__professional_service__ = __webpack_require__("../../../../../src/app/view/professionals/professional.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubProfessionalResolver = /** @class */ (function () {
    function SubProfessionalResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    SubProfessionalResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var name = route.paramMap.get('name');
        return this.api.filter_sub(name).take(1).map(function (res) {
            if (res) {
                return res;
            }
            else {
                _this.router.navigate(['/view']);
                return null;
            }
        });
    };
    SubProfessionalResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__professional_service__["a" /* ProfessionalService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SubProfessionalResolver);
    return SubProfessionalResolver;
}());



/***/ }),

/***/ "../../../../../src/app/view/rentals/equipments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquipmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rental_service__ = __webpack_require__("../../../../../src/app/view/rentals/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EquipmentsComponent = /** @class */ (function () {
    function EquipmentsComponent(api, route) {
        this.api = api;
        this.route = route;
        this.equipments = [];
        this.id = this.route.snapshot.paramMap.get('id');
    }
    EquipmentsComponent.prototype.ngOnInit = function () {
        this.equip();
    };
    EquipmentsComponent.prototype.equip = function () {
        var _this = this;
        this.api.get_equipment(this.id)
            .subscribe(function (res) { _this.equipments = res; });
    };
    EquipmentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'equipment',
            template: "\n\n<div class=\"row\">\n\n <div class=\"col-md-9\">\n <h3> Company Rent Equipments </h3>\n\n<table>\n<tr *ngFor=\"let equipment of equipments\">\n  <td> Equipment Name </td> <td> {{equipment.equipment_name}} </td>\n</tr>\n<tr *ngFor=\"let equipment of equipments\">\n  <td> Specifications </td>  <td> {{equipment.specification}} </td>\n</tr>\n<tr *ngFor=\"let equipment of equipments\">\n  <td> Monthly charges </td> <td> {{equipment.month_charge}} </td>\n</tr>\n<tr *ngFor=\"let equipment of equipments\">\n  <td> Weekly charges  </td> <td> {{equipment.week_charge}} </td>\n</tr>\n<tr *ngFor=\"let equipment of equipments\">\n  <td> Daily charges </td>  <td> {{equipment.day_charge}} </td>\n</tr>\n<tr *ngFor=\"let equipment of equipments\">\n  <td> Equipment Code </td> <td> {{equipment.equipment_code}} </td>\n</tr>\n\n</table>\n\n\n </div>\n\n <div class=\"col-md-3\">\n\n </div>\n\n\n\n\n\n\n\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/rentals/rental.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EquipmentsComponent);
    return EquipmentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/rentals/index_rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexRentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexRentalComponent = /** @class */ (function () {
    function IndexRentalComponent(route) {
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
    }
    IndexRentalComponent.prototype.ngOnInit = function () {
    };
    IndexRentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: " \n<div class=\"container\">\n<div class=\"row rental\">\n<div class=\"col-md-12\">\n\n\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['/view/rental',id]\" routerLinkActive=\"\">Company Profile </a>\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['equipment',id]\" routerLinkActive=\"\">Equipments</a>\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['small']\" routerLinkActive=\"\">News </a>\n<a class=\"btn btn-default\" role=\"button\" [routerLink]=\"['large']\" routerLinkActive=\"\">Contacts </a>\n\n<router-outlet> </router-outlet>\n\n</div>\n</div> \n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/rentals/rental.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], IndexRentalComponent);
    return IndexRentalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/rentals/rental.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " .rental { margin-top: 20px }\r\n\r\n li { list-style: none; }\r\n\r\n table { font-size: 16px;\r\n         border-left: 1px solid gray;\r\n          }\r\n\r\n td {  padding:5px 5px 5px 10px; }        ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/rentals/rental.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RentalComponent = /** @class */ (function () {
    function RentalComponent() {
    }
    RentalComponent.prototype.ngOnInit = function () {
    };
    RentalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'Rental',
            template: "<router-outlet> </router-outlet>",
            styles: [__webpack_require__("../../../../../src/app/view/rentals/rental.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RentalComponent);
    return RentalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/rentals/rental.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rental_service__ = __webpack_require__("../../../../../src/app/view/rentals/rental.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RentalResolver = /** @class */ (function () {
    function RentalResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    RentalResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.api.filter_rentals(id).take(1).map(function (res) {
            if (res) {
                return res;
            }
            else {
                _this.router.navigate(['/view']);
                return null;
            }
        });
    };
    RentalResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RentalResolver);
    return RentalResolver;
}());



/***/ }),

/***/ "../../../../../src/app/view/rentals/rental.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentalService = /** @class */ (function () {
    function RentalService(http) {
        this.http = http;
        this.rentalsUlr = "http://127.0.0.1:8000/api/companies";
        this.equipUrl = "http://127.0.0.1:8000/api/company_equipment";
    }
    RentalService.prototype.get_rentals = function () {
        return this.http.get(this.rentalsUlr)
            .map(function (response) { return response.json(); });
    };
    RentalService.prototype.filter_rentals = function (id) {
        return this.get_rentals()
            .map(function (rental) { return rental.filter(function (res) { return res.id === +id; }); });
    };
    RentalService.prototype.get_equipment = function (id) {
        return this.http.get(this.equipUrl + '/' + id)
            .map(function (response) { return response.json(); });
    };
    RentalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RentalService);
    return RentalService;
}());



/***/ }),

/***/ "../../../../../src/app/view/rentals/rentals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rental_service__ = __webpack_require__("../../../../../src/app/view/rentals/rental.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RentalsComponent = /** @class */ (function () {
    function RentalsComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.rentals = [];
    }
    RentalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe((function (data) {
            _this.rentals = data.res;
            console.log(data.res);
        }));
    };
    RentalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'rentals',
            template: "\n <div class=\"row\">\n\n <div class=\"col-md-9\">\n <h3> Company Profile </h3>\n<ul>\n  <li *ngFor=\"let rental of rentals\">  <img [src]=\"'http://localhost:8000/images/'+rental.logo\"></li>\n</ul>\n<ul>\n  <li *ngFor=\"let rental of rentals\">  {{rental.profile}}</li>\n</ul>\n</div>\n <div class=\"col-md-3\">\n\n<table> \n  <tr *ngFor=\"let rental of rentals\">\n    <td> {{rental.company_name}}</td>\n  </tr>\n    <tr *ngFor=\"let rental of rentals\">\n    <td> {{rental.contact_person}}</td>\n  </tr>\n    <tr *ngFor=\"let rental of rentals\">\n    <td> {{rental.contact_phone}}</td>\n  </tr>\n    <tr *ngFor=\"let rental of rentals\">\n    <td> {{rental.contact_email}}</td>\n  </tr>\n</table>\n\n </div> \n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/rentals/rental.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__rental_service__["a" /* RentalService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], RentalsComponent);
    return RentalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/suppliers/index_supplier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexSupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__supplier_service__ = __webpack_require__("../../../../../src/app/view/suppliers/supplier.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexSupplierComponent = /** @class */ (function () {
    function IndexSupplierComponent(api, route) {
        this.api = api;
        this.route = route;
        this.id = this.route.snapshot.paramMap.get('id');
        this.company = [];
    }
    IndexSupplierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe((function (data) {
            _this.company = data.res;
            console.log(data.res);
        }));
    };
    IndexSupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'index',
            template: "\n<div class=\"container\">\n<div class=\"row intro\">\n<div class=\"col-md-12\">\n\n\n<div class=\"row\">\n<div class=\"col-md-12\">\n<ol class=\"breadcrumb\">\n  <li><a href=\"#\">Home</a></li>\n  <li><a href=\"#\"> Manufacturer</a></li>\n  <li *ngFor=\"let company of company\">{{company.company_name}}</li>\n</ol>\n\n</div>\n</div>\n\n<table>\n\n<tr *ngFor=\"let company of company\">\n<td><img [src]=\"'http://localhost:8000/images/'+company.logo\"></td>\n</tr>\n</table>\n\n<div class=\"row\">\n\n<div class=\"col-md-10\">\n\n<ul class=\"nav nav-pills\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Company Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Products</a></li>\n  <li role=\"presentation\"><a href=\"#\">News </a></li>\n</ul>\n\n<table>\n\n<tr *ngFor=\"let company of company\">\n<td> {{company.company_name}}</td>\n</tr>\n<tr *ngFor=\"let company of company\">\n<td id=\"profile\"> {{company.profile}} </td>\n</tr>\n\n</table>\n</div>\n<div class=\"col-md-2\">\n<table class=\"table\">\n\n <tr *ngFor=\"let company of company\">\n <td> {{company.address}}</td>\n </tr>\n <tr *ngFor=\"let company of company\">\n <td> {{company.contact_person}}</td> \n </tr>\n   <tr *ngFor=\"let company of company\">\n <td>{{company.regional}} </td>\n </tr>\n  <tr *ngFor=\"let company of company\">\n <td>{{company.district}} </td>\n </tr>\n  <tr *ngFor=\"let company of company\">\n <td> {{company.contact_email}}</td>\n </tr>\n <tr *ngFor=\"let company of company\">\n <td> {{company.contact_phone}}</td>\n</tr>\n</table>\n</div>\n</div>\n</div>\n</div>\n</div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/view/suppliers/supplier.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__supplier_service__["a" /* SupplierService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], IndexSupplierComponent);
    return IndexSupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/suppliers/supplier.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#profile {\r\n\tpadding-top: 10px;\r\n\tfont-size: 17px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/suppliers/supplier.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupplierComponent = /** @class */ (function () {
    function SupplierComponent() {
    }
    SupplierComponent.prototype.ngOnInit = function () {
    };
    SupplierComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'supplier',
            template: "<router-outlet> </router-outlet>",
            styles: [__webpack_require__("../../../../../src/app/view/suppliers/supplier.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/suppliers/supplier.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__supplier_service__ = __webpack_require__("../../../../../src/app/view/suppliers/supplier.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierResolver = /** @class */ (function () {
    function SupplierResolver(api, router) {
        this.api = api;
        this.router = router;
    }
    SupplierResolver.prototype.resolve = function (route, state) {
        var _this = this;
        var id = route.paramMap.get('id');
        return this.api.filter_supplier(id).take(1).map(function (res) {
            if (res) {
                return res;
            }
            else {
                _this.router.navigate(['/view']);
                return null;
            }
        });
    };
    SupplierResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__supplier_service__["a" /* SupplierService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SupplierResolver);
    return SupplierResolver;
}());



/***/ }),

/***/ "../../../../../src/app/view/suppliers/supplier.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierService = /** @class */ (function () {
    function SupplierService(http) {
        this.http = http;
        this.supplierUlr = "http://127.0.0.1:8000/api/companies";
    }
    SupplierService.prototype.get_suppliers = function () {
        return this.http.get(this.supplierUlr)
            .map(function (response) { return response.json(); });
    };
    SupplierService.prototype.filter_supplier = function (id) {
        return this.get_suppliers()
            .map(function (supplier) { return supplier.filter(function (res) { return res.id === +id; }); });
    };
    SupplierService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "../../../../../src/app/view/suppliers/suppliers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuppliersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuppliersComponent = /** @class */ (function () {
    function SuppliersComponent() {
    }
    SuppliersComponent.prototype.ngOnInit = function () {
    };
    SuppliersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'suppliers',
            template: "",
            styles: [__webpack_require__("../../../../../src/app/view/suppliers/supplier.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuppliersComponent);
    return SuppliersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-nav> </app-nav>\n<router-outlet> </router-outlet>\n<footer> </footer>"

/***/ }),

/***/ "../../../../../src/app/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/view.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_routing__ = __webpack_require__("../../../../../src/app/view/view.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_module__ = __webpack_require__("../../../../../src/app/view/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__formular_formula_module__ = __webpack_require__("../../../../../src/app/view/formular/formula.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/view/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__ = __webpack_require__("../../../../../src/app/view/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__suppliers_index_supplier_component__ = __webpack_require__("../../../../../src/app/view/suppliers/index_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__suppliers_suppliers_component__ = __webpack_require__("../../../../../src/app/view/suppliers/suppliers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__suppliers_supplier_component__ = __webpack_require__("../../../../../src/app/view/suppliers/supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_product_component__ = __webpack_require__("../../../../../src/app/view/products/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__products_product_serie_component__ = __webpack_require__("../../../../../src/app/view/products/product_serie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_index_component__ = __webpack_require__("../../../../../src/app/view/products/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__products_company_component__ = __webpack_require__("../../../../../src/app/view/products/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rentals_rentals_component__ = __webpack_require__("../../../../../src/app/view/rentals/rentals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rentals_rental_component__ = __webpack_require__("../../../../../src/app/view/rentals/rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rentals_index_rental_component__ = __webpack_require__("../../../../../src/app/view/rentals/index_rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__rentals_equipments_component__ = __webpack_require__("../../../../../src/app/view/rentals/equipments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__professionals_professional_component__ = __webpack_require__("../../../../../src/app/view/professionals/professional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__professionals_professionals_component__ = __webpack_require__("../../../../../src/app/view/professionals/professionals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__professionals_professional_type_component__ = __webpack_require__("../../../../../src/app/view/professionals/professional_type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__professionals_gallery_component__ = __webpack_require__("../../../../../src/app/view/professionals/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__professionals_index_professional_component__ = __webpack_require__("../../../../../src/app/view/professionals/index_professional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__manufacturers_manufacturer_component__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__manufacturers_index_manufacturer_component__ = __webpack_require__("../../../../../src/app/view/manufacturers/index_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__manufacturers_manufacturers_component__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_home_component__ = __webpack_require__("../../../../../src/app/view/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__footer_terms_component__ = __webpack_require__("../../../../../src/app/view/footer/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__footer_privacy_component__ = __webpack_require__("../../../../../src/app/view/footer/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_form_component__ = __webpack_require__("../../../../../src/app/view/home/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_8__view_component__["a" /* ViewComponent */], __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_9__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_29__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__products_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_14__products_product_serie_component__["a" /* ProductSeriesComponent */], __WEBPACK_IMPORTED_MODULE_15__products_index_component__["a" /* IndexComponent */], __WEBPACK_IMPORTED_MODULE_10__suppliers_index_supplier_component__["a" /* IndexSupplierComponent */], __WEBPACK_IMPORTED_MODULE_12__suppliers_supplier_component__["a" /* SupplierComponent */], __WEBPACK_IMPORTED_MODULE_11__suppliers_suppliers_component__["a" /* SuppliersComponent */], __WEBPACK_IMPORTED_MODULE_17__rentals_rentals_component__["a" /* RentalsComponent */], __WEBPACK_IMPORTED_MODULE_18__rentals_rental_component__["a" /* RentalComponent */], __WEBPACK_IMPORTED_MODULE_19__rentals_index_rental_component__["a" /* IndexRentalComponent */], __WEBPACK_IMPORTED_MODULE_20__rentals_equipments_component__["a" /* EquipmentsComponent */], __WEBPACK_IMPORTED_MODULE_21__professionals_professional_component__["a" /* ProfessionalComponent */], __WEBPACK_IMPORTED_MODULE_22__professionals_professionals_component__["a" /* ProfessionlsComponent */], __WEBPACK_IMPORTED_MODULE_23__professionals_professional_type_component__["a" /* ProfessionalTypesComponent */], __WEBPACK_IMPORTED_MODULE_24__professionals_gallery_component__["a" /* GalleryComponent */], __WEBPACK_IMPORTED_MODULE_27__manufacturers_index_manufacturer_component__["a" /* IndexManufacturerComponent */], __WEBPACK_IMPORTED_MODULE_26__manufacturers_manufacturer_component__["a" /* ManufacturerComponent */], __WEBPACK_IMPORTED_MODULE_28__manufacturers_manufacturers_component__["a" /* ManufacturersComponent */], __WEBPACK_IMPORTED_MODULE_16__products_company_component__["a" /* ProductCompanyComponent */], __WEBPACK_IMPORTED_MODULE_25__professionals_index_professional_component__["a" /* IndexProfessionlComponent */], __WEBPACK_IMPORTED_MODULE_30__footer_terms_component__["a" /* TermsComponent */], __WEBPACK_IMPORTED_MODULE_31__footer_privacy_component__["a" /* PrivacyComponent */], __WEBPACK_IMPORTED_MODULE_32__home_form_component__["a" /* FormComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__view_routing__["a" /* ViewRouting */], __WEBPACK_IMPORTED_MODULE_5__admin_admin_module__["AdminModule"], __WEBPACK_IMPORTED_MODULE_6__formular_formula_module__["FormularModule"]],
            exports: []
        })
    ], ViewModule);
    return ViewModule;
}());



/***/ }),

/***/ "../../../../../src/app/view/view.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/view/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_product_component__ = __webpack_require__("../../../../../src/app/view/products/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_product_serie_component__ = __webpack_require__("../../../../../src/app/view/products/product_serie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_company_component__ = __webpack_require__("../../../../../src/app/view/products/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__suppliers_index_supplier_component__ = __webpack_require__("../../../../../src/app/view/suppliers/index_supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__suppliers_suppliers_component__ = __webpack_require__("../../../../../src/app/view/suppliers/suppliers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__suppliers_supplier_component__ = __webpack_require__("../../../../../src/app/view/suppliers/supplier.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rentals_rentals_component__ = __webpack_require__("../../../../../src/app/view/rentals/rentals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rentals_rental_component__ = __webpack_require__("../../../../../src/app/view/rentals/rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rentals_index_rental_component__ = __webpack_require__("../../../../../src/app/view/rentals/index_rental.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rentals_equipments_component__ = __webpack_require__("../../../../../src/app/view/rentals/equipments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__professionals_professionals_component__ = __webpack_require__("../../../../../src/app/view/professionals/professionals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__professionals_professional_type_component__ = __webpack_require__("../../../../../src/app/view/professionals/professional_type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__professionals_gallery_component__ = __webpack_require__("../../../../../src/app/view/professionals/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__professionals_index_professional_component__ = __webpack_require__("../../../../../src/app/view/professionals/index_professional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__manufacturers_index_manufacturer_component__ = __webpack_require__("../../../../../src/app/view/manufacturers/index_manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__manufacturers_manufacturer_component__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__manufacturers_manufacturers_component__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__footer_terms_component__ = __webpack_require__("../../../../../src/app/view/footer/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__footer_privacy_component__ = __webpack_require__("../../../../../src/app/view/footer/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_form_component__ = __webpack_require__("../../../../../src/app/view/home/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__products_product_resolver__ = __webpack_require__("../../../../../src/app/view/products/product.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__products_sub_product_resolver__ = __webpack_require__("../../../../../src/app/view/products/sub_product.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__manufacturers_manufacturer_resolver__ = __webpack_require__("../../../../../src/app/view/manufacturers/manufacturer.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__suppliers_supplier_resolver__ = __webpack_require__("../../../../../src/app/view/suppliers/supplier.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__professionals_sub_professional_resolver__ = __webpack_require__("../../../../../src/app/view/professionals/sub_professional.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__professionals_professional_resolver__ = __webpack_require__("../../../../../src/app/view/professionals/professional.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__rentals_rental_resolver__ = __webpack_require__("../../../../../src/app/view/rentals/rental.resolver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var ViewRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__view_component__["a" /* ViewComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
            { path: 'term', component: __WEBPACK_IMPORTED_MODULE_21__footer_terms_component__["a" /* TermsComponent */] },
            { path: 'privacy', component: __WEBPACK_IMPORTED_MODULE_22__footer_privacy_component__["a" /* PrivacyComponent */] },
            { path: 'form_join', component: __WEBPACK_IMPORTED_MODULE_23__home_form_component__["a" /* FormComponent */] },
            {
                path: 'admins',
                loadChildren: 'app/view/admin/admin.module#AdminModule',
                data: { preload: true }
            },
            {
                path: 'buliding-rates',
                loadChildren: 'app/view/formular/formula.module#FormularModule',
                data: { preload: true }
            },
            { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_4__products_product_component__["a" /* ProductComponent */], resolve: { res: __WEBPACK_IMPORTED_MODULE_24__products_product_resolver__["a" /* ProductResolver */] }, },
            { path: 'company/:name', component: __WEBPACK_IMPORTED_MODULE_6__products_company_component__["a" /* ProductCompanyComponent */] },
            { path: 'sub_product/:name', component: __WEBPACK_IMPORTED_MODULE_5__products_product_serie_component__["a" /* ProductSeriesComponent */], resolve: { res: __WEBPACK_IMPORTED_MODULE_25__products_sub_product_resolver__["a" /* SubProductResolver */] }, },
            { path: 'supplier/:id', component: __WEBPACK_IMPORTED_MODULE_9__suppliers_supplier_component__["a" /* SupplierComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__suppliers_index_supplier_component__["a" /* IndexSupplierComponent */], resolve: { res: __WEBPACK_IMPORTED_MODULE_27__suppliers_supplier_resolver__["a" /* SupplierResolver */] },
                        children: [
                            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_8__suppliers_suppliers_component__["a" /* SuppliersComponent */] }
                        ]
                    }
                ]
            },
            { path: 'manufacturer/:id', component: __WEBPACK_IMPORTED_MODULE_19__manufacturers_manufacturer_component__["a" /* ManufacturerComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__manufacturers_index_manufacturer_component__["a" /* IndexManufacturerComponent */], resolve: { res: __WEBPACK_IMPORTED_MODULE_26__manufacturers_manufacturer_resolver__["a" /* ManufacturerResolver */] },
                        children: [
                            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_20__manufacturers_manufacturers_component__["a" /* ManufacturersComponent */] }
                        ]
                    }
                ]
            },
            { path: 'type_pros/:name', component: __WEBPACK_IMPORTED_MODULE_15__professionals_professional_type_component__["a" /* ProfessionalTypesComponent */], resolve: { res: __WEBPACK_IMPORTED_MODULE_29__professionals_professional_resolver__["a" /* ProfessionalResolver */] }, },
            { path: 'sub_pro/:name', component: __WEBPACK_IMPORTED_MODULE_14__professionals_professionals_component__["a" /* ProfessionlsComponent */], resolve: { res: __WEBPACK_IMPORTED_MODULE_28__professionals_sub_professional_resolver__["a" /* SubProfessionalResolver */] }, },
            { path: 'pro/:id', component: __WEBPACK_IMPORTED_MODULE_17__professionals_index_professional_component__["a" /* IndexProfessionlComponent */],
                children: [{ path: 'gallery/:id', component: __WEBPACK_IMPORTED_MODULE_16__professionals_gallery_component__["a" /* GalleryComponent */] }]
            },
            {
                path: 'rental/:id', component: __WEBPACK_IMPORTED_MODULE_11__rentals_rental_component__["a" /* RentalComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__rentals_index_rental_component__["a" /* IndexRentalComponent */],
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_10__rentals_rentals_component__["a" /* RentalsComponent */], resolve: { res: __WEBPACK_IMPORTED_MODULE_30__rentals_rental_resolver__["a" /* RentalResolver */] }, },
                            { path: 'equipment/:id', component: __WEBPACK_IMPORTED_MODULE_13__rentals_equipments_component__["a" /* EquipmentsComponent */] }
                        ]
                    }
                ]
            }
        ]
    }
];
var ViewRouting = /** @class */ (function () {
    function ViewRouting() {
    }
    ViewRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ViewRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_24__products_product_resolver__["a" /* ProductResolver */], __WEBPACK_IMPORTED_MODULE_25__products_sub_product_resolver__["a" /* SubProductResolver */], __WEBPACK_IMPORTED_MODULE_26__manufacturers_manufacturer_resolver__["a" /* ManufacturerResolver */], __WEBPACK_IMPORTED_MODULE_27__suppliers_supplier_resolver__["a" /* SupplierResolver */], __WEBPACK_IMPORTED_MODULE_28__professionals_sub_professional_resolver__["a" /* SubProfessionalResolver */], __WEBPACK_IMPORTED_MODULE_29__professionals_professional_resolver__["a" /* ProfessionalResolver */], __WEBPACK_IMPORTED_MODULE_30__rentals_rental_resolver__["a" /* RentalResolver */]],
        })
    ], ViewRouting);
    return ViewRouting;
}());



/***/ }),

/***/ "../../../../../src/app/view/view.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewService = /** @class */ (function () {
    function ViewService(http) {
        this.http = http;
        this.agentsURL = "http://127.0.0.1:8000/api/agencies";
        this.agentURL = "http://127.0.0.1:8000/api/agency";
    }
    ViewService.prototype.agents = function () {
        return this.http.get(this.agentsURL)
            .map(function (response) { return response.json(); });
    };
    ViewService.prototype.get_agency = function (id) {
        return this.http.get(this.agentURL + '/' + id)
            .map(function (response) { return response.json(); });
    };
    ViewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ViewService);
    return ViewService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map