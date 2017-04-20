webpackJsonp([0],{

/***/ 0:
/*!********************************!*\
  !*** ./typescript/app/main.ts ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app.module */ 23);
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	core_1.enableProdMode();
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!**************************************!*\
  !*** ./typescript/app/app.module.ts ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var internalServerError_component_1 = __webpack_require__(/*! ./../errorHandlers/internalServerError.component */ 24);
	var notFound_component_1 = __webpack_require__(/*! ./../errorHandlers/notFound.component */ 25);
	var article_component_1 = __webpack_require__(/*! ./../article/article.component */ 26);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 67);
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var http_1 = __webpack_require__(/*! @angular/http */ 28);
	var articleList_component_1 = __webpack_require__(/*! ./../article/articleList.component */ 68);
	var article_service_1 = __webpack_require__(/*! ./../article/article.service */ 27);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 69);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routes_1.default],
	        declarations: [app_component_1.AppComponent, articleList_component_1.ArticleListComponent, article_component_1.ArticleComponent,
	            notFound_component_1.NotFoundComponent, internalServerError_component_1.InternalServerErrorComponent],
	        bootstrap: [app_component_1.AppComponent],
	        providers: [article_service_1.ArticleService]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 24:
/*!*******************************************************************!*\
  !*** ./typescript/errorHandlers/internalServerError.component.ts ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var InternalServerErrorComponent = (function () {
	    function InternalServerErrorComponent() {
	    }
	    return InternalServerErrorComponent;
	}());
	InternalServerErrorComponent = __decorate([
	    core_1.Component({
	        templateUrl: './static/html/internalServerError.component.html',
	    }),
	    __metadata("design:paramtypes", [])
	], InternalServerErrorComponent);
	exports.InternalServerErrorComponent = InternalServerErrorComponent;


/***/ },

/***/ 25:
/*!********************************************************!*\
  !*** ./typescript/errorHandlers/notFound.component.ts ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var NotFoundComponent = (function () {
	    function NotFoundComponent() {
	    }
	    return NotFoundComponent;
	}());
	NotFoundComponent = __decorate([
	    core_1.Component({
	        templateUrl: './static/html/notFound.component.html',
	    }),
	    __metadata("design:paramtypes", [])
	], NotFoundComponent);
	exports.NotFoundComponent = NotFoundComponent;


/***/ },

/***/ 26:
/*!*************************************************!*\
  !*** ./typescript/article/article.component.ts ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var article_service_1 = __webpack_require__(/*! ./article.service */ 27);
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Observable_1 = __webpack_require__(/*! rxjs/Observable */ 5);
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	// Add the RxJS Observable operators.
	__webpack_require__(/*! ./../rxjs-operators */ 61);
	var ArticleComponent = (function () {
	    function ArticleComponent(route, articleService, router) {
	        var _this = this;
	        this.route = route;
	        this.articleService = articleService;
	        this.router = router;
	        var name = this.route.snapshot.params['name'];
	        this.articles$ = this.articleService.getArticle(name)
	            .catch(function (error) {
	            if (error.status === 404)
	                return _this.router.navigate(['404']);
	            if (error.status === 500)
	                return _this.router.navigate(['500']);
	            return Observable_1.Observable.throw(error);
	        });
	    }
	    ;
	    ArticleComponent.prototype.ngAfterViewChecked = function () {
	        hljs.initHighlighting.called = false;
	        hljs.initHighlighting();
	    };
	    return ArticleComponent;
	}());
	ArticleComponent = __decorate([
	    core_1.Component({
	        templateUrl: './static/html/article.component.html',
	    }),
	    __metadata("design:paramtypes", [router_1.ActivatedRoute, article_service_1.ArticleService,
	        router_1.Router])
	], ArticleComponent);
	exports.ArticleComponent = ArticleComponent;


/***/ },

