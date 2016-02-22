System.register(['angular2/core', './navbar/navbar.component', './signin/signin.component', './todos/todos.component', 'angular2/router'], function(exports_1) {
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
    var core_1, navbar_component_1, signin_component_1, todos_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (signin_component_1_1) {
                signin_component_1 = signin_component_1_1;
            },
            function (todos_component_1_1) {
                todos_component_1 = todos_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/todos', name: 'Todos', component: todos_component_1.todosComponent },
                        { path: '/signin', name: 'Signin', component: signin_component_1.signinComponent }
                    ]),
                    core_1.Component({
                        selector: 'todoapp',
                        directives: [navbar_component_1.navBar, router_1.RouterOutlet],
                        template: "\n\t\t\t\t<navbar></navbar>\n\t\t\t\t<div class=\"mdl-layout mdl-js-layout\">\n\t\t\t\t\t<main class=\"mdl-layout__content\">\n\t\t\t\t\t\t<div class=\"mdl-grid\">\n\t\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</main>\n\t\t\t\t</div>\n\t\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
