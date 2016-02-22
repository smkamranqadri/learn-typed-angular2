import {Component} from 'angular2/core';
import {navBar} from './navbar/navbar.component';
import {signinComponent} from './signin/signin.component'
import {todosComponent} from './todos/todos.component';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@RouteConfig([
	{path: '/todos', name: 'Todos', component: todosComponent},
	{path: '/signin', name: 'Signin', component: signinComponent}
])

@Component({
	selector: 'todoapp',
	directives: [navBar, RouterOutlet],
	template: `
				<navbar></navbar>
				<div class="mdl-layout mdl-js-layout">
					<main class="mdl-layout__content">
						<div class="mdl-grid">
							<router-outlet></router-outlet>
						</div>
					</main>
				</div>
			`
})
export class AppComponent {
	constructor() {
	}
}
