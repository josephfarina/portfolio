"use strict";
/* tslint:disable:no-unused-variable */
var calculator_component_1 = require('./calculator.component');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
testing_1.describe('Testing Quote Component:', function () {
    var tcb;
    testing_1.beforeEachProviders(function () { return [
        testing_2.TestComponentBuilder,
        calculator_component_1.CalculatorComponent
    ]; });
    testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (_tcb) {
        tcb = _tcb;
    }));
    testing_1.it('should fulfill dependencies', testing_1.injectAsync([testing_2.TestComponentBuilder], function (tcb) {
        return tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) { });
    }));
    testing_1.describe('toggleNegative():', function () {
        testing_1.it('should toggle negative', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('5');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('-5');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('5');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('toggle should work if start as negative', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('-5');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('5');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('-5');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('5');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('toggle should do nothing for 0', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('0');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('0');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('0');
                calc.toggleNegative();
                testing_1.expect(calc.displayValue).toBe('0');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
    });
    testing_1.describe('setDisplayValue():', function () {
        testing_1.it('display should concat numbers', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('6');
                testing_1.expect(calc.displayValue).toBe('6');
                calc.setDisplayValue('9');
                testing_1.expect(calc.displayValue).toBe('69');
                calc.setDisplayValue('56');
                testing_1.expect(calc.displayValue).toBe('6956');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('should let you type 0 after a number', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('1');
                calc.setDisplayValue('0');
                testing_1.expect(calc.displayValue).toBe('10');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('should let you type 0 after a number when operator is negative', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setOperator('(-)');
                calc.setDisplayValue('1');
                calc.setDisplayValue('0');
                testing_1.expect(calc.displayValue).toBe('10');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('should not allow multiple zero\'s at the beginning', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('0');
                testing_1.expect(calc.displayValue).toBe('0');
                calc.setDisplayValue('0');
                calc.setDisplayValue('0');
                testing_1.expect(calc.displayValue).toBe('0');
                calc.setDisplayValue('3');
                testing_1.expect(calc.displayValue).toBe('3');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
    });
    testing_1.describe('setOperator():', function () {
        testing_1.it('should set currentValue', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('365');
                calc.setOperator('+');
                testing_1.expect(calc.currentValue).toBe(365);
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('should set the currentvalue from the displayvalue', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('365');
                calc.setOperator('-');
                testing_1.expect(typeof calc.currentValue).toEqual('number');
                testing_1.expect(calc.currentValue).toBe(365);
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
    });
    testing_1.describe('equals():', function () {
        testing_1.it('should add', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('2');
                calc.setOperator('+');
                testing_1.expect(calc.currentValue).toBe(2);
                calc.setDisplayValue('2');
                calc.equals();
                testing_1.expect(calc.displayValue).toBe('4');
                calc.setOperator('+');
                testing_1.expect(calc.currentValue).toBe(4);
                calc.setDisplayValue('40');
                calc.equals();
                testing_1.expect(calc.displayValue).toBe('44');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('should update display when operator\'s pressed', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('10');
                calc.setOperator('+');
                testing_1.expect(calc.currentValue).toBe(10);
                testing_1.expect(calc.displayValue).toBe('10');
                calc.setDisplayValue('5');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('should update when you press an operator', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('10');
                calc.setOperator('+');
                calc.setDisplayValue('10');
                calc.setOperator('+');
                testing_1.expect(calc.displayValue).toBe('20');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
        testing_1.it('should subtract', function (done) {
            tcb.createAsync(calculator_component_1.CalculatorComponent).then(function (fixture) {
                var calc = fixture.componentInstance;
                calc.setDisplayValue('10');
                calc.setOperator('+');
                calc.setDisplayValue('10');
                calc.setOperator('+');
                testing_1.expect(calc.displayValue).toBe('20');
                done();
            })
                .catch(function (e) { return done.fail(e); });
        });
    });
});
//# sourceMappingURL=calculator.component.spec.js.map