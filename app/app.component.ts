import { Component } from '@angular/core';
import { FormComponent } from './form/form.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [FormComponent]
})

export class AppComponent { }
