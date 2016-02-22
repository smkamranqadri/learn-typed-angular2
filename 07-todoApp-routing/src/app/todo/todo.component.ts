import {Component, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Component({
	selector: 'todo',
	templateUrl: 'app/todo/todo.component.html',
	inputs: ['todo'],
	outputs: ['deleteRequestEvent']
})
export class todoComponent {
	todo: Todo
	deleteRequestEvent: EventEmitter<Todo>

	constructor(){
		this.deleteRequestEvent = new EventEmitter();
	}

	deleteRequest(){
		this.deleteRequestEvent.emit(this.todo);
	}
}
