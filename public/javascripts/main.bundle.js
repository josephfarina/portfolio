webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(295);
	var app_component_1 = __webpack_require__(685);
	var http_1 = __webpack_require__(287);
	var common_1 = __webpack_require__(29);
	var app_routes_1 = __webpack_require__(702);
	var forms_1 = __webpack_require__(280);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    app_routes_1.APP_ROUTER_PROVIDERS,
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
	    http_1.HTTP_PROVIDERS,
	    forms_1.disableDeprecatedForms(),
	    forms_1.provideForms()
	])
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 136:
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
	var core_1 = __webpack_require__(1);
	var TicTacToeService = (function () {
	    function TicTacToeService() {
	        this.userOne = {
	            score: 0,
	            name: 'Player 1',
	            tileType: TileType.O
	        };
	        this.userTwo = {
	            score: 0,
	            name: 'Player 2',
	            tileType: TileType.X
	        };
	    }
	    TicTacToeService.prototype.toggleTile = function () {
	        var onePrevTile = this.userOne.tileType;
	        var twoPrevTile = this.userTwo.tileType;
	        this.userOne.tileType = twoPrevTile;
	        this.userTwo.tileType = onePrevTile;
	    };
	    TicTacToeService.prototype.setUserOne = function (name, tile) {
	        if (name != null && name.length > 0) {
	            this.userOne.name = name;
	        }
	        if (tile !== this.userOne.tileType) {
	            this.toggleTile();
	        }
	    };
	    TicTacToeService.prototype.getUserOne = function () {
	        return this.userOne;
	    };
	    TicTacToeService.prototype.setUserTwo = function (name, tile) {
	        if (name != null && name.length > 0) {
	            this.userTwo.name = name;
	        }
	        if (tile !== this.userTwo.tileType) {
	            this.toggleTile();
	        }
	    };
	    TicTacToeService.prototype.getUserTwo = function () {
	        return this.userTwo;
	    };
	    TicTacToeService.prototype.setWinner = function (player) {
	        this.winner = player;
	    };
	    TicTacToeService.prototype.getWinner = function () {
	        return this.winner;
	    };
	    TicTacToeService.prototype.resetWinner = function () {
	        this.winner = null;
	    };
	    TicTacToeService.prototype.resetGame = function () {
	        this.userOne = {
	            score: 0,
	            name: 'Player 1',
	            tileType: TileType.O
	        };
	        this.userTwo = {
	            score: 0,
	            name: 'Player 2',
	            tileType: TileType.X
	        };
	    };
	    TicTacToeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], TicTacToeService);
	    return TicTacToeService;
	}());
	exports.TicTacToeService = TicTacToeService;
	(function (TileType) {
	    TileType[TileType["X"] = 0] = "X";
	    TileType[TileType["O"] = 1] = "O";
	    TileType[TileType["null"] = 2] = "null";
	})(exports.TileType || (exports.TileType = {}));
	var TileType = exports.TileType;
	

/***/ },

/***/ 310:
/***/ function(module, exports) {

	module.exports = ".game-start,\n.game-end {\n  padding: 25px 50px 50px 50px; }\n  .game-start .input-group,\n  .game-end .input-group {\n    margin-bottom: 10px; }\n  .game-start .info-text,\n  .game-end .info-text {\n    text-align: center; }\n  .game-start .btn-tile,\n  .game-end .btn-tile {\n    color: white;\n    background-color: #4CAAF5;\n    border: 1px solid #4CAAF5; }\n    .game-start .btn-tile:hover,\n    .game-end .btn-tile:hover {\n      color: #4CAAF5;\n      background-color: white; }\n"

/***/ },

/***/ 337:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var tictactoe_service_1 = __webpack_require__(136);
	var TicTacToeComponent = (function () {
	    function TicTacToeComponent(router) {
	        this.router = router;
	    }
	    TicTacToeComponent = __decorate([
	        core_1.Component({
	            directives: [router_1.ROUTER_DIRECTIVES],
	            moduleId: module.id,
	            selector: 'my-tictactoe',
	            styles: [__webpack_require__(471).toString()],
	            template: "\n    <div class=\"tictactoe-wrapper\">\n        <div class=\"tictactoe fade\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    ",
	            providers: [tictactoe_service_1.TicTacToeService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], TicTacToeComponent);
	    return TicTacToeComponent;
	}());
	exports.TicTacToeComponent = TicTacToeComponent;
	

/***/ },

/***/ 338:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var NavTitleService = (function () {
	    function NavTitleService(router) {
	        this.router = router;
	    }
	    NavTitleService.prototype.getCurrentUrl = function () {
	        var url = this.router.url;
	        return this.parseUrl(url);
	    };
	    // Parse the URL and return corresponding title
	    NavTitleService.prototype.parseUrl = function (url) {
	        var title;
	        var parsedUrl = url.split('/')[1];
	        switch (parsedUrl) {
	            case '':
	                title = 'Joey Farina';
	                break;
	            case 'calculator':
	                title = 'Calculator';
	                break;
	            case 'tictactoe':
	                title = 'Tic Tac Toe';
	                break;
	            case 'drum':
	                title = 'Sequencer';
	                break;
	        }
	        return title;
	    };
	    NavTitleService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router])
	    ], NavTitleService);
	    return NavTitleService;
	}());
	exports.NavTitleService = NavTitleService;
	

/***/ },

