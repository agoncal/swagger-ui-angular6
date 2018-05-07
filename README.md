# Angular CLI 6 + Angular 6 + Swagger-UI + Bootstrap 4 + FontAwesome 5 example app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0-rc.6.

## Start the project

Run `yarn install` and `ng serve`. Server will start at port 4200. Go to localhost:4200.

## How the project was created

Here are the commands and the steps that were used to create this project 

### Angular CLI commands

```
# Create a new Angular project with Angular CLI
$ ng new swagger --directory swagger-ui-angular6 --routing true --skip-tests true --inline-style true

# Add the needed dependencies
$ yarn add @fortawesome/fontawesome-free@5.1.0-4
$ yarn add popper.js@1.14.3
$ yarn add jquery@3.3.1
$ yarn add bootstrap@4.1.1
$ yarn add @ng-bootstrap/ng-bootstrap@2.0.0
$ yarn add swagger-ui@3.14.1
$ yarn add rxjs-compat@6.1.0

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

https://github.com/shockey/swagger-ui-angular4
