/* tslint:disable:no-unused-variable */
import { CalculatorComponent } from './calculator.component';

import {
    expect, it, iit, xit,
    describe, ddescribe, xdescribe,
    beforeEach, beforeEachProviders, withProviders,
    async, inject, injectAsync
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

describe('Testing Quote Component:', () => {
    let tcb: any;

    beforeEachProviders(() => [
        TestComponentBuilder,
        CalculatorComponent
    ]);

    beforeEach(inject([TestComponentBuilder], (_tcb:any) => {
        tcb = _tcb
    }));

    it('should fulfill dependencies', injectAsync(
        [TestComponentBuilder], (tcb: any) => {
            return tcb.createAsync(CalculatorComponent).then((fixture: any) => {});
        }
    ));

    describe('toggleNegative():', () => {

        it('should toggle negative', (done:any) => {
            tcb.createAsync(CalculatorComponent).then((fixture:any) => {
                let calc = fixture.componentInstance;

                calc.setDisplayValue('5');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('-5');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('5');

                done();
            })
                .catch((e:any) => done.fail(e));
        });

        it('toggle should work if start as negative', (done:any) => {
            tcb.createAsync(CalculatorComponent).then((fixture:any) => {
                let calc = fixture.componentInstance;

                calc.setDisplayValue('-5');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('5');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('-5');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('5');

                done();
            })
                .catch((e:any) => done.fail(e));
        });

        it('toggle should do nothing for 0', (done:any) => {
            tcb.createAsync(CalculatorComponent).then((fixture:any) => {
                let calc = fixture.componentInstance;

                calc.setDisplayValue('0');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('0');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('0');
                calc.toggleNegative();
                expect(calc.displayValue).toBe('0');

                done();
            })
                .catch((e:any) => done.fail(e));
        });

    });

    describe('setDisplayValue():', () => {

        it('display should concat numbers', (done:any) => {
            tcb.createAsync(CalculatorComponent).then((fixture:any) => {
                let calc = fixture.componentInstance;

                calc.setDisplayValue('6');
                expect(calc.displayValue).toBe('6');
                calc.setDisplayValue('9');
                expect(calc.displayValue).toBe('69');
                calc.setDisplayValue('56');
                expect(calc.displayValue).toBe('6956');

                done();
            })
                .catch((e:any) => done.fail(e));
        });

        it('should not allow multiple zero\'s at the beginning', (done:any) => {
            tcb.createAsync(CalculatorComponent).then((fixture:any) => {
                let calc = fixture.componentInstance;

                calc.setDisplayValue('0');
                expect(calc.displayValue).toBe('0');
                calc.setDisplayValue('0');
                calc.setDisplayValue('0');
                expect(calc.displayValue).toBe('0');
                calc.setDisplayValue('3');
                expect(calc.displayValue).toBe('3');

                done();
            })
                .catch((e:any) => done.fail(e));
        });

    });

    describe('setOperator():', () => {

        it('should set operator and clear the display', (done:any) => {
            tcb.createAsync(CalculatorComponent).then((fixture:any) => {
                let calc = fixture.componentInstance;

                calc.setDisplayValue('365')
                calc.setOperator('+');
                expect(calc.displayValue).toBe('0');
    
                done();
            })
                .catch((e:any) => done.fail(e));
        });

        it('should set the currentvalue from the displayvalue', (done:any) => {
            tcb.createAsync(CalculatorComponent).then((fixture:any) => {
                let calc = fixture.componentInstance;

                calc.setDisplayValue('365')
                calc.setOperator('-');
                expect(calc.displayValue).toBe('0');
                expect(typeof calc.currentValue).toEqual('number');
                expect(calc.currentValue).toBe(365);
    
                done();
            })
                .catch((e:any) => done.fail(e));
        });        

    });

});
