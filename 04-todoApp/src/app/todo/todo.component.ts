import {Component} from 'angular2/core';
import {Todo} from './todo';

@Component({
	selector: 'todo',
	templateUrl: 'app/todo/todo.component.html',
	// styleUrls
	inputs: ['todo']
})
export class todoComponent {
	todo: Todo

	constructor(){

	}
}