/***/ 459:
/***/ function(module, exports) {

	module.exports = "<div [style.backgroundColor]=\"activeProject.color\" class=\"home-container\">\n\n    <!--IMAGES-->\n    <div [ngClass]=\"{\n    'active-image slide':       '02' === activeProject.number, \n    'inactive-image':           '02' !== activeProject.number\n    }\" class=\"single-div-container\">\n        <div id=\"calculator\" class=\"single-div__calculator\"></div>\n    </div>\n\n    <div [ngClass]=\"{\n    'active-image slide':       '01' === activeProject.number, \n    'inactive-image':                           '01' !== activeProject.number\n    }\" class=\"single-div-container\">\n        <img class=\"sequencer-image\" src=\"assets/sequencer.svg\" alt=\"sequencer\">\n    </div>\n\n    <div [ngClass]=\"{\n    'active-image slide':    '03' === activeProject.number, \n    'inactive-image':           '03' !== activeProject.number\n    }\" class=\"single-div-container\">\n        <img class=\"tictactoe-image\" src=\"assets/tictactoe.svg\" alt=\"sequencer\">\n    </div>\n\n\n    <!--TEXT-->\n    <div class=\"project-container fade\">\n        <p class=\"project-description\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae aut assumenda laborum fugit est quibusdam quo minus! Lorem\n            ipsum dolor sit amet, consectetur adipisicing elit.\n        </p>\n        <p class=\"project-container-heading p\">SHOWCASE</p>\n        <div class=\"project-groups\">\n            <div class=\"project-group\" *ngFor=\"let project of projects\" (mouseenter)=\"setActiveProject(project)\" [class.text-inactive]=\"project !== activeProject\">\n                <a [routerLink]=\"'/' + project.link\">\n                    <span class=\"p project-group-number\">{{project.number}}</span>\n                    <h3 class=\"project-group-heading\">{{project.heading}}</h3>\n                    <p class=\" project-group-caption\" [class.text-inactive]=\"project !== activeProject\">{{project.caption}}</p>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ },

/***/ 460:
/***/ function(module, exports) {

	module.exports = "<div class=\"calc\">\n    <div class=\"calculator fade\">\n\n        <div class=\"row no-gutters\">\n            <!-- display -->\n            <input class=\"col-xs-12 button display\" [(ngModel)]=\"displayValue\" type=\"number\" />\n        </div>\n\n        <div class=\"button-group\">\n\n            <div class=\"row no-gutters\">\n                <!-- first row -->\n                <div class=\"col-xs-3\" (click)=\"clear()\">\n                    <div class=\"button functions clear\"><span class=\"button-content\">C</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"delete()\">\n                    <div class=\"button functions\"><span class=\"button-content\">Del</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"toggleNegative()\">\n                    <div class=\"button functions\"><span class=\"button-content\">+/-</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setOperator('/')\">\n                    <div class=\"button operator\"><span class=\"button-content\">&#247;</span></div>\n                </div>\n            </div>\n\n            <div class=\"row no-gutters\">\n                <!-- second row -->\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(7)\">\n                    <div class=\"button number\"><span class=\"button-content\">7</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(8)\">\n                    <div class=\"button number\"><span class=\"button-content\">8</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(9)\">\n                    <div class=\"button number\"><span class=\"button-content\">9</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setOperator('*')\">\n                    <div class=\"button operator\"><span class=\"button-content\">*</span></div>\n                </div>\n            </div>\n\n            <div class=\"row no-gutters\">\n                <!-- third row -->\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(4)\">\n                    <div class=\"button number\"><span class=\"button-content\">4</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(5)\">\n                    <div class=\"button number\"><span class=\"button-content\">5</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(6)\">\n                    <div class=\"button number\"><span class=\"button-content\">6</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setOperator('(-)')\">\n                    <div class=\"button operator\"><span class=\"button-content\">-</span></div>\n                </div>\n            </div>\n\n            <div class=\"row no-gutters\">\n                <!-- fourth row -->\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(1)\">\n                    <div class=\"button number\"><span class=\"button-content\">1</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(2)\">\n                    <div class=\"button number\"><span class=\"button-content\">2</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue(3)\">\n                    <div class=\"button number\"><span class=\"button-content\">3</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setOperator('+')\">\n                    <div class=\"button operator\"><span class=\"button-content\">+</span></div>\n                </div>\n            </div>\n\n            <div class=\"row no-gutters\">\n                <!-- fith row -->\n                <div class=\"col-xs-6\" (click)=\"setDisplayValue(0)\">\n                    <div class=\"button number double-button\"><span class=\"button-content\">0</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"setDisplayValue('.')\">\n                    <div class=\"button number\"><span class=\"button-content\">.</span></div>\n                </div>\n                <div class=\"col-xs-3\" (click)=\"equals()\">\n                    <div class=\"button operator equals\"><span class=\"button-content\">=</span></div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n<div class=\"project-description\">\n    <h3>A Functional Calculator Made with Angular 2 and TypeScript and Designed Using Pure CSS</h3>\n    <pre>\n        <code>\n        FILE TREE:\n        <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/calculator/\">calculator/</a>\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/calculator/calculator.component.ts\">calculator.component.ts</a>\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/calculator/calculator.component.spec.ts\">calculator.component.spec.ts</a>\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/calculator/calculator.component.html\">calculator.component.html</a>\n\n        SCSS FILE:\n        <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/scss/projects/calculator.scss\">calculator.scss</a>\n      </code>\n    </pre>\n</div>\n\n</div>\n"

/***/ },

/***/ 461:
/***/ function(module, exports) {

	module.exports = "<div class=\"drum-machine-wrapper\">\n\n  <svg class=\"fade\" id=\"drum\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3954.04 1350.11\">\n    Unfortunately due to the use of SVG and the Web Audio Api this doesn't work on your browser!\n    <!--<rect width=\"3954.04\" height=\"2585.11\" fill=\"#839b99\" />-->\n    <g  transform=\"translate(0 -550.49)\">\n      <g id=\"base\">\n        <rect id=\"body-2\" data-name=\"body\" x=\"921.6\" y=\"633.7\" width=\"2016.41\" height=\"1200.72\" fill=\"#222826\" />\n        <path d=\"M951.47,1868.14l15,40.12a8.17,8.17,0,0,1-8.17,8.17H877.4c-4.51,0-6.8-3.64-8.17-8.17l-7.67-22.75c-0.1-.31-1.25-3.72-2.51-7.45l-0.67-2-1.59-4.71-0.36-1.07c-0.23-.67-0.41-1.23-0.55-1.64l-0.17-.49V669l0.17-.49c0.14-.41.32-1,0.55-1.64l0.36-1.07,1.59-4.71,0.67-2c1.26-3.73,2.41-7.14,2.51-7.45l7.67-22.75c1.37-4.53,3.66-8.17,8.17-8.17h80.85a8.17,8.17,0,0,1,8.17,8.17l-15,40.12V1868.14Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#1e2424\" />\n        <polygon points=\"2936.9 634.48 920.5 634.48 933.58 599.36 2924.27 599.36 2936.9 634.48\" fill=\"#3b4949\" />\n        <polygon points=\"2936.9 1833.64 920.5 1833.64 933.58 1868.76 2924.27 1868.76 2936.9 1833.64\" fill=\"#3b4949\" />\n        <path d=\"M859.05,1878.06c1.26,3.73,2.41,7.14,2.51,7.45-0.44-.78-14.45-26-22-51.16-0.82-2.68-3.81-17.09-3.81-19.89V722.65c0-2.8,3-17.21,3.81-19.89,7.57-25.11,21.58-50.38,22-51.16-0.1.31-1.25,3.72-2.51,7.45-0.22.67-.45,1.34-0.67,2l-1.59,4.71-0.36,1.07c-0.23.67-.41,1.23-0.55,1.64a3.2,3.2,0,0,0-.17,1V1867.62a3.2,3.2,0,0,0,.17,1c0.14,0.41.32,1,.55,1.64l0.36,1.07,1.59,4.71C858.6,1876.72,858.83,1877.39,859.05,1878.06Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#151b1a\" />\n        <path d=\"M2966.76,1868.14l-15,40.12a8.17,8.17,0,0,0,8.17,8.17h80.85c4.51,0,6.8-3.64,8.17-8.17l7.67-22.75c0.1-.31,1.25-3.72,2.51-7.45l0.67-2,1.59-4.71,0.36-1.07c0.23-.67.41-1.23,0.55-1.64l0.17-.49V669l-0.17-.49c-0.14-.41-0.32-1-0.55-1.64l-0.36-1.07-1.59-4.71-0.67-2c-1.26-3.73-2.41-7.14-2.51-7.45L3049,628.85c-1.37-4.53-3.66-8.17-8.17-8.17H2960a8.17,8.17,0,0,0-8.17,8.17l15,40.12V1868.14Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#1e2424\" />\n        <path d=\"M3059.18,1878.06c-1.26,3.73-2.41,7.14-2.51,7.45,0.44-.78,14.45-26,22-51.16,0.82-2.68,3.81-17.09,3.81-19.89V722.65c0-2.8-3-17.21-3.81-19.89-7.57-25.11-21.58-50.38-22-51.16,0.1,0.31,1.25,3.72,2.51,7.45,0.22,0.67.45,1.34,0.67,2l1.59,4.71,0.36,1.07c0.23,0.67.41,1.23,0.55,1.64a3.2,3.2,0,0,1,.17,1V1867.62a3.2,3.2,0,0,1-.17,1c-0.14.41-.32,1-0.55,1.64l-0.36,1.07-1.59,4.71C3059.63,1876.72,3059.4,1877.39,3059.18,1878.06Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#151b1a\" />\n      </g>\n      <g id=\"styling\">\n        <path d=\"M2894.69,1613.95v206.8a7.62,7.62,0,0,1-7.6,7.6H1027.27a7.62,7.62,0,0,1-7.6-7.6v-206.8a7.62,7.62,0,0,1,7.6-7.6h238.8a7.62,7.62,0,0,1,7.6,7.6l0,155.45c0,4.18,3.73,7.29,7.91,7.29h24.68l0.09,0.06H2716.83l0.15-.11h6.16a7.62,7.62,0,0,0,7.6-7.6V1613.1a7.62,7.62,0,0,1,7.55-6.75h148.8A7.62,7.62,0,0,1,2894.69,1613.95Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#b3b8b6\" />\n        <path d=\"M2731,1765.41\" transform=\"translate(-29.98 -34.49)\" fill=\"#b3b8b6\" />\n        <rect x=\"989.69\" y=\"1546.52\" width=\"1875.02\" height=\"9\" fill=\"#b3b8b6\" />\n        <rect x=\"989.69\" y=\"788.13\" width=\"1875.02\" height=\"9\" fill=\"#b3b8b6\" />\n        <g id=\"button_labels\" data-name=\"button labels\">\n          <g id=\"Layer_25\" data-name=\"Layer 25\">\n            <rect x=\"1382.69\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"1465.09\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"1545.57\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"1627.97\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"1708.7\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"1791.1\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"1871.58\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"1953.98\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2036.79\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2119.19\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2199.66\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2282.07\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2362.79\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2445.19\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2525.67\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n            <rect x=\"2608.07\" y=\"1579.15\" width=\"57.4\" height=\"23.75\" rx=\"11.88\" ry=\"11.88\" fill=\"#b3b8b6\" />\n          </g>\n          <g id=\"Layer_27\" data-name=\"Layer 27\">\n            <path d=\"M1444.36,1622.26l2.82-1.82h1.07v9.89H1446v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n            />\n            <path d=\"M1529,1624l-1.88-.91s1-2.88,3.65-2.88c3.39,0,3.84,2.23,3.84,3.48,0,2.32-3.49,4.62-3.49,4.62h3.67v2h-7.71v-0.56s5.1-4.21,5.1-6a1.4,1.4,0,0,0-1.4-1.57C1529.71,1622.16,1529,1624,1529,1624Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1608.59,1622.43a3.12,3.12,0,0,1,3.27-2.17,3,3,0,0,1,3.25,2.88,2.26,2.26,0,0,1-.88,1.86,2.53,2.53,0,0,1,1.26,2.27c0,1.89-1.55,3.25-3.67,3.25a3.65,3.65,0,0,1-3.72-2.43l2.09-1a1.64,1.64,0,0,0,1.62,1.51,1.28,1.28,0,0,0,1.43-1.31,1.41,1.41,0,0,0-1.43-1.45,1.36,1.36,0,0,0-.43.07v-1.48h0.49a1.24,1.24,0,0,0,1.19-1.25,1.17,1.17,0,0,0-1.22-1.09,1.51,1.51,0,0,0-1.48,1.22Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1699.16,1626.27v2H1698v2.09h-2.11v-2.09H1691v-0.67l4.75-7.14H1698v5.83h1.15Zm-3.29-2.82-1.76,2.82h1.79v-2.82h0Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1771.38,1627.5a1.63,1.63,0,0,0,1.74,1.13,1.38,1.38,0,0,0,1.42-1.44c0-1.31-1.28-1.74-2.57-1.74a4.22,4.22,0,0,0-1.69.31l0.83-5.33h5v2H1773l-0.22,1.38h0.28c1.87,0,3.69.73,3.69,3.48,0,1.89-1.55,3.25-3.67,3.25a3.47,3.47,0,0,1-3.53-2.15Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1855.84,1623.83a1.52,1.52,0,0,1,.71-0.14,3.31,3.31,0,0,1,3.15,3.47c0,2.34-1.88,3.36-3.67,3.36-2.22,0-3.95-1.46-3.95-3.36a5.75,5.75,0,0,1,1.56-3.95l2.33-2.77h2.78Zm0.08,4.82a1.47,1.47,0,0,0,1.52-1.5,1.51,1.51,0,1,0-3,0A1.45,1.45,0,0,0,1855.93,1628.65Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1941.83,1621.1l-5.23,9.24h-2.66l4.56-7.92h-4.26v-2h7.59v0.66Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n            />\n            <path d=\"M2022.78,1625a2.8,2.8,0,0,1,1.74,2.67c0,1.67-1.83,2.84-3.69,2.84s-3.71-1.17-3.71-2.84a2.79,2.79,0,0,1,1.73-2.67,2.46,2.46,0,0,1-1.31-2.24c0-1.46,1.64-2.49,3.27-2.49s3.24,1,3.24,2.49A2.45,2.45,0,0,1,2022.78,1625Zm-2,3.57a1.26,1.26,0,1,0-1.25-1.26A1.2,1.2,0,0,0,2020.81,1628.57Zm0-6.61a1.11,1.11,0,1,0,0,2.22,1,1,0,0,0,1.09-1.1A1.06,1.06,0,0,0,2020.82,1622Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2100.69,1626.94a1.52,1.52,0,0,1-.71.14,3.31,3.31,0,0,1-3.15-3.47c0-2.34,1.88-3.36,3.67-3.36,2.22,0,3.95,1.46,3.95,3.36a5.75,5.75,0,0,1-1.56,3.95l-2.33,2.77h-2.78Zm-0.08-4.82a1.47,1.47,0,0,0-1.52,1.5,1.51,1.51,0,1,0,3,0A1.45,1.45,0,0,0,2100.61,1622.12Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <g>\n              <path d=\"M2177.24,1622.26l2.82-1.82h1.07v9.89h-2.26v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n              <path d=\"M2186.21,1620.26c2.12,0,4,1.7,4,5.13,0,3.67-1.9,5.12-4,5.12s-4-1.45-4-5.12C2182.18,1622,2184.09,1620.26,2186.21,1620.26Zm0,8.28c1.08,0,1.74-1,1.74-3.14s-0.66-3.15-1.74-3.15-1.75,1.16-1.75,3.15S2185.12,1628.53,2186.21,1628.53Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            </g>\n            <g>\n              <path d=\"M2258.72,1622.26l2.82-1.82h1.07v9.89h-2.25v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n              <path d=\"M2263.67,1622.26l2.82-1.82h1.07v9.89h-2.25v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n            </g>\n            <g>\n              <path d=\"M2342.14,1622.26l2.82-1.82H2346v9.89h-2.25v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n              <path d=\"M2349.34,1624l-1.88-.91s1-2.88,3.65-2.88c3.39,0,3.84,2.23,3.84,3.48,0,2.32-3.49,4.62-3.49,4.62h3.67v2h-7.71v-0.56s5.1-4.21,5.1-6a1.4,1.4,0,0,0-1.4-1.57C2350,1622.16,2349.34,1624,2349.34,1624Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            </g>\n            <g>\n              <path d=\"M2422.77,1622.26l2.82-1.82h1.07v9.89h-2.25v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n              <path d=\"M2428.06,1622.43a3.12,3.12,0,0,1,3.27-2.17,3,3,0,0,1,3.25,2.88,2.26,2.26,0,0,1-.88,1.86,2.53,2.53,0,0,1,1.26,2.27,3.36,3.36,0,0,1-3.67,3.25,3.65,3.65,0,0,1-3.72-2.43l2.09-1a1.64,1.64,0,0,0,1.62,1.51,1.28,1.28,0,0,0,1.43-1.31,1.41,1.41,0,0,0-1.43-1.45,1.36,1.36,0,0,0-.43.07v-1.48h0.49a1.24,1.24,0,0,0,1.19-1.25,1.17,1.17,0,0,0-1.22-1.09,1.51,1.51,0,0,0-1.48,1.22Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            </g>\n            <g>\n              <path d=\"M2505.24,1622.26l2.82-1.82h1.07v9.89h-2.25v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n              <path d=\"M2517.68,1626.27v2h-1.15v2.09h-2.11v-2.09h-4.87v-0.67l4.75-7.14h2.23v5.83h1.15Zm-3.29-2.82-1.76,2.82h1.79v-2.82h0Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            </g>\n            <g>\n              <path d=\"M2585.66,1622.26l2.82-1.82h1.07v9.89h-2.26v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n              <path d=\"M2592.28,1627.5a1.63,1.63,0,0,0,1.74,1.13,1.38,1.38,0,0,0,1.42-1.44c0-1.31-1.28-1.74-2.57-1.74a4.22,4.22,0,0,0-1.69.31l0.83-5.33h5v2h-3.12l-0.22,1.38H2594c1.87,0,3.69.73,3.69,3.48,0,1.89-1.55,3.25-3.67,3.25a3.47,3.47,0,0,1-3.53-2.15Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            </g>\n            <g>\n              <path d=\"M2668.09,1622.26l2.82-1.82H2672v9.89h-2.25v-6.9l-1.63,1.06v-2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n              />\n              <path d=\"M2676.74,1623.83a1.52,1.52,0,0,1,.71-0.14,3.31,3.31,0,0,1,3.15,3.47c0,2.34-1.88,3.36-3.67,3.36-2.22,0-3.95-1.46-3.95-3.36a5.74,5.74,0,0,1,1.56-3.95l2.33-2.77h2.78Zm0.08,4.82a1.47,1.47,0,0,0,1.52-1.5,1.51,1.51,0,1,0-3,0A1.45,1.45,0,0,0,2676.83,1628.65Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"Layer_28\" data-name=\"Layer 28\">\n        <polygon points=\"1357.3 1604.2 1357.3 1595.78 1349.62 1595.78 1349.62 1602.42 1255.08 1602.42 1255.08 1578.85 1349.62 1578.85 1349.62 1585.49 1357.3 1585.49 1357.3 1578.16 1373.66 1591.18 1357.3 1604.2\"\n          fill=\"#b3b8b6\" />\n        <g>\n          <path d=\"M1315.66,1619.56c1.7,0,3,.64,3,2.52a2.49,2.49,0,0,0,.88,4.62c0,1.63-1.19,2.76-3.24,2.76h-3.75v-9.89h3.07Zm-0.64,3.87c1,0,1.5-.3,1.5-1.13s-0.52-1-1.5-1h-0.18v2.13H1315Zm0.53,4.28c1.07,0,1.65-.32,1.65-1.1s-0.59-1.24-1.65-1.24h-0.71v2.34h0.71Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          <path d=\"M1322.34,1626.68a1.26,1.26,0,0,0,1.33,1.27,1.69,1.69,0,0,0,1.5-.68l1.54,0.77a3.42,3.42,0,0,1-3.19,1.61,3.26,3.26,0,1,1,0-6.51,3,3,0,0,1,3.3,3.26,2.27,2.27,0,0,1,0,.29h-4.46Zm2.4-1.18a1.09,1.09,0,0,0-1.16-1,1.06,1.06,0,0,0-1.18,1h2.34Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          <path d=\"M1330.37,1623.12a2.8,2.8,0,0,1,2,.77v-0.59h2.12v6.15h-2.1v-0.7h0a2.73,2.73,0,0,1-2,.88A3.26,3.26,0,0,1,1330.37,1623.12Zm0.64,4.7a1.38,1.38,0,0,0,1.43-1.44,1.43,1.43,0,1,0-2.87,0A1.37,1.37,0,0,0,1331,1627.83Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          <path d=\"M1336.23,1621h2.12v2.29h1.3v1.62h-1.3v2c0,0.58.14,0.85,0.48,0.85a1,1,0,0,0,.53-0.19l0.53,1.71a3.51,3.51,0,0,1-1.56.38c-1.69,0-2.1-1.26-2.1-2.35v-2.36h-0.89v-1.62h0.89V1621Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          <path d=\"M1346,1629.46h-1.49l0.68-2.63H1344l0.38-1.45h1.22l0.46-1.75h-1.28l0.38-1.45h1.28l0.68-2.61h1.49l-0.68,2.61h1.3l0.68-2.61h1.49l-0.68,2.61h1.22l-0.38,1.45h-1.22l-0.46,1.75h1.28l-0.38,1.45h-1.28l-0.68,2.63h-1.49l0.68-2.63h-1.3Zm2.82-5.83h-1.3l-0.46,1.75h1.3Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n        </g>\n        <line x1=\"1392.24\" y1=\"1468.99\" x2=\"2696.22\" y2=\"1468.99\" fill=\"none\" stroke=\"#e5662f\" stroke-miterlimit=\"10\" stroke-width=\"2\"\n        />\n        <rect x=\"1379.55\" y=\"804.14\" width=\"2\" height=\"719.19\" fill=\"#fffef6\" />\n        <rect x=\"1544.35\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"1709.15\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"1873.94\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"2038.74\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"2203.53\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"2368.33\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"2533.12\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"2697.92\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <rect x=\"2862.71\" y=\"804.14\" width=\"2\" height=\"559.8\" fill=\"#fffef6\" />\n        <g>\n          <path d=\"M2010.13,1451.43c7.45,0,13.1,4,13.1,11.93,0,6-3.31,10.08-8.23,11.64l13.83,16.6h-11.64l-12.27-15.87v15.87h-9.15v-40.17h14.36Zm-4.14,17.82c3.46,0,7.6-.24,7.6-5.26s-4.14-5.26-7.6-5.26h-1.07v10.52H2006Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2030.63,1449.72h8.62v19.53h0.1a10.35,10.35,0,0,1,7.16-3.36c4.58,0,11,2.29,11,9.25v16.46h-8.62v-14.12a4.62,4.62,0,0,0-4.48-4.87,5.31,5.31,0,0,0-5.11,4.87v14.12h-8.62v-41.87Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2091.69,1466.62l-19.62,37.64h-9.93l8.62-16.55-11.83-21.08h9.93l7,12.8,5.94-12.8h9.93Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#e5662f\" />\n          <path d=\"M2095.1,1457.32h8.62v9.3H2109v6.57h-5.26v7.94c0,2.34.58,3.46,1.95,3.46a4.07,4.07,0,0,0,2.14-.78l2.14,7a14.26,14.26,0,0,1-6.33,1.56c-6.87,0-8.52-5.11-8.52-9.54v-9.59h-3.6v-6.57h3.6v-9.3Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2112.87,1449.72h8.62v19.53h0.1a10.35,10.35,0,0,1,7.16-3.36c4.58,0,11,2.29,11,9.25v16.46h-8.62v-14.12a4.62,4.62,0,0,0-4.48-4.87,5.31,5.31,0,0,0-5.11,4.87v14.12h-8.62v-41.87Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2145.06,1466.62h8.62v2.63h0.1a10.35,10.35,0,0,1,7.16-3.36c3.31,0,7,1.22,8.72,4.58,2.63-3.16,5.55-4.58,8.28-4.58,4.58,0,9.74,2.29,9.74,9.25v16.46H2179v-14.12c0-2.48-1.31-4.67-4.38-4.67a3.83,3.83,0,0,0-4,3.89v14.9H2162v-14.12c0-2.48-1.31-4.67-4.38-4.67-2.87,0-4,2.19-4,4.19v14.61h-8.62v-25Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2234,1480.84l3.9,7.79s-4.48,3.7-13.2,3.7c-11.34,0-21.76-9.25-21.76-20.74s10.37-20.89,21.76-20.89c8.72,0,13.2,3.7,13.2,3.7l-3.9,7.79a14,14,0,0,0-7.89-2.48c-9.2,0-13.24,6.43-13.24,11.78s4,11.83,13.24,11.83A14,14,0,0,0,2234,1480.84Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2254.66,1465.89c8.28,0,14.9,5.45,14.9,13.24s-6.28,13.2-14.9,13.2c-9,0-15-5.5-15-13.2S2246.24,1465.89,2254.66,1465.89Zm0,19.09a5.61,5.61,0,0,0,5.79-5.84,5.82,5.82,0,1,0-11.64,0A5.57,5.57,0,0,0,2254.61,1485Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2273.51,1466.62h8.62v2.63h0.1a10.35,10.35,0,0,1,7.16-3.36c3.31,0,7,1.22,8.72,4.58,2.63-3.16,5.55-4.58,8.28-4.58,4.58,0,9.74,2.29,9.74,9.25v16.46h-8.62v-14.12c0-2.48-1.31-4.67-4.38-4.67a3.83,3.83,0,0,0-4,3.89v14.9h-8.62v-14.12c0-2.48-1.31-4.67-4.38-4.67-2.87,0-4,2.19-4,4.19v14.61h-8.62v-25Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2338.27,1492.33a11.36,11.36,0,0,1-8.18-3.12v15h-8.62v-37.64H2330v2.82h0.1a11.06,11.06,0,0,1,8.18-3.55c7.3,0,12.42,5.89,12.42,13.2S2345.57,1492.33,2338.27,1492.33Zm-2.58-19.09a5.61,5.61,0,0,0-5.79,5.84,5.82,5.82,0,1,0,11.64,0A5.57,5.57,0,0,0,2335.69,1473.24Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2368,1465.89c8.28,0,14.9,5.45,14.9,13.24s-6.28,13.2-14.9,13.2c-9,0-15-5.5-15-13.2S2359.55,1465.89,2368,1465.89Zm0,19.09a5.61,5.61,0,0,0,5.79-5.84,5.82,5.82,0,1,0-11.64,0A5.57,5.57,0,0,0,2367.92,1485Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2406,1467.84l-2.82,5.65a14.06,14.06,0,0,0-5.55-1.56c-1.9,0-2.68.34-2.68,1.51s1.75,1.7,3.9,2.39c3.31,1,7.6,2.87,7.6,8,0,7.35-6.72,8.52-11.83,8.52a14.94,14.94,0,0,1-9.64-3.36l3.51-5.89s3.41,2.87,6.18,2.87c1.22,0,2.68-.15,2.68-1.8s-2.73-1.95-5.55-3.41c-2.53-1.32-5.06-3.07-5.06-6.82,0-5.11,4.33-8,10.91-8A19.08,19.08,0,0,1,2406,1467.84Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2417.84,1480.3c0,3.85,3.21,5.16,5.4,5.16,2.78,0,4-.54,6.09-2.78l6.23,3.12c-2.82,4.72-7.4,6.53-13,6.53-7.55,0-13.73-5.94-13.73-13.2a13.52,13.52,0,0,1,13.73-13.24c7.6,0,13.39,4.48,13.39,13.24a9.15,9.15,0,0,1,0,1.17h-18.11Zm9.74-4.77a4.43,4.43,0,0,0-4.72-4c-3,0-4.62,1.75-4.77,4h9.5Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2439.94,1466.62h8.62v3.6h0.1s2.73-4.33,7.64-4.33a10.35,10.35,0,0,1,5.45,1.56l-3.6,7.3a7.27,7.27,0,0,0-4.48-1.36c-4.48,0-5.11,4.43-5.11,5.06v13.15h-8.62v-25Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2495,1480.25c0,7.89-4.48,12.08-12.51,12.08a13.91,13.91,0,0,1-9.4-3.85l2.92-7.64s2.87,2.73,5.21,2.73c2.63,0,4.63-1.61,4.63-5.65v-26.49H2495v28.82Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2523.55,1459.46h-14.07v8h13v8h-13v16.12h-9.15v-40.17h23.22v8Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\"\n          />\n          <path d=\"M2543.61,1473.78v7.45h-15.68v-7.45h15.68Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2571.22,1469.93a11.38,11.38,0,0,1,7.06,10.86c0,6.77-7.45,11.54-15,11.54-7.79,0-15-4.77-15-11.54a11.34,11.34,0,0,1,7-10.86,10,10,0,0,1-5.31-9.11c0-5.94,6.67-10.13,13.29-10.13,6.87,0,13.15,4.19,13.15,10.13A10,10,0,0,1,2571.22,1469.93Zm-8,14.51a5.11,5.11,0,1,0-5.06-5.11A4.87,4.87,0,0,0,2563.23,1484.44Zm0-26.83a4.5,4.5,0,1,0,0,9,4.26,4.26,0,0,0,4.43-4.48A4.32,4.32,0,0,0,2563.28,1457.61Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2597.71,1450.7c8.62,0,16.31,6.91,16.31,20.84,0,14.9-7.69,20.79-16.31,20.79s-16.36-5.89-16.36-20.79C2581.35,1457.61,2589.09,1450.7,2597.71,1450.7Zm0,33.6c4.38,0,7.06-4.09,7.06-12.76,0-8.13-2.68-12.81-7.06-12.81s-7.11,4.72-7.11,12.81C2590.6,1480.2,2593.28,1484.29,2597.71,1484.29Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n          <path d=\"M2640.07,1469.93a11.38,11.38,0,0,1,7.06,10.86c0,6.77-7.45,11.54-15,11.54-7.79,0-15-4.77-15-11.54a11.34,11.34,0,0,1,7-10.86,10,10,0,0,1-5.31-9.11c0-5.94,6.67-10.13,13.29-10.13,6.87,0,13.15,4.19,13.15,10.13A10,10,0,0,1,2640.07,1469.93Zm-8,14.51a5.11,5.11,0,1,0-5.06-5.11A4.87,4.87,0,0,0,2632.08,1484.44Zm0-26.83a4.5,4.5,0,1,0,0,9,4.26,4.26,0,0,0,4.43-4.48A4.32,4.32,0,0,0,2632.13,1457.61Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#e5662f\" />\n        </g>\n        <g>\n          <path d=\"M2409.48,1534h-4.83l-1.46-3.94h-7.5l-1.46,3.94h-4.83l8-19.71h4.16Zm-10-13.62h0l-2.2,5.73h4.44Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#f9fcf9\" />\n          <path d=\"M2410.25,1521.72h4.23V1523h0a5.08,5.08,0,0,1,3.51-1.65c2.25,0,5.38,1.12,5.38,4.54V1534h-4.23v-6.93a2.27,2.27,0,0,0-2.2-2.39,2.61,2.61,0,0,0-2.51,2.39V1534h-4.23v-12.26Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2429,1535.3a3.69,3.69,0,0,0,3.32,1.58,2.82,2.82,0,0,0,3-2.87v-0.91c-0.91,1-2.34,1.24-4,1.24a6.15,6.15,0,0,1-6.09-6.48c0-3.58,2.51-6.5,6.09-6.5a5.6,5.6,0,0,1,3.94,1.46h0.07v-1.1h4.23v12.59c0,4.11-3,6.24-7.22,6.24-2.56,0-5.5-.57-6.79-3.56Zm3.56-4.56a2.75,2.75,0,0,0,2.84-2.87,2.86,2.86,0,1,0-5.71,0A2.73,2.73,0,0,0,2432.53,1530.73Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2446.37,1527.56c0,2.41.65,3.34,2.41,3.34s2.41-.93,2.41-3.34v-5.83h4.23v6.86c0,4.11-2.05,5.76-6.64,5.76s-6.64-1.65-6.64-5.76v-6.86h4.23v5.83Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2458.05,1513.43h4.23V1534h-4.23v-20.55Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2470.36,1521.37a5.57,5.57,0,0,1,4,1.53v-1.17h4.23V1534h-4.18v-1.39h0a5.43,5.43,0,0,1-4,1.74,6.15,6.15,0,0,1-6.09-6.48C2464.27,1524.28,2466.78,1521.37,2470.36,1521.37Zm1.27,9.37a2.75,2.75,0,0,0,2.84-2.87,2.86,2.86,0,1,0-5.71,0A2.73,2.73,0,0,0,2471.63,1530.73Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2481.48,1521.72h4.23v1.77h0a4.8,4.8,0,0,1,3.75-2.13,5.08,5.08,0,0,1,2.68.76l-1.77,3.58a3.57,3.57,0,0,0-2.2-.67,2.54,2.54,0,0,0-2.51,2.48V1534h-4.23v-12.26Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2497.11,1521.46l-3.75-1.82s1.91-5.74,7.26-5.74c6.76,0,7.65,4.44,7.65,6.93,0,4.61-7,9.2-7,9.2h7.31V1534h-15.36v-1.12s10.16-8.39,10.16-12c0-.72-0.17-3.13-2.8-3.13C2498.47,1517.71,2497.11,1521.46,2497.11,1521.46Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2531.5,1528.7l1.91,3.82a10.63,10.63,0,0,1-6.48,1.82c-5.57,0-10.68-4.54-10.68-10.18s5.09-10.25,10.68-10.25a10.63,10.63,0,0,1,6.48,1.82l-1.91,3.82a6.85,6.85,0,0,0-3.87-1.22c-4.52,0-6.5,3.15-6.5,5.78s2,5.81,6.5,5.81A6.85,6.85,0,0,0,2531.5,1528.7Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2541.64,1521.37c4.06,0,7.31,2.68,7.31,6.5s-3.08,6.48-7.31,6.48c-4.42,0-7.38-2.7-7.38-6.48S2537.5,1521.37,2541.64,1521.37Zm0,9.37a2.75,2.75,0,0,0,2.84-2.87,2.86,2.86,0,1,0-5.71,0A2.73,2.73,0,0,0,2541.61,1530.73Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2550.89,1521.72h4.23V1523h0a5.08,5.08,0,0,1,3.51-1.65c2.25,0,5.38,1.12,5.38,4.54V1534h-4.23v-6.93a2.27,2.27,0,0,0-2.2-2.39,2.61,2.61,0,0,0-2.51,2.39V1534h-4.23v-12.26Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2567.26,1517.16h4.23v4.56h2.58V1525h-2.58v3.89c0,1.15.29,1.7,1,1.7a2,2,0,0,0,1.05-.38l1.05,3.42a7,7,0,0,1-3.11.76c-3.37,0-4.18-2.51-4.18-4.68V1525h-1.77v-3.23h1.77v-4.56Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2576,1521.72h4.23v1.77h0a4.8,4.8,0,0,1,3.75-2.13,5.08,5.08,0,0,1,2.68.76l-1.77,3.58a3.57,3.57,0,0,0-2.2-.67,2.54,2.54,0,0,0-2.51,2.48V1534H2576v-12.26Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2594.24,1521.37c4.06,0,7.31,2.68,7.31,6.5s-3.08,6.48-7.31,6.48c-4.42,0-7.38-2.7-7.38-6.48S2590.11,1521.37,2594.24,1521.37Zm0,9.37a2.75,2.75,0,0,0,2.84-2.87,2.86,2.86,0,1,0-5.71,0A2.73,2.73,0,0,0,2594.22,1530.73Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2603.49,1513.43h4.23V1534h-4.23v-20.55Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2610.59,1513.43h4.23V1534h-4.23v-20.55Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2621.2,1528.44a2.51,2.51,0,0,0,2.65,2.53,3.36,3.36,0,0,0,3-1.36l3.06,1.53c-1.39,2.32-3.63,3.2-6.36,3.2a6.49,6.49,0,1,1,0-13c3.73,0,6.57,2.2,6.57,6.5a4.32,4.32,0,0,1,0,.57h-8.89Zm4.78-2.34a2.18,2.18,0,0,0-2.32-2,2.11,2.11,0,0,0-2.34,2H2626Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n          <path d=\"M2637.31,1521.37a5.57,5.57,0,0,1,4,1.53v-9.46h4.23V1534h-4.18v-1.39h0a5.43,5.43,0,0,1-4,1.74,6.15,6.15,0,0,1-6.09-6.48C2631.22,1524.28,2633.73,1521.37,2637.31,1521.37Zm1.27,9.37a2.75,2.75,0,0,0,2.84-2.87,2.86,2.86,0,1,0-5.71,0A2.73,2.73,0,0,0,2638.58,1530.73Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\" />\n        </g>\n        <g>\n          <path d=\"M1469.34,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1485.75,856.36h-4.47v2.88h5v2.25h-7.74V849.35H1486v2.25h-4.74v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1491.13,861.49l-3.89-12.14h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1506.94,856.36h-4.47v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.74v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1509.33,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1465.59,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6L1473,992h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1475.42,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1485.68,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1494.73,988.88l-0.86,3.11H1491l3.71-12.14h3.6L1502.1,992h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1512.18,991.65a7.82,7.82,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1514,979.86h2.72v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4h3.37l-4,5.17,4.23,7h-3.21l-3-5.24-1,1.28v4H1514V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1466.94,1108.55a24.49,24.49,0,0,1,3.71-.25,7.81,7.81,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.15,6.15,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.7,23.7,0,0,1-3.11-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.48,0,4.1-1.35,4.1-4.25a3.48,3.48,0,0,0-3.82-3.85,5.72,5.72,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1486.69,1115.4h-4.47v2.88h5v2.25h-7.74v-12.14H1487v2.25h-4.74v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1498,1120.18a7.82,7.82,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1502.8,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1512.88,1120.53v-5l-3.83-7.17h3.13l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1477.83,1249.49a13.58,13.58,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.36,8.36,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1480,1238.08a24.11,24.11,0,0,1,3.65-.25,6.19,6.19,0,0,1,3.93,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.16,15.16,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94h-0.83v4.77H1480v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1493.64,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1505.37,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1507.75,1250.05v-12.14h3.2l2.52,4.45a35.18,35.18,0,0,1,2,4.16h0.05a45,45,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a45.16,45.16,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1636.13,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1652.55,856.36h-4.47v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.74v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1657.93,861.49L1654,849.35h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1673.74,856.36h-4.47v2.88h5v2.25h-7.74V849.35H1674v2.25h-4.74v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1676.13,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1632.39,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1642.22,982.16H1639v-2.3h9.33v2.3H1645V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1652.48,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1661.53,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6L1668.9,992h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1679,991.65a7.82,7.82,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1680.77,979.86h2.72v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4h3.37l-4,5.17,4.23,7h-3.21l-3-5.24-1,1.28v4h-2.72V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1633.74,1108.55a24.49,24.49,0,0,1,3.71-.25,7.81,7.81,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.15,6.15,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.7,23.7,0,0,1-3.11-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.48,0,4.1-1.35,4.1-4.25a3.48,3.48,0,0,0-3.82-3.85,5.72,5.72,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1653.49,1115.4H1649v2.88h5v2.25h-7.74v-12.14h7.49v2.25H1649v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1664.79,1120.18a7.82,7.82,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1669.6,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1679.68,1120.53v-5l-3.83-7.17H1679l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1644.63,1249.49a13.58,13.58,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.36,8.36,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1646.77,1238.08a24.11,24.11,0,0,1,3.65-.25,6.19,6.19,0,0,1,3.93,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.16,15.16,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94h-0.83v4.77h-2.72v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1660.43,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1672.17,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1674.54,1250.05v-12.14h3.2l2.52,4.45a35.18,35.18,0,0,1,2,4.16h0.05a45,45,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a45.16,45.16,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1803.19,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1819.61,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1825,861.49l-3.89-12.14h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14H1825Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1840.79,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1843.19,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1799.45,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1809.28,982.16H1806v-2.3h9.33v2.3H1812V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1819.54,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1828.59,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6L1836,992h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1846,991.65a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1847.83,979.86h2.72v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4h3.37l-4,5.17,4.23,7h-3.21l-3-5.24-1,1.28v4h-2.72V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1800.8,1108.55a24.5,24.5,0,0,1,3.71-.25,7.81,7.81,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.16,6.16,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.71,23.71,0,0,1-3.12-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.49,0,4.11-1.35,4.11-4.25a3.48,3.48,0,0,0-3.82-3.85,5.73,5.73,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1820.54,1115.4h-4.46v2.88h5v2.25h-7.74v-12.14h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1831.85,1120.18a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1836.65,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1846.73,1120.53v-5l-3.83-7.17H1846l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1811.69,1249.49a13.59,13.59,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.35,8.35,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1813.83,1238.08a24.12,24.12,0,0,1,3.66-.25,6.19,6.19,0,0,1,3.92,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.19,15.19,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94h-0.83v4.77h-2.72v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1827.49,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1839.23,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1841.6,1250.05v-12.14h3.2l2.52,4.45a35.26,35.26,0,0,1,2,4.16h0.05a45.12,45.12,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a44.93,44.93,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1961.66,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1978.08,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1983.46,861.49l-3.89-12.14h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1999.26,856.36h-4.46v2.88h5v2.25H1992V849.35h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2001.65,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1957.91,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57H1961Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1967.74,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1978,982.16h-3.26v-2.3h9.33v2.3h-3.31V992H1978v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1987.06,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2004.5,991.65a7.82,7.82,0,0,1-3.12.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.86,6.86,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2006.3,979.86H2009v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4H2016l-4,5.17,4.23,7H2013l-3-5.24-1,1.28v4h-2.72V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1959.26,1108.55a24.48,24.48,0,0,1,3.71-.25,7.8,7.8,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.15,6.15,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.69,23.69,0,0,1-3.11-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.48,0,4.1-1.35,4.1-4.25a3.48,3.48,0,0,0-3.82-3.85,5.72,5.72,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1979,1115.4h-4.47v2.88h5v2.25h-7.74v-12.14h7.49v2.25h-4.74v2.52H1979v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1990.32,1120.18a7.82,7.82,0,0,1-3.12.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.86,6.86,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1995.12,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2005.2,1120.53v-5l-3.83-7.17h3.13l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1970.16,1249.49a13.57,13.57,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.36,8.36,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1972.3,1238.08a24.1,24.1,0,0,1,3.65-.25,6.2,6.2,0,0,1,3.93,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.14,15.14,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94H1975v4.77h-2.72v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1986,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11H1986Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57H1989Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1997.69,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2000.07,1250.05v-12.14h3.21l2.52,4.45a35.11,35.11,0,0,1,2,4.16h0.05a44.89,44.89,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a45.4,45.4,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2125.13,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2141.55,856.36h-4.47v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.74v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2146.93,861.49L2143,849.35h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2162.73,856.36h-4.47v2.88h5v2.25h-7.74V849.35H2163v2.25h-4.74v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2165.12,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2121.38,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2131.21,982.16H2128v-2.3h9.33v2.3H2134V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2141.47,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2150.52,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2168,991.65a7.82,7.82,0,0,1-3.12.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.86,6.86,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2169.77,979.86h2.72v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4h3.37l-4,5.17,4.23,7h-3.21l-3-5.24-1,1.28v4h-2.72V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2122.73,1108.55a24.48,24.48,0,0,1,3.71-.25,7.8,7.8,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.15,6.15,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.69,23.69,0,0,1-3.11-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.48,0,4.1-1.35,4.1-4.25a3.48,3.48,0,0,0-3.82-3.85,5.72,5.72,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2142.48,1115.4H2138v2.88h5v2.25h-7.74v-12.14h7.49v2.25H2138v2.52h4.47v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2153.79,1120.18a7.82,7.82,0,0,1-3.12.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.86,6.86,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2158.59,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2168.67,1120.53v-5l-3.83-7.17H2168l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2133.63,1249.49a13.57,13.57,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.36,8.36,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2135.77,1238.08a24.1,24.1,0,0,1,3.65-.25,6.2,6.2,0,0,1,3.93,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.14,15.14,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94h-0.83v4.77h-2.72v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2149.43,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2161.16,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2163.54,1250.05v-12.14h3.21l2.52,4.45a35.11,35.11,0,0,1,2,4.16h0.05a44.89,44.89,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a45.4,45.4,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2295,849.35h2.75v9.83h4.83v2.3H2295V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2311.42,856.36H2307v2.88h5v2.25h-7.74V849.35h7.49v2.25H2307v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2316.81,861.49l-3.89-12.14h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92L2320,861.49h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2332.61,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.73v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2335,849.35h2.75v9.83h4.83v2.3H2335V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2291.26,988.88L2290.4,992h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2301.09,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2311.35,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2320.4,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2337.85,991.65a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2339.65,979.86h2.72v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4h3.37l-4,5.17,4.23,7h-3.21l-3-5.24-1,1.28v4h-2.72V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2292.61,1108.55a24.5,24.5,0,0,1,3.71-.25,7.81,7.81,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.16,6.16,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.71,23.71,0,0,1-3.12-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.49,0,4.11-1.35,4.11-4.25a3.48,3.48,0,0,0-3.82-3.85,5.73,5.73,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2312.36,1115.4h-4.46v2.88h5v2.25h-7.74v-12.14h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2323.66,1120.18a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2328.47,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2338.55,1120.53v-5l-3.83-7.17h3.13l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2303.51,1249.49a13.59,13.59,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.35,8.35,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54H2299v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2305.64,1238.08a24.12,24.12,0,0,1,3.66-.25,6.19,6.19,0,0,1,3.92,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42H2312a15.19,15.19,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94h-0.83v4.77h-2.72v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2319.31,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2331,1237.91v12.14h-2.75v-12.14H2331Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2333.42,1250.05v-12.14h3.2l2.52,4.45a35.26,35.26,0,0,1,2,4.16h0.05a45.12,45.12,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a44.93,44.93,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2455.86,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2472.28,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.73v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2477.66,861.49l-3.89-12.14h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2493.46,856.36H2489v2.88h5v2.25h-7.74V849.35h7.49v2.25H2489v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2495.86,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2452.12,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2461.94,982.16h-3.26v-2.3H2468v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2472.2,982.16h-3.26v-2.3h9.33v2.3H2475V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2481.26,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2498.7,991.65a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2500.5,979.86h2.72v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4h3.37l-4,5.17,4.23,7h-3.21l-3-5.24-1,1.28v4h-2.72V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2453.47,1108.55a24.5,24.5,0,0,1,3.71-.25,7.81,7.81,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.16,6.16,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.71,23.71,0,0,1-3.12-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.49,0,4.11-1.35,4.11-4.25a3.48,3.48,0,0,0-3.82-3.85,5.73,5.73,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2473.21,1115.4h-4.46v2.88h5v2.25H2466v-12.14h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2484.52,1120.18a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2489.32,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2499.4,1120.53v-5l-3.83-7.17h3.13l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2464.36,1249.49a13.59,13.59,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.35,8.35,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2466.5,1238.08a24.12,24.12,0,0,1,3.66-.25,6.19,6.19,0,0,1,3.92,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.19,15.19,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94h-0.83v4.77h-2.72v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2480.16,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2491.9,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2494.27,1250.05v-12.14h3.2l2.52,4.45a35.26,35.26,0,0,1,2,4.16H2502a45.12,45.12,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a44.93,44.93,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2620.64,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2637.05,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2642.44,861.49l-3.89-12.14h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2658.24,856.36h-4.46v2.88h5v2.25H2651V849.35h7.49v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2660.63,849.35h2.75v9.83h4.83v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2616.89,988.88L2616,992h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57H2620Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2626.72,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2637,982.16h-3.26v-2.3H2643v2.3h-3.31V992H2637v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2646,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6L2653.4,992h-3l-0.94-3.11H2646Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2663.48,991.65a7.82,7.82,0,0,1-3.12.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.86,6.86,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2665.28,979.86H2668v5.37H2668c0.27-.47.56-0.9,0.83-1.33l2.75-4H2675l-4,5.17,4.23,7H2672l-3-5.24-1,1.28v4h-2.72V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2618.24,1108.55a24.48,24.48,0,0,1,3.71-.25,7.8,7.8,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.15,6.15,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.69,23.69,0,0,1-3.11-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.48,0,4.1-1.35,4.1-4.25a3.48,3.48,0,0,0-3.82-3.85,5.72,5.72,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2638,1115.4h-4.47v2.88h5v2.25h-7.74v-12.14h7.49v2.25h-4.74v2.52H2638v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2649.3,1120.18a7.82,7.82,0,0,1-3.12.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.86,6.86,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2654.1,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2664.18,1120.53v-5l-3.83-7.17h3.13l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2629.14,1249.49a13.57,13.57,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.36,8.36,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2631.27,1238.08a24.1,24.1,0,0,1,3.65-.25,6.2,6.2,0,0,1,3.93,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.14,15.14,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94H2634v4.77h-2.72v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2644.94,1246.94l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57H2648Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2656.67,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2659,1250.05v-12.14h3.21l2.52,4.45a35.11,35.11,0,0,1,2,4.16h0.05a44.89,44.89,0,0,1-.23-5.06v-3.55h2.52v12.14h-2.88l-2.59-4.68a45.4,45.4,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66H2659Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2790.39,849.35h2.75v9.83H2798v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2806.81,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.73v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2812.19,861.49l-3.89-12.14h3l1.48,5.13c0.41,1.44.79,2.83,1.08,4.34h0.05c0.31-1.46.68-2.9,1.1-4.29l1.55-5.19h2.92l-4.09,12.14h-3.21Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2828,856.36h-4.46v2.88h5v2.25h-7.74V849.35h7.49v2.25h-4.73v2.52H2828v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2830.39,849.35h2.75v9.83H2838v2.3h-7.58V849.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2786.65,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6L2794,992h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2796.48,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2806.74,982.16h-3.26v-2.3h9.33v2.3h-3.31V992h-2.75v-9.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2815.79,988.88l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.47Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2833.23,991.65a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2835,979.86h2.72v5.37h0.05c0.27-.47.56-0.9,0.83-1.33l2.75-4h3.37l-4,5.17,4.23,7h-3.21l-3-5.24-1,1.28v4H2835V979.86Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2788,1108.55a24.5,24.5,0,0,1,3.71-.25,7.81,7.81,0,0,1,5,1.3,5.37,5.37,0,0,1,2.05,4.57,6.16,6.16,0,0,1-2,4.92,8.71,8.71,0,0,1-5.6,1.57,23.71,23.71,0,0,1-3.12-.18v-11.92Zm2.75,9.9a5,5,0,0,0,1,.05c2.49,0,4.11-1.35,4.11-4.25a3.48,3.48,0,0,0-3.82-3.85,5.73,5.73,0,0,0-1.24.11v7.94Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2807.75,1115.4h-4.46v2.88h5v2.25h-7.74v-12.14H2808v2.25h-4.74v2.52h4.46v2.23Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M2819.05,1120.18a7.81,7.81,0,0,1-3.11.52c-4.2,0-6.36-2.61-6.36-6.07,0-4.14,3-6.45,6.63-6.45a7.16,7.16,0,0,1,3,.54l-0.56,2.18a5.92,5.92,0,0,0-2.3-.45,4,4,0,0,0,0,8,6.85,6.85,0,0,0,2.29-.4Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2823.86,1117.41l-0.86,3.11h-2.84l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2833.94,1120.53v-5l-3.83-7.17h3.13l1.24,2.92c0.38,0.88.63,1.53,0.94,2.32h0c0.27-.76.56-1.46,0.92-2.32l1.22-2.92h3.08l-4,7.08v5.06h-2.74Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M2798.89,1249.49a13.59,13.59,0,0,1-4.05.68,6.76,6.76,0,0,1-4.93-1.64,5.87,5.87,0,0,1-1.71-4.41c0-4,3-6.34,6.93-6.34a8.35,8.35,0,0,1,3.37.59l-0.58,2.2a6.72,6.72,0,0,0-2.83-.52,4,4,0,1,0,1.15,7.72v-2.54h-1.87v-2.14h4.52v6.39Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2801,1238.08a24.12,24.12,0,0,1,3.66-.25,6.19,6.19,0,0,1,3.92,1,3.08,3.08,0,0,1,1.12,2.54,3.22,3.22,0,0,1-2.14,3v0.05a3.06,3.06,0,0,1,1.62,2.27c0.38,1.37.76,3,1,3.42h-2.81a15.19,15.19,0,0,1-.85-2.83c-0.32-1.51-.85-1.93-2-1.94h-0.83v4.77H2801v-12Zm2.72,5.22h1.08c1.37,0,2.18-.68,2.18-1.75s-0.76-1.67-2-1.69a6.85,6.85,0,0,0-1.24.09v3.35Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2814.69,1246.94l-0.86,3.11H2811l3.71-12.14h3.6l3.76,12.14h-3l-0.94-3.11h-3.48Zm3.08-2.05-0.76-2.57c-0.22-.72-0.43-1.62-0.61-2.34h0c-0.18.72-.36,1.64-0.56,2.34l-0.72,2.57h2.68Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2826.43,1237.91v12.14h-2.75v-12.14h2.75Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M2828.8,1250.05v-12.14h3.2l2.52,4.45a35.26,35.26,0,0,1,2,4.16h0.05a45.12,45.12,0,0,1-.23-5.06v-3.55h2.52v12.14H2836l-2.59-4.68a44.93,44.93,0,0,1-2.11-4.29l-0.05,0c0.07,1.6.11,3.31,0.11,5.29v3.66h-2.52Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n      </g>\n      <g id=\"main_knobs\">\n        <g>\n          <path d=\"M1167.56,1267.94h-5.79v-4.1h16.57v4.1h-5.89v17.47h-4.9v-17.47Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\"\n          />\n          <path d=\"M1193.77,1276.29h-7.94v5.12h8.86v4h-13.76v-21.57h13.31v4h-8.42v4.48h7.94v4Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1216.27,1277.16c-0.1-2.59-.19-5.73-0.19-8.86H1216c-0.67,2.75-1.57,5.82-2.4,8.35l-2.62,8.42h-3.81l-2.3-8.35c-0.7-2.53-1.44-5.6-2-8.42h-0.06c-0.13,2.91-.22,6.24-0.38,8.93l-0.38,8.19h-4.51l1.38-21.57h6.5l2.11,7.2c0.67,2.5,1.34,5.18,1.82,7.71h0.1c0.61-2.5,1.34-5.34,2-7.74l2.3-7.17h6.37l1.18,21.57h-4.77Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1225.1,1264.13a39.87,39.87,0,0,1,6.59-.45c3,0,5.15.58,6.59,1.73a6.3,6.3,0,0,1,2.3,5,6.89,6.89,0,0,1-2,5.12c-1.66,1.57-4.13,2.27-7,2.27a12.29,12.29,0,0,1-1.66-.1v7.71h-4.83v-21.28Zm4.83,9.79a7.44,7.44,0,0,0,1.63.13c2.59,0,4.19-1.31,4.19-3.52,0-2-1.38-3.17-3.81-3.17a8.29,8.29,0,0,0-2,.19v6.37Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1263.43,1274.4c0,7.07-4.29,11.36-10.59,11.36s-10.14-4.83-10.14-11c0-6.46,4.13-11.3,10.5-11.3C1259.82,1263.49,1263.43,1268.45,1263.43,1274.4Zm-15.58.29c0,4.22,2,7.2,5.25,7.2s5.18-3.14,5.18-7.33c0-3.87-1.86-7.2-5.22-7.2S1247.85,1270.5,1247.85,1274.69Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n        </g>\n        <g>\n          <path d=\"M1050.07,1093.84l-1.54,5.54h-5.06l6.59-21.57h6.4l6.69,21.57h-5.25l-1.66-5.54h-6.18Zm5.47-3.65-1.34-4.58c-0.38-1.28-.77-2.88-1.09-4.16H1053c-0.32,1.28-.64,2.91-1,4.16l-1.28,4.58h4.77Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1081.07,1098.76a13.91,13.91,0,0,1-5.54.93c-7.46,0-11.29-4.64-11.29-10.78,0-7.36,5.25-11.46,11.77-11.46a12.72,12.72,0,0,1,5.31,1l-1,3.87a10.53,10.53,0,0,0-4.1-.8c-3.87,0-6.88,2.34-6.88,7.14,0,4.32,2.56,7,6.91,7a12.19,12.19,0,0,0,4.06-.7Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1099.15,1098.76a13.91,13.91,0,0,1-5.54.93c-7.46,0-11.29-4.64-11.29-10.78,0-7.36,5.25-11.46,11.77-11.46a12.72,12.72,0,0,1,5.31,1l-1,3.87a10.53,10.53,0,0,0-4.1-.8c-3.87,0-6.88,2.34-6.88,7.14,0,4.32,2.56,7,6.91,7a12.19,12.19,0,0,0,4.06-.7Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1115.18,1090.25h-7.94v5.12h8.86v4h-13.76v-21.57h13.31v4h-8.42v4.48h7.94v4Z\" transform=\"translate(-29.98 -34.49)\"\n            fill=\"#fff\" />\n          <path d=\"M1119.44,1099.37v-21.57h5.7l4.48,7.9a62.5,62.5,0,0,1,3.52,7.39h0.1a80.07,80.07,0,0,1-.42-9v-6.3h4.48v21.57h-5.12l-4.61-8.32a80.06,80.06,0,0,1-3.74-7.62l-0.1,0c0.13,2.85.19,5.89,0.19,9.41v6.5h-4.48Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1145.68,1081.9h-5.79v-4.1h16.57v4.1h-5.89v17.47h-4.9V1081.9Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\"\n          />\n        </g>\n        <g>\n          <path d=\"M1232.54,971.13l-6.91-21.57H1231l2.62,9.12c0.74,2.56,1.41,5,1.92,7.71h0.1c0.54-2.59,1.22-5.15,2-7.62l2.75-9.22h5.18l-7.26,21.57h-5.7Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1267.29,960.12c0,7.07-4.29,11.36-10.59,11.36s-10.14-4.83-10.14-11c0-6.46,4.13-11.3,10.5-11.3C1263.67,949.21,1267.29,954.17,1267.29,960.12Zm-15.58.29c0,4.22,2,7.2,5.25,7.2s5.18-3.14,5.18-7.33c0-3.87-1.86-7.2-5.22-7.2S1251.71,956.22,1251.71,960.41Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1270.49,949.56h4.9V967H1284v4.1h-13.47V949.56Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1290.72,949.56V962c0,3.71,1.41,5.6,3.9,5.6s4-1.79,4-5.6V949.56h4.86v12.1c0,6.66-3.36,9.82-9,9.82-5.44,0-8.64-3-8.64-9.89v-12h4.9Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1325.91,962.87c-0.1-2.59-.19-5.73-0.19-8.86h-0.1c-0.67,2.75-1.57,5.82-2.4,8.35l-2.62,8.42h-3.81l-2.3-8.35c-0.7-2.53-1.44-5.6-2-8.42h-0.06c-0.13,2.91-.22,6.24-0.38,8.93l-0.38,8.19h-4.51l1.38-21.57h6.5l2.11,7.2c0.67,2.5,1.34,5.18,1.82,7.71h0.1c0.61-2.5,1.34-5.34,2-7.74l2.3-7.17h6.37l1.18,21.57h-4.77Z\"\n            transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          <path d=\"M1347.58,962h-7.94v5.12h8.86v4h-13.76V949.56h13.31v4h-8.42V958h7.94v4Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\"\n          />\n        </g>\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"0\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat\" cx=\"1396.82\" cy=\"1591.03\" r=\"5.66\" fill=\"#39b54a\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 1)\" [initial]=\"sequencerLineUp['rhythmSettings'][0][currentType]\" id=\"_1\" data-name=\"1\">\n        <rect id=\"background-2\" data-name=\"background\" x=\"1382.69\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f58667\"\n        />\n        <polygon id=\"highlight\" points=\"1440.09 1648.86 1440.09 1713.32 1434.69 1655.86 1388.09 1655.86 1382.69 1713.32 1382.69 1648.86 1440.09 1648.86\"\n          fill=\"#fdd7c7\" opacity=\"0.62\" />\n        <circle id=\"indicator-1\" cx=\"1411.39\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"1\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-2\" data-name=\"beat\" cx=\"1480.16\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 2)\" [initial]=\"sequencerLineUp['rhythmSettings'][1][currentType]\" id=\"_2\" data-name=\"2\">\n        <rect id=\"background-3\" data-name=\"background\" x=\"1465.09\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f58667\"\n        />\n        <polygon id=\"highlight-2\" data-name=\"highlight\" points=\"1522.49 1648.86 1522.49 1713.32 1517.09 1655.86 1470.49 1655.86 1465.09 1713.32 1465.09 1648.86 1522.49 1648.86\"\n          fill=\"#fdd7c7\" opacity=\"0.62\" />\n        <circle id=\"indicator-2\" data-name=\"indicator\" cx=\"1493.79\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"2\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-3\"  data-name=\"beat\" cx=\"1561.78\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 3)\" [initial]=\"sequencerLineUp['rhythmSettings'][2][currentType]\" id=\"_3\" data-name=\"3\">\n        <rect id=\"background-4\" data-name=\"background\" x=\"1545.57\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f58667\"\n        />\n        <polygon id=\"highlight-3\" data-name=\"highlight\" points=\"1602.97 1648.86 1602.97 1713.32 1597.57 1655.86 1550.97 1655.86 1545.57 1713.32 1545.57 1648.86 1602.97 1648.86\"\n          fill=\"#fdd7c7\" opacity=\"0.62\" />\n        <circle id=\"indicator-3\" data-name=\"indicator\" cx=\"1574.27\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"3\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-4\"  data-name=\"beat\" cx=\"1644.96\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 4)\" [initial]=\"sequencerLineUp['rhythmSettings'][3][currentType]\" id=\"_4\" data-name=\"4\">\n        <rect id=\"background-5\" data-name=\"background\" x=\"1627.97\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f58667\"\n        />\n        <polygon id=\"highlight-4\" data-name=\"highlight\" points=\"1685.37 1648.86 1685.37 1713.32 1679.97 1655.86 1633.37 1655.86 1627.97 1713.32 1627.97 1648.86 1685.37 1648.86\"\n          fill=\"#fdd7c7\" opacity=\"0.62\" />\n        <circle id=\"indicator-4\" data-name=\"indicator\" cx=\"1656.67\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"4\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-5\" data-name=\"beat\" cx=\"1725.02\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 5)\" [initial]=\"sequencerLineUp['rhythmSettings'][4][currentType]\" id=\"_5\" data-name=\"5\">\n        <rect id=\"background-6\" data-name=\"background\" x=\"1708.7\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f8995c\"\n        />\n        <polygon id=\"highlight-5\" data-name=\"highlight\" points=\"1766.1 1648.86 1766.1 1713.32 1760.7 1655.86 1714.1 1655.86 1708.7 1713.32 1708.7 1648.86 1766.1 1648.86\"\n          fill=\"#feddc5\" opacity=\"0.62\" />\n        <circle id=\"indicator-5\" data-name=\"indicator\" cx=\"1737.4\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"5\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-6\" data-name=\"beat\" cx=\"1808.89\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 6)\" [initial]=\"sequencerLineUp['rhythmSettings'][5][currentType]\" id=\"_6\" data-name=\"6\">\n        <rect id=\"background-7\" data-name=\"background\" x=\"1791.1\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f8995c\"\n        />\n        <polygon id=\"highlight-6\" data-name=\"highlight\" points=\"1848.5 1648.86 1848.5 1713.32 1843.1 1655.86 1796.5 1655.86 1791.1 1713.32 1791.1 1648.86 1848.5 1648.86\"\n          fill=\"#feddc5\" opacity=\"0.62\" />\n        <circle id=\"indicator-6\" data-name=\"indicator\" cx=\"1819.8\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"6\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-7\" data-name=\"beat\" cx=\"1889.05\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 7)\" [initial]=\"sequencerLineUp['rhythmSettings'][6][currentType]\" id=\"_7\" data-name=\"7\">\n        <rect id=\"background-8\" data-name=\"background\" x=\"1871.57\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f8995c\"\n        />\n        <polygon id=\"highlight-7\" data-name=\"highlight\" points=\"1928.97 1648.86 1928.97 1713.32 1923.58 1655.86 1876.97 1655.86 1871.58 1713.32 1871.58 1648.86 1928.97 1648.86\"\n          fill=\"#feddc5\" opacity=\"0.62\" />\n        <circle id=\"indicator-7\" data-name=\"indicator\" cx=\"1900.27\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"7\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-8\" data-name=\"beat\" cx=\"1970.34\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 8)\" [initial]=\"sequencerLineUp['rhythmSettings'][7][currentType]\" id=\"_8\" data-name=\"8\">\n        <rect id=\"background-9\" data-name=\"background\" x=\"1953.97\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\" fill=\"#f8995c\"\n        />\n        <polygon id=\"highlight-8\" data-name=\"highlight\" points=\"2011.38 1648.86 2011.38 1713.32 2005.98 1655.86 1959.38 1655.86 1953.98 1713.32 1953.98 1648.86 2011.38 1648.86\"\n          fill=\"#feddc5\" opacity=\"0.62\" />\n        <circle id=\"indicator-8\" data-name=\"indicator\" cx=\"1982.67\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"8\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-9\" data-name=\"beat\" cx=\"2053.66\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 9)\" [initial]=\"sequencerLineUp['rhythmSettings'][8][currentType]\" id=\"_9\" data-name=\"9\">\n        <rect id=\"background-10\" data-name=\"background\" x=\"2036.78\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fde56c\" />\n        <polygon id=\"highlight-9\" data-name=\"highlight\" points=\"2094.18 1648.86 2094.18 1713.32 2088.78 1655.86 2042.18 1655.86 2036.79 1713.32 2036.79 1648.86 2094.18 1648.86\"\n          fill=\"#fff5d1\" opacity=\"0.71\" />\n        <circle id=\"indicator-9\" data-name=\"indicator\" cx=\"2065.48\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"9\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-10\" data-name=\"beat\" cx=\"2134.55\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 10)\" [initial]=\"sequencerLineUp['rhythmSettings'][9][currentType]\" id=\"_10\" data-name=\"10\">\n        <rect id=\"background-11\" data-name=\"background\" x=\"2119.18\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fde56c\" />\n        <polygon id=\"highlight-10\" data-name=\"highlight\" points=\"2176.59 1648.86 2176.59 1713.32 2171.19 1655.86 2124.59 1655.86 2119.19 1713.32 2119.19 1648.86 2176.59 1648.86\"\n          fill=\"#fff5d1\" opacity=\"0.71\" />\n        <circle id=\"indicator-10\" data-name=\"indicator\" cx=\"2147.89\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"10\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-11\" data-name=\"beat\" cx=\"2215.36\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 11)\"  [initial]=\"sequencerLineUp['rhythmSettings'][10][currentType]\" id=\"_11\" data-name=\"11\">\n        <rect id=\"background-12\" data-name=\"background\" x=\"2199.66\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fde56c\" />\n        <polygon id=\"highlight-11\" data-name=\"highlight\" points=\"2257.06 1648.86 2257.06 1713.32 2251.66 1655.86 2205.06 1655.86 2199.66 1713.32 2199.66 1648.86 2257.06 1648.86\"\n          fill=\"#fff5d1\" opacity=\"0.71\" />\n        <circle id=\"indicator-11\" data-name=\"indicator\" cx=\"2228.36\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"11\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-12\" data-name=\"beat\" cx=\"2298.1\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 12)\" [initial]=\"sequencerLineUp['rhythmSettings'][11][currentType]\" id=\"_12\" data-name=\"12\">\n        <rect id=\"background-13\" data-name=\"background\" x=\"2283.06\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fde56c\" />\n        <polygon id=\"highlight-12\" data-name=\"highlight\" points=\"2340.46 1648.86 2340.46 1713.32 2335.06 1655.86 2288.46 1655.86 2283.06 1713.32 2283.06 1648.86 2340.46 1648.86\"\n          fill=\"#fff5d1\" opacity=\"0.71\" />\n        <circle id=\"indicator-12\" data-name=\"indicator\" cx=\"2311.76\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"12\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-13\" data-name=\"beat\" cx=\"2380.63\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 13)\" [initial]=\"sequencerLineUp['rhythmSettings'][12][currentType]\" id=\"_13\" data-name=\"13\">\n        <rect id=\"background-14\" data-name=\"background\" x=\"2363.78\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fff\" />\n        <polygon id=\"highlight-13\" data-name=\"highlight\" points=\"2421.18 1648.86 2421.18 1713.32 2415.78 1655.86 2369.18 1655.86 2363.78 1713.32 2363.78 1648.86 2421.18 1648.86\"\n          fill=\"#efefef\" />\n        <circle id=\"indicator-13\" data-name=\"indicator\" cx=\"2392.48\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"13\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-14\" data-name=\"beat\" cx=\"2462.64\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 14)\" [initial]=\"sequencerLineUp['rhythmSettings'][13][currentType]\" id=\"_14\" data-name=\"14\">\n        <rect id=\"background-15\" data-name=\"background\" x=\"2446.18\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fff\" />\n        <polygon id=\"highlight-14\" data-name=\"highlight\" points=\"2503.59 1648.86 2503.59 1713.32 2498.19 1655.86 2451.59 1655.86 2446.19 1713.32 2446.19 1648.86 2503.59 1648.86\"\n          fill=\"#efefef\" />\n        <circle id=\"indicator-14\" data-name=\"indicator\" cx=\"2474.89\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"14\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-15\" data-name=\"beat\" cx=\"2542.95\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 15)\" [initial]=\"sequencerLineUp['rhythmSettings'][14][currentType]\" id=\"_15\" data-name=\"15\">\n        <rect id=\"background-16\" data-name=\"background\" x=\"2526.66\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fff\" />\n        <polygon id=\"highlight-15\" data-name=\"highlight\" points=\"2584.06 1648.86 2584.06 1713.32 2578.66 1655.86 2532.06 1655.86 2526.66 1713.32 2526.66 1648.86 2584.06 1648.86\"\n          fill=\"#efefef\" />\n        <circle id=\"indicator-15\" data-name=\"indicator\" cx=\"2555.36\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      <circle my-instrument-beat-changer [beat]=\"15\" [current-beat]=\"sequencerLineUp['projectSettings']['beat']\" id=\"beat-16\" data-name=\"beat\" cx=\"2626.39\" cy=\"1591.03\" r=\"5.66\" fill=\"#003b05\" />\n      \n      <g my-button-pusher (value)=\"updateRhythmSettings($event, 16)\"  [initial]=\"sequencerLineUp['rhythmSettings'][15][currentType]\" id=\"_16\" data-name=\"16\">\n        <rect id=\"background-17\" data-name=\"background\" x=\"2610.06\" y=\"1619.42\" width=\"57.4\" height=\"100.25\" rx=\"6.35\" ry=\"6.35\"\n          fill=\"#fff\" />\n        <polygon id=\"highlight-16\" data-name=\"highlight\" points=\"2667.46 1648.86 2667.46 1713.32 2662.06 1655.86 2615.46 1655.86 2610.06 1713.32 2610.06 1648.86 2667.46 1648.86\"\n          fill=\"#efefef\" />\n        <circle id=\"indicator-16\" data-name=\"indicator\" cx=\"2638.76\" cy=\"1634.21\" r=\"5.66\" fill=\"#512829\" />\n      </g>\n      \n      \n      \n      <g id=\"start_stop_button\" data-name=\"start/stop_button\">\n      \n        <g  my-start-button-pusher (value)=\"togglePlay($event)\">\n          <rect id=\"background-18\" data-name=\"background\" x=\"1030.86\" y=\"1633.6\" width=\"171.45\" height=\"86.26\" rx=\"3.1\" ry=\"3.1\" fill=\"#757777\"\n          />\n          <rect id=\"start_button\" x=\"1033.29\" y=\"1635.7\" width=\"167.11\" height=\"82.05\" rx=\"3.1\" ry=\"3.1\" fill=\"#f58667\" />\n      \n          <g id=\"start_text_button\">\n            <path d=\"M1092.16,1703.47l-1.54,3a6.9,6.9,0,0,0-3.39-1.16c-1.3,0-2,.59-2,1.5s1.58,1.6,3.49,2.42,3.92,2.38,3.92,4.57c0,4-3,5.4-6.31,5.4A9.78,9.78,0,0,1,1080,1717l1.91-3.21s2.23,1.89,4.1,1.89c0.83,0,2.42-.08,2.42-1.64,0-1.22-1.79-1.77-3.77-2.76s-3.19-2.56-3.19-4.3a5.29,5.29,0,0,1,5.46-5.11A9.52,9.52,0,0,1,1092.16,1703.47Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1092.4,1702.19h11.77v3.35h-4v13.39h-3.82v-13.39h-4v-3.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1119.85,1718.93h-4.1l-1.24-3.35h-6.37l-1.24,3.35h-4.1l6.76-16.74h3.53Zm-8.5-11.57h0l-1.87,4.87h3.77Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#fff\" />\n            <path d=\"M1126.49,1702.19c3.1,0,5.46,1.68,5.46,5a4.78,4.78,0,0,1-3.43,4.85l5.76,6.92h-4.85l-5.11-6.62v6.62h-3.81v-16.74h6Zm-1.73,7.43c1.44,0,3.17-.1,3.17-2.19s-1.73-2.19-3.17-2.19h-0.45v4.38h0.45Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1133.17,1702.19h11.77v3.35h-4v13.39h-3.82v-13.39h-4v-3.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1148.68,1721.37h-3.1l8.36-19.89h3.1Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1169.68,1703.47l-1.54,3a6.9,6.9,0,0,0-3.39-1.16c-1.3,0-2,.59-2,1.5s1.58,1.6,3.49,2.42,3.92,2.38,3.92,4.57c0,4-3,5.4-6.31,5.4a9.78,9.78,0,0,1-6.29-2.21l1.91-3.21s2.23,1.89,4.1,1.89c0.83,0,2.42-.08,2.42-1.64,0-1.22-1.79-1.77-3.77-2.76s-3.19-2.56-3.19-4.3a5.29,5.29,0,0,1,5.46-5.11A9.52,9.52,0,0,1,1169.68,1703.47Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1169.93,1702.19h11.77v3.35h-4v13.39h-3.81v-13.39h-4v-3.35Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1190.13,1701.88a8.68,8.68,0,0,1,0,17.35,8.33,8.33,0,0,1-8.44-8.69A8.52,8.52,0,0,1,1190.13,1701.88Zm0,13.66c3,0,4.3-2.5,4.3-5s-1.34-5-4.3-5-4.32,2.5-4.32,5S1187,1715.54,1190.13,1715.54Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n            <path d=\"M1206.35,1702.19c3.27,0,5.72,1.68,5.72,5.16s-2.46,5.38-5.72,5.38h-2.29v6.21h-3.81v-16.74h6.11Zm-1.22,7.49c1.5,0,2.92-.51,2.92-2.21s-1.42-2.23-2.92-2.23h-1.08v4.44h1.08Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#fff\" />\n          </g>\n        </g>\n      </g>\n      \n      \n      <!--INSTRUMENT SELECTORS-->\n      <g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'kick'\"   (value)=\"instrumentSet($event)\"  id=\"kick\">\n          <rect id=\"background-19\" data-name=\"background\" x=\"1388.55\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-17\" data-name=\"indicator\" cx=\"1403.47\" cy=\"1350.87\" r=\"7.31\" fill=\"#39b54a\" />\n          <g>\n            <path d=\"M1468.27,1390.42l-3.65-4.2v4.2h-2.25v-9.89h2.25v4l3.39-4h2.73l-4,4.69,4.61,5.21h-3.11Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M1474.07,1390.42h-2.25v-9.89h2.25v9.89Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1482.34,1387.77l1,1.92a5.14,5.14,0,1,1,0-8.43l-1,1.92a3.44,3.44,0,0,0-1.94-.61,2.93,2.93,0,1,0,0,5.82A3.44,3.44,0,0,0,1482.34,1387.77Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1490.07,1390.42l-3.65-4.2v4.2h-2.25v-9.89h2.25v4l3.39-4h2.73l-4,4.69,4.61,5.21h-3.11Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M1499.75,1380.52a4.95,4.95,0,1,1,0,9.89h-2.87v-9.89h2.87Zm-0.26,7.88a2.93,2.93,0,0,0,0-5.86h-0.35v5.86h0.35Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M1509.28,1380.52c1.83,0,3.23,1,3.23,2.94a2.83,2.83,0,0,1-2,2.87l3.41,4.09H1511l-3-3.91v3.91h-2.25v-9.89h3.54Zm-1,4.39c0.85,0,1.87-.06,1.87-1.3s-1-1.3-1.87-1.3H1508v2.59h0.26Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1521.94,1386.9c0,2.45-1.34,3.69-3.86,3.69s-3.86-1.25-3.86-3.69v-6.38h2.25v5.72c0,1.66.5,2.13,1.61,2.13s1.61-.48,1.61-2.13v-5.72h2.25v6.38Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1531,1384.55h-0.06l-2,5.8h-1.34l-2-5.8h-0.06l-0.47,5.86h-2.25l0.89-9.89h2.4l2.19,5.71,2.19-5.71h2.4l0.89,9.89h-2.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'snare'\"   (value)=\"instrumentSet($event)\"  id=\"snare\">\n          <rect id=\"background-20\" data-name=\"background\" x=\"1554.76\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-18\" data-name=\"indicator\" cx=\"1569.68\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M1631.3,1381.28l-0.91,1.8a4.08,4.08,0,0,0-2-.68,1,1,0,0,0-1.18.89c0,0.55.94,0.95,2.06,1.43s2.31,1.4,2.31,2.7c0,2.36-1.8,3.19-3.73,3.19a5.78,5.78,0,0,1-3.72-1.31l1.13-1.9a4.83,4.83,0,0,0,2.42,1.12,1.15,1.15,0,0,0,1.43-1c0-.72-1.06-1-2.23-1.63a3,3,0,0,1-1.88-2.54,3.13,3.13,0,0,1,3.23-3A5.63,5.63,0,0,1,1631.3,1381.28Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1634.9,1390.42h-2.25v-9.89h2.25l3.93,6.14h0v-6.14h2.25v9.89h-2.25l-3.93-6.14h0v6.14Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M1651.57,1390.42h-2.42l-0.73-2h-3.77l-0.73,2h-2.42l4-9.89h2.09Zm-5-6.84h0l-1.1,2.88h2.23Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M1655.5,1380.52c1.83,0,3.23,1,3.23,2.94a2.83,2.83,0,0,1-2,2.87l3.41,4.09h-2.87l-3-3.91v3.91H1652v-9.89h3.54Zm-1,4.39c0.85,0,1.87-.06,1.87-1.3s-1-1.3-1.87-1.3h-0.26v2.59h0.26Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1666.22,1382.5h-3.41v2h3.26v2h-3.26v2h3.41v2h-5.66v-9.89h5.66v2Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"\n            />\n            <path d=\"M1673.66,1380.52a4.95,4.95,0,1,1,0,9.89h-2.87v-9.89h2.87Zm-0.26,7.88a2.93,2.93,0,0,0,0-5.86H1673v5.86h0.35Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M1683.18,1380.52c1.83,0,3.23,1,3.23,2.94a2.83,2.83,0,0,1-2,2.87l3.41,4.09h-2.87l-3-3.91v3.91h-2.25v-9.89h3.54Zm-1,4.39c0.85,0,1.87-.06,1.87-1.3s-1-1.3-1.87-1.3h-0.26v2.59h0.26Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1695.84,1386.9c0,2.45-1.34,3.69-3.86,3.69s-3.86-1.25-3.86-3.69v-6.38h2.25v5.72c0,1.66.5,2.13,1.61,2.13s1.61-.48,1.61-2.13v-5.72h2.25v6.38Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1704.88,1384.55h-0.06l-2,5.8h-1.34l-2-5.8h-0.06l-0.47,5.86h-2.25l0.89-9.89h2.4l2.2,5.71,2.19-5.71h2.4l0.89,9.89h-2.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'lowtom'\"   (value)=\"instrumentSet($event)\"  id=\"lowtom\">\n          <rect id=\"background-21\" data-name=\"background\" x=\"1719.33\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-19\" data-name=\"indicator\" cx=\"1734.25\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M1798.41,1388.44h3.41v2h-5.66v-9.89h2.25v7.92Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1807.48,1380.34a5.13,5.13,0,0,1,0,10.25,4.92,4.92,0,0,1-5-5.13A5,5,0,0,1,1807.48,1380.34Zm0,8.07c1.8,0,2.54-1.48,2.54-3s-0.79-3-2.54-3-2.55,1.48-2.55,3S1805.63,1388.41,1807.48,1388.41Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1819.08,1384.86l-1.58,5.55H1815l-2.82-9.89h2.51l1.69,6.79h0.06l1.8-6.79h1.7l1.8,6.79h0.06l1.69-6.79h2.5l-2.82,9.89h-2.5Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1828.6,1380.52h7v2h-2.35v7.92H1831v-7.92h-2.35v-2Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1840.54,1380.34a5.13,5.13,0,0,1,0,10.25,4.92,4.92,0,0,1-5-5.13A5,5,0,0,1,1840.54,1380.34Zm0,8.07c1.8,0,2.54-1.48,2.54-3s-0.79-3-2.54-3-2.55,1.48-2.55,3S1838.69,1388.41,1840.54,1388.41Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1854.23,1384.55h-0.06l-2,5.8h-1.34l-2-5.8h-0.06l-0.47,5.86H1846l0.89-9.89h2.4l2.2,5.71,2.19-5.71h2.4l0.89,9.89h-2.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'midtom'\"   (value)=\"instrumentSet($event)\"  id=\"midtom\">\n          <rect id=\"background-22\" data-name=\"background\" x=\"1884.13\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-20\" data-name=\"indicator\" cx=\"1899.04\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M1973.66,1384.55h-0.06l-2,5.8h-1.34l-2-5.8h-0.06l-0.47,5.86h-2.25l0.89-9.89h2.4l2.2,5.71,2.19-5.71h2.4l0.89,9.89h-2.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1979.55,1390.42h-2.25v-9.89h2.25v9.89Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M1983.86,1380.52a4.95,4.95,0,1,1,0,9.89H1981v-9.89h2.87Zm-0.26,7.88a2.93,2.93,0,0,0,0-5.86h-0.35v5.86h0.35Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M1991.93,1380.52h7v2h-2.35v7.92h-2.25v-7.92h-2.35v-2Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2003.86,1380.34a5.13,5.13,0,0,1,0,10.25,4.92,4.92,0,0,1-5-5.13A5,5,0,0,1,2003.86,1380.34Zm0,8.07c1.8,0,2.54-1.48,2.54-3s-0.79-3-2.54-3-2.55,1.48-2.55,3S2002,1388.41,2003.86,1388.41Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2017.56,1384.55h-0.06l-2,5.8h-1.34l-2-5.8H2012l-0.47,5.86h-2.25l0.89-9.89h2.4l2.19,5.71,2.2-5.71h2.4l0.89,9.89H2018Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'hitom'\"    (value)=\"instrumentSet($event)\"  id=\"hitom\">\n          <rect id=\"background-23\" data-name=\"background\" x=\"2048.92\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-21\" data-name=\"indicator\" cx=\"2063.84\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M2139,1390.42h-2.25v-9.89H2139v3.95h3.19v-3.95h2.25v9.89h-2.25v-4H2139v4Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2148.14,1390.42h-2.25v-9.89h2.25v9.89Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2151.66,1380.52h7v2h-2.35v7.92H2154v-7.92h-2.35v-2Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2163.6,1380.34a5.13,5.13,0,0,1,0,10.25,4.92,4.92,0,0,1-5-5.13A5,5,0,0,1,2163.6,1380.34Zm0,8.07c1.8,0,2.54-1.48,2.54-3s-0.79-3-2.54-3-2.55,1.48-2.55,3S2161.75,1388.41,2163.6,1388.41Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2177.29,1384.55h-0.06l-2,5.8h-1.34l-2-5.8h-0.06l-0.47,5.86H2169l0.89-9.89h2.4l2.2,5.71,2.2-5.71h2.4l0.89,9.89h-2.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'rimshot'\"   (value)=\"instrumentSet($event)\"  id=\"rimshot\">\n          <rect id=\"background-24\" data-name=\"background\" x=\"2213.72\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-22\" data-name=\"indicator\" cx=\"2228.64\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M2298.08,1380.52c1.83,0,3.23,1,3.23,2.94a2.83,2.83,0,0,1-2,2.87l3.41,4.09h-2.87l-3-3.91v3.91h-2.25v-9.89h3.54Zm-1,4.39c0.85,0,1.87-.06,1.87-1.3s-1-1.3-1.87-1.3h-0.26v2.59h0.26Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2305.38,1390.42h-2.25v-9.89h2.25v9.89Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2314.54,1384.55h-0.06l-2,5.8h-1.34l-2-5.8H2309l-0.47,5.86h-2.25l0.89-9.89h2.4l2.19,5.71,2.2-5.71h2.4l0.89,9.89H2315Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2324.65,1381.28l-0.91,1.8a4.08,4.08,0,0,0-2-.68,1,1,0,0,0-1.18.89c0,0.55.94,0.95,2.06,1.43s2.31,1.4,2.31,2.7c0,2.36-1.8,3.19-3.73,3.19a5.78,5.78,0,0,1-3.72-1.31l1.13-1.9a4.83,4.83,0,0,0,2.42,1.12,1.15,1.15,0,0,0,1.43-1c0-.72-1.06-1-2.23-1.63a3,3,0,0,1-1.88-2.54,3.13,3.13,0,0,1,3.23-3A5.63,5.63,0,0,1,2324.65,1381.28Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2328.26,1390.42H2326v-9.89h2.25v3.95h3.19v-3.95h2.25v9.89h-2.25v-4h-3.19v4Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2339.69,1380.34a5.13,5.13,0,0,1,0,10.25,4.92,4.92,0,0,1-5-5.13A5,5,0,0,1,2339.69,1380.34Zm0,8.07c1.8,0,2.54-1.48,2.54-3s-0.79-3-2.54-3-2.55,1.48-2.55,3S2337.84,1388.41,2339.69,1388.41Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2344.66,1380.52h7v2h-2.35v7.92H2347v-7.92h-2.35v-2Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'clap'\"    (value)=\"instrumentSet($event)\" id=\"clap\">\n          <rect id=\"background-25\" data-name=\"background\" x=\"2378.51\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-23\" data-name=\"indicator\" cx=\"2393.43\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M2474.54,1387.77l1,1.92a5.14,5.14,0,1,1,0-8.43l-1,1.92a3.44,3.44,0,0,0-1.94-.61,2.93,2.93,0,1,0,0,5.82A3.44,3.44,0,0,0,2474.54,1387.77Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2478.62,1388.44H2482v2h-5.66v-9.89h2.25v7.92Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2492.35,1390.42h-2.42l-0.73-2h-3.77l-0.73,2h-2.42l4-9.89h2.09Zm-5-6.84h0l-1.1,2.88h2.23Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2496.35,1380.52c1.93,0,3.38,1,3.38,3a3.08,3.08,0,0,1-3.38,3.18H2495v3.67h-2.25v-9.89h3.61Zm-0.72,4.43c0.89,0,1.73-.3,1.73-1.31s-0.84-1.32-1.73-1.32H2495v2.63h0.64Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'hihat'\"   (value)=\"instrumentSet($event)\"  id=\"hihat\">\n          <rect id=\"background-26\" data-name=\"background\" x=\"2543.31\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-24\" data-name=\"indicator\" cx=\"2558.23\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M2631.38,1390.42h-2.25v-9.89h2.25v3.95h3.19v-3.95h2.25v9.89h-2.25v-4h-3.19v4Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2640.53,1390.42h-2.25v-9.89h2.25v9.89Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2647.5,1390.42h-2.25v-9.89h2.25v3.95h3.19v-3.95h2.25v9.89h-2.25v-4h-3.19v4Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2663.41,1390.42H2661l-0.73-2h-3.77l-0.73,2h-2.42l4-9.89h2.09Zm-5-6.84h0l-1.1,2.88h2.23Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2662.6,1380.52h7v2h-2.35v7.92h-2.25v-7.92h-2.35v-2Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n        <g my-instrument-button-pusher [current]=\"currentType\" [type]=\"'cymbal'\"   (value)=\"instrumentSet($event)\"   id=\"cymbal\">\n          <rect id=\"background-27\" data-name=\"background\" x=\"2708.1\" y=\"1338.81\" width=\"146.42\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"\n          />\n          <circle id=\"indicator-25\" data-name=\"indicator\" cx=\"2723.02\" cy=\"1350.87\" r=\"7.31\" fill=\"#003b05\" />\n          <g>\n            <path d=\"M2797.13,1387.77l1,1.92a5.14,5.14,0,1,1,0-8.43l-1,1.92a3.43,3.43,0,0,0-1.94-.61,2.93,2.93,0,1,0,0,5.82A3.43,3.43,0,0,0,2797.13,1387.77Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2800.59,1380.52l2.06,3.17,2.06-3.17h2.71l-3.65,5.46v4.44h-2.26V1386l-3.65-5.46h2.71Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2815.5,1384.55h-0.06l-2,5.8h-1.34l-2-5.8H2810l-0.47,5.86h-2.25l0.89-9.89h2.4l2.2,5.71,2.2-5.71h2.4l0.89,9.89H2816Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2822.21,1380.52c1.7,0,3,.64,3,2.52a2.49,2.49,0,0,0,.88,4.62c0,1.63-1.19,2.76-3.24,2.76h-3.75v-9.89h3.07Zm-0.63,3.87c1,0,1.5-.3,1.5-1.13s-0.52-1-1.5-1h-0.18v2.14h0.18Zm0.53,4.28c1.07,0,1.65-.32,1.65-1.1s-0.59-1.24-1.65-1.24h-0.71v2.34h0.71Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n            <path d=\"M2835.91,1390.42h-2.42l-0.73-2H2829l-0.73,2h-2.42l4-9.89h2.09Zm-5-6.84h0l-1.1,2.88H2832Z\" transform=\"translate(-29.98 -34.49)\"\n              fill=\"#231f20\" />\n            <path d=\"M2838.56,1388.44H2842v2h-5.66v-9.89h2.26v7.92Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\" />\n          </g>\n        </g>\n      </g>\n      \n      <g id=\"kick_knobs\">\n        <g id=\"kick_level\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'kick', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['kick']['level']\" >\n            <circle cx=\"1462.35\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M1492.94,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1492.94,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H1495a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1492.94,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"1462.35\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7\" x=\"1524.8\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-259.19 1324.14) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6\" x=\"1538.25\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(585.35 2427.9) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5\" x=\"1524.8\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1943.99 2565.26) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4\" x=\"1492.33\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2955.89 1720.71) rotate(180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3\" x=\"1459.86\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3093.26 453.93) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2\" x=\"1446.41\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2340.56 -557.98) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1\" x=\"1459.86\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1073.77 -787.19) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'kick', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['kick']['attack']\" >\n              <circle cx=\"1462.95\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1492.94,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1492.94,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H1495a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1492.94,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1462.35\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-2\" data-name=\"min7\" x=\"1524.8\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-349.85 1361.69) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-2\" data-name=\"min6\" x=\"1538.25\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(457.14 2556.1) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-2\" data-name=\"min5\" x=\"1524.8\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1853.32 2784.12) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-2\" data-name=\"min4\" x=\"1492.33\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2955.89 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-2\" data-name=\"min3\" x=\"1459.85\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3183.91 672.8) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-2\" data-name=\"min2\" x=\"1446.4\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2468.76 -429.77) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-2\" data-name=\"min1\" x=\"1459.85\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1164.43 -749.64) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'kick', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['kick']['decay']\" >\n              <circle cx=\"1462.95\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1492.94,1145.78a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1492.94,1145.78Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41H1495a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1492.94,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1462.35\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-3\" data-name=\"min7\" x=\"1524.8\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-440.51 1399.25) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-3\" data-name=\"min6\" x=\"1538.25\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(328.94 2684.31) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-3\" data-name=\"min5\" x=\"1524.8\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1762.67 3002.99) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-3\" data-name=\"min4\" x=\"1492.33\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2955.89 2233.55) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-3\" data-name=\"min3\" x=\"1459.86\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3274.57 891.66) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-3\" data-name=\"min2\" x=\"1446.41\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2596.98 -301.56) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-3\" data-name=\"min1\" x=\"1459.86\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1255.09 -712.09) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'kick', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['kick']['distortion']\" >\n              <circle cx=\"1463.03\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1492.94,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1492.94,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H1495a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1492.94,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1462.35\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-4\" data-name=\"min7\" x=\"1524.8\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-531.17 1436.79) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-4\" data-name=\"min6\" x=\"1538.25\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(200.72 2812.52) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-4\" data-name=\"min5\" x=\"1524.8\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1672.01 3221.85) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-4\" data-name=\"min4\" x=\"1492.33\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2955.89 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-4\" data-name=\"min3\" x=\"1459.85\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3365.22 1110.53) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-4\" data-name=\"min2\" x=\"1446.4\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2725.18 -173.35) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-4\" data-name=\"min1\" x=\"1459.85\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1345.74 -674.53) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"snare_knobs\">\n        <g id=\"kick_level_copy\" data-name=\"kick_level copy\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'snare', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['snare']['level']\" >\n            <circle cx=\"1625.54\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M1656.13,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1656.13,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1656.13,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"1625.54\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-5\" data-name=\"min7\" x=\"1687.99\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-211.4 1439.54) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-5\" data-name=\"min6\" x=\"1701.44\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(748.55 2591.09) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-5\" data-name=\"min5\" x=\"1687.99\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2222.57 2680.65) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-5\" data-name=\"min4\" x=\"1655.52\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3282.28 1720.71) rotate(180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-5\" data-name=\"min3\" x=\"1623.05\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3371.84 338.53) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-5\" data-name=\"min2\" x=\"1609.6\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2503.75 -721.17) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-5\" data-name=\"min1\" x=\"1623.05\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1121.57 -902.58) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n        </g>\n        <g id=\"kick_decay_copy\" data-name=\"kick_decay copy\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'snare', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['snare']['attack']\" >\n              <circle cx=\"1626.14\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1656.13,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1656.13,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1656.13,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1625.54\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-6\" data-name=\"min7\" x=\"1687.99\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-302.05 1477.08) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-6\" data-name=\"min6\" x=\"1701.44\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(620.33 2719.29) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-6\" data-name=\"min5\" x=\"1687.99\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2131.91 2899.52) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-6\" data-name=\"min4\" x=\"1655.52\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3282.27 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-6\" data-name=\"min3\" x=\"1623.04\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3462.49 557.4) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-6\" data-name=\"min2\" x=\"1609.59\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2631.95 -592.96) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-6\" data-name=\"min1\" x=\"1623.04\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1212.23 -865.03) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy\" data-name=\"kick_attack copy\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'snare', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['snare']['decay']\" >\n              <circle cx=\"1626.14\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1656.13,1145.78a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1656.13,1145.78Zm0,65A30.73,30.73,0,0,1,1625.4,1180c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1656.13,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1625.54\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-7\" data-name=\"min7\" x=\"1687.99\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-392.71 1514.64) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-7\" data-name=\"min6\" x=\"1701.44\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(492.13 2847.5) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-7\" data-name=\"min5\" x=\"1687.99\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2041.26 3118.38) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-7\" data-name=\"min4\" x=\"1655.52\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3282.28 2233.55) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-7\" data-name=\"min3\" x=\"1623.05\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3553.16 776.27) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-7\" data-name=\"min2\" x=\"1609.6\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2760.17 -464.75) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-7\" data-name=\"min1\" x=\"1623.05\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1302.88 -827.48) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy\" data-name=\"kick_distortion copy\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'snare', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['snare']['distortion']\" >\n              <circle cx=\"1626.22\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1656.13,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1656.13,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1656.13,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1625.54\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-8\" data-name=\"min7\" x=\"1687.99\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-483.37 1552.19) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-8\" data-name=\"min6\" x=\"1701.44\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(363.92 2975.71) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-8\" data-name=\"min5\" x=\"1687.99\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1950.59 3337.25) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-8\" data-name=\"min4\" x=\"1655.52\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3282.27 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-8\" data-name=\"min3\" x=\"1623.04\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3643.81 995.13) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-8\" data-name=\"min2\" x=\"1609.59\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2888.37 -336.54) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-8\" data-name=\"min1\" x=\"1623.04\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1393.54 -789.93) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"lowtom_knobs\">\n        <g id=\"kick_level_copy_2\" data-name=\"kick_level copy 2\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'lowtom', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['lowtom']['level']\" >\n            <circle cx=\"1791.94\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M1822.53,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1822.53,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1822.53,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"1791.94\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-9\" data-name=\"min7\" x=\"1854.39\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-162.66 1557.2) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-9\" data-name=\"min6\" x=\"1867.84\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(914.94 2757.49) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-9\" data-name=\"min5\" x=\"1854.39\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2506.63 2798.31) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-9\" data-name=\"min4\" x=\"1821.92\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3615.07 1720.71) rotate(180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-9\" data-name=\"min3\" x=\"1789.44\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3655.9 220.87) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-9\" data-name=\"min2\" x=\"1775.99\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2670.15 -887.57) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-9\" data-name=\"min1\" x=\"1789.45\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1170.31 -1020.25) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay_copy_2\" data-name=\"kick_decay copy 2\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'lowtom', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['lowtom']['attack']\">\n              <circle cx=\"1792.54\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1822.53,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1822.53,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1822.53,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1791.94\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-10\" data-name=\"min7\" x=\"1854.39\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-253.32 1594.74) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-10\" data-name=\"min6\" x=\"1867.84\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(786.73 2885.69) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-10\" data-name=\"min5\" x=\"1854.39\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2415.97 3017.18) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-10\" data-name=\"min4\" x=\"1821.91\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3615.06 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-10\" data-name=\"min3\" x=\"1789.44\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3746.55 439.74) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-10\" data-name=\"min2\" x=\"1775.99\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2798.35 -759.36) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-10\" data-name=\"min1\" x=\"1789.44\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1260.96 -982.69) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy_2\" data-name=\"kick_attack copy 2\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'lowtom', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['lowtom']['decay']\">\n              <circle cx=\"1792.54\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1822.53,1145.78a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1822.53,1145.78Zm0,65A30.73,30.73,0,0,1,1791.8,1180c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1822.53,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1791.94\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-11\" data-name=\"min7\" x=\"1854.39\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-343.97 1632.3) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-11\" data-name=\"min6\" x=\"1867.84\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(658.53 3013.9) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-11\" data-name=\"min5\" x=\"1854.39\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2325.32 3236.05) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-11\" data-name=\"min4\" x=\"1821.92\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3615.07 2233.55) rotate(180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-11\" data-name=\"min3\" x=\"1789.44\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3837.21 658.6) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-11\" data-name=\"min2\" x=\"1775.99\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2926.56 -631.15) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-11\" data-name=\"min1\" x=\"1789.45\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1351.62 -945.14) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy_2\" data-name=\"kick_distortion copy 2\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'lowtom', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['lowtom']['distortion']\">\n              <circle cx=\"1792.61\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1822.53,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1822.53,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1822.53,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1791.94\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-12\" data-name=\"min7\" x=\"1854.39\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-434.63 1669.85) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-12\" data-name=\"min6\" x=\"1867.84\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(530.31 3142.11) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-12\" data-name=\"min5\" x=\"1854.39\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2234.66 3454.91) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-12\" data-name=\"min4\" x=\"1821.91\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3615.06 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-12\" data-name=\"min3\" x=\"1789.44\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3927.87 877.48) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-12\" data-name=\"min2\" x=\"1775.99\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3054.77 -502.94) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-12\" data-name=\"min1\" x=\"1789.44\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1442.27 -907.59) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"midtom_knobs\">\n        <g id=\"kick_level_copy_3\" data-name=\"kick_level copy 3\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'midtom', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['midtom']['level']\">\n            <circle cx=\"1953.37\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M1984,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1984,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H1986a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1984,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"1953.37\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-13\" data-name=\"min7\" x=\"2015.82\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-115.38 1671.35) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-13\" data-name=\"min6\" x=\"2029.27\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1076.37 2918.92) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-13\" data-name=\"min5\" x=\"2015.82\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2782.21 2912.46) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-13\" data-name=\"min4\" x=\"1983.35\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3937.93 1720.71) rotate(180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-13\" data-name=\"min3\" x=\"1950.88\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3931.48 106.72) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-13\" data-name=\"min2\" x=\"1937.43\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2831.58 -1049) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-13\" data-name=\"min1\" x=\"1950.88\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1217.59 -1134.39) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay_copy_3\" data-name=\"kick_decay copy 3\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'midtom', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['midtom']['attack']\">\n              <circle cx=\"1953.97\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1984,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1984,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H1986a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1984,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1953.37\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-14\" data-name=\"min7\" x=\"2015.82\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-206.04 1708.89) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-14\" data-name=\"min6\" x=\"2029.27\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(948.16 3047.12) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-14\" data-name=\"min5\" x=\"2015.82\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2691.55 3131.33) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-14\" data-name=\"min4\" x=\"1983.35\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3937.93 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-14\" data-name=\"min3\" x=\"1950.87\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4022.13 325.59) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-14\" data-name=\"min2\" x=\"1937.42\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2959.78 -920.79) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-14\" data-name=\"min1\" x=\"1950.87\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1308.24 -1096.84) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy_3\" data-name=\"kick_attack copy 3\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'midtom', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['midtom']['decay']\">\n              <circle cx=\"1953.97\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1984,1145.78A34.25,34.25,0,1,0,2018.2,1180,34.25,34.25,0,0,0,1984,1145.78Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41H1986a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1984,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1953.37\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-15\" data-name=\"min7\" x=\"2015.82\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-296.69 1746.45) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-15\" data-name=\"min6\" x=\"2029.27\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(819.96 3175.33) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-15\" data-name=\"min5\" x=\"2015.82\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2600.9 3350.2) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-15\" data-name=\"min4\" x=\"1983.35\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3937.93 2233.55) rotate(180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-15\" data-name=\"min3\" x=\"1950.88\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4112.79 544.45) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-15\" data-name=\"min2\" x=\"1937.43\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3088 -792.58) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-15\" data-name=\"min1\" x=\"1950.88\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1398.9 -1059.29) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy_3\" data-name=\"kick_distortion copy 3\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'midtom', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['midtom']['distortion']\">\n              <circle cx=\"1954.05\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M1984,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,1984,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H1986a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,1984,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"1953.37\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-16\" data-name=\"min7\" x=\"2015.82\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-387.35 1784) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-16\" data-name=\"min6\" x=\"2029.27\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(691.74 3303.54) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-16\" data-name=\"min5\" x=\"2015.82\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2510.24 3569.06) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-16\" data-name=\"min4\" x=\"1983.35\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3937.93 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-16\" data-name=\"min3\" x=\"1950.87\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4203.45 763.33) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-16\" data-name=\"min2\" x=\"1937.42\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3216.2 -664.37) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-16\" data-name=\"min1\" x=\"1950.87\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1489.56 -1021.74) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"hitom_knobs\">\n        <g id=\"kick_level_copy_4\" data-name=\"kick_level copy 4\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hitom', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['hitom']['level']\">\n            <circle cx=\"2121.53\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M2152.12,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2152.12,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2152.12,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"2121.53\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-17\" data-name=\"min7\" x=\"2183.98\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-66.12 1790.25) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-17\" data-name=\"min6\" x=\"2197.43\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1244.53 3087.08) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-17\" data-name=\"min5\" x=\"2183.98\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3069.28 3031.37) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-17\" data-name=\"min4\" x=\"2151.51\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4274.25 1720.71) rotate(-180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-17\" data-name=\"min3\" x=\"2119.04\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4218.55 -12.19) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-17\" data-name=\"min2\" x=\"2105.58\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2999.74 -1217.16) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-17\" data-name=\"min1\" x=\"2119.04\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1266.84 -1253.3) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay_copy_4\" data-name=\"kick_decay copy 4\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hitom', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['hitom']['attack']\">\n              <circle cx=\"2122.13\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2152.12,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2152.12,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2152.12,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2121.53\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-18\" data-name=\"min7\" x=\"2183.98\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-156.78 1827.8) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-18\" data-name=\"min6\" x=\"2197.43\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1116.32 3215.28) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-18\" data-name=\"min5\" x=\"2183.98\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2978.62 3250.23) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-18\" data-name=\"min4\" x=\"2151.5\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4274.24 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-18\" data-name=\"min3\" x=\"2119.03\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4309.2 206.69) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-18\" data-name=\"min2\" x=\"2105.58\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3127.94 -1088.95) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-18\" data-name=\"min1\" x=\"2119.03\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1357.49 -1215.75) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy_4\" data-name=\"kick_attack copy 4\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hitom', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['hitom']['decay']\">\n              <circle cx=\"2122.13\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2152.12,1145.78a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2152.12,1145.78Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2152.12,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2121.53\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-19\" data-name=\"min7\" x=\"2183.98\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-247.44 1865.36) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-19\" data-name=\"min6\" x=\"2197.43\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(988.12 3343.49) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-19\" data-name=\"min5\" x=\"2183.98\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2887.96 3469.1) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-19\" data-name=\"min4\" x=\"2151.51\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4274.25 2233.55) rotate(180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-19\" data-name=\"min3\" x=\"2119.04\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4399.86 425.55) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-19\" data-name=\"min2\" x=\"2105.58\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3256.15 -960.74) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-19\" data-name=\"min1\" x=\"2119.04\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1448.16 -1178.2) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy_4\" data-name=\"kick_distortion copy 4\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hitom', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['hitom']['distortion']\">\n              <circle cx=\"2122.21\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2152.12,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2152.12,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2152.12,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2121.53\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-20\" data-name=\"min7\" x=\"2183.98\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-338.1 1902.9) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-20\" data-name=\"min6\" x=\"2197.43\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(859.9 3471.7) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-20\" data-name=\"min5\" x=\"2183.98\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2797.3 3687.96) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-20\" data-name=\"min4\" x=\"2151.5\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4274.24 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-20\" data-name=\"min3\" x=\"2119.03\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4490.51 644.42) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-20\" data-name=\"min2\" x=\"2105.58\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3384.36 -832.53) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-20\" data-name=\"min1\" x=\"2119.03\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1538.81 -1140.64) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"rimshot_knobs\">\n        <g id=\"kick_level_copy_5\" data-name=\"kick_level copy 5\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'rimshot', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['rimshot']['level']\">\n            <circle cx=\"2286.32\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M2316.92,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2316.92,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H2319a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2316.92,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"2286.32\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-21\" data-name=\"min7\" x=\"2348.78\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-17.86 1906.78) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-21\" data-name=\"min6\" x=\"2362.23\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1409.33 3251.87) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-21\" data-name=\"min5\" x=\"2348.78\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3350.6 3147.9) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-21\" data-name=\"min4\" x=\"2316.3\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4603.84 1720.71) rotate(-180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-21\" data-name=\"min3\" x=\"2283.83\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4499.87 -128.71) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-21\" data-name=\"min2\" x=\"2270.38\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3164.53 -1381.95) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-21\" data-name=\"min1\" x=\"2283.83\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1315.11 -1369.83) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay_copy_5\" data-name=\"kick_decay copy 5\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'rimshot', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['rimshot']['attack']\">\n              <circle cx=\"2286.93\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2316.92,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2316.92,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H2319a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2316.92,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2286.32\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-22\" data-name=\"min7\" x=\"2348.77\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-108.52 1944.33) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-22\" data-name=\"min6\" x=\"2362.22\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1281.12 3380.08) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-22\" data-name=\"min5\" x=\"2348.77\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3259.94 3366.76) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-22\" data-name=\"min4\" x=\"2316.3\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4603.84 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-22\" data-name=\"min3\" x=\"2283.83\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4590.52 90.16) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-22\" data-name=\"min2\" x=\"2270.38\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3292.74 -1253.74) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-22\" data-name=\"min1\" x=\"2283.83\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1405.76 -1332.27) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy_5\" data-name=\"kick_attack copy 5\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'rimshot', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['rimshot']['decay']\">\n              <circle cx=\"2286.93\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2316.92,1145.78a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2316.92,1145.78Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41H2319a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2316.92,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2286.32\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-23\" data-name=\"min7\" x=\"2348.78\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-199.17 1981.88) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-23\" data-name=\"min6\" x=\"2362.23\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1152.91 3508.29) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-23\" data-name=\"min5\" x=\"2348.78\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3169.28 3585.63) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-23\" data-name=\"min4\" x=\"2316.3\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4603.84 2233.55) rotate(180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-23\" data-name=\"min3\" x=\"2283.83\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4681.18 309.02) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-23\" data-name=\"min2\" x=\"2270.38\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3420.95 -1125.54) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-23\" data-name=\"min1\" x=\"2283.83\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1496.43 -1294.73) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy_5\" data-name=\"kick_distortion copy 5\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'rimshot', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['rimshot']['distortion']\">\n              <circle cx=\"2287\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2316.92,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2316.92,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41H2319a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2316.92,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2286.32\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-24\" data-name=\"min7\" x=\"2348.77\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-289.83 2019.43) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-24\" data-name=\"min6\" x=\"2362.22\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1024.7 3636.49) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-24\" data-name=\"min5\" x=\"2348.77\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3078.63 3804.49) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-24\" data-name=\"min4\" x=\"2316.3\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4603.84 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-24\" data-name=\"min3\" x=\"2283.83\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4771.84 527.89) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-24\" data-name=\"min2\" x=\"2270.38\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3549.15 -997.32) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-24\" data-name=\"min1\" x=\"2283.83\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1587.08 -1257.17) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"clap_knobs\">\n        <g id=\"kick_level_copy_6\" data-name=\"kick_level copy 6\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'clap', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['clap']['level']\">\n            <circle cx=\"2451.12\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M2481.71,889.28A34.25,34.25,0,1,0,2516,923.52,34.25,34.25,0,0,0,2481.71,889.28Zm0,65A30.73,30.73,0,0,1,2451,923.52c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2481.71,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"2451.12\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-25\" data-name=\"min7\" x=\"2513.57\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(30.41 2023.31) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-25\" data-name=\"min6\" x=\"2527.02\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1574.12 3416.67) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-25\" data-name=\"min5\" x=\"2513.57\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3631.92 3264.43) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-25\" data-name=\"min4\" x=\"2481.1\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4933.43 1720.71) rotate(180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-25\" data-name=\"min3\" x=\"2448.63\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4781.19 -245.24) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-25\" data-name=\"min2\" x=\"2435.18\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3329.33 -1546.75) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-25\" data-name=\"min1\" x=\"2448.63\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1363.38 -1486.36) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay_copy_6\" data-name=\"kick_decay copy 6\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'clap', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['clap']['attack']\">\n              <circle cx=\"2451.72\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2481.71,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2481.71,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2481.71,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2451.12\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-26\" data-name=\"min7\" x=\"2513.57\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-60.25 2060.85) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-26\" data-name=\"min6\" x=\"2527.02\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1445.91 3544.87) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-26\" data-name=\"min5\" x=\"2513.57\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3541.26 3483.29) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-26\" data-name=\"min4\" x=\"2481.1\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4933.43 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-26\" data-name=\"min3\" x=\"2448.62\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4871.84 -26.37) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-26\" data-name=\"min2\" x=\"2435.17\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3457.53 -1418.54) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-26\" data-name=\"min1\" x=\"2448.62\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1454.03 -1448.8) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy_6\" data-name=\"kick_attack copy 6\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'clap', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['clap']['decay']\">\n              <circle cx=\"2451.72\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2481.71,1145.78A34.25,34.25,0,1,0,2516,1180,34.25,34.25,0,0,0,2481.71,1145.78Zm0,65A30.73,30.73,0,0,1,2451,1180c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2481.71,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2451.12\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-27\" data-name=\"min7\" x=\"2513.57\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-150.9 2098.41) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-27\" data-name=\"min6\" x=\"2527.02\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1317.71 3673.08) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-27\" data-name=\"min5\" x=\"2513.57\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3450.61 3702.16) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-27\" data-name=\"min4\" x=\"2481.1\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4933.43 2233.55) rotate(180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-27\" data-name=\"min3\" x=\"2448.63\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4962.51 192.49) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-27\" data-name=\"min2\" x=\"2435.18\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3585.75 -1290.33) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-27\" data-name=\"min1\" x=\"2448.63\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1544.69 -1411.25) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy_6\" data-name=\"kick_distortion copy 6\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'clap', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['clap']['distortion']\">\n              <circle cx=\"2451.8\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2481.71,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2481.71,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2481.71,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2451.12\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-28\" data-name=\"min7\" x=\"2513.57\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-241.56 2135.96) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-28\" data-name=\"min6\" x=\"2527.02\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1189.49 3801.29) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-28\" data-name=\"min5\" x=\"2513.57\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3359.95 3921.02) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-28\" data-name=\"min4\" x=\"2481.1\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4933.43 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-28\" data-name=\"min3\" x=\"2448.62\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5053.16 411.36) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-28\" data-name=\"min2\" x=\"2435.17\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3713.95 -1162.12) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-28\" data-name=\"min1\" x=\"2448.62\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1635.34 -1373.7) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"hihat_knobs\">\n        <g id=\"kick_level_copy_7\" data-name=\"kick_level copy 7\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hihat', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['hihat']['level']\">\n            <circle cx=\"2615.91\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M2646.51,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2646.51,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2646.51,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"2615.91\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-29\" data-name=\"min7\" x=\"2678.37\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(78.68 2139.84) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-29\" data-name=\"min6\" x=\"2691.82\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1738.92 3581.46) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-29\" data-name=\"min5\" x=\"2678.37\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3913.25 3380.95) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-29\" data-name=\"min4\" x=\"2645.89\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5263.02 1720.71) rotate(180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-29\" data-name=\"min3\" x=\"2613.42\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5062.52 -361.77) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-29\" data-name=\"min2\" x=\"2599.97\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3494.12 -1711.54) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-29\" data-name=\"min1\" x=\"2613.42\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1411.65 -1602.89) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay_copy_7\" data-name=\"kick_decay copy 7\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hihat', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['hihat']['attack']\">\n              <circle cx=\"2616.52\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2646.51,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2646.51,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2646.51,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2615.91\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-30\" data-name=\"min7\" x=\"2678.36\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-11.98 2177.38) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-30\" data-name=\"min6\" x=\"2691.81\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1610.71 3709.67) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-30\" data-name=\"min5\" x=\"2678.36\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3822.59 3599.82) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-30\" data-name=\"min4\" x=\"2645.89\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5263.02 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-30\" data-name=\"min3\" x=\"2613.42\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5153.17 -142.89) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-30\" data-name=\"min2\" x=\"2599.97\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3622.33 -1583.33) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-30\" data-name=\"min1\" x=\"2613.42\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1502.3 -1565.33) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy_7\" data-name=\"kick_attack copy 7\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hihat', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['hihat']['decay']\">\n              <circle cx=\"2616.52\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2646.51,1145.78a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2646.51,1145.78Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2646.51,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2615.91\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-31\" data-name=\"min7\" x=\"2678.37\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-102.64 2214.94) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-31\" data-name=\"min6\" x=\"2691.82\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1482.5 3837.88) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-31\" data-name=\"min5\" x=\"2678.37\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3731.93 3818.69) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-31\" data-name=\"min4\" x=\"2645.89\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5263.02 2233.55) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-31\" data-name=\"min3\" x=\"2613.42\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5243.83 75.96) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-31\" data-name=\"min2\" x=\"2599.97\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"matrix(0, 1, -1, 0, 3750.54, -1455.13)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-31\" data-name=\"min1\" x=\"2613.42\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1592.96 -1527.78) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy_7\" data-name=\"kick_distortion copy 7\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'hihat', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['hihat']['distortion']\">\n              <circle cx=\"2616.59\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2646.51,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2646.51,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2646.51,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2615.91\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-32\" data-name=\"min7\" x=\"2678.36\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-193.3 2252.49) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-32\" data-name=\"min6\" x=\"2691.81\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1354.29 3966.08) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-32\" data-name=\"min5\" x=\"2678.36\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3641.27 4037.55) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-32\" data-name=\"min4\" x=\"2645.89\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5263.02 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-32\" data-name=\"min3\" x=\"2613.42\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5334.48 294.84) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-32\" data-name=\"min2\" x=\"2599.97\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3878.75 -1326.91) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-32\" data-name=\"min1\" x=\"2613.42\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1683.61 -1490.23) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g id=\"cymbal_knobs\">\n        <g id=\"kick_level_copy_8\" data-name=\"kick_level copy 8\">\n          <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'cymbal', 'level')\" [starting]=\"sequencerLineUp['instrumentSettings']['cymbal']['level']\">\n            <circle cx=\"2780.71\" cy=\"889.64\" r=\"33.08\" fill=\"#e7745a\" />\n            <path d=\"M2811.3,889.28a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2811.3,889.28Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41V892.83c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2811.3,954.25Z\"\n              transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n            <rect x=\"2780.71\" y=\"859.1\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n          </g>\n          <g>\n            <rect id=\"min7-33\" data-name=\"min7\" x=\"2843.16\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(126.95 2256.36) rotate(-45)\"\n              fill=\"#fff\" />\n            <rect id=\"min6-33\" data-name=\"min6\" x=\"2856.61\" y=\"918.08\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1903.71 3746.26) rotate(-90)\"\n              fill=\"#fff\" />\n            <rect id=\"min5-33\" data-name=\"min5\" x=\"2843.16\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4194.57 3497.48) rotate(-135)\"\n              fill=\"#fff\" />\n            <rect id=\"min4-33\" data-name=\"min4\" x=\"2810.69\" y=\"872.16\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5592.62 1720.71) rotate(180)\"\n              fill=\"#fff\" />\n            <rect id=\"min3-33\" data-name=\"min3\" x=\"2778.22\" y=\"885.61\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5343.84 -478.3) rotate(135)\"\n              fill=\"#fff\" />\n            <rect id=\"min2-33\" data-name=\"min2\" x=\"2764.77\" y=\"918.09\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3658.92 -1876.34) rotate(90)\"\n              fill=\"#fff\" />\n            <rect id=\"min1-33\" data-name=\"min1\" x=\"2778.22\" y=\"950.56\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1459.91 -1719.41) rotate(45)\"\n              fill=\"#fff\" />\n          </g>\n      \n        </g>\n        <g id=\"kick_decay_copy_8\" data-name=\"kick_decay copy 8\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'cymbal', 'attack')\" [starting]=\"sequencerLineUp['instrumentSettings']['cymbal']['attack']\">\n              <circle cx=\"2781.31\" cy=\"1017.14\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2811.3,1017.37a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2811.3,1017.37Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2811.3,1082.34Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2780.71\" y=\"987.19\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-34\" data-name=\"min7\" x=\"2843.16\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(36.29 2293.91) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-34\" data-name=\"min6\" x=\"2856.61\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1775.5 3874.46) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-34\" data-name=\"min5\" x=\"2843.16\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4103.91 3716.34) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-34\" data-name=\"min4\" x=\"2810.69\" y=\"1000.37\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5592.61 1977.13) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-34\" data-name=\"min3\" x=\"2778.21\" y=\"1013.82\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5434.49 -259.42) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-34\" data-name=\"min2\" x=\"2764.76\" y=\"1046.29\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3787.12 -1748.13) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-34\" data-name=\"min1\" x=\"2778.21\" y=\"1078.77\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1550.56 -1681.86) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_attack_copy_8\" data-name=\"kick_attack copy 8\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'cymbal', 'decay')\" [starting]=\"sequencerLineUp['instrumentSettings']['cymbal']['decay']\">\n              <circle cx=\"2781.31\" cy=\"1145.45\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2811.3,1145.78a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2811.3,1145.78Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69V1160a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2811.3,1210.75Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2780.71\" y=\"1115.6\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-35\" data-name=\"min7\" x=\"2843.16\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-54.37 2331.47) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-35\" data-name=\"min6\" x=\"2856.61\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1647.3 4002.67) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-35\" data-name=\"min5\" x=\"2843.16\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4013.25 3935.21) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-35\" data-name=\"min4\" x=\"2810.69\" y=\"1128.58\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5592.62 2233.55) rotate(180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-35\" data-name=\"min3\" x=\"2778.22\" y=\"1142.03\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5525.15 -40.57) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-35\" data-name=\"min2\" x=\"2764.77\" y=\"1174.5\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3915.34 -1619.92) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-35\" data-name=\"min1\" x=\"2778.22\" y=\"1206.98\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1641.23 -1644.31) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n        <g id=\"kick_distortion_copy_8\" data-name=\"kick_distortion copy 8\">\n          <g>\n            <g my-knob-turner (value)=\"updateInstrumentSettings($event, 'cymbal', 'distortion')\" [starting]=\"sequencerLineUp['instrumentSettings']['cymbal']['distortion']\">\n              <circle cx=\"2781.39\" cy=\"1273.73\" r=\"33.12\" fill=\"#fffef6\" />\n              <path d=\"M2811.3,1274a34.25,34.25,0,1,0,34.24,34.24A34.25,34.25,0,0,0,2811.3,1274Zm0,65a30.73,30.73,0,0,1-30.73-30.73c0-16.58,11.81-30.08,28.25-30.69v10.66a0.4,0.4,0,0,0,.4.41h4.16a0.41,0.41,0,0,0,.4-0.41v-10.66c16.44,0.61,28.24,14.11,28.24,30.69A30.72,30.72,0,0,1,2811.3,1338.93Z\"\n                transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n              <rect x=\"2780.71\" y=\"1243.78\" width=\"1.22\" height=\"8.27\" rx=\"0.61\" ry=\"0.61\" fill=\"#fff200\" />\n            </g>\n            <g>\n              <rect id=\"min7-36\" data-name=\"min7\" x=\"2843.16\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-145.03 2369.01) rotate(-45)\"\n                fill=\"#fff\" />\n              <rect id=\"min6-36\" data-name=\"min6\" x=\"2856.61\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1519.08 4130.88) rotate(-90)\"\n                fill=\"#fff\" />\n              <rect id=\"min5-36\" data-name=\"min5\" x=\"2843.16\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(3922.6 4154.07) rotate(-135)\"\n                fill=\"#fff\" />\n              <rect id=\"min4-36\" data-name=\"min4\" x=\"2810.69\" y=\"1256.79\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5592.61 2489.96) rotate(-180)\"\n                fill=\"#fff\" />\n              <rect id=\"min3-36\" data-name=\"min3\" x=\"2778.21\" y=\"1270.24\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(5615.81 178.31) rotate(135)\"\n                fill=\"#fff\" />\n              <rect id=\"min2-36\" data-name=\"min2\" x=\"2764.76\" y=\"1302.71\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(4043.54 -1491.71) rotate(90)\"\n                fill=\"#fff\" />\n              <rect id=\"min1-36\" data-name=\"min1\" x=\"2778.21\" y=\"1335.18\" width=\"1.22\" height=\"10.88\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1731.88 -1606.75) rotate(45)\"\n                fill=\"#fff\" />\n            </g>\n          </g>\n        </g>\n      </g>\n      <g my-knob-turner (value)=\"updateProjectSettings($event, 'tempo')\" id=\"tempo_knob\" [starting]=\"sequencerLineUp['projectSettings']['tempo']\">\n        <circle id=\"circle\" cx=\"1182.59\" cy=\"1402.13\" r=\"83.14\" fill=\"#fffef6\" />\n        <path d=\"M1212.57,1346.6a90,90,0,1,0,90,90A90,90,0,0,0,1212.57,1346.6Zm0,173.16a83.14,83.14,0,0,1-6.56-166v23.57a2.06,2.06,0,0,0,2.06,2.06h9a2.06,2.06,0,0,0,2.06-2.06v-23.58A83.15,83.15,0,0,1,1212.57,1519.76Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n        <rect x=\"1180.87\" y=\"1317.38\" width=\"3.44\" height=\"21.5\" rx=\"1\" ry=\"1\" fill=\"#fff200\" />\n      </g>\n        <g>\n          <rect id=\"min7-37\" data-name=\"min7\" x=\"1299.25\" y=\"1513.35\" width=\"3.31\" height=\"29.6\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-729.52 1332.97) rotate(-45)\"\n            fill=\"#fff\" />\n          <rect id=\"min6-37\" data-name=\"min6\" x=\"1335.84\" y=\"1425.02\" width=\"3.31\" height=\"29.6\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-132.3 2742.82) rotate(-90)\"\n            fill=\"#fff\" />\n          <rect id=\"min5-37\" data-name=\"min5\" x=\"1299.25\" y=\"1336.68\" width=\"3.31\" height=\"29.6\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1235.16 3192.51) rotate(-135)\"\n            fill=\"#fff\" />\n          <rect id=\"min4-37\" data-name=\"min4\" x=\"1210.91\" y=\"1300.09\" width=\"3.31\" height=\"29.6\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2395.16 2595.29) rotate(180)\"\n            fill=\"#fff\" />\n          <rect id=\"min3-37\" data-name=\"min3\" x=\"1122.58\" y=\"1336.68\" width=\"3.31\" height=\"29.6\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2844.85 1477.68) rotate(135)\"\n            fill=\"#fff\" />\n          <rect id=\"min2-37\" data-name=\"min2\" x=\"1085.99\" y=\"1425.02\" width=\"3.31\" height=\"29.6\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2497.48 317.68) rotate(90)\"\n            fill=\"#fff\" />\n          <rect id=\"min1-37\" data-name=\"min1\" x=\"1122.58\" y=\"1513.35\" width=\"3.31\" height=\"29.6\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1379.86 -381.86) rotate(45)\"\n            fill=\"#fff\" />\n        </g>\n        \n      <g my-knob-turner (value)=\"updateProjectSettings($event, 'volume')\" [starting]=\"sequencerLineUp['projectSettings']['volume']\" id=\"volume_knob\">\n        <circle id=\"circle-2\" data-name=\"circle\" cx=\"1257.69\" cy=\"1028.84\" r=\"49.22\" fill=\"#fffef6\" />\n        <path d=\"M1287.67,1010a53.29,53.29,0,1,0,53.29,53.29A53.29,53.29,0,0,0,1287.67,1010Zm0,102.51a49.22,49.22,0,0,1-3.88-98.29v14a1.22,1.22,0,0,0,1.22,1.22h5.33a1.22,1.22,0,0,0,1.22-1.22v-14A49.22,49.22,0,0,1,1287.67,1112.55Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n        <rect x=\"1256.67\" y=\"978.67\" width=\"2.04\" height=\"12.73\" rx=\"1\" ry=\"1\" fill=\"#fff200\" />\n      </g>\n        <g>\n          <rect id=\"min7-38\" data-name=\"min7\" x=\"1338.98\" y=\"1108.75\" width=\"1.96\" height=\"17.52\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-427.72 1240.32) rotate(-45)\"\n            fill=\"#fff\" />\n          <rect id=\"min6-38\" data-name=\"min6\" x=\"1360.65\" y=\"1056.46\" width=\"1.96\" height=\"17.52\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(266.42 2392.36) rotate(-90)\"\n            fill=\"#fff\" />\n          <rect id=\"min5-38\" data-name=\"min5\" x=\"1338.98\" y=\"1004.16\" width=\"1.96\" height=\"17.52\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1541.24 2642.18) rotate(-135)\"\n            fill=\"#fff\" />\n          <rect id=\"min4-38\" data-name=\"min4\" x=\"1286.69\" y=\"982.5\" width=\"1.96\" height=\"17.52\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2545.35 1948.03) rotate(180)\"\n            fill=\"#fff\" />\n          <rect id=\"min3-38\" data-name=\"min3\" x=\"1234.39\" y=\"1004.16\" width=\"1.96\" height=\"17.52\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2795.17 821.14) rotate(135)\"\n            fill=\"#fff\" />\n          <rect id=\"min2-38\" data-name=\"min2\" x=\"1212.73\" y=\"1056.46\" width=\"1.96\" height=\"17.52\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2248.95 -182.98) rotate(90)\"\n            fill=\"#fff\" />\n          <rect id=\"min1-38\" data-name=\"min1\" x=\"1234.39\" y=\"1108.75\" width=\"1.96\" height=\"17.52\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1122.05 -580.72) rotate(45)\"\n            fill=\"#fff\" />\n        </g>\n      <g  my-knob-turner (value)=\"updateProjectSettings($event, 'accent')\" [starting]=\"sequencerLineUp['projectSettings']['accent']\" id=\"accent_knob\">\n        <circle id=\"circle-3\" data-name=\"circle\" cx=\"1070.4\" cy=\"1140.65\" r=\"38.07\" fill=\"#fffef6\" />\n        <path d=\"M1100.38,1133.93a41.22,41.22,0,1,0,41.22,41.22A41.22,41.22,0,0,0,1100.38,1133.93Zm0,79.29a38.07,38.07,0,0,1-3-76V1148a0.94,0.94,0,0,0,.94.94h4.12a0.94,0.94,0,0,0,.94-0.94v-10.8A38.07,38.07,0,0,1,1100.38,1213.22Z\"\n          transform=\"translate(-29.98 -34.49)\" fill=\"#111815\" />\n        <rect x=\"1069.61\" y=\"1101.85\" width=\"1.58\" height=\"9.85\" rx=\"0.79\" ry=\"0.79\" fill=\"#fff200\" />\n      </g>\n        <g>\n          <rect id=\"min7-39\" data-name=\"min7\" x=\"1140.07\" y=\"1210.28\" width=\"1.52\" height=\"13.55\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-556.43 1128.66) rotate(-45)\"\n            fill=\"#fff\" />\n          <rect id=\"min6-39\" data-name=\"min6\" x=\"1156.82\" y=\"1169.83\" width=\"1.52\" height=\"13.55\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(-49.01 2299.7) rotate(-90)\"\n            fill=\"#fff\" />\n          <rect id=\"min5-39\" data-name=\"min5\" x=\"1140.07\" y=\"1129.38\" width=\"1.52\" height=\"13.55\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1114.15 2711.74) rotate(-135)\"\n            fill=\"#fff\" />\n          <rect id=\"min4-39\" data-name=\"min4\" x=\"1099.62\" y=\"1112.63\" width=\"1.52\" height=\"13.55\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2170.78 2204.32) rotate(180)\"\n            fill=\"#fff\" />\n          <rect id=\"min3-39\" data-name=\"min3\" x=\"1059.17\" y=\"1129.38\" width=\"1.52\" height=\"13.55\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2582.82 1155.57) rotate(135)\"\n            fill=\"#fff\" />\n          <rect id=\"min2-39\" data-name=\"min2\" x=\"1042.42\" y=\"1169.83\" width=\"1.52\" height=\"13.55\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(2189.8 98.94) rotate(90)\"\n            fill=\"#fff\" />\n          <rect id=\"min1-39\" data-name=\"min1\" x=\"1059.17\" y=\"1210.28\" width=\"1.52\" height=\"13.55\" rx=\"0.61\" ry=\"0.61\" transform=\"translate(1141.05 -427.51) rotate(45)\"\n            fill=\"#fff\" />\n        </g>\n\n        <g id=\"_808\" data-name=\"808\">\n      <g my-kit-button-pusher [current-kit]=\"sequencerLineUp['projectSettings']['kit']\" [kit]=\"'808'\" (value)=\"updateProjectSettings($event, 'kit')\"  >\n        <rect id=\"background-28\" data-name=\"background\" x=\"989.98\" y=\"740.72\" width=\"76.21\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"/>\n        <circle id=\"indicator-26\" data-name=\"indicator\" cx=\"1010.9\" cy=\"752.78\" r=\"7.31\" fill=\"#39b54a\"/>\n        <g>\n          <path d=\"M1062,787a2.8,2.8,0,0,1,1.74,2.67c0,1.67-1.83,2.84-3.69,2.84s-3.71-1.18-3.71-2.84a2.79,2.79,0,0,1,1.73-2.67,2.46,2.46,0,0,1-1.31-2.24c0-1.46,1.64-2.5,3.27-2.5s3.24,1,3.24,2.5A2.45,2.45,0,0,1,1062,787Zm-2,3.57a1.26,1.26,0,1,0-1.25-1.26A1.2,1.2,0,0,0,1060.07,790.56Zm0-6.61a1.11,1.11,0,1,0,0,2.22,1,1,0,0,0,1.09-1.1A1.06,1.06,0,0,0,1060.08,784Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1068.56,782.25c2.12,0,4,1.7,4,5.13,0,3.67-1.9,5.12-4,5.12s-4-1.45-4-5.12C1064.53,784,1066.44,782.25,1068.56,782.25Zm0,8.28c1.08,0,1.74-1,1.74-3.14s-0.66-3.15-1.74-3.15-1.75,1.16-1.75,3.15S1067.47,790.52,1068.56,790.52Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1079,787a2.8,2.8,0,0,1,1.74,2.67c0,1.67-1.83,2.84-3.69,2.84s-3.71-1.18-3.71-2.84a2.79,2.79,0,0,1,1.73-2.67,2.46,2.46,0,0,1-1.31-2.24c0-1.46,1.64-2.5,3.27-2.5s3.24,1,3.24,2.5A2.45,2.45,0,0,1,1079,787Zm-2,3.57a1.26,1.26,0,1,0-1.25-1.26A1.2,1.2,0,0,0,1077,790.56Zm0-6.61a1.11,1.11,0,1,0,0,2.22,1,1,0,0,0,1.09-1.1A1.06,1.06,0,0,0,1077,784Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n        </g>\n      </g>\n        </g>\n        <g id=\"_909\" data-name=\"909\">\n      <g my-kit-button-pusher [current-kit]=\"sequencerLineUp['projectSettings']['kit']\" [kit]=\"'909'\" (value)=\"updateProjectSettings($event, 'kit')\" >\n        <rect id=\"background-29\" data-name=\"background\" x=\"1075.45\" y=\"740.72\" width=\"76.21\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"/>\n        <circle id=\"indicator-27\" data-name=\"indicator\" cx=\"1096.37\" cy=\"752.78\" r=\"7.31\" fill=\"#39b54a\"/>\n        <g>\n          <path d=\"M1145.64,788.93a1.53,1.53,0,0,1-.71.14,3.31,3.31,0,0,1-3.15-3.47c0-2.34,1.88-3.36,3.67-3.36,2.22,0,3.95,1.46,3.95,3.36a5.74,5.74,0,0,1-1.56,3.95l-2.33,2.77h-2.78Zm-0.08-4.82a1.47,1.47,0,0,0-1.52,1.5,1.51,1.51,0,1,0,3,0A1.45,1.45,0,0,0,1145.56,784.11Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1154.05,782.25c2.12,0,4,1.7,4,5.13,0,3.67-1.9,5.12-4,5.12s-4-1.45-4-5.12C1150,784,1151.93,782.25,1154.05,782.25Zm0,8.28c1.08,0,1.74-1,1.74-3.14s-0.66-3.15-1.74-3.15-1.75,1.16-1.75,3.15S1153,790.52,1154.05,790.52Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1162.63,788.93a1.53,1.53,0,0,1-.71.14,3.31,3.31,0,0,1-3.15-3.47c0-2.34,1.88-3.36,3.67-3.36,2.22,0,3.95,1.46,3.95,3.36a5.74,5.74,0,0,1-1.56,3.95l-2.33,2.77h-2.78Zm-0.08-4.82a1.47,1.47,0,0,0-1.52,1.5,1.51,1.51,0,1,0,3,0A1.45,1.45,0,0,0,1162.55,784.11Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n        </g>\n      </g>\n        </g>\n        <g id=\"Acoustic\">\n      <g my-kit-button-pusher [current-kit]=\"sequencerLineUp['projectSettings']['kit']\" [kit]=\"'acoustic'\" (value)=\"updateProjectSettings($event, 'kit')\" >\n        <rect id=\"background-30\" data-name=\"background\" x=\"1161.33\" y=\"740.72\" width=\"115.21\" height=\"24.13\" rx=\"3\" ry=\"3\" fill=\"#b3b8b6\"/>\n        <circle id=\"indicator-28\" data-name=\"indicator\" cx=\"1182.25\" cy=\"752.78\" r=\"7.31\" fill=\"#39b54a\"/>\n        <g>\n          <path d=\"M1237,792.32h-2.42l-0.73-2h-3.77l-0.73,2H1227l4-9.89H1233Zm-5-6.84h0l-1.1,2.88h2.23Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1244.25,789.67l1,1.92a5.14,5.14,0,1,1,0-8.43l-1,1.92a3.44,3.44,0,0,0-1.94-.61,2.93,2.93,0,1,0,0,5.82A3.44,3.44,0,0,0,1244.25,789.67Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1250.63,782.25a5.13,5.13,0,0,1,0,10.25,4.92,4.92,0,0,1-5-5.13A5,5,0,0,1,1250.63,782.25Zm0,8.07c1.8,0,2.54-1.48,2.54-3s-0.79-3-2.54-3-2.55,1.48-2.55,3S1248.78,790.32,1250.63,790.32Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1264.21,788.81c0,2.45-1.34,3.69-3.86,3.69s-3.86-1.25-3.86-3.69v-6.38h2.25v5.72c0,1.66.5,2.13,1.61,2.13s1.61-.48,1.61-2.13v-5.72h2.25v6.38Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1272,783.18l-0.91,1.8a4.08,4.08,0,0,0-2-.68,1,1,0,0,0-1.18.89c0,0.55.94,0.95,2.06,1.43s2.31,1.4,2.31,2.7c0,2.36-1.8,3.19-3.73,3.19a5.78,5.78,0,0,1-3.72-1.31l1.13-1.9a4.83,4.83,0,0,0,2.42,1.12,1.15,1.15,0,0,0,1.43-1c0-.72-1.06-1-2.23-1.63a3,3,0,0,1-1.88-2.54,3.13,3.13,0,0,1,3.23-3A5.63,5.63,0,0,1,1272,783.18Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1272.16,782.43h7v2h-2.35v7.92h-2.25v-7.92h-2.35v-2Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1282.19,792.32h-2.25v-9.89h2.25v9.89Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n          <path d=\"M1290.45,789.67l1,1.92a5.14,5.14,0,1,1,0-8.43l-1,1.92a3.44,3.44,0,0,0-1.94-.61,2.93,2.93,0,1,0,0,5.82A3.44,3.44,0,0,0,1290.45,789.67Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#231f20\"/>\n        </g>\n      </g>\n        </g>\n\n        <g>\n      <path d=\"M1027.11,735.47a9.86,9.86,0,1,1,0,19.71h-5.71V735.47h5.71Zm-0.53,15.7a5.85,5.85,0,0,0,0-11.68h-0.69v11.68h0.69Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n      <path d=\"M1039,742.93h4.23v1.77h0a4.8,4.8,0,0,1,3.75-2.13,5.08,5.08,0,0,1,2.68.76l-1.77,3.58a3.57,3.57,0,0,0-2.2-.67,2.54,2.54,0,0,0-2.51,2.49v6.45H1039V742.93Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n      <path d=\"M1054.93,748.76c0,2.41.65,3.35,2.41,3.35s2.41-.93,2.41-3.35v-5.83H1064v6.86c0,4.11-2.05,5.76-6.64,5.76s-6.64-1.65-6.64-5.76v-6.86h4.23v5.83Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n      <path d=\"M1066.62,742.93h4.23v1.29h0a5.08,5.08,0,0,1,3.51-1.65,4.63,4.63,0,0,1,4.28,2.25,5.39,5.39,0,0,1,4.06-2.25c2.25,0,4.78,1.12,4.78,4.54v8.08h-4.23v-6.93a2.07,2.07,0,0,0-2.15-2.29,1.88,1.88,0,0,0-2,1.91v7.31H1075v-6.93a2.07,2.07,0,0,0-2.15-2.29,1.9,1.9,0,0,0-2,2.06v7.17h-4.23V742.93Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n      <path d=\"M1108.44,755.19l-7.26-8.36v8.36h-4.49V735.47h4.49v8.05l6.76-8.05h5.45l-7.93,9.34,9.18,10.37h-6.19Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n      <path d=\"M1120.18,737.86a2.51,2.51,0,1,1-2.51-2.51A2.51,2.51,0,0,1,1120.18,737.86Zm-4.68,17.32h4.23V742.93h-4.23v12.26Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n      <path d=\"M1123.43,738.36h4.23v4.56h2.58v3.23h-2.58V750c0,1.15.29,1.7,1,1.7a2,2,0,0,0,1.05-.38l1.05,3.42a7,7,0,0,1-3.11.76c-3.37,0-4.18-2.51-4.18-4.68v-4.71h-1.77v-3.23h1.77v-4.56Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n      <path d=\"M1141.6,743.53l-1.39,2.77a6.9,6.9,0,0,0-2.72-.76c-0.93,0-1.31.17-1.31,0.74s0.86,0.84,1.91,1.17c1.63,0.5,3.73,1.41,3.73,3.92,0,3.61-3.3,4.18-5.81,4.18a7.33,7.33,0,0,1-4.73-1.65L1133,751a6.13,6.13,0,0,0,3,1.41c0.6,0,1.31-.07,1.31-0.88s-1.34-1-2.72-1.67-2.48-1.51-2.48-3.35c0-2.51,2.13-3.94,5.35-3.94A9.36,9.36,0,0,1,1141.6,743.53Z\" transform=\"translate(-29.98 -34.49)\" fill=\"#f9fcf9\"/>\n        </g>\n    </g>\n\n  </svg>\n\n  <div class=\"project-description\"> \n    <h3>A Rhythm Sequencer Made with Angular 2 and TypeScript</h3>\n    <p>To adjust the instrument knobs hover your mouse and scroll or drag horizontally.</p>\n    <h5>Problems Solved:</h5>\n    <ul>\n      <li>\n        Making directives that make the SVG knobs rotatable and clickable while having them output a value for the service to interpret. \n      </li> \n      <li>\n        Enabling the drum machine to be updated with minimal delay by using a <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/SEQUENCER_LINEUP.ts\">JSON object</a> to manage the machines state and only telling the Audio Context what to play when it needs to know.\n      </li>\n      <li>\n        Designing the SVG in Adobe Illustrator in an organized and planned way that enabled it to be used as an interface.\n      </li>\n    </ul>\n    <pre>\n      <code>\n        FILE TREE:\n        <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/tree/master/app/projects/drum-machine\">drum-machine/</a>\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/drum-machine.component.html\">drum-machine.component.html</a>\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/drum-machine.component.ts\">drum-machine.component.ts</a>\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/drum-machine.service.ts\">drum-machine.service.ts</a>\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/SEQUENCER_LINEUP.ts\">SEQUENCER_LINEUP.ts</a> \n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/timeWorker.js\">timeWorker.js</a>\n\n        ----- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/tree/master/app/projects/drum-machine/directives\">directives/</a>\n        ---------- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/directives/beat-selector.directive.ts\">beat-selector.directive.ts</a>\n        ---------- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/directives/beat-watcher.directive.ts\">beat-watcher.directive.ts</a>\n        ---------- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/directives/instrument-selector.directive.ts\">instrument-selector.directive.ts</a>\n        ---------- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/directives/kit-selector.directive.ts\">kit-selector.directive.ts</a>\n        ---------- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/directives/knobs.directive.ts\">knobs.directive.ts</a>\n        ---------- <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/app/projects/drum-machine/directives/startbutton.directive.ts\">startbutton.directive.ts</a>\n\n        SCSS FILE:\n        <a class=\"github-link\" target=\"_blank\" href=\"https://github.com/JosephFarina/portfolio/blob/master/scss/projects/drum-machine.scss\">drum-machine.scss</a>\n      </code>\n    </pre>\n  </div>\n</div>\n\n"

/***/ },

/***/ 465:
/***/ function(module, exports) {

	module.exports = ".spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 50px;\n  width: 50px;\n  border-radius: 30%;\n  border: 5px solid;\n  -webkit-animation: spin 1.2s infinite ease;\n          animation: spin 1.2s infinite ease; }\n\n@-webkit-keyframes spin {\n  0% {\n    border-radius: 0;\n    border-color: #2196F3;\n    background-color: #3F51B5;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  10% {\n    border-color: #03A9F4;\n    background-color: #2196F3; }\n  20% {\n    border-color: #00BCD4;\n    background-color: #03A9F4; }\n  30% {\n    border-color: #009688;\n    background-color: #00BCD4; }\n  40% {\n    border-color: #2196F3;\n    background-color: #009688; }\n  50% {\n    border-color: #CDDC39;\n    border-radius: 50%;\n    background-color: #4CAF50; }\n  60% {\n    border-color: #FFEB3B;\n    background-color: #CDDC39; }\n  70% {\n    border-color: #FFC107;\n    background-color: #FFEB3B; }\n  80% {\n    border-color: #FF9800;\n    background-color: #FFC107; }\n  90% {\n    border-color: #FF5722;\n    background-color: #FF9800; }\n  100% {\n    border-color: #3F51B5;\n    border-radius: 0;\n    background-color: #FF5722;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    border-radius: 0;\n    border-color: #2196F3;\n    background-color: #3F51B5;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  10% {\n    border-color: #03A9F4;\n    background-color: #2196F3; }\n  20% {\n    border-color: #00BCD4;\n    background-color: #03A9F4; }\n  30% {\n    border-color: #009688;\n    background-color: #00BCD4; }\n  40% {\n    border-color: #2196F3;\n    background-color: #009688; }\n  50% {\n    border-color: #CDDC39;\n    border-radius: 50%;\n    background-color: #4CAF50; }\n  60% {\n    border-color: #FFEB3B;\n    background-color: #CDDC39; }\n  70% {\n    border-color: #FFC107;\n    background-color: #FFEB3B; }\n  80% {\n    border-color: #FF9800;\n    background-color: #FFC107; }\n  90% {\n    border-color: #FF5722;\n    background-color: #FF9800; }\n  100% {\n    border-color: #3F51B5;\n    border-radius: 0;\n    background-color: #FF5722;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.fade {\n  -webkit-animation-duration: .7s;\n          animation-duration: .7s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: fade-down;\n          animation-name: fade-down; }\n\n@-webkit-keyframes fade-down {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n            transform: translate3d(0, -2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fade-down {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n            transform: translate3d(0, -2000px, 0); }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.slide {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: slide-in;\n          animation-name: slide-in; }\n\n@-webkit-keyframes slide-in {\n  from {\n    -webkit-transform: translate3d(500%, 0, 0);\n            transform: translate3d(500%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n\n@keyframes slide-in {\n  from {\n    -webkit-transform: translate3d(500%, 0, 0);\n            transform: translate3d(500%, 0, 0);\n    visibility: visible; }\n  to {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n\n.row.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .row.no-gutters > [class^='col-'],\n  .row.no-gutters > [class*=' col-'] {\n    padding-right: 0;\n    padding-left: 0; }\n\n/*\n * Base styles\n */\nbody, p, .p, a, a:hover {\n  color: black;\n  font-size: 1.5rem;\n  font-family: \"Roboto Condensed\", sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  letter-spacing: 1px; }\n\n/*\n * Typography\n */\n.h1, h1,\n.h2,\nh2,\n.h3,\nh3,\n.h4,\nh4,\n.h5,\nh5,\n.h6,\nh6 {\n  font-family: \"Arvo\", serif;\n  font-weight: 700; }\n\n.h1, h1,\n.h2,\nh2 {\n  line-height: 1.1; }\n\n.h3, h3,\n.h4,\nh4 {\n  line-height: 1.3; }\n\n.h1, h1 {\n  font-size: 500%;\n  letter-spacing: -2px; }\n\n.h2, h2 {\n  font-size: 250%;\n  letter-spacing: -1px; }\n\n.h3, h3 {\n  font-size: 200%; }\n\n.h4, h4 {\n  font-size: 180%; }\n\n.h5, h5 {\n  font-size: 130%; }\n\n.h6, h6 {\n  font-size: 100%; }\n\na {\n  text-decoration: none; }\n  a:hover {\n    text-decoration: none; }\n\n.text-left {\n  text-align: left   !important; }\n\n.text-center {\n  text-align: center !important; }\n\n.text-right {\n  text-align: right  !important; }\n\n.small-text__project {\n  font-size: 90%;\n  text-transform: uppercase;\n  letter-spacing: 2px; }\n\n.menu {\n  padding-right: 5px; }\n\n.text-inactive {\n  color: black;\n  opacity: .4; }\n\n#calculator {\n  background-color: #f0ede6;\n  border: 0.1px solid #ddd6c6;\n  border-radius: 10px;\n  height: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: 100px; }\n  #calculator::after {\n    background-image: -webkit-linear-gradient(top, rgba(211, 211, 211, 0.5) 5%, #f6eddc 60%);\n    background-image: linear-gradient(to bottom, rgba(211, 211, 211, 0.5) 5%, #f6eddc 60%);\n    border: 0.5px solid #ddd6c6;\n    border-radius: 3px;\n    content: '307';\n    display: block;\n    font-family: 'Share Tech Mono', monospace;\n    font-size: 15px;\n    height: 25px;\n    left: 9px;\n    line-height: 27px;\n    position: absolute;\n    text-indent: 48px;\n    top: 12px;\n    width: 80px; }\n  #calculator::before {\n    background-color: #f7f4ef;\n    border: 0.1px solid #ddd6c6;\n    border-radius: 3px;\n    box-shadow: 29px 0 0 -1px #f7f4ef, 29px 0 0 0 #ddd6c6, 58px 0 0 -1px #f7f4ef, 58px 0 0 0 #ddd6c6, 0 22px 0 -1px #f7f4ef, 0 22px 0 0 #ddd6c6, 29px 22px 0 -1px #f7f4ef, 29px 22px 0 0 #ddd6c6, 58px 22px 0 -1px #f7f4ef, 58px 22px 0 0 #ddd6c6, 0 44px 0 -1px #f7f4ef, 0 44px 0 0 #ddd6c6, 29px 44px 0 -1px #f7f4ef, 29px 44px 0 0 #ddd6c6, 58px 44px 0 -1px #f7f4ef, 58px 44px 0 0 #ddd6c6;\n    content: '';\n    display: block;\n    height: 15px;\n    left: 9px;\n    position: absolute;\n    top: 49px;\n    width: 24px; }\n\n.project-description {\n  max-width: 500px; }\n\n.github-link {\n  color: blue; }\n  .github-link:after {\n    content: \"\";\n    position: relative;\n    top: -6px;\n    background: url(https://github.com/favicon.ico) no-repeat 0 0;\n    background-size: 100% 100%;\n    width: 12px;\n    display: inline-block;\n    height: 12px; }\n"

/***/ },

/***/ 466:
/***/ function(module, exports) {

	module.exports = "body {\n  margin-top: 0; }\n\n.home-container {\n  min-height: 100%;\n  background-color: #EE4236;\n  color: white;\n  overflow-X: hidden;\n  -webkit-transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n  transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44); }\n\np {\n  color: white; }\n\n.project-container {\n  position: relative;\n  top: 150px;\n  margin-left: 100px;\n  margin-right: 50px;\n  max-width: 500px;\n  border-left: .5px solid white;\n  -webkit-transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n  transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44); }\n\n.project-description {\n  margin-left: 25px;\n  margin-bottom: 25px; }\n\n.project-container-heading {\n  color: white;\n  padding-left: 25px; }\n\n.project-groups {\n  color: white;\n  max-height: 40vh;\n  overflow-y: scroll;\n  margin-bottom: 0;\n  -webkit-transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n  transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44); }\n\n.project-group {\n  color: white;\n  position: relative;\n  margin-top: 15px;\n  cursor: pointer; }\n\n.project-group-heading {\n  color: white;\n  margin-bottom: 0;\n  padding-bottom: 0; }\n\n.project-group-number {\n  color: white;\n  float: left;\n  padding-right: 20px;\n  padding-top: 18px;\n  padding-bottom: 25px;\n  padding-left: 25px; }\n\n.project-group-caption {\n  color: white;\n  padding-top: 0;\n  margin-top: 0; }\n\n.single-div-container {\n  position: absolute;\n  top: 50vh;\n  right: 200px;\n  -webkit-transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n  transition: all 0.2s cubic-bezier(0.87, -0.41, 0.19, 1.44); }\n\n.single-div__calculator {\n  position: relative;\n  bottom: 15vh;\n  height: 500px;\n  right: 150px;\n  -webkit-transform: scale(2);\n          transform: scale(2); }\n\n.sequencer-image {\n  position: relative;\n  bottom: 20vh;\n  right: 5;\n  width: 400px; }\n\n.tictactoe-image {\n  position: relative;\n  bottom: 20vh;\n  right: 125px;\n  width: 200px; }\n\n.active-image {\n  display: block; }\n\n.inactive-image {\n  display: none; }\n\n@media (max-width: 1150px) and (min-width: 950px) {\n  .project-container {\n    margin-left: 75px; }\n  .single-div-container {\n    right: 150px; }\n  .single-div__calculator {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3); }\n  .sequencer-image {\n    right: -10vh;\n    width: 300px; }\n  .tictactoe-image {\n    position: relative;\n    bottom: 20vh;\n    right: 0;\n    width: 170px; } }\n\n@media (max-width: 950px) {\n  .project-container {\n    margin-left: 50px; }\n  .single-div-container {\n    position: relative;\n    right: auto;\n    margin: 0 auto;\n    top: 100px; }\n  .single-div__calculator {\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n    bottom: 45px;\n    right: auto;\n    left: auto; }\n  .sequencer-image {\n    bottom: 15px;\n    right: auto;\n    display: block;\n    margin: 0 auto;\n    width: 200px; }\n  .tictactoe-image {\n    bottom: 40px;\n    right: auto;\n    display: block;\n    margin: 0 auto;\n    width: 125px; }\n  .project-groups {\n    max-height: 200px; } }\n\n@media (max-width: 450px) {\n  .project-groups {\n    max-height: 300px;\n    margin-bottom: 100px; } }\n"

/***/ },

/***/ 467:
/***/ function(module, exports) {

	module.exports = ".project .navigation-logo,\n.project .navigation-menu,\n.home .navigation-logo,\n.home .navigation-menu {\n  position: fixed;\n  top: 50px;\n  -webkit-transition: all 0.6s cubic-bezier(0.87, -0.41, 0.19, 1.44);\n  transition: all 0.6s cubic-bezier(0.87, -0.41, 0.19, 1.44); }\n\n.project .navigation-menu,\n.home .navigation-menu {\n  right: 100px;\n  top: 55px; }\n  .project .navigation-menu span,\n  .home .navigation-menu span {\n    color: white; }\n\n.project .navigation-logo,\n.home .navigation-logo {\n  color: white;\n  left: 75px; }\n\n@media (max-width: 850px) {\n  .project .navigation-menu,\n  .home .navigation-menu {\n    left: 75px;\n    top: 75px; } }\n\n@media (max-width: 850px) {\n  .home .navigation-logo {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    left: -40px;\n    top: 110px; }\n  .home .navigation-menu {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    left: -57px;\n    right: auto;\n    top: 125px; } }\n"

/***/ },

/***/ 468:
/***/ function(module, exports) {

	module.exports = "input[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\n.calc {\n  min-height: 100%;\n  overflow: hidden;\n  background-color: #8EDB37; }\n  .calc div,\n  .calc p {\n    font-family: 'Share Tech Mono', monospace;\n    font-size: 15px;\n    margin: 0; }\n  .calc .calculator {\n    background-color: #f0ede6;\n    border: 0.5px solid #cabfa6;\n    border-radius: 10px;\n    margin-top: 125px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 350px;\n    min-width: 350px;\n    padding: 15px;\n    position: relative; }\n  .calc .button-group {\n    margin-top: 9px; }\n  .calc .button {\n    background-color: #f7f4ef;\n    border: 0.5px solid #cabfa6;\n    border-radius: 5px;\n    box-shadow: 0 2px 3px #ddd6c6;\n    color: #000;\n    display: table;\n    margin: 9px 8px;\n    margin-left: auto;\n    margin-right: auto;\n    min-height: 40px;\n    padding-bottom: 10%;\n    position: relative;\n    text-align: center;\n    width: 80%; }\n    .calc .button:hover {\n      background-color: #ded1bc;\n      cursor: hand; }\n    .calc .button.display {\n      background-image: -webkit-linear-gradient(top, rgba(211, 211, 211, 0.5) 10%, #fff 25%);\n      background-image: linear-gradient(to bottom, rgba(211, 211, 211, 0.5) 10%, #fff 25%);\n      border-width: .5px;\n      color: #000;\n      cursor: text;\n      font-size: 30px;\n      height: 80px;\n      min-height: 30px;\n      padding: 15px;\n      text-align: right;\n      width: 95%; }\n      .calc .button.display::-moz-selection {\n        background: #e57c46;\n        color: #f7f4ef; }\n      .calc .button.display::selection {\n        background: #e57c46;\n        color: #f7f4ef; }\n    .calc .button.operator {\n      font-size: 20px; }\n      .calc .button.operator .button-content {\n        top: 7px; }\n    .calc .button.equals {\n      background-color: #888b98;\n      color: #f7f4ef; }\n      .calc .button.equals:hover {\n        background-color: #626571; }\n    .calc .button.clear {\n      background-color: #e57c46;\n      color: #f7f4ef; }\n      .calc .button.clear:hover {\n        background-color: #c3541b; }\n    .calc .button.double-button {\n      width: 90%; }\n    .calc .button .button-content {\n      position: relative;\n      top: 9px; }\n  .calc .calc-btn {\n    width: 100%;\n    background-color: #f7f4ef;\n    color: #000; }\n"

/***/ },

/***/ 469:
/***/ function(module, exports) {

	module.exports = ".drum-machine-wrapper {\n  min-height: 100%;\n  overflow: hidden;\n  background-color: #36D2C7; }\n\n#drum {\n  position: relative;\n  display: block;\n  margin: auto;\n  left: 0;\n  top: 30;\n  height: 100%;\n  width: 100%; }\n"

/***/ },

/***/ 470:
/***/ function(module, exports) {

	module.exports = ".game-board {\n  position: relative;\n  top: 15px; }\n  .game-board .current-player {\n    padding: 25px; }\n  .game-board .board-rows {\n    position: relative;\n    top: 12px; }\n    .game-board .board-rows .board-row {\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 5px;\n      height: 100px;\n      width: 300px; }\n      .game-board .board-rows .board-row .board-tile {\n        position: relative;\n        height: 90px;\n        width: 90px;\n        margin-left: 5px;\n        margin-right: 5px;\n        display: inline-block;\n        background-color: #4CAAF5; }\n  .game-board .scoreboard {\n    width: 270px;\n    text-align: justify;\n    margin-top: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 20px; }\n    .game-board .scoreboard .scoreboard-title {\n      display: inline-block;\n      -webkit-transform: translate(0, -50%);\n              transform: translate(0, -50%); }\n    .game-board .scoreboard .player {\n      display: inline-block; }\n    .game-board .scoreboard .player-two {\n      text-align: right; }\n    .game-board .scoreboard .stretch {\n      width: 100%;\n      display: inline-block;\n      font-size: 0;\n      line-height: 0; }\n\n.x {\n  position: relative;\n  margin: auto;\n  top: 40px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  width: 50px;\n  opacity: 1;\n  border-top: solid white 3px;\n  -webkit-animation: x-in .5s 1 ease-in-out;\n          animation: x-in .5s 1 ease-in-out; }\n  .x::after {\n    content: '';\n    display: block;\n    position: relative;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    width: 50px;\n    opacity: 1;\n    border-top: solid white 3px; }\n\n@-webkit-keyframes x-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); } }\n\n@keyframes x-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); } }\n\n.o {\n  position: relative;\n  margin: auto;\n  top: 20px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 3px solid white;\n  -webkit-animation: o-in .5s 1 ease-in-out;\n          animation: o-in .5s 1 ease-in-out; }\n\n@-webkit-keyframes o-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n    border-top-color: white; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n    border-left-color: white; } }\n\n@keyframes o-in {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n    border-top-color: white; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n    border-left-color: white; } }\n"

/***/ },

/***/ 471:
/***/ function(module, exports) {

	module.exports = ".tictactoe-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  min-height: 150%;\n  background-color: #FFAF27; }\n\n.tictactoe {\n  position: relative;\n  top: 50px;\n  max-width: 320px;\n  min-height: 250px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 25px;\n  background-color: white; }\n"

/***/ },

/***/ 685:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var nav_component_1 = __webpack_require__(687);
	var core_2 = __webpack_require__(1);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            directives: [
	                router_1.ROUTER_DIRECTIVES,
	                nav_component_1.NavComponent
	            ],
	            encapsulation: core_2.ViewEncapsulation.None,
	            moduleId: module.id,
	            selector: 'my-app',
	            styles: [__webpack_require__(465).toString()],
	            template: "\n    <my-nav></my-nav>\n    <router-outlet></router-outlet>\n    ",
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 686:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var nav_title_service_1 = __webpack_require__(338);
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.projects = exports.MY_PROJECTS;
	        this.activeProject = this.projects[0];
	    }
	    HomeComponent.prototype.setActiveProject = function (project) {
	        this.activeProject = project;
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            directives: [
	                router_1.ROUTER_DIRECTIVES
	            ],
	            moduleId: module.id,
	            providers: [nav_title_service_1.NavTitleService],
	            selector: 'my-home',
	            styles: [__webpack_require__(466).toString()],
	            template: __webpack_require__(459)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;
	exports.MY_PROJECTS = [
	    {
	        caption: 'UI Built with scss and makes use of bootstrap',
	        color: '#36D2C7',
	        heading: 'Sequencer',
	        link: '/drum',
	        number: '01',
	    },
	    {
	        caption: 'An 808 inspired sequencer built with angular2',
	        color: '#8EDB37',
	        heading: 'Calculator',
	        link: '/calculator',
	        number: '02',
	    },
	    {
	        caption: 'Play a couple games, eh?',
	        color: '#FFAF27',
	        heading: 'TicTacToe',
	        link: '/tictactoe/play',
	        number: '03',
	    }
	];
	

/***/ },

