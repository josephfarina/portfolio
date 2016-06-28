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

    beforeEach(inject([TestComponentBuilder], (_tcb: any) => {
        tcb = _tcb

    }));

    it('should fulfill dependencies', injectAsync(
        [TestComponentBuilder], (tcb: any) => {
            return tcb.createAsync(TicTacToeComponent).then((fixture: any) => { });
        }
    ));

    describe('setPlayer():', () => {

        it('should toggle between userOne and userTwo', (done: any) => {
            tcb.createAsync(TicTacToeComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                ttt.currentPlayer = ttt.userOne;
                ttt.setPlayer();
                expect(ttt.currentPlayer).toBe(ttt.userTwo);
                ttt.setPlayer();
                expect(ttt.currentPlayer).toBe(ttt.userOne);

                done();
            })
                .catch((e: any) => done.fail(e));
        });

        it('should toggle between userTwo and userOne', (done: any) => {
            tcb.createAsync(TicTacToeComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                ttt.currentPlayer = ttt.userTwo;
                ttt.setPlayer();
                expect(ttt.currentPlayer).toBe(ttt.userOne);
                ttt.setPlayer();
                expect(ttt.currentPlayer).toBe(ttt.userTwo);

                done();
            })
                .catch((e: any) => done.fail(e));
        });

    });

    describe('setTile():', () => {

        it('should toggle between userOne and userTwo', (done: any) => {
            tcb.createAsync(TicTacToeComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                ttt.currentPlayer = ttt.userOne;
                ttt.setPlayer();
                expect(ttt.currentPlayer).toBe(ttt.userTwo);
                ttt.setPlayer();
                expect(ttt.currentPlayer).toBe(ttt.userOne);

                done();
            })
                .catch((e: any) => done.fail(e));
        });

    });

});

export interface Player {
    name: string,
    score: number
}

export const userOne: Player = {
    score: 0,
    name: 'Player 1'
}

export const userTwo: Player = {
    score: 0,
    name: 'Player 2'
}