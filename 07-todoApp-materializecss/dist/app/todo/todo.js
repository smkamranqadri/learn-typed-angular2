System.register([], function(exports_1) {
    "use strict";
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(id, newTask, newStatus) {
                    this.id = id;
                    this.task = newTask;
                    this.status = newStatus;
                    this.createdDate = new Date();
                }
                return Todo;
            }());
            exports_1("Todo", Todo);
        }
    }
});
