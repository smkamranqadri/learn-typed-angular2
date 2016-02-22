import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {User} from '../signin/user';

@Component({
	selector: 'navbar',
	templateUrl: 'app/navbar/navbar.component.html',
	directives: [RouterLink]
})
export class navBar {
	user : User
	constructor(){
	}
}
