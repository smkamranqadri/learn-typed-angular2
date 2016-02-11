import {Component} from 'angular2/core';
import {todoComponent} from '../todo/todo.component';
import {Todo} from '../todo/todo';

@Component({
	selector: 'todos',
	templateUrl: 'app/todos/todos.component.html',
	// styleUrls,
	directives: [todoComponent]
})
export class todosComponent {
	todos: Todo[]

	constructor(){
		this.todos = [];
		this.todos.push(new Todo('Task 1'));
		this.todos.push(new Todo('Task 2'));
		this.todos.push(new Todo('Task 3'));
		this.todos.push(new Todo('Task 4'));
		this.todos.push(new Todo('Task 5'));
	}

	addTodo(task: HTMLInputElement){
		if (task.value) {
			this.todos.push(new Todo(task.value));
			task.value = '';
		}
	}
}