/***/ 687:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var nav_title_service_1 = __webpack_require__(338);
	var NavComponent = (function () {
	    function NavComponent(navTitleService, router) {
	        var _this = this;
	        this.navTitleService = navTitleService;
	        this.router = router;
	        this.routeName = '';
	        this.isNewRoute = false;
	        this.router.events.subscribe(function (route) {
	            _this.isNewRoute = true;
	            setTimeout(function () {
	                _this.isNewRoute = false;
	            }, 1500);
	            _this.routeName = _this.navTitleService.getCurrentUrl().trim();
	        });
	    }
	    NavComponent = __decorate([
	        core_1.Component({
	            directives: [router_1.ROUTER_DIRECTIVES],
	            moduleId: module.id,
	            providers: [nav_title_service_1.NavTitleService],
	            selector: 'my-nav',
	            styles: [__webpack_require__(467).toString()],
	            template: "\n    \n    <nav [ngClass]=\"{\n    'home':                     routeName === 'Joey Farina', \n    'project':                  routeName !== 'Joey Farina'\n    }\">\n        <div [ngClass]=\"{ 'fade':  isNewRoute }\">\n            <span  class=\"h5 navigation-logo\">\n                {{routeName | uppercase}}\n            </span>\n            <div class=\"navigation-menu\">\n                <span class=\"p menu-item\">RESUME</span>\n                <span class=\"p menu-item\">CONTACT</span>\n            </div>\n        </div>\n    </nav>\n    "
	        }), 
	        __metadata('design:paramtypes', [nav_title_service_1.NavTitleService, router_1.Router])
	    ], NavComponent);
	    return NavComponent;
	}());
	exports.NavComponent = NavComponent;
	

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * TODO:
	 *   fix the way the variables look when its opened
	 *   fix the button that toggles import
	 *   add a click
	 *
	 */
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var CalculatorComponent = (function () {
	    function CalculatorComponent() {
	        // Show how the variables are working
	        this.showVariables = false;
	        this.displayValue = '0';
	        this.operatorValue = null;
	        this.currentValue = 0;
	        this.valueToOperate = 0;
	        this.operatorPressed = false;
	    }
	    CalculatorComponent.prototype.toggleNegative = function () {
	        if (this.displayValue[0] === '0') {
	            return;
	        }
	        if (this.displayValue[0] === '-') {
	            this.isNegative = true;
	        }
	        else {
	            this.isNegative = false;
	        }
	        this.isNegative = !this.isNegative;
	        if (this.isNegative && this.displayValue[0] !== '-') {
	            this.displayValue = '-' + this.displayValue;
	        }
	        if (!this.isNegative && this.displayValue[0] === '-') {
	            this.displayValue = this.displayValue.substr(1);
	        }
	    };
	    CalculatorComponent.prototype.setDisplayValue = function (digit) {
	        if (this.operatorPressed && !this.displayResetAfterOperator) {
	            this.displayResetAfterOperator = true;
	            this.displayValue = '0';
	        }
	        if (this.displayValue === '0') {
	            this.displayValue = '';
	        }
	        if (this.displayValue === '0' && digit === '0') {
	            this.displayValue = this.displayValue;
	            return;
	        }
	        if (this.displayValue.indexOf('.') >= 0 && digit === '.') {
	            digit = '';
	        }
	        this.displayValue += digit;
	    };
	    CalculatorComponent.prototype.setOperator = function (operator) {
	        this.operatorValue = operator;
	        if (this.operatorPressed) {
	            this.equals();
	        }
	        else {
	            this.currentValue = Number(this.displayValue);
	        }
	        this.operatorPressed = true;
	        this.displayResetAfterOperator = false;
	    };
	    CalculatorComponent.prototype.equals = function () {
	        this.operatorPressed = false;
	        this.valueToOperate = Number(this.displayValue);
	        switch (this.operatorValue) {
	            case '/':
	                this.currentValue = this.currentValue / this.valueToOperate;
	                break;
	            case '*':
	                this.currentValue *= this.valueToOperate;
	                break;
	            case '(-)':
	                this.currentValue -= this.valueToOperate;
	                break;
	            case '+':
	                this.currentValue += this.valueToOperate;
	                break;
	        }
	        this.displayValue = String(this.currentValue);
	    };
	    CalculatorComponent.prototype.clear = function () {
	        this.displayValue = '0';
	        this.currentValue = 0;
	        this.valueToOperate = 0;
	    };
	    CalculatorComponent.prototype.delete = function () {
	        this.displayValue = this.displayValue.substr(0, this.displayValue.length - 1);
	    };
	    CalculatorComponent = __decorate([
	        core_1.Component({
	            directives: [router_1.ROUTER_DIRECTIVES],
	            moduleId: module.id,
	            selector: 'my-calculator',
	            styles: [__webpack_require__(468).toString()],
	            template: __webpack_require__(460)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CalculatorComponent);
	    return CalculatorComponent;
	}());
	exports.CalculatorComponent = CalculatorComponent;
	

/***/ },

/***/ 689:
/***/ function(module, exports) {

	"use strict";
	exports.SEQUENCER_LINEUP = {
	    'projectSettings': {
	        'tempo': .5,
	        'volume': .5,
	        'reverb': 1,
	        'beat': 0,
	        'accent': 0,
	        'kit': '808'
	    },
	    'instrumentSettings': {
	        'kick': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'snare': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'lowtom': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'midtom': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'hitom': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'rimshot': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'clap': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'hihat': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        },
	        'cymbal': {
	            'level': .5,
	            'attack': 0,
	            'decay': 0,
	            'distortion': 0
	        }
	    },
	    'rhythmSettings': {
	        '0': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '1': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '2': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '3': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '4': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '5': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '6': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '7': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '8': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '9': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '10': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '11': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '12': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '13': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '14': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        },
	        '15': {
	            'kick': false,
	            'snare': false,
	            'lowtom': false,
	            'midtom': false,
	            'hitom': false,
	            'rimshot': false,
	            'clap': false,
	            'hihat': false,
	            'cymbal': false
	        }
	    }
	};
	

/***/ },

