import {Component, Input} from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'my-form',
    templateUrl: './app/form/form.component.html',
    providers: [UpperCasePipe]
})

export class FormComponent { 
    @Input() show: boolean;   
    private fname: string = '';
    private phoneNumber: string = '';
    private cardBrand: string = 'N/A';
    private cardNumber: string = '';

    constructor(private upperCasePipe: UpperCasePipe) { }

    upperCase(name: string) {
        if (this.fname.length > 0 && this.fname.length <= 1) {
            let firstLetter = this.fname[0];
            this.fname = this.upperCasePipe.transform(firstLetter) + this.fname.substring(1);
            this.fname.trim;
        }
    }

    phoneNumberFormat() {
        if (this.phoneNumber.length == 3) {
            this.phoneNumber = this.phoneNumber + '-';
        }
        if (this.phoneNumber.length == 7) {
            this.phoneNumber = this.phoneNumber + '-';
        }
        if (this.phoneNumber.length > 11) {
            this.phoneNumber = this.phoneNumber.substring(0,11);
        }
    }

    cardNumberFormat() {
        /* 
            TODO:
            - set up validations for all forms
            - have card number format as typing
            - get actual algorithim - regex - to get the card brand as the digits are entered
            - have picture of card logo take over for cardbrand
            - 
        */ 

        this.setCardType();
    }

    setCardType() {
        if (this.cardNumber[0] === '1') {
            this.cardBrand = 'Visa';
        }
        else if (this.cardNumber[0] === '2') {
            this.cardBrand = 'Discover';
        }
        else if (this.cardNumber[0] != '1') {
            this.cardBrand = 'N/A';
        }
    }

}
