import {Component} from 'angular2/core';

@Component({
	selector: 'helloWorld',
	template: '<h1>Hello {{ msg }}</h1>'
})
export class AppComponent {
	msg : string

	constructor() {
		this.msg = 'World'
	}
}