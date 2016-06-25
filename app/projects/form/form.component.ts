import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-form',
    templateUrl: './app/form/form.component.html',
    styleUrls: ['../stylesheets/app/form/form.component.style.css'],
    providers: [UpperCasePipe],
    directives: [ROUTER_DIRECTIVES] 
})

export class CCFormComponent { 
    private fname: string = '';
    private phoneNumber: string = '';
    private cardBrand: string = 'N/A';
    private cardNumber: string = '';

    constructor(private upperCasePipe: UpperCasePipe) { }

    onSubmit() {}


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

    // cardNumberFormat() {
        /* 
            TODO:
            - set up validations for all forms
            - have card number format as typing
            - get actual algorithim - regex - to get the card brand as the digits are entered
            - have picture of card logo take over for cardbrand
            - 
        */ 
        // MASTERCARD	51-55	16	mod 10
        // VISA	4	13, 16	mod 10
        // AMEX	34 
        // 37	15	mod 10
        // Diners Club/
        // Carte Blanche	300-305
        // 36
        // 38	14	mod 10
        // Discover	6011	16	mod 10
        // enRoute	2014
        // 2149	15	any
        // JCB	3	16	mod 10
        // JCB	2131
        // 1800	15	mod 10


        // set this up

        // this.setCardType('visa');
    // }
// 
    setCardType(cardType:string) {
        if (this.cardNumber[0] === '1') {
            this.cardBrand = 'visa';
        }
        else if (this.cardNumber[0] === '2') {
            this.cardBrand = 'discover';
        }
        else if (this.cardNumber[0] != '1') {
            this.cardBrand = 'N/A';
        }
    }

}
