# Angular CLI 7 + Angular 7 + Swagger-UI + Bootstrap 4.1 + FontAwesome 5 example app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Start the project

Run `npm install` and `ng serve`. Server will start at port 4200. Go to localhost:4200.

## How the project was created

Here are the commands and the steps that were used to create this project 

### Angular CLI commands

```
# Create a new Angular project with Angular CLI
$ ng new swagger --directory swagger-ui-angular6 --routing true --skip-tests true --inline-style true --style=css

# Add the needed dependencies
$ npm install @fortawesome/fontawesome-free@5.7.2
$ npm install popper.js@1.14.7
$ npm install jquery@3.3.1
$ npm install bootstrap@4.3.1
$ npm install @ng-bootstrap/ng-bootstrap@4.1.0
$ npm install swagger-ui@3.21.0
$ npm install rxjs-compat@6.4.0
$ npm install stream@0.0.2

# Create a new Swagger component
$ ng generate component swagger --spec false --module app --export true --inline-style true
```

## Configuration

In `angular.json` file add :

```
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "node_modules/swagger-ui/dist/swagger-ui.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.css",
  "src/jumbotron.css",
  {
    "input": "src/styles.css"
  }
],
"scripts": [
  "node_modules/jquery/dist/jquery.slim.js",
  "node_modules/popper.js/dist/umd/popper.js",
  "node_modules/bootstrap/dist/js/bootstrap.js"
]
```

In `app.module.ts` add NG Bootstrap

```
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

  imports: [
    NgbModule.forRoot()
  ],
```

## References

* https://github.com/shockey/swagger-ui-angular4
