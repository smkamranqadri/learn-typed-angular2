System.register([], function(exports_1) {
    "use strict";
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(newUserName, newPassword) {
                    this.username = newUserName;
                    this.password = newPassword;
                    this.status = false;
                }
                User.prototype.signin = function (username, password) {
                    if (this.username === username && this.password === password) {
                        this.status = true;
                        return this.status;
                    }
                    else {
                        this.status = false;
                        return this.status;
                    }
                };
                return User;
            }());
            exports_1("User", User);
        }
    }
});
