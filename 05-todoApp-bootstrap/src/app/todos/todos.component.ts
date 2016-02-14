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
		this.todos.push(new Todo('Task 1', true));
		this.todos.push(new Todo('Task 2', false));
		this.todos.push(new Todo('Task 3', true));
		this.todos.push(new Todo('Task 4', true));
		this.todos.push(new Todo('Task 5', false));
	}

	addTodo(task: HTMLInputElement){
		if (task.value) {
			this.todos.push(new Todo(task.value, false));
			task.value = '';
		}
	}

	deleteTodo(task: Todo){
		this.todos.splice(this.todos.indexOf(task, 0),1);
	}
}
