# Todo App in Angular 2 with Typescript via Automated Workflow (Routing)

## Important Notes

    Seed taken from Todo App - 06 example and implementing Routing.

### Follow below steps

-   Add router file in index.html.

```html
    <script src="lib/router.dev.js"></script>
```

-   Make sure base url is set in index.html.

```html
    <base href="/">
```

-   First thing First bootstraping the router for which include below import and add dependency in bootstrap function in boot.ts file.

```javascript
    import {ROUTER_PROVIDERS} from 'angular2/router';
bootstrap(AppComponent, [ROUTER_PROVIDERS]);
```
