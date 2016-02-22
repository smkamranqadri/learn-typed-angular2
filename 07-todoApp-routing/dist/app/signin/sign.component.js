System.register(['angular2/core', './user'], function(exports_1) {
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
    var core_1, user_1;
    var signinComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            signinComponent = (function () {
                function signinComponent() {
                    this.user = new user_1.User('admin', 'admin');
                }
                signinComponent.prototype.signin = function (username, password, snackbar) {
                    if (user.signin(username.value, password.value)) {
                        username.value = "";
                        password.value = "";
                        this.errMsg = false;
                    }
                    else {
                        this.errMsg.message = "Error in Signin Process, Try again!";
                        this.errMsg.timeout = 2000;
                        snackbar.MaterialSnackbar.showSnackbar(this.errMsg);
                    }
                };
                signinComponent = __decorate([
                    core_1.Component({
                        selector: 'signin',
                        templateUrl: 'app/signin/signin.component.html',
                        host: {
                            class: 'mdl-cell mdl-cell--12-col'
                        }
                    }), 
                    __metadata('design:paramtypes', [])
                ], signinComponent);
                return signinComponent;
            }());
            exports_1("signinComponent", signinComponent);
            addTodo(task, HTMLInputElement);
            {
                if (task.value) {
                    this.todos.push(new Todo(task.value, false));
                    task.value = '';
                }
            }
            deleteTodo(task, Todo);
            {
                this.todos.splice(this.todos.indexOf(task, 0), 1);
            }
        }
    }
});
