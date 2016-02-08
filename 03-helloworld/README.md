### Hello World App in Angular 2 with Typescript via Automated Workflow using Gulp

#### Important Notes

> Angular 2 2.0.0-beta.0 required specific version for other dependencies so make sure before installing.
> If you are going to type dependencies in package.json then make sure to not mention '^' with version number because it will install latest version.
> If you are going to install by CLI then mention version with module name like this

	npm install systemjs@0.19.11

> to run this example type npm start.

> Make sure your all typescript files will be in app folder as in systemjs config function we had defined custom package named app so he will search files in app folder.

> In Index.html at system.config section we have mentioned format: register becuase we have mentioned module: system in tsconfig, here we will tell system.js to import module which are export for systemjs.

> In this example we are going to use gulp as our Automated Workflow Manager.

	gulp

> By typing above  command gulp will run default task which is first clean the 'dist' folder then copy our index.html file, then all the assets, then transpile our typescript files and move then to the 'dist' folder. Now 'dist' folder is ready to be deployed

	gulp start

> By typing above command gulp will run start task which will going to first run build task whch does above work then start http server on Port 3000 and reload every time when changes accrued. Also it will watch the changes in Typescript, Html, Css and build that particular file accordingly.

	gulp build

> By typing above command gulp will run build your project in 'dist' folder.

	gulp serve

> By typing above command gulp will start serving your project fom  'dist' folder on Port '8000'.
