import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-tictactoe',
    templateUrl: 'tictactoe.component.html',
    styleUrls: ['tictactoe.component.style.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class TicTacToeComponent {
    private userOne: Player = {
        score: 0,
        name: 'Player 1',
        tileType: TileType.O
    }
    private userTwo: Player = {
        score: 0,
        name: 'Player 2',
        tileType: TileType.X
    }
    private tileBoard: any[] = [
        [TileType.null, TileType.null, TileType.null],
        [TileType.null, TileType.null, TileType.null],
        [TileType.null, TileType.null, TileType.null]
    ];
    private currentPlayer: Player = this.userOne;

    setPlayer() {
        if (this.currentPlayer === this.userOne) {
            this.currentPlayer = this.userTwo;
        }
        else if (this.currentPlayer == this.userTwo) {
            this.currentPlayer = this.userOne;
        }
    }

    setTile(xaxis: number, yaxis: number) {
        // prevent tile from being toggled if it was already set
        if (this.tileBoard[yaxis][xaxis] !== TileType.null) { return; }

        if (xaxis === 0) {
            if (yaxis === 0) { this.tileBoard[0][0] = this.currentPlayer.tileType; }
            else if (yaxis === 1) { this.tileBoard[1][0] = this.currentPlayer.tileType; }
            else if (yaxis === 2) { this.tileBoard[2][0] = this.currentPlayer.tileType; }
        }
        else if (xaxis === 1) {
            if (yaxis === 0) { this.tileBoard[0][1] = this.currentPlayer.tileType; }
            else if (yaxis === 1) { this.tileBoard[1][1] = this.currentPlayer.tileType; }
            else if (yaxis === 2) { this.tileBoard[2][1] = this.currentPlayer.tileType; }
        }
        else if (xaxis === 2) {
            if (yaxis === 0) { this.tileBoard[0][2] = this.currentPlayer.tileType; }
            else if (yaxis === 1) { this.tileBoard[1][2] = this.currentPlayer.tileType; }
            else if (yaxis === 2) { this.tileBoard[2][2] = this.currentPlayer.tileType; }
        }

        this.checkForWinner(xaxis,yaxis);
        this.setPlayer();
    }

    resetTileBoard() {
        for (let i = 0; i < this.tileBoard.length; i++) {
            for ( let j = 0; j < this.tileBoard[i].length; j++) {
                this.tileBoard[i][j] = TileType.null;
            }
        }
    }


    checkForWinner(xaxis:number, yaxis:number) {
        // let ycount: number;
        // let xcount: number;
        // for (let x = 0; x < this.tileBoard.length; x++) {
        //     if (this.tileBoard[yaxis][x] === this.currentPlayer.tileType) { xcount++; } 
        //     console.log(xcount, 'xcount');
        //     if ( xcount === 3) { return; }
        // }

        // for (let y = 0; y < this.tileBoard.length; y++) {
        //     if (this.tileBoard[y][xaxis] === this.currentPlayer.tileType) { ycount++; } 
        //     console.log(ycount, 'ycount');            
        //     if ( ycount === 3) { return; }
        // }    
    }    

}

enum TileType {
    X,
    O,
    null
}

export interface Player {
    name: string,
    score: number,
    tileType: TileType
}
