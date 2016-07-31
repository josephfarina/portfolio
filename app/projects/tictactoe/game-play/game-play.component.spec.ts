/* tslint:disable:no-unused-variable */
import { GamePlayComponent } from './game-play.component';
import { TicTacToeService, Player } from './../tictactoe.service';
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
        GamePlayComponent,
        TicTacToeService
    ]);

    beforeEach(inject([TestComponentBuilder], (_tcb: any) => {
        tcb = _tcb

    }));

    it('should fulfill dependencies', injectAsync(
        [TestComponentBuilder], (tcb: any) => {
            return tcb.createAsync(GamePlayComponent).then((fixture: any) => { });
        }
    ));

    describe('setPlayer():', () => {

        it('should toggle between userOne and userTwo', (done: any) => {
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
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
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
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
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
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

    describe('titleTypeClass:', () => {
        it('titletype x should have class x', (done: any) => {
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;
                done();
            })
                .catch((e: any) => done.fail(e));
        });

    });

    describe('checkWinner()', () => {

        it('horizontal should return true', (done: any) => {
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                for (let i = 0; i <= 1; i++) {
                    let user: Player = twoPlayers[i];
                    ttt.currentPlayer = user;
                    for (let y = 0; y <= 2; y++) {
                        ttt.tileBoard = [
                            [TileType.null, TileType.null, TileType.null],
                            [TileType.null, TileType.null, TileType.null],
                            [TileType.null, TileType.null, TileType.null]
                        ];
                        let x: number = 0;
                        ttt.tileBoard[y][x] = user.tileType;
                        expect(ttt.checkForWinner(x, y)).toBe(false);
                        x++;
                        ttt.tileBoard[y][x] = user.tileType;
                        expect(ttt.checkForWinner(x, y)).toBe(false);
                        x++;
                        ttt.tileBoard[y][x] = user.tileType;

                        expect(ttt.checkForWinner(0, y)).toBe(true);
                        expect(ttt.checkForWinner(1, y)).toBe(true);
                        expect(ttt.checkForWinner(2, y)).toBe(true);
                    }
                }
                done();
            })
                .catch((e: any) => done.fail(e));
        });

        it('vertical should return true', (done: any) => {
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                for (let i = 0; i <= 1; i++) {
                    let user: Player = twoPlayers[i];
                    ttt.currentPlayer = user;
                    for (let x = 0; x <= 2; x++) {
                        ttt.tileBoard = [
                            [TileType.null, TileType.null, TileType.null],
                            [TileType.null, TileType.null, TileType.null],
                            [TileType.null, TileType.null, TileType.null]
                        ];
                        let y: number = 0;
                        ttt.tileBoard[y][x] = user.tileType;
                        expect(ttt.checkForWinner(x, y)).toBe(false);
                        y++;
                        ttt.tileBoard[y][x] = user.tileType;
                        expect(ttt.checkForWinner(x, y)).toBe(false);
                        y++;
                        ttt.tileBoard[y][x] = user.tileType;

                        expect(ttt.checkForWinner(x, 0)).toBe(true);
                        expect(ttt.checkForWinner(x, 1)).toBe(true);
                        expect(ttt.checkForWinner(x, 2)).toBe(true);
                    }
                }

                done();
            })
                .catch((e: any) => done.fail(e));
        });

        it('diagonal should return true', (done: any) => {
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;

                for (let i = 0; i <= 1; i++) {
                    let user: Player = twoPlayers[i];
                    ttt.currentPlayer = user;
                    ttt.tileBoard = [
                        [TileType.null, TileType.null, TileType.null],
                        [TileType.null, TileType.null, TileType.null],
                        [TileType.null, TileType.null, TileType.null]
                    ];
                    ttt.tileBoard[0][0] = user.tileType;
                    expect(ttt.checkForWinner(0, 0)).toBe(false);
                    ttt.tileBoard[1][1] = user.tileType;
                    expect(ttt.checkForWinner(1, 1)).toBe(false);
                    ttt.tileBoard[2][2] = user.tileType;

                    expect(ttt.checkForWinner(0, 0)).toBe(true);
                    expect(ttt.checkForWinner(1, 1)).toBe(true);
                    expect(ttt.checkForWinner(1, 2)).toBe(true);
                    ttt.tileBoard = [
                        [TileType.null, TileType.null, TileType.null],
                        [TileType.null, TileType.null, TileType.null],
                        [TileType.null, TileType.null, TileType.null]
                    ];

                    ttt.tileBoard[0][2] = user.tileType;
                    expect(ttt.checkForWinner(0, 0)).toBe(false);
                    ttt.tileBoard[1][1] = user.tileType;
                    expect(ttt.checkForWinner(1, 1)).toBe(false);
                    ttt.tileBoard[2][0] = user.tileType;

                    expect(ttt.checkForWinner(0, 2)).toBe(true);
                    expect(ttt.checkForWinner(1, 1)).toBe(true);
                    expect(ttt.checkForWinner(0, 2)).toBe(true);
                }

                done();
            })
                .catch((e: any) => done.fail(e));
        });

        it('wrong answers should return false', (done: any) => {
            tcb.createAsync(GamePlayComponent).then((fixture: any) => {
                let ttt = fixture.componentInstance;


                let callAllChecks = function() {
                    ttt.currentUser = twoPlayers[0];
                    for (let y = 0; y <= 2; y++) {
                        for (let x = 0; x <= 2; x++) {
                            expect(ttt.checkForWinner(x, y)).toBe(false);
                        }
                    }                    
                }

                ttt.tileBoard = [
                    [TileType.null, TileType.O, TileType.null],
                    [TileType.null, TileType.null, TileType.null],
                    [TileType.X, TileType.O, TileType.null]
                ];

                callAllChecks();

                ttt.tileBoard = [
                    [TileType.null, TileType.O, TileType.null],
                    [TileType.null, TileType.X, TileType.null],
                    [TileType.X, TileType.O, TileType.null]
                ];

                callAllChecks();

                ttt.tileBoard = [
                    [TileType.O,    TileType.X, TileType.X],
                    [TileType.null, TileType.O, TileType.null],
                    [TileType.X,    TileType.O, TileType.X]
                ];

                callAllChecks();                

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

export const twoPlayers: Player[] = [
    {
        score: 0,
        name: 'Player 1',
        tileType: TileType.O
    },
    {
        score: 0,
        name: 'Player 2',
        tileType: TileType.X
    }
];