/***/ 690:
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
	var core_1 = __webpack_require__(1);
	var BeatSelectorDirective = (function () {
	    function BeatSelectorDirective(_el) {
	        this._el = _el;
	        this.value = new core_1.EventEmitter();
	        this.isActivated = false;
	        this.activeLight = { active: 'red' };
	        this.checkIfSnapInit = false;
	        this.el = _el.nativeElement;
	    }
	    BeatSelectorDirective.prototype.ngOnChanges = function (changes) {
	        if (this.checkIfSnapInit) {
	            this.check();
	        }
	        ;
	    };
	    BeatSelectorDirective.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.s = Snap(this.el);
	        this.activeIndicator = this.s.select('circle');
	        this.activeLight['inactive'] = this.activeIndicator.attr('fill');
	        this.init();
	        this.checkIfSnapInit = true;
	        this.s.hover(function (e) {
	            if (_this.isActivated) {
	                _this.s.animate({ transform: 't0, -2.5' }, 200, mina.elastic);
	                _this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
	            }
	        });
	        this.s.mouseout(function (e) {
	            if (_this.isActivated) {
	                _this.s.animate({ transform: '' }, 200, mina.elastic);
	                _this.activeIndicator.animate({ fill: _this.activeLight['inactive'] }, 200, mina.easeinout);
	            }
	        });
	        this.s.click(function (e) {
	            _this.check();
	            _this.valueOut();
	        });
	    };
	    BeatSelectorDirective.prototype.init = function () {
	        if (this.isActivated) {
	            this.s.animate({ transform: 't0, -3.5' }, 200, mina.elastic);
	            this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
	        }
	        this.isActivated = !this.isActivated;
	    };
	    BeatSelectorDirective.prototype.check = function () {
	        if (this.isActivated) {
	            this.s.animate({ transform: 't0, -3.5' }, 200, mina.elastic);
	            this.activeIndicator.animate({ fill: '#FF4856' }, 200, mina.easeinout);
	        }
	        if (!this.isActivated) {
	            this.s.animate({ transform: '' }, 200, mina.elastic);
	            this.activeIndicator.animate({ fill: this.activeLight['inactive'] }, 200, mina.easeinout);
	        }
	        this.isActivated = !this.isActivated;
	    };
	    BeatSelectorDirective.prototype.valueOut = function () {
	        this.value.emit({ value: !this.isActivated });
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], BeatSelectorDirective.prototype, "value", void 0);
	    __decorate([
	        core_1.Input('initial'), 
	        __metadata('design:type', Boolean)
	    ], BeatSelectorDirective.prototype, "isActivated", void 0);
	    BeatSelectorDirective = __decorate([
	        core_1.Directive({ selector: '[my-button-pusher]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], BeatSelectorDirective);
	    return BeatSelectorDirective;
	}());
	exports.BeatSelectorDirective = BeatSelectorDirective;
	

/***/ },

/***/ 691:
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
	var core_1 = __webpack_require__(1);
	var BeatWatcherDirective = (function () {
	    function BeatWatcherDirective(_el) {
	        this._el = _el;
	        this.color = { 'active': '#39B54A', 'inactive': '#003B05' };
	        this.checkIfSnapInit = false;
	        this.el = _el.nativeElement;
	    }
	    BeatWatcherDirective.prototype.ngOnChanges = function (changes) {
	        if (this.checkIfSnapInit) {
	            this.check();
	        }
	        ;
	    };
	    BeatWatcherDirective.prototype.ngAfterViewInit = function () {
	        this.s = Snap(this.el);
	        this.checkIfSnapInit = true;
	        this.check();
	    };
	    BeatWatcherDirective.prototype.check = function () {
	        if (this.beat === this.currentBeat) {
	            this.s.attr({ fill: this.color['active'] });
	            this.s.animate({ fill: this.color['inactive'] }, 50, mina.linear);
	        }
	    };
	    __decorate([
	        core_1.Input('beat'), 
	        __metadata('design:type', Number)
	    ], BeatWatcherDirective.prototype, "beat", void 0);
	    __decorate([
	        core_1.Input('current-beat'), 
	        __metadata('design:type', Number)
	    ], BeatWatcherDirective.prototype, "currentBeat", void 0);
	    BeatWatcherDirective = __decorate([
	        core_1.Directive({ selector: '[my-instrument-beat-changer]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], BeatWatcherDirective);
	    return BeatWatcherDirective;
	}());
	exports.BeatWatcherDirective = BeatWatcherDirective;
	

/***/ },

/***/ 692:
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
	var core_1 = __webpack_require__(1);
	var InstrumentSelectorDirective = (function () {
	    function InstrumentSelectorDirective(_el) {
	        this._el = _el;
	        this.value = new core_1.EventEmitter();
	        this.instrument = 'default';
	        this.currentInstrument = '';
	        this.kit = 'default';
	        this.colors = {
	            'active': '#39B54A', 'inactive': '#003B05', 'light-active': 'white',
	            'light-inactive': 'black', 'background-hover': 'lightgray'
	        };
	        this.checkIfSnapInit = false;
	        this.el = _el.nativeElement;
	    }
	    InstrumentSelectorDirective.prototype.ngOnChanges = function (changes) {
	        if (this.checkIfSnapInit) {
	            this.check();
	        }
	        ;
	    };
	    InstrumentSelectorDirective.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.s = Snap(this.el);
	        this.background = this.s.select('rect');
	        this.activeIndicator = this.s.select('circle');
	        this.text = this.s.selectAll('path');
	        this.colors['background'] = this.background.attr('fill');
	        this.checkIfSnapInit = true;
	        this.check();
	        this.s.hover(function (e) {
	            if (_this.instrument !== _this.currentInstrument) {
	                _this.background.animate({ fill: _this.colors['background-hover'] }, 100, mina.easein);
	                _this.s.animate({ transform: 't0,1, s.99, .98' }, 100, mina.elastic);
	            }
	        });
	        this.s.mouseout(function (e) {
	            if (_this.instrument !== _this.currentInstrument) {
	                _this.background.animate({
	                    fill: _this.colors['background'],
	                    transform: ''
	                }, 100, mina.easein);
	                _this.s.animate({ transform: '' }, 100, mina.elastic);
	            }
	        });
	        this.s.click(function (e) {
	            _this.valueOut();
	            _this.check();
	        });
	    };
	    InstrumentSelectorDirective.prototype.check = function () {
	        var _this = this;
	        if (this.instrument === this.currentInstrument) {
	            this.s.animate({ transform: 't0,1.2, s.98, .97' }, 100, mina.elastic);
	            this.activeIndicator.animate({ fill: this.colors['active'] }, 100, mina.easein);
	            this.text.forEach(function (elem) {
	                elem.animate({ fill: _this.colors['light-active'] }, 100, mina.easein);
	            });
	        }
	        else {
	            this.activeIndicator.attr({ fill: this.colors['inactive'] });
	            this.text.forEach(function (elem) { elem.attr({ fill: _this.colors['light-inactive'] }); });
	            this.s.animate({ transform: '' }, 100, mina.elastic);
	        }
	    };
	    InstrumentSelectorDirective.prototype.valueOut = function () {
	        this.value.emit({ value: this.instrument });
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], InstrumentSelectorDirective.prototype, "value", void 0);
	    __decorate([
	        core_1.Input('type'), 
	        __metadata('design:type', String)
	    ], InstrumentSelectorDirective.prototype, "instrument", void 0);
	    __decorate([
	        core_1.Input('current'), 
	        __metadata('design:type', String)
	    ], InstrumentSelectorDirective.prototype, "currentInstrument", void 0);
	    __decorate([
	        core_1.Input('kit'), 
	        __metadata('design:type', String)
	    ], InstrumentSelectorDirective.prototype, "kit", void 0);
	    __decorate([
	        core_1.Input('current-kit'), 
	        __metadata('design:type', String)
	    ], InstrumentSelectorDirective.prototype, "currentKit", void 0);
	    InstrumentSelectorDirective = __decorate([
	        core_1.Directive({ selector: '[my-instrument-button-pusher]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], InstrumentSelectorDirective);
	    return InstrumentSelectorDirective;
	}());
	exports.InstrumentSelectorDirective = InstrumentSelectorDirective;
	

/***/ },

/***/ 693:
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
	var core_1 = __webpack_require__(1);
	var KitSelectorDirective = (function () {
	    function KitSelectorDirective(_el) {
	        this._el = _el;
	        this.value = new core_1.EventEmitter();
	        this.kit = 'default';
	        this.colors = {
	            'active': '#39B54A', 'inactive': '#003B05', 'light-active': 'white',
	            'light-inactive': 'black', 'background-hover': 'lightgray'
	        };
	        this.checkIfSnapInit = false;
	        this.el = _el.nativeElement;
	    }
	    KitSelectorDirective.prototype.ngOnChanges = function (changes) {
	        if (this.checkIfSnapInit) {
	            this.check();
	        }
	        ;
	    };
	    KitSelectorDirective.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.s = Snap(this.el);
	        this.background = this.s.select('rect');
	        this.activeIndicator = this.s.select('circle');
	        this.text = this.s.selectAll('path');
	        this.colors['background'] = this.background.attr('fill');
	        this.checkIfSnapInit = true;
	        this.check();
	        this.s.hover(function (e) {
	            if (_this.kit !== _this.currentKit) {
	                _this.background.animate({ fill: _this.colors['background-hover'] }, 100, mina.easein);
	                _this.s.animate({ transform: 't0,1, s.99, .98' }, 100, mina.elastic);
	            }
	        });
	        this.s.mouseout(function (e) {
	            if (_this.kit !== _this.currentKit) {
	                _this.background.animate({
	                    fill: _this.colors['background'],
	                    transform: ''
	                }, 100, mina.easein);
	                _this.s.animate({ transform: '' }, 100, mina.elastic);
	            }
	        });
	        this.s.click(function (e) {
	            _this.valueOut();
	            _this.check();
	        });
	    };
	    KitSelectorDirective.prototype.check = function () {
	        var _this = this;
	        if (this.kit === this.currentKit) {
	            this.s.animate({ transform: 't0,1.2, s.98, .97' }, 100, mina.elastic);
	            this.activeIndicator.animate({ fill: this.colors['active'] }, 100, mina.easein);
	            this.text.forEach(function (elem) {
	                elem.animate({ fill: _this.colors['light-active'] }, 100, mina.easein);
	            });
	        }
	        else {
	            this.activeIndicator.attr({ fill: this.colors['inactive'] });
	            this.text.forEach(function (elem) { elem.attr({ fill: _this.colors['light-inactive'] }); });
	            this.s.animate({ transform: '' }, 100, mina.elastic);
	        }
	    };
	    KitSelectorDirective.prototype.valueOut = function () {
	        this.value.emit({ value: this.kit });
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], KitSelectorDirective.prototype, "value", void 0);
	    __decorate([
	        core_1.Input('kit'), 
	        __metadata('design:type', String)
	    ], KitSelectorDirective.prototype, "kit", void 0);
	    __decorate([
	        core_1.Input('current-kit'), 
	        __metadata('design:type', String)
	    ], KitSelectorDirective.prototype, "currentKit", void 0);
	    KitSelectorDirective = __decorate([
	        core_1.Directive({ selector: '[my-kit-button-pusher]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], KitSelectorDirective);
	    return KitSelectorDirective;
	}());
	exports.KitSelectorDirective = KitSelectorDirective;
	

/***/ },

/***/ 694:
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
	var core_1 = __webpack_require__(1);
	var KnobsDirective = (function () {
	    function KnobsDirective(_el) {
	        this._el = _el;
	        this.value = new core_1.EventEmitter();
	        this.angle = 0;
	        this.minAngle = -130;
	        this.maxAngle = 130;
	        this.el = _el.nativeElement;
	    }
	    KnobsDirective.prototype.onMouse = function (e) {
	        e.preventDefault();
	        this.rotate(e.deltaY);
	    };
	    KnobsDirective.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.s = Snap(this.el);
	        this.circ = this.s.select('circle');
	        this.rotate(this.calculateInitialAngleFromValue(), true);
	        this.circ.drag(function (dx, dy) {
	            _this.rotate(dx);
	        }, function () { _this.resetMaxandMin(); });
	    };
	    KnobsDirective.prototype.resetMaxandMin = function () {
	        if (this.angle > 0 && this.angle > this.maxAngle) {
	            this.angle = this.maxAngle - 1;
	        }
	        if (this.angle < 0 && this.angle < this.minAngle) {
	            this.angle = this.minAngle + 1;
	        }
	    };
	    KnobsDirective.prototype.rotate = function (dx, firstTurn) {
	        if (this.angle > 0 && this.angle > this.maxAngle) {
	            this.angle = this.maxAngle - 1;
	        }
	        if (this.angle < 0 && this.angle < this.minAngle) {
	            this.angle = this.minAngle + 1;
	        }
	        if (this.angle > this.maxAngle) {
	            return;
	        }
	        if (this.angle < this.minAngle) {
	            return;
	        }
	        this.cx = this.circ.attr('cx');
	        this.cy = this.circ.attr('cy');
	        this.angle += dx / 10;
	        if (firstTurn !== true) {
	            this.valueOut();
	        }
	        this.s.transform('r' + [this.angle, this.cx, this.cy]);
	    };
	    KnobsDirective.prototype.calculateValue = function () {
	        var valueOut = (this.angle - this.minAngle) / (this.maxAngle - this.minAngle);
	        if (valueOut > 1) {
	            valueOut = 1;
	        }
	        if (valueOut < 0) {
	            valueOut = 0;
	        }
	        return valueOut;
	    };
	    KnobsDirective.prototype.calculateInitialAngleFromValue = function () {
	        var angle = this.startingAngle * (this.maxAngle - this.minAngle) + this.minAngle;
	        return angle * 10;
	    };
	    KnobsDirective.prototype.valueOut = function () {
	        this.value.emit({ value: this.calculateValue() });
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], KnobsDirective.prototype, "value", void 0);
	    __decorate([
	        core_1.Input('starting'), 
	        __metadata('design:type', Number)
	    ], KnobsDirective.prototype, "startingAngle", void 0);
	    __decorate([
	        core_1.HostListener('mousewheel', ['$event']), 
	        __metadata('design:type', Function), 
	        __metadata('design:paramtypes', [Object]), 
	        __metadata('design:returntype', void 0)
	    ], KnobsDirective.prototype, "onMouse", null);
	    KnobsDirective = __decorate([
	        core_1.Directive({ selector: '[my-knob-turner]' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], KnobsDirective);
	    return KnobsDirective;
	}());
	exports.KnobsDirective = KnobsDirective;
	

/***/ },

/***/ 695:
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
	var core_1 = __webpack_require__(1);
	var StartButtonDirective = (function () {
	    function StartButtonDirective(_el) {
	        this._el = _el;
	        this.value = new core_1.EventEmitter();
	        this.start = false;
	        this.checkIfSnapInit = false;
	        this.colors = { 'active-text': 'yellow', 'inactive-text': 'white' };
	        this.el = _el.nativeElement;
	    }
	    StartButtonDirective.prototype.ngOnChanges = function (changes) {
	        if (this.checkIfSnapInit) {
	            this.check();
	        }
	        ;
	    };
	    StartButtonDirective.prototype.ngAfterViewInit = function () {
	        var _this = this;
	        this.s = Snap(this.el);
	        this.background = this.s.select('rect#start_button');
	        this.text = this.s.selectAll('#start_text_button > path');
	        this.checkIfSnapInit = true;
	        this.check();
	        this.s.hover(function (e) {
	            if (_this.start === true) {
	                _this.text.forEach(function (x) { x.animate({ fill: _this.colors['active-text'] }, 100, mina.easein); });
	                _this.s.animate({ transform: 't0,1, s.99, .98' }, 100, mina.elastic);
	            }
	        });
	        this.s.mouseout(function (e) {
	            if (_this.start === true) {
	                _this.text.forEach(function (x) { x.animate({ fill: _this.colors['inactive-text'] }, 100, mina.easein); });
	                _this.s.animate({ transform: '' }, 100, mina.elastic);
	            }
	        });
	        this.s.click(function (e) {
	            _this.valueOut();
	            _this.check();
	        });
	    };
	    StartButtonDirective.prototype.check = function () {
	        var _this = this;
	        if (this.start === true) {
	            this.text.forEach(function (x) { x.animate({ fill: _this.colors['active-text'] }, 100, mina.easein); });
	            this.s.animate({ transform: 't0,1, s.99, .98' }, 100, mina.elastic);
	        }
	        if (this.start === false) {
	            this.text.forEach(function (x) { x.animate({ fill: _this.colors['inactive-text'] }, 100, mina.easein); });
	            this.s.animate({ transform: '' }, 100, mina.elastic);
	        }
	        this.start = !this.start;
	    };
	    StartButtonDirective.prototype.valueOut = function () {
	        this.value.emit({ value: this.start });
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], StartButtonDirective.prototype, "value", void 0);
	    StartButtonDirective = __decorate([
	        core_1.Directive({
	            selector: '[my-start-button-pusher]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], StartButtonDirective);
	    return StartButtonDirective;
	}());
	exports.StartButtonDirective = StartButtonDirective;
	

/***/ },

/***/ 696:
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
	var core_1 = __webpack_require__(1);
	var drum_machine_service_1 = __webpack_require__(697);
	var SEQUENCER_LINEUP_1 = __webpack_require__(689);
	var knobs_directive_1 = __webpack_require__(694);
	var beat_selector_directive_1 = __webpack_require__(690);
	var instrument_selector_directive_1 = __webpack_require__(692);
	var beat_watcher_directive_1 = __webpack_require__(691);
	var startbutton_directive_1 = __webpack_require__(695);
	var kit_selector_directive_1 = __webpack_require__(693);
	var DrumMachineComponent = (function () {
	    function DrumMachineComponent(drumService) {
	        this.drumService = drumService;
	        this.sequencerLineUp = SEQUENCER_LINEUP_1.SEQUENCER_LINEUP;
	        this.currentType = 'kick';
	        this.drumService.setSequencerLineUp(this.sequencerLineUp);
	        this.drumService.init();
	    }
	    DrumMachineComponent.prototype.start = function () { this.drumService.play(); };
	    DrumMachineComponent.prototype.stop = function () { this.drumService.stop(); };
	    DrumMachineComponent.prototype.update = function () { this.drumService.setSequencerLineUp(this.sequencerLineUp); };
	    DrumMachineComponent.prototype.ngOnDestroy = function () { this.stop(); };
	    DrumMachineComponent.prototype.togglePlay = function (e) {
	        if (e.value === true) {
	            this.drumService.play();
	        }
	        else {
	            this.drumService.stop();
	        }
	    };
	    DrumMachineComponent.prototype.instrumentSet = function (event) {
	        this.currentType = event.value;
	    };
	    DrumMachineComponent.prototype.updateRhythmSettings = function (event, beatNum) {
	        this.sequencerLineUp['rhythmSettings'][beatNum - 1][this.currentType] = event.value;
	        this.update();
	    };
	    DrumMachineComponent.prototype.updateInstrumentSettings = function (event, instrument, knob) {
	        this.sequencerLineUp['instrumentSettings'][instrument][knob] = event.value;
	        this.update();
	    };
	    DrumMachineComponent.prototype.updateProjectSettings = function (event, valueToUpdate) {
	        this.sequencerLineUp['projectSettings'][valueToUpdate] = event.value;
	        this.update();
	    };
	    DrumMachineComponent = __decorate([
	        core_1.Component({
	            directives: [
	                knobs_directive_1.KnobsDirective,
	                beat_selector_directive_1.BeatSelectorDirective,
	                instrument_selector_directive_1.InstrumentSelectorDirective,
	                beat_watcher_directive_1.BeatWatcherDirective,
	                startbutton_directive_1.StartButtonDirective,
	                kit_selector_directive_1.KitSelectorDirective
	            ],
	            moduleId: module.id,
	            providers: [drum_machine_service_1.DrumMachineService],
	            selector: 'my-drum-machine',
	            styles: [__webpack_require__(469).toString()],
	            template: __webpack_require__(461),
	        }), 
	        __metadata('design:paramtypes', [drum_machine_service_1.DrumMachineService])
	    ], DrumMachineComponent);
	    return DrumMachineComponent;
	}());
	exports.DrumMachineComponent = DrumMachineComponent;
	

/***/ },

/***/ 697:
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
	var core_1 = __webpack_require__(1);
	var TimeWorker = __webpack_require__(706);
	var DrumMachineService = (function () {
	    function DrumMachineService() {
	        this.timeWorker = null;
	        this.rhythmIndex = 1;
	        this.nextNoteTime = 0;
	        this.lookahead = 25.0;
	        this.scheduleAheadTime = .5;
	        this.noteLength = .25;
	        this.isPlaying = false;
	        this.sequencerLineUp = null;
	        this.instruments = ['kick', 'snare', 'lowtom', 'midtom', 'hitom', 'rimshot', 'clap', 'hihat', 'cymbal'];
	        this.sampleBuffers = {
	            '808': {},
	            '909': {},
	            'acoustic': {}
	        };
	    }
	    DrumMachineService.prototype.init = function () {
	        var _this = this;
	        this.context = new AudioContext();
	        this.loadDrumKit();
	        this.timeWorker = new TimeWorker();
	        this.timeWorker.onmessage = function (e) {
	            if (e.data === 'tick') {
	                _this.schedule();
	            }
	            else {
	                console.log(e.data);
	            }
	        };
	        // WHY?
	        this.timeWorker.postMessage({ 'interval': this.lookahead });
	    };
	    DrumMachineService.prototype.play = function () {
	        if (!this.isPlaying) {
	            this.context = new AudioContext();
	            this.isPlaying = true;
	            this.noteTime = 0;
	            this.rhythmIndex = 0;
	            this.nextNoteTime = 0;
	            this.startTime = this.context.currentTime;
	            this.timeWorker.postMessage('start');
	        }
	    };
	    DrumMachineService.prototype.stop = function () {
	        if (this.isPlaying) {
	            this.isPlaying = false;
	            this.timeWorker.postMessage('stop');
	            this.context.close();
	        }
	    };
	    DrumMachineService.prototype.setSequencerLineUp = function (sequence) {
	        this.sequencerLineUp = sequence;
	    };
	    DrumMachineService.prototype.schedule = function () {
	        // Normalize the current time
	        this.currentTime = this.context.currentTime - this.startTime;
	        // Only set notes within the specified schedule ahead time
	        while (this.nextNoteTime < this.context.currentTime + this.scheduleAheadTime) {
	            this.setBeat(this.nextNoteTime, this.rhythmIndex);
	            this.nextNote();
	        }
	    };
	    DrumMachineService.prototype.nextNote = function () {
	        this.tempo = ((this.sequencerLineUp['projectSettings']['tempo'] * 120) + 60) / 2;
	        var secondsPerBeat = 60 / this.tempo;
	        this.nextNoteTime += this.noteLength * secondsPerBeat;
	        this.rhythmIndex++;
	        if (this.rhythmIndex === 16) {
	            this.rhythmIndex = 0;
	        }
	    };
	    DrumMachineService.prototype.setBeat = function (time, beat) {
	        var _this = this;
	        this.setBeatValueAtTime(time, beat);
	        this.instruments.forEach(function (instrument) {
	            if (_this.sequencerLineUp['rhythmSettings'][beat][instrument]) {
	                _this.playSample(instrument, time, beat);
	            }
	        });
	    };
	    DrumMachineService.prototype.setBeatValueAtTime = function (time, beat) {
	        var _this = this;
	        // Sets the beat when it is actually going to be fired. Due to the lookahead.
	        window.setTimeout(function () {
	            _this.sequencerLineUp['projectSettings']['beat'] = beat;
	        }, (time - this.context.currentTime) * 1000);
	    };
	    DrumMachineService.prototype.playSample = function (drumType, time, beat) {
	        var source = this.context.createBufferSource(), level = this.level(drumType), decay = this.decay(drumType, time), volume = this.globalVolume(beat), attack = this.attack(drumType, time), distortion = this.distortion(drumType), distortionGain = this.distortionGain(drumType);
	        source.connect(decay);
	        decay.connect(attack);
	        attack.connect(level);
	        level.connect(distortion);
	        distortion.connect(distortionGain);
	        distortionGain.connect(volume);
	        volume.connect(this.context.destination);
	        source.buffer = this.sampleBuffers[this.sequencerLineUp['projectSettings']['kit']][drumType];
	        source.start(time);
	    };
	    /**
	     * * Functions used to handle the instrument's knobs
	    */
	    DrumMachineService.prototype.globalVolume = function (beat) {
	        var level = this.context.createGain(), volume = this.sequencerLineUp['projectSettings']['volume'];
	        if (volume > 1) {
	            volume = 1;
	        }
	        // Handles the accent knobs data
	        if (beat === 0 || beat === 4 || beat === 8 || beat === 12) {
	            volume += this.sequencerLineUp['projectSettings']['accent'];
	        }
	        level.gain.value = volume;
	        return level;
	    };
	    DrumMachineService.prototype.level = function (type) {
	        var level = this.context.createGain(), levelLevel = this.sequencerLineUp['instrumentSettings'][type]['level'];
	        if (levelLevel > 1) {
	            levelLevel = 1;
	        }
	        level.gain.value = levelLevel;
	        return level;
	    };
	    DrumMachineService.prototype.decay = function (type, time) {
	        var decay = this.context.createGain(), decayLevel = 1 - this.sequencerLineUp['instrumentSettings'][type]['decay'];
	        if (decayLevel > 1) {
	            decayLevel = 1;
	        }
	        decay.gain.setValueAtTime(1, time);
	        var decayValue = (time + this.noteLength + (this.noteLength * .25)) - (this.noteLength * (1 - decayLevel));
	        decay.gain.linearRampToValueAtTime(0, decayValue);
	        return decay;
	    };
	    DrumMachineService.prototype.attack = function (type, time) {
	        var attack = this.context.createGain(), attackLevel = this.sequencerLineUp['instrumentSettings'][type]['attack'] * .1; // the .1 is to make it so it doesnt get too soft
	        if (attackLevel > 1) {
	            attackLevel = 1;
	        }
	        attack.gain.setValueAtTime(0, time);
	        attack.gain.linearRampToValueAtTime(1, time + (this.noteLength * (attackLevel * 10)));
	        return attack;
	    };
	    DrumMachineService.prototype.distortion = function (type) {
	        var distortion = this.context.createWaveShaper();
	        var distortionAmount = this.sequencerLineUp['instrumentSettings'][type]['distortion'] * 100;
	        // Function found on Mozilla Developer
	        function makeDistortionCurve(amount) {
	            var k = typeof amount === 'number' ? amount : 50, n_samples = 44100, curve = new Float32Array(n_samples), deg = Math.PI / 180, i = 0, x;
	            for (; i < n_samples; ++i) {
	                x = i * 2 / n_samples - 1;
	                curve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
	            }
	            return curve;
	        }
	        ;
	        distortion.curve = makeDistortionCurve(distortionAmount);
	        distortion.oversample = 'none';
	        return distortion;
	    };
	    // Used to offset the additional volume created by distortion
	    DrumMachineService.prototype.distortionGain = function (type) {
	        var level = this.context.createGain(), levelLevel = this.sequencerLineUp['instrumentSettings'][type]['level'];
	        if (levelLevel > 1) {
	            levelLevel = 1;
	        }
	        level.gain.value = .8 - (this.sequencerLineUp['instrumentSettings'][type]['distortion'] * .5);
	        return level;
	    };
	    DrumMachineService.prototype.loadDrumKit = function () {
	        var _this = this;
	        var kits = ['808', '909', 'acoustic'], samples = this.instruments, urlBody = 'samples/';
	        var _loop_1 = function(kit) {
	            var _loop_2 = function(sample) {
	                var request = new XMLHttpRequest();
	                request.open('GET', urlBody + kits[kit] + '/' + samples[sample] + '.wav', true);
	                request.responseType = 'arraybuffer';
	                request.onload = function () {
	                    _this.context.decodeAudioData(request.response).then(function (decodedData) {
	                        _this.sampleBuffers[kits[kit]][samples[sample]] = decodedData;
	                    }, function (e) { console.log('Error with drum audio data' + e.err); });
	                };
	                request.send();
	            };
	            for (var sample = 0; sample < samples.length; sample++) {
	                _loop_2(sample);
	            }
	        };
	        for (var kit = 0; kit < kits.length; kit++) {
	            _loop_1(kit);
	        }
	    };
	    DrumMachineService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], DrumMachineService);
	    return DrumMachineService;
	}());
	exports.DrumMachineService = DrumMachineService;
	

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tictactoe_component_1 = __webpack_require__(337);
	var setup_component_1 = __webpack_require__(712);
	var board_component_1 = __webpack_require__(716);
	var end_component_1 = __webpack_require__(713);
	exports.TicTacToeRoutes = [
	    {
	        component: tictactoe_component_1.TicTacToeComponent,
	        path: 'tictactoe',
	        children: [
	            {
	                component: setup_component_1.SetupComponent,
	                path: 'setup'
	            },
	            {
	                component: board_component_1.BoardComponent,
	                path: 'board'
	            },
	            {
	                component: end_component_1.EndComponent,
	                path: 'new'
	            }
	        ]
	    }
	];
	

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(30);
	var tictactoe_routes_1 = __webpack_require__(701);
	var home_component_1 = __webpack_require__(686);
	var calculator_component_1 = __webpack_require__(688);
	var tictactoe_component_1 = __webpack_require__(337);
	var drum_machine_component_1 = __webpack_require__(696);
	exports.routes = [
	    {
	        component: home_component_1.HomeComponent,
	        path: ''
	    },
	    {
	        component: calculator_component_1.CalculatorComponent,
	        path: 'calculator'
	    },
	    {
	        component: tictactoe_component_1.TicTacToeComponent,
	        path: 'tictactoe'
	    }
	].concat(tictactoe_routes_1.TicTacToeRoutes, [
	    {
	        component: drum_machine_component_1.DrumMachineComponent,
	        path: 'drum'
	    }
	]);
	exports.APP_ROUTER_PROVIDERS = [
	    router_1.provideRouter(exports.routes)
	];
	

/***/ },

/***/ 705:
/***/ function(module, exports) {

	// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

	var URL = window.URL || window.webkitURL;
	module.exports = function(content, url) {
		try {
			try {
				var blob;
				try { // BlobBuilder = Deprecated, but widely implemented
					var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
					blob = new BlobBuilder();
					blob.append(content);
					blob = blob.getBlob();
				} catch(e) { // The proposed API
					blob = new Blob([content]);
				}
				return new Worker(URL.createObjectURL(blob));
			} catch(e) {
				return new Worker('data:application/javascript,' + encodeURIComponent(content));
			}
		} catch(e) {
			return new Worker(url);
		}
	}

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		return __webpack_require__(705)("/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\texports: {},\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\tloaded: false\n/******/ \t\t};\n\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.loaded = true;\n\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n\n\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(0);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ function(module, exports) {\n\n\tvar timerID=null;\n\tvar interval=100;\n\n\tself.onmessage=function(e){\n\t\tif (e.data==\"start\") {\n\t\t\tconsole.log(\"starting\");\n\t\t\ttimerID=setInterval(function(){ postMessage(\"tick\"); },interval)\n\t\t}\n\t\telse if (e.data.interval) {\n\t\t\tinterval=e.data.interval;\n\t\t\tif (timerID) {\n\t\t\t\tclearInterval(timerID);\n\t\t\t\ttimerID=setInterval(function(){postMessage(\"tick\");},interval)\n\t\t\t}\n\t\t}\n\t\telse if (e.data==\"stop\") {\n\t\t\tconsole.log(\"stopping\");\n\t\t\tclearInterval(timerID);\n\t\t\ttimerID=null;\n\t\t}\n\t};\n\n\tpostMessage('worker called');\n\n/***/ }\n/******/ ]);\n//# sourceMappingURL=main.map", __webpack_require__.p + "f32a803771fe39de9f1d.worker.js");
	};

/***/ },

/***/ 711:
/***/ function(module, exports) {

	module.exports = "<div class=\"game-start\">\n    <h2>Let's Play Some TicTacToe</h2>\n    <h6>Enter Your Names and Select a Tile</h6>\n    <div class=\"input-group\">\n        <input name=\"userOneName\" [(ngModel)]=\"userOneName\" (change)=\"updateUserOne()\" type=\"text\" class=\"form-control\" placeholder=\"Name\">\n        <span class=\"input-group-btn\">\n                        <button (click)=\"toggleTile()\" class=\"btn btn-tile\">\n                            <span *ngIf=\"userOneTileType == 0\">X</span>\n        <span *ngIf=\"userOneTileType == 1\">O</span>\n        </button>\n        </span>\n    </div>\n    <div class=\"input-group\">\n        <input name=\"userTwoName\" [(ngModel)]=\"userTwoName\" (change)=\"updateUserTwo()\" type=\"text\" class=\"form-control\" placeholder=\"Name\">\n        <span class=\"input-group-btn\">\n                        <button (click)=\"toggleTile()\" class=\"btn btn-tile\">\n                            <span *ngIf=\"userTwoTileType == 0\">X</span>\n        <span *ngIf=\"userTwoTileType == 1\">O</span>\n        </button>\n        </span>\n    </div>\n    <button (click)=\"gameStart($event)\" class=\"btn btn-block btn-tile\">Start the Game!</button>\n</div>"

/***/ },

/***/ 712:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var tictactoe_service_1 = __webpack_require__(136);
	var SetupComponent = (function () {
	    function SetupComponent(router, ticTacToeService) {
	        this.router = router;
	        this.ticTacToeService = ticTacToeService;
	    }
	    SetupComponent.prototype.ngOnInit = function () {
	        this.userOne = this.ticTacToeService.getUserOne();
	        this.userTwo = this.ticTacToeService.getUserTwo();
	        this.userOneName = this.userOne.name;
	        this.userTwoName = this.userTwo.name;
	        this.userOneTileType = this.userOne.tileType;
	        this.userTwoTileType = this.userTwo.tileType;
	    };
	    SetupComponent.prototype.toggleTile = function () {
	        console.log('toggle');
	        this.ticTacToeService.toggleTile();
	        this.updateUserOne(true);
	        this.updateUserTwo(true);
	    };
	    SetupComponent.prototype.updateUserOne = function (withoutSetting) {
	        if (withoutSetting == null) {
	            console.log('without');
	            this.ticTacToeService.setUserOne(this.userOneName, this.userOneTileType);
	        }
	        this.userOne = this.ticTacToeService.getUserOne();
	        this.userOneName = this.userOne.name;
	        this.userOneTileType = this.userOne.tileType;
	    };
	    SetupComponent.prototype.updateUserTwo = function (withoutSetting) {
	        if (withoutSetting == null) {
	            console.log('without');
	            this.ticTacToeService.setUserTwo(this.userTwoName, this.userTwoTileType);
	        }
	        this.userTwo = this.ticTacToeService.getUserTwo();
	        this.userTwoName = this.userTwo.name;
	        this.userTwoTileType = this.userTwo.tileType;
	    };
	    SetupComponent.prototype.gameStart = function () {
	        this.ticTacToeService.setUserOne(this.userOneName, this.userOneTileType);
	        this.ticTacToeService.setUserTwo(this.userTwoName, this.userTwoTileType);
	        this.router.navigate(['/tictactoe', '/play']);
	        event.preventDefault();
	        event.stopPropagation();
	    };
	    SetupComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'my-setup',
	            template: __webpack_require__(711),
	            styles: [__webpack_require__(310).toString()],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, tictactoe_service_1.TicTacToeService])
	    ], SetupComponent);
	    return SetupComponent;
	}());
	exports.SetupComponent = SetupComponent;
	

