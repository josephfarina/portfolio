import {Component} from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'my-form',
    templateUrl: './app/form/form.component.html',
    providers: [UpperCasePipe]
})

export class FormComponent {
    private fname: string = '';

    constructor(private upperCasePipe: UpperCasePipe) { }

    upperCase() {
        if (this.fname.length > 0 && this.fname.length <= 1) {
            let firstLetter = this.fname[0];
            this.fname = this.upperCasePipe.transform(firstLetter) + this.fname.substring(1);
            this.fname.trim;
        }
    }

}
