declare var componentHandler: any;

import {Component, AfterViewInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {User} from './user';

@Component({
	selector: 'signin',
	templateUrl: 'app/signin/signin.component.html',
	host: {
		class: 'mdl-cell mdl-cell--12-col'
	}
})
export class signinComponent implements AfterViewInit {
	user : User
    msg : {
		message : String
		timeout : Number
	}

	constructor(private _router : Router){
		this.user = new User('admin', 'admin');
	}

	ngAfterViewInit() {
		componentHandler.upgradeAllRegistered()
	}

    signin(username: HTMLInputElement, password: HTMLInputElement, snackbar: HTMLDivElement){
        if (this.user.signin(username.value, password.value)){
            username.value = "";
            password.value = "";
			this._router.navigate(['Todos'])
			this.showmessage("Signin successful", snackbar)
        } else {
            this.showmessage("Error in Signin Process, Try again!", snackbar)
        }
    }

	showmessage(message: String, snackbar: HTMLDivElement){
		this.msg = {
			message: message,
			timeout: 2000
		};
		snackbar.MaterialSnackbar.showSnackbar(this.msg);
	}
}