/***/ },

/***/ 713:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var tictactoe_service_1 = __webpack_require__(136);
	var EndComponent = (function () {
	    function EndComponent(ticTacToeService, router) {
	        this.ticTacToeService = ticTacToeService;
	        this.router = router;
	        this.isTie = false;
	    }
	    EndComponent.prototype.ngOnInit = function () {
	        this.winner = this.ticTacToeService.getWinner();
	        if (this.winner === null) {
	            this.isTie = true;
	        }
	    };
	    EndComponent.prototype.playAgain = function () {
	        this.router.navigate(['/tictactoe', '/play']);
	    };
	    EndComponent.prototype.newGame = function () {
	        this.ticTacToeService.resetGame();
	        this.router.navigate(['/tictactoe', '/new']);
	    };
	    EndComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'my-end',
	            template: __webpack_require__(714),
	            styles: [__webpack_require__(310).toString()],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [tictactoe_service_1.TicTacToeService, router_1.Router])
	    ], EndComponent);
	    return EndComponent;
	}());
	exports.EndComponent = EndComponent;
	

/***/ },

/***/ 714:
/***/ function(module, exports) {

	module.exports = "<div class=\"game-end\">\n    <div class=\"info-text\" *ngIf=\"!isTie\">\n        <h2>{{winner.name}} Won!</h2>\n        <h5>Current Score: {{winner.score}}</h5>\n    </div>\n    <div class=\"info-text\" *ngIf='isTie'>\n        <h2 >It was a tie!</h2>\n        <h6>Try Again!</h6>\n    </div>\n    <div class=\"btn-group btn-group-justified\" role=\"group\">\n        <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" (click)=\"playAgain()\" class=\"btn btn-tile\">Play Again!</button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n        <button type=\"button\" (click)=\"newGame()\" class=\"btn btn-tile\">New Game</button>\n        </div>\n    </div>\n</div>\n"

/***/ },

