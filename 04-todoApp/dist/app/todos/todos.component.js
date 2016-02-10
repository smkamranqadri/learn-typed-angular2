System.register(['angular2/core', '../todo/todo.component'], function(exports_1) {
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
    var core_1, todo_component_1;
    var todosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            }],
        execute: function() {
            todosComponent = (function () {
                function todosComponent() {
                }
                todosComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        templateUrl: 'app/todos/todos.component.html',
                        // styleUrls,
                        directives: [todo_component_1.todoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], todosComponent);
                return todosComponent;
            }());
            exports_1("todosComponent", todosComponent);
        }
    }
});
