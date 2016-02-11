System.register([], function(exports_1) {
    "use strict";
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(newTask) {
                    this.task = newTask;
                    this.createdDate = new Date();
                }
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