/***/ 715:
/***/ function(module, exports) {

	module.exports = "<div class=\"game-board\">\n    <span class=\"h4 current-player\">{{currentPlayer.name}}'s Turn</span>\n    <div class=\"board-rows\">\n        <div class=\"board-row\" *ngFor=\"let tileRow of tileBoard; let y = index\">\n            <div *ngFor=\"let tile of tileRow; let x = index\" class=\"board-tile\" (click)=\"setTile(x,y)\">\n                <div [ngClass]=\"{'x': tileBoard[y][x]===0,'o':tileBoard[y][x]===1, 'null':tileBoard[y][x]===2 }\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"scoreboard\">\n        <div class=\"player player-one\">\n            <div>{{userOne.name}}</div>\n            <div>Score: {{userOne.score}}</div>\n        </div>\n        <h5 class=\"scoreboard-title\">Score</h5>\n\n        <div class=\"player player-two\">\n            <div>{{userTwo.name}}</div>\n            <div>Score: {{userTwo.score}}</div>\n        </div>   \n        <span class=\"stretch\"></span>     \n    </div>\n</div>\n"

/***/ },

/***/ 716:
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
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(30);
	var tictactoe_service_1 = __webpack_require__(136);
	var BoardComponent = (function () {
	    function BoardComponent(ticTacToeService, router) {
	        this.ticTacToeService = ticTacToeService;
	        this.router = router;
	        this.tileSetCount = 0;
	        this.currentPlayer = this.userOne;
	        this.tileBoard = [
	            [tictactoe_service_1.TileType.null, tictactoe_service_1.TileType.null, tictactoe_service_1.TileType.null],
	            [tictactoe_service_1.TileType.null, tictactoe_service_1.TileType.null, tictactoe_service_1.TileType.null],
	            [tictactoe_service_1.TileType.null, tictactoe_service_1.TileType.null, tictactoe_service_1.TileType.null]
	        ];
	        this.userOne = this.ticTacToeService.getUserOne();
	        this.userTwo = this.ticTacToeService.getUserTwo();
	    }
	    BoardComponent.prototype.ngOnInit = function () {
	        this.setPlayer();
	        this.ticTacToeService.resetWinner();
	    };
	    BoardComponent.prototype.ngOnDestroy = function () {
	        this.resetTileBoard();
	    };
	    BoardComponent.prototype.setPlayer = function () {
	        if (this.currentPlayer === this.userOne) {
	            this.currentPlayer = this.userTwo;
	        }
	        else if (this.currentPlayer === this.userTwo) {
	            this.currentPlayer = this.userOne;
	        }
	        else {
	            this.currentPlayer = this.userOne;
	        }
	    };
	    BoardComponent.prototype.setTile = function (xaxis, yaxis) {
	        if (this.tileBoard[yaxis][xaxis] !== tictactoe_service_1.TileType.null) {
	            return;
	        }
	        if (xaxis === 0) {
	            if (yaxis === 0) {
	                this.tileBoard[0][0] = this.currentPlayer.tileType;
	            }
	            else if (yaxis === 1) {
	                this.tileBoard[1][0] = this.currentPlayer.tileType;
	            }
	            else if (yaxis === 2) {
	                this.tileBoard[2][0] = this.currentPlayer.tileType;
	            }
	        }
	        else if (xaxis === 1) {
	            if (yaxis === 0) {
	                this.tileBoard[0][1] = this.currentPlayer.tileType;
	            }
	            else if (yaxis === 1) {
	                this.tileBoard[1][1] = this.currentPlayer.tileType;
	            }
	            else if (yaxis === 2) {
	                this.tileBoard[2][1] = this.currentPlayer.tileType;
	            }
	        }
	        else if (xaxis === 2) {
	            if (yaxis === 0) {
	                this.tileBoard[0][2] = this.currentPlayer.tileType;
	            }
	            else if (yaxis === 1) {
	                this.tileBoard[1][2] = this.currentPlayer.tileType;
	            }
	            else if (yaxis === 2) {
	                this.tileBoard[2][2] = this.currentPlayer.tileType;
	            }
	        }
	        this.tileSetCount++;
	        if (this.checkForWinner(xaxis, yaxis)) {
	            this.currentPlayer.score++;
	            this.ticTacToeService.setWinner(this.currentPlayer);
	            this.router.navigate(['/tictactoe', '/end']);
	        }
	        if (this.tileSetCount === 9) {
	            this.router.navigate(['/tictactoe', '/end']);
	        }
	        this.setPlayer();
	    };
	    BoardComponent.prototype.resetTileBoard = function () {
	        this.tileSetCount = 0;
	        for (var i = 0; i < this.tileBoard.length; i++) {
	            for (var j = 0; j < this.tileBoard[i].length; j++) {
	                this.tileBoard[i][j] = tictactoe_service_1.TileType.null;
	            }
	        }
	    };
	    BoardComponent.prototype.checkForWinner = function (x, y) {
	        if (this.checkHorizontalWin(y)) {
	            return true;
	        }
	        if (this.checkVerticalWin(x)) {
	            return true;
	        }
	        if (this.checkDiagonalWin()) {
	            return true;
	        }
	        return false;
	    };
	    BoardComponent.prototype.checkHorizontalWin = function (y) {
	        var count = 0;
	        for (var x = 0; x < this.tileBoard.length; x++) {
	            if (this.tileBoard[y][x] === this.currentPlayer.tileType) {
	                count++;
	            }
	            if (count === 3) {
	                return true;
	            }
	        }
	    };
	    BoardComponent.prototype.checkVerticalWin = function (x) {
	        var count = 0;
	        for (var y = 0; y < this.tileBoard.length; y++) {
	            if (this.tileBoard[y][x] === this.currentPlayer.tileType) {
	                count++;
	            }
	            if (count === 3) {
	                return true;
	            }
	        }
	    };
	    BoardComponent.prototype.checkDiagonalWin = function () {
	        var tb = this.tileBoard;
	        if (tb[0][0] === tb[1][1] && tb[1][1] === tb[2][2] && tb[1][1] !== tictactoe_service_1.TileType.null) {
	            return true;
	        }
	        if (tb[0][2] === tb[1][1] && tb[1][1] === tb[2][0] && tb[1][1] !== tictactoe_service_1.TileType.null) {
	            return true;
	        }
	    };
	    BoardComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'my-board',
	            template: __webpack_require__(715),
	            styles: [__webpack_require__(470).toString()],
	            directives: [
	                router_1.ROUTER_DIRECTIVES
	            ]
	        }), 
	        __metadata('design:paramtypes', [tictactoe_service_1.TicTacToeService, router_1.Router])
	    ], BoardComponent);
	    return BoardComponent;
	}());
	exports.BoardComponent = BoardComponent;
	

/***/ }

});
//# sourceMappingURL=main.map