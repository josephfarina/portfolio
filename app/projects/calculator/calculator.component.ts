import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-calculator',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class CalculatorComponent {
    private displayValue: string = '0';
    private operatorValue: string = null;
    private currentValue: number = 0;
    private valueToOperate: number = 0;
    private operatorPressed: boolean = false;
    private isNegative: boolean;

    toggleNegative() {
        if (this.displayValue[0] === '0') { return; }

        if (this.displayValue[0] === '-') {
            this.isNegative = true;
        }

        this.isNegative = !this.isNegative;

        if (this.isNegative && this.displayValue[0] !== '-') {
            this.displayValue = '-' + this.displayValue;
        }
        if (!this.isNegative && this.displayValue[0] === '-') {
            this.displayValue = this.displayValue.substr(1);
        }
    }

    setDisplayValue(digit?: string) {
        // dont allow zero at the beginning

        if (this.operatorPressed) {
            this.displayValue = '0';
        }

        if (this.displayValue === '0') {
            this.displayValue = '';
        }
        if (this.displayValue === '0' && digit === '0') {
            this.displayValue = this.displayValue;
            return;
        }
        // dont let multiple decimals
        if (this.displayValue.indexOf('.') >= 0 && digit === '.') {
            digit = '';
        }
        this.displayValue += digit;
    }

    setOperator(operator: string) {
        this.operatorValue = operator;
        if (this.operatorPressed) {
            this.equals();
        } else {
            this.currentValue = Number(this.displayValue);     
        }
        // this.currentValue = Number(this.displayValue);
        this.operatorPressed = true;
        // this.displayValue = '0';
    }

    equals() {
        this.operatorPressed = false;
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
        this.displayValue = this.displayValue.substr(0, this.displayValue.length - 1);
    }

}