/***/ 27:
/*!***********************************************!*\
  !*** ./typescript/article/article.service.ts ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 28);
	var Observable_1 = __webpack_require__(/*! rxjs/Observable */ 5);
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	// Add the RxJS Observable operators.
	__webpack_require__(/*! ./../rxjs-operators */ 61);
	var ArticleService = (function () {
	    function ArticleService(http, router) {
	        this.http = http;
	        this.router = router;
	        this.articlesUrl = '/api/articles/';
	        this.articleUrl = '/api/article/';
	    }
	    ArticleService.prototype.getArticles = function () {
	        var articles$ = this.http.get(this.articlesUrl)
	            .map(this.extractArticles)
	            .catch(this.handleError);
	        return articles$;
	    };
	    ArticleService.prototype.getArticle = function (name) {
	        var articleUrl = this.articleUrl + name;
	        var articles$ = this.http.get(articleUrl)
	            .map(this.extractArticles);
	        return articles$;
	    };
	    ArticleService.prototype.extractArticles = function (res) {
	        var object = res.json();
	        return object.Results || {};
	    };
	    ArticleService.prototype.handleError = function (error) {
	        var errMsg;
	        if (error instanceof http_1.Response) {
	            var body = error.json() || '';
	            var err = body.error || JSON.stringify(body);
	            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
	        }
	        else {
	            errMsg = error.message ? error.message : error.toString();
	        }
	        console.error(errMsg);
	        return Observable_1.Observable.throw(errMsg);
	    };
	    return ArticleService;
	}());
	ArticleService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
	], ArticleService);
	exports.ArticleService = ArticleService;


/***/ },

/***/ 61:
/*!**************************************!*\
  !*** ./typescript/rxjs-operators.ts ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
	"use strict";
	// See node_module/rxjs/Rxjs.js
	// Import just the rxjs statics and operators needed for THIS app.
	// Statics
	__webpack_require__(/*! rxjs/add/observable/throw */ 62);
	// Operators
	__webpack_require__(/*! rxjs/add/operator/catch */ 65);
	__webpack_require__(/*! rxjs/add/operator/map */ 66);


/***/ },

/***/ 67:
/*!*****************************************!*\
  !*** ./typescript/app/app.component.ts ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: "\n<router-outlet></router-outlet>\n  "
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 68:
/*!*****************************************************!*\
  !*** ./typescript/article/articleList.component.ts ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var article_service_1 = __webpack_require__(/*! ./article.service */ 27);
	// Add the RxJS Observable operators.
	__webpack_require__(/*! ./../rxjs-operators */ 61);
	var ArticleListComponent = (function () {
	    function ArticleListComponent(articleService) {
	        this.articleService = articleService;
	        this.articles$ = this.articleService.getArticles();
	    }
	    ArticleListComponent.prototype.ngAfterViewChecked = function () {
	        hljs.initHighlighting.called = false;
	        hljs.initHighlighting();
	    };
	    return ArticleListComponent;
	}());
	ArticleListComponent = __decorate([
	    core_1.Component({
	        templateUrl: './static/html/articleList.component.html'
	    }),
	    __metadata("design:paramtypes", [article_service_1.ArticleService])
	], ArticleListComponent);
	exports.ArticleListComponent = ArticleListComponent;


/***/ },

/***/ 69:
/*!**************************************!*\
  !*** ./typescript/app/app.routes.ts ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var internalServerError_component_1 = __webpack_require__(/*! ./../errorHandlers/internalServerError.component */ 24);
	var notFound_component_1 = __webpack_require__(/*! ./../errorHandlers/notFound.component */ 25);
	var article_component_1 = __webpack_require__(/*! ./../article/article.component */ 26);
	var articleList_component_1 = __webpack_require__(/*! ./../article/articleList.component */ 68);
	var router_1 = __webpack_require__(/*! @angular/router */ 29);
	var routes = [
	    { path: '', component: articleList_component_1.ArticleListComponent },
	    { path: '404', component: notFound_component_1.NotFoundComponent },
	    { path: '500', component: internalServerError_component_1.InternalServerErrorComponent },
	    { path: ':name', component: article_component_1.ArticleComponent }
	];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = router_1.RouterModule.forRoot(routes);


/***/ }

});
//# sourceMappingURL=app.map