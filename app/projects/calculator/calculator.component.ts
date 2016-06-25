import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-calculator',
    templateUrl: './app/projects/calculator/calculator.component.html',
    styleUrls: ['../stylesheets/app/calculator/calculator.component.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class CalculatorComponent {
    private displayValue: string = '0';
    private operatorValue: string = null;
    private currentValue: number = 0;
    private valueToOperate: number = 0;
    private isNegative: boolean;

    toggleNegative() {
        this.isNegative = !this.isNegative;
         if (this.isNegative && this.displayValue[0] !== '-') {
            this.displayValue = '-' + this.displayValue;
        }
        if (!this.isNegative && this.displayValue[0] === '-') {
            this.displayValue = this.displayValue.substr(1);
        }
    }

    setDisplayValue(digit?: string) {
        // dont allow multiple zeros at the beginning
        if (this.displayValue === '0') { this.displayValue = ''; }
        // dont let multiple decimals
        if (this.displayValue.indexOf('.') >= 0 && digit === '.') { digit = ''; }
        this.displayValue += digit;
    }
 
    setOperator(operator: string) {
        this.operatorValue = operator;
        this.currentValue = Number(this.displayValue);
        this.displayValue = '0';
    }

    equals() {
        this.valueToOperate = Number(this.displayValue);

        switch (this.operatorValue) {
            case '/':
                this.currentValue = this.currentValue / this.valueToOperate;
                break;
            case '*':
                this.currentValue *= this.valueToOperate;
                break;
            case '-':
                this.currentValue -= this.valueToOperate;
                break;
            case '+':
                this.currentValue += this.valueToOperate;
                break;
        }

        this.displayValue = String(this.currentValue);
    }

    clear() {
        this.displayValue = '0';
        this.currentValue = 0;
        this.valueToOperate = 0;
    }

    delete() {
        this.displayValue = this.displayValue.substr(0,this.displayValue.length - 1);
    }

}