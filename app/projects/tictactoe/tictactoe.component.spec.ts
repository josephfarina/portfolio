/* tslint:disable:no-unused-variable */
import { TicTacToeComponent, Player } from './tictactoe.component';

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

describe('TicTacToe Component:', () => {
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

    describe('checkWinner()', () => {

        it('horizontal x should return true if three in a row', (done: any) => {
            tcb.createAsync(TicTacToeComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                ttt.tileBoard= [
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null]
                ];

                // set the tiletype to be equal
                ttt.tileBoard[0][0] = TileType.O;
                expect(ttt.tileBoard[0][0]).toEqual(TileType.O);
                ttt.tileBoard[0][1] = TileType.O;
                expect(ttt.tileBoard[0][1]).toEqual(TileType.O);
                ttt.tileBoard[0][2] = TileType.O;
                expect(ttt.tileBoard[0][2]).toEqual(TileType.O);
                expect(ttt.checkForWinner()).toBe(true);

                ttt.tileBoard= [
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null]
                ];

                // set the tiletype to be equal
                ttt.tileBoard[1][0] = TileType.O;
                expect(ttt.tileBoard[1][0]).toEqual(TileType.O);
                ttt.tileBoard[1][1] = TileType.O;
                expect(ttt.tileBoard[1][1]).toEqual(TileType.O);
                ttt.tileBoard[1][2] = TileType.O;
                expect(ttt.tileBoard[1][2]).toEqual(TileType.O);
                expect(ttt.checkForWinner()).toBe(true);

                ttt.tileBoard= [
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null]
                ];

                // set the tiletype to be equal
                ttt.tileBoard[2][0] = TileType.O;
                expect(ttt.tileBoard[2][0]).toEqual(TileType.O);
                ttt.tileBoard[2][1] = TileType.O;
                expect(ttt.tileBoard[2][1]).toEqual(TileType.O);
                ttt.tileBoard[2][2] = TileType.O;
                expect(ttt.tileBoard[2][2]).toEqual(TileType.O);
                expect(ttt.checkForWinner()).toBe(true);


                // set one tile wrong and excepct failure
                ttt.tileBoard[0][1] = TileType.X;
                expect(ttt.tileBoard[0][1]).toEqual(TileType.X);
                console.log('seciond check for winner');
                expect(ttt.checkForWinner()).toBe(false);
                
                done();
            })
                .catch((e: any) => done.fail(e));
        });

        it('vertical x should return true if three in a row', (done: any) => {
            tcb.createAsync(TicTacToeComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                ttt.tileBoard= [
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null]
                ];

                // set the tiletype to be equal
                ttt.tileBoard[0][0] = TileType.O;
                expect(ttt.tileBoard[0][0]).toEqual(TileType.O);
                ttt.tileBoard[1][0] = TileType.O;
                expect(ttt.tileBoard[1][0]).toEqual(TileType.O);
                ttt.tileBoard[2][0] = TileType.O;
                expect(ttt.tileBoard[2][0]).toEqual(TileType.O);
                expect(ttt.checkForWinner()).toBe(true);

                ttt.tileBoard= [
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null]
                ];

                ttt.tileBoard[0][1] = TileType.O;
                expect(ttt.tileBoard[0][1]).toEqual(TileType.O);
                ttt.tileBoard[1][1] = TileType.O;
                expect(ttt.tileBoard[1][1]).toEqual(TileType.O);
                ttt.tileBoard[2][1] = TileType.O;
                expect(ttt.tileBoard[2][1]).toEqual(TileType.O);
                expect(ttt.checkForWinner()).toBe(true);

                ttt.tileBoard= [
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.null, TileType.null, TileType.null]
                ];

                ttt.tileBoard[0][2] = TileType.O;
                expect(ttt.tileBoard[0][2]).toEqual(TileType.O);
                ttt.tileBoard[1][2] = TileType.O;
                expect(ttt.tileBoard[1][2]).toEqual(TileType.O);
                ttt.tileBoard[2][2] = TileType.O;
                expect(ttt.tileBoard[2][2]).toEqual(TileType.O);
                expect(ttt.checkForWinner()).toBe(true);

                done();
            })
                .catch((e: any) => done.fail(e));
        });

    });

});

enum TileType {
    X,
    O,
    null
}
