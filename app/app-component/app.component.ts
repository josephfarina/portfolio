import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';
import { ProjectSelectionsComponent } from './project-selections/project-selections.component';

import { CodeContainer } from './../shared/code-container/code-container.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        ProjectViewComponent,
        ProjectSelectionsComponent,
        CodeContainer]
})

export class AppComponent implements OnInit {
    private showEnabled: boolean = false;

    ngOnInit() {
        this.showEnabled = false;
    }

    codeToDisplay = [
        {
            name: 'HTML',
            type: 'html',
            code: `     &lt;div class="calculator"&gt;
      <;pre *ngIf="showVariables">;
          displayValue {{displayValue}}
          operatorValue {{operatorValue}}
          currentValue {{currentValue}}
          valueToOperate {{valueToOperate}}
          operatorPressed {{operatorPressed}}
          isNegative {{isNegative}}
          displayResetAfterOperator {{displayResetAfterOperator}}
      <;/pre>;
          <;div class="row no-gutters">;
              <;!-- display -->;
              <;input class="col-xs-12 button display" [(ngModel)]="displayValue" type="number" />;
          <;/div>;
          
          <;div class="button-group">;

              <;div class="row no-gutters">; <;!-- first row -->;
                  <;div class="col-xs-3" (click)="clear()">;
                      <;div class="button functions clear">;<;span class="button-content">;C<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="delete()">;
                      <;div class="button functions">;<;span class="button-content">;Del<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="toggleNegative()">;
                      <;div class="button functions">;<;span class="button-content">;+/-<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setOperator('/')">;
                      <;div class="button operator">;<;span class="button-content">;&#247;<;/span>;<;/div>;
                  <;/div>;
              <;/div>;

              <;div class="row no-gutters">; <;!-- second row -->;
                  <;div class="col-xs-3" (click)="setDisplayValue(7)">;
                      <;div class="button number">;<;span class="button-content">;7<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setDisplayValue(8)">;
                      <;div class="button number">;<;span class="button-content">;8<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setDisplayValue(9)">;
                      <;div class="button number">;<;span class="button-content">;9<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setOperator('*')">;
                      <;div class="button operator">;<;span class="button-content">;*<;/span>;<;/div>;
                  <;/div>;
              <;/div>;

              <;div class="row no-gutters">; <;!-- third row -->;
                  <;div class="col-xs-3" (click)="setDisplayValue(4)">;
                      <;div class="button number">;<;span class="button-content">;4<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setDisplayValue(5)">;
                      <;div class="button number">;<;span class="button-content">;5<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setDisplayValue(6)">;
                      <;div class="button number">;<;span class="button-content">;6<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setOperator('(-)')">;
                      <;div class="button operator">;<;span class="button-content">;-<;/span>;<;/div>;
                  <;/div>;
              <;/div>;

              <;div class="row no-gutters">; <;!-- fourth row -->;
                  <;div class="col-xs-3" (click)="setDisplayValue(1)">;
                      <;div class="button number">;<;span class="button-content">;1<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setDisplayValue(2)">;
                      <;div class="button number">;<;span class="button-content">;2<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setDisplayValue(3)">;
                      <;div class="button number">;<;span class="button-content">;3<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setOperator('+')">;
                      <;div class="button operator">;<;span class="button-content">;+<;/span>;<;/div>;
                  <;/div>;
              <;/div>;

              <;div class="row no-gutters">;
                  <;!-- fith row -->;
                  <;div class="col-xs-6" (click)="setDisplayValue(0)">;
                      <;div class="button number double-button">;<;span class="button-content">;0<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="setDisplayValue('.')">;
                      <;div class="button number">;<;span class="button-content">;.<;/span>;<;/div>;
                  <;/div>;
                  <;div class="col-xs-3" (click)="equals()">;
                      <;div class="button operator equals">;<;span class="button-content">;=<;/span>;<;/div>;
                  <;/div>;
              <;/div>;

          <;/div>;
      <;/div>;
        `
        },
        {
            name: 'Typescript',
            type: 'typescript',
            code: `
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
          // toggle variables in the html
          private showVariables: boolean = false;

          private displayValue: string = '0';
          private operatorValue: string = null;
          private currentValue: number = 0;
          private valueToOperate: number = 0;
          private operatorPressed: boolean = false;
          private displayResetAfterOperator: boolean;
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

              if (this.operatorPressed && !this.displayResetAfterOperator) {
                  this.displayResetAfterOperator = true;
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
              this.displayResetAfterOperator = false;
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
                  case '(-)':
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
        `
        }        
    ]
}

// stupid hack to have a blank router at times when others arent selected
@Component({ selector: 'blank', template: '' }) export class EmptyComponent { }
