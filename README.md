# AngularReactiveForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## NOTE

Please concern putting double quotes in JSON while writing it

## JSON Example
[{"controlType": "textbox","key": "name","label": "Name","required": true,"order": 1},{"controlType": "dropdown","key": "country","label": "Country","options": [{"key": "usa",  "value": "United States of America"},{"key": "be",  "value": "Brazil"},{"key": "other", "value": "Other"}],"order": "3"},{"controlType": "checkbox","key": "agree","label": "I accept terms and services","type": "checkbox","required": "true","order": "4"},{"controlType": "radio","key": "sex","label": "Sex","type": "radio","options": [{ "key": "male", "value": "Male" },{ "key": "female", "value":"Female" }],"order": "5"},{"controlType": "textarea","key": "message","label": "Mesage","type": "textarea","order": "6"},{"controlType": "button","key": "cancel","label": "cancel","type": "button"},{"controlType": "button","key": "cancel","label": "save","type": "button"}]
