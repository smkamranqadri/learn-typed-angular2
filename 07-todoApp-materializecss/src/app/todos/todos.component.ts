import {Component} from 'angular2/core';
import {todoComponent} from '../todo/todo.component';
import {Todo} from '../todo/todo';

@Component({
	selector: 'todos',
	host: {
		class: 'row'
	},
	templateUrl: 'app/todos/todos.component.html',
	// styleUrls,
	directives: [todoComponent]
})
export class todosComponent {
	todos: Todo[]

	constructor(){
		this.todos = [];
		this.todos.push(new Todo(this.todos.length + 1, 'Task 1', true));
		this.todos.push(new Todo(this.todos.length + 1, 'Task 2', false));
		this.todos.push(new Todo(this.todos.length + 1, 'Task 3', true));
		this.todos.push(new Todo(this.todos.length + 1, 'Task 4', true));
		this.todos.push(new Todo(this.todos.length + 1, 'Task 5', false));
	}

	addTodo(task: HTMLInputElement){
		if (task.value) {
			this.todos.push(new Todo(this.todos.length + 1, task.value, false));
			task.value = '';
		}
	}

	deleteTodo(task: Todo){
		this.todos.splice(this.todos.indexOf(task, 0),1);
	}
}
