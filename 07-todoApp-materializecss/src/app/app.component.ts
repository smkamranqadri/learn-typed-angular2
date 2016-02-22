import {Component} from 'angular2/core';
import {todosComponent} from './todos/todos.component';

@Component({
	selector: 'todoapp',
	host: {
		class: 'container'
	},
	directives: [todosComponent],
	template: '<todos></todos>'
})
export class AppComponent {

	constructor() {
	}

}
