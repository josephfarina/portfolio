//todo: weird bug that stops toggling the form after the third click
// get it working and then create a list of ways to easily toggle all of the UI elements ill be creating -- this will be my portfolio

import { Component } from '@angular/core';
import { FormComponent } from './form/form.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [FormComponent]
})

export class AppComponent { 
    private showForm:boolean;

    toggleForm() {
        this.showForm = false;
    }
}
