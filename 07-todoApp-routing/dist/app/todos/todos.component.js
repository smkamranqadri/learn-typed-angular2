System.register(['angular2/core', '../todo/todo.component', '../todo/todo'], function(exports_1) {
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
    var core_1, todo_component_1, todo_1;
    var todosComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            todosComponent = (function () {
                function todosComponent() {
                    this.todos = [];
                    this.todos.push(new todo_1.Todo('Task 1', true));
                    this.todos.push(new todo_1.Todo('Task 2', false));
                    this.todos.push(new todo_1.Todo('Task 3', true));
                    this.todos.push(new todo_1.Todo('Task 4', true));
                    this.todos.push(new todo_1.Todo('Task 5', false));
                }
                todosComponent.prototype.ngAfterViewInit = function () {
                    componentHandler.upgradeAllRegistered();
                };
                todosComponent.prototype.addTodo = function (task) {
                    if (task.value) {
                        this.todos.push(new todo_1.Todo(task.value, false));
                        task.value = '';
                    }
                };
                todosComponent.prototype.deleteTodo = function (task) {
                    this.todos.splice(this.todos.indexOf(task, 0), 1);
                };
                todosComponent = __decorate([
                    core_1.Component({
                        selector: 'todos',
                        templateUrl: 'app/todos/todos.component.html',
                        host: {
                            class: 'mdl-cell mdl-cell--12-col'
                        },
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
