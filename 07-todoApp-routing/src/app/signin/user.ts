export class User {
    username: String
    password: String
    status: Boolean

    constructor(newUserName: String, newPassword: String){
        this.username = newUserName;
        this.password = newPassword;
        this.status = false;
    }

    signin(username: String, password: String){
        if(this.username === username && this.password === password) {
            this.status = true;
            return this.status;
        } else {
            this.status = false;
            return this.status;
        }
    }
}
