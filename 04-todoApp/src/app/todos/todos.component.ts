import {Component} from 'angular2/core';
import {todoComponent} from '../todo/todo.component';

@Component({
	selector: 'todos',
	templateUrl: 'app/todos/todos.component.html',
	// styleUrls,
	directives: [todoComponent]
})
export class todosComponent {

}
