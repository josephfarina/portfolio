/* tslint:disable:no-unused-variable */
import { TicTacToeComponent } from './tictactoe.component';

import {
    expect, it, iit, xit,
    describe, ddescribe, xdescribe,
    beforeEach, beforeEachProviders, withProviders,
    async, inject, injectAsync
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';
import { By }             from '@angular/platform-browser';
import { provide, ViewMetadata }        from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

describe('Testing Quote Component:', () => {
    let tcb: any;

    beforeEachProviders(() => [
        TestComponentBuilder,
        TicTacToeComponent
    ]);

    beforeEach(inject([TestComponentBuilder], (_tcb:any) => {
        tcb = _tcb
    }));

    it('should fulfill dependencies', injectAsync(
        [TestComponentBuilder], (tcb: any) => {
            return tcb.createAsync(TicTacToeComponent).then((fixture: any) => {});
        }
    ));

    describe('toggleNegative():', () => {

        it('should toggle negative', (done:any) => {

        });

    });

});
