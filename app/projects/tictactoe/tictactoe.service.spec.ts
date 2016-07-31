/* tslint:disable:no-unused-variable */
import { TicTacToeService, TileType, Player } from './tictactoe.service';
import {
    expect, it, iit, xit,
    describe, ddescribe, xdescribe,
    beforeEach, beforeEachProviders, withProviders,
    async, inject, injectAsync
} from '@angular/core/testing';

import { TestComponentBuilder }     from '@angular/compiler/testing';
import { By }                       from '@angular/platform-browser';
import { provide, ViewMetadata }    from '@angular/core';
import { PromiseWrapper }           from '@angular/core/src/facade/promise';

describe('TicTacToe Service:', () => {
    let service: any;

    beforeEachProviders(() => [
        TestComponentBuilder,
        TicTacToeService
    ]);

    beforeEach(inject([TicTacToeService], (s: any) => {
        service = s;
    }));

    it('should get default userOne', () => {
        let userOne: Player = service.getUserOne();
        expect(userOne.name).toEqual('Player 1');
        expect(userOne.score).toEqual(0);
        expect(userOne.tileType).toEqual(TileType.O);
    });

    it('should get default userTwo', () => {
        let userOne: Player = service.getUserTwo();
        expect(userOne.name).toEqual('Player 2');
        expect(userOne.score).toEqual(0);
        expect(userOne.tileType).toEqual(TileType.X);
    });

    it('should set userOne', () => {
        let playerOneName: string = 'Joey F.';
        let playerOneTileType: TileType = TileType.X;
        service.setUserOne(playerOneName, playerOneTileType);
        expect(service.userOne.name).toEqual(playerOneName);
        expect(service.userOne.tileType).toEqual(playerOneTileType);
    });

    it('should set userTwo', () => {
        let playerTwoName: string = 'Joey F.';
        let playerTwoTileType: TileType = TileType.X;
        service.setUserTwo(playerTwoName, playerTwoTileType);
        expect(service.userTwo.name).toEqual(playerTwoName);
        expect(service.userTwo.tileType).toEqual(playerTwoTileType);
    });

    it('should give back default name if none entered', () => {
        let playerOneTileType: TileType;
        let playerTwoTileType: TileType;

        // PLAYER ONE
        let playerOneNameString: string = '';
        service.setUserOne(playerOneNameString, playerOneTileType);
        let userOne: Player = service.getUserOne();
        expect(userOne.name).toEqual('Player 1');

        let playerOneNameUndefined: any;
        service.setUserOne(playerOneNameUndefined, playerOneTileType);
        userOne = service.getUserOne();
        expect(userOne.name).toEqual('Player 1');

        let playerOneNameNull: any = null;
        service.setUserOne(playerOneNameNull, playerOneTileType);
        userOne = service.getUserOne();
        expect(userOne.name).toEqual('Player 1');

        // PLAYER Two
        let playerTwoNameString: string = '';
        service.setUserTwo(playerTwoNameString, playerTwoTileType);
        let userTwo: Player = service.getUserTwo();
        expect(userTwo.name).toEqual('Player 2');

        let playerTwoNameUndefined: any;
        service.setUserTwo(playerTwoNameUndefined, playerTwoTileType);
        userTwo = service.getUserTwo();
        expect(userTwo.name).toEqual('Player 2');

        let playerTwoNameNull: any = null;
        service.setUserTwo(playerTwoNameNull, playerTwoTileType);
        userTwo = service.getUserTwo();
        expect(userTwo.name).toEqual('Player 2');
    });

    it('Set player one\'s tiletype and change twos', () => {
        let playerOneName: string;
        let playerTwoName: string;
        service.setUserOne(playerOneName, TileType.X);
        service.setUserTwo(playerTwoName, TileType.O);

        // if one tile is set the other players tile is auto set to the other
        service.setUserOne(playerOneName, TileType.O);
        expect(service.userOne.tileType).toEqual(TileType.O);
        expect(service.userTwo.tileType).toEqual(TileType.X);

        service.setUserOne(playerOneName, TileType.X);
        expect(service.userOne.tileType).toEqual(TileType.X);
        expect(service.userTwo.tileType).toEqual(TileType.O);

        service.setUserOne(playerOneName, TileType.O);
        expect(service.userOne.tileType).toEqual(TileType.O);
        expect(service.userTwo.tileType).toEqual(TileType.X);
    });

    it('Set player twos\'s tiletype and change ones', () => {
        let playerOneName: string;
        let playerTwoName: string;
        service.setUserOne(playerOneName, TileType.X);
        service.setUserTwo(playerTwoName, TileType.O);

        service.setUserTwo(playerTwoName, TileType.X);
        expect(service.userTwo.tileType).toEqual(TileType.X);
        expect(service.userOne.tileType).toEqual(TileType.O);

        service.setUserTwo(playerTwoName, TileType.O);
        expect(service.userTwo.tileType).toEqual(TileType.O);
        expect(service.userOne.tileType).toEqual(TileType.X);

        service.setUserTwo(playerTwoName, TileType.X);
        expect(service.userTwo.tileType).toEqual(TileType.X);
        expect(service.userOne.tileType).toEqual(TileType.O);
    });

    it('should toggle tile', () => {
        service.userOne.tileType = TileType.O;
        service.userTwo.tileType = TileType.X;
        service.toggleTile();

        expect(service.userOne.tileType).toEqual(TileType.X);
        expect(service.userTwo.tileType).toEqual(TileType.O);

        service.toggleTile();

        expect(service.userOne.tileType).toEqual(TileType.O);
        expect(service.userTwo.tileType).toEqual(TileType.X);

    });

});
