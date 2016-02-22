declare var componentHandler: any;

import {Component, EventEmitter, AfterViewInit} from 'angular2/core';
import {Todo} from './todo';

@Component({
	selector: '.todo',
	templateUrl: 'app/todo/todo.component.html',
	// styleUrls
	inputs: ['todo'],
	outputs: ['deleteRequestEvent']
})
export class todoComponent implements AfterViewInit {
	todo: Todo
	deleteRequestEvent: EventEmitter<Todo>

	constructor(){
		this.deleteRequestEvent = new EventEmitter();
	}

	ngAfterViewInit() {
		// componentHandler.upgradeAllRegistered()
    }

	deleteRequest(){
		this.deleteRequestEvent.emit(this.todo);
	}
}
