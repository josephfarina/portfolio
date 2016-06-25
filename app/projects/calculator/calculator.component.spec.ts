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

describe('Testing Quote Component', () => {  
    it('should fulfill dependencies', injectAsync(
            [TestComponentBuilder], (tcb:any) => {
                return tcb
                .createAsync(CalculatorComponent).then((fixture:any) => {
                });
            }
        ));
    it('should return true' , () => {
        expect(true).toBe(false);
    })

});
