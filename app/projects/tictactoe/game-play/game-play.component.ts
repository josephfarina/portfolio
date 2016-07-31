import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { TicTacToeService, Player, TileType } from './../tictactoe.service';
import { TileTypeDirective } from '../directives/tiletype.directive';

@Component({
    moduleId: module.id,
    selector: 'my-game-play',
    templateUrl: 'game-play.component.html',
    styles: [require('./../../../../scss/projects/tictactoe/tictactoe-board.scss').toString()],
    directives: [
        ROUTER_DIRECTIVES,
        TileTypeDirective
    ]
})

export class GamePlayComponent implements OnInit, OnDestroy {
    private tileSetCount: number = 0;
    private currentPlayer: Player = this.userOne;
    private userOne: Player;
    private userTwo: Player;

    private tileBoard: any[] = [
        [TileType.null, TileType.null, TileType.null],
        [TileType.null, TileType.null, TileType.null],
        [TileType.null, TileType.null, TileType.null]
    ];

    constructor(private ticTacToeService: TicTacToeService, private router: Router) {
        this.userOne = this.ticTacToeService.getUserOne();
        this.userTwo = this.ticTacToeService.getUserTwo();
    }

    ngOnInit() {
        this.setPlayer();
        this.ticTacToeService.resetWinner();
    }

    ngOnDestroy() {
        this.resetTileBoard();
    }

    setPlayer() {
        if (this.currentPlayer === this.userOne) {
            this.currentPlayer = this.userTwo;
        } else if (this.currentPlayer === this.userTwo) {
            this.currentPlayer = this.userOne;
        } else {
            this.currentPlayer = this.userOne;
        }
    }

    setTile(xaxis: number, yaxis: number) {
        if (this.tileBoard[yaxis][xaxis] !== TileType.null) { return; }

        if (xaxis === 0) {
            if (yaxis === 0) { this.tileBoard[0][0] = this.currentPlayer.tileType; }
            else if (yaxis === 1) { this.tileBoard[1][0] = this.currentPlayer.tileType; }
            else if (yaxis === 2) { this.tileBoard[2][0] = this.currentPlayer.tileType; }
        } else if (xaxis === 1) {
            if (yaxis === 0) { this.tileBoard[0][1] = this.currentPlayer.tileType; }
            else if (yaxis === 1) { this.tileBoard[1][1] = this.currentPlayer.tileType; }
            else if (yaxis === 2) { this.tileBoard[2][1] = this.currentPlayer.tileType; }
        } else if (xaxis === 2) {
            if (yaxis === 0) { this.tileBoard[0][2] = this.currentPlayer.tileType; }
            else if (yaxis === 1) { this.tileBoard[1][2] = this.currentPlayer.tileType; }
            else if (yaxis === 2) { this.tileBoard[2][2] = this.currentPlayer.tileType; }
        }

        this.tileSetCount++;

        if (this.checkForWinner(xaxis, yaxis)) {
            this.currentPlayer.score++;
            this.ticTacToeService.setWinner(this.currentPlayer);
            this.router.navigate(['/tictactoe', '/end']);
        }

        if (this.tileSetCount === 9) {
            this.router.navigate(['/tictactoe', '/end']);
        }

        this.setPlayer();
    }

    resetTileBoard() {
        this.tileSetCount = 0;
        for (let i = 0; i < this.tileBoard.length; i++) {
            for (let j = 0; j < this.tileBoard[i].length; j++) {
                this.tileBoard[i][j] = TileType.null;
            }
        }
    }

    checkForWinner(x: number, y: number): boolean {
        if (this.checkHorizontalWin(y)) { return true; }
        if (this.checkVerticalWin(x)) { return true; }
        if (this.checkDiagonalWin()) { return true; }
        return false;
    }

    checkHorizontalWin(y: number): boolean {
        let count: number = 0;
        for (let x = 0; x < this.tileBoard.length; x++) {
            if (this.tileBoard[y][x] === this.currentPlayer.tileType) { count++; }
            if (count === 3) { return true; }
        }
    }

    checkVerticalWin(x: number): boolean {
        let count: number = 0;
        for (let y = 0; y < this.tileBoard.length; y++) {
            if (this.tileBoard[y][x] === this.currentPlayer.tileType) { count++; }
            if (count === 3) { return true; }
        }
    }

    checkDiagonalWin(): boolean {
        let tb = this.tileBoard;
        if (tb[0][0] === tb[1][1] && tb[1][1] === tb[2][2] && tb[1][1] !== TileType.null) { return true; }
        if (tb[0][2] === tb[1][1] && tb[1][1] === tb[2][0] && tb[1][1] !== TileType.null) { return true; }
    }

}


//   <rect id="background" class="cls-1" width="300" height="300"/>

let x2y2Circle: string = 'M299.56,249.56a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,299.56,249.56Z';
let x1y2Circle: string = 'M199.56,249.56a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,199.56,249.56Z';
let x0y2Circle: string = 'M99.56,249.56a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,99.56,249.56Z';
let x2y1Circle: string = 'M299.56,150a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,299.56,150Z';
let x1y1Circle: string = 'M199.56,150a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,199.56,150Z';
let x0y1Circle: string = 'M99.56,150a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,99.56,150Z';
let x2y0Circle: string = 'M299.56,50a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,299.56,50Z';
let x1y0Circle: string = 'M199.56,50a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,199.56,50Z';
let x0y0Circle: string = 'M99.56,50a49.4,49.4,0,1,1-3.89-19.29A49.4,49.4,0,0,1,99.56,50Z';


let x2y2X: string = 'M200,199.56h25l25,50,25-50h25v25l-50,25,50,25v25H275l-25-50-25,50H200v-25l50-25-50-25v-25Z" transform="translate(0)';
let x1y2X: string = 'M100,199.56h25l25,50,25-50h25v25l-50,25,50,25v25H175l-25-50-25,50H100v-25l50-25-50-25v-25Z" transform="translate(0)';
let x0y2X: string = 'M0,199.56H25l25,50,25-50h25v25l-50,25,50,25v25H75l-25-50-25,50H0v-25l50-25-50-25v-25Z" transform="translate(0)';
let x2y1X: string = 'M200,100h25l25,50,25-50h25v25l-50,25,50,25v25H275l-25-50-25,50H200V175l50-25-50-25V100Z" transform="translate(0)';
let x1y1X: string = 'M100,100h25l25,50,25-50h25v25l-50,25,50,25v25H175l-25-50-25,50H100V175l50-25-50-25V100Z" transform="translate(0)';
let x0y1X: string = 'M0,100H25l25,50,25-50h25v25L50,150l50,25v25H75L50,150,25,200H0V175l50-25L0,125V100Z" transform="translate(0)';
let x2y0X: string = 'M200,0h25l25,50L275,0h25V25L250,50l50,25v25H275L250,50l-25,50H200V75l50-25L200,25V0Z" transform="translate(0)';
let x1y0X: string = 'M100,0h25l25,50L175,0h25V25L150,50l50,25v25H175L150,50l-25,50H100V75l50-25L100,25V0Z" transform="translate(0)';
let x0y0X: string = 'M0,0H25L50,50,75,0h25V25L50,50l50,25v25H75L50,50,25,100H0V75L50,50,0,25V0Z" transform="translate(0)';

let x2y2Square: string = 'M200,199.56H300v100H200v-100Z" transform="translate(0 0)';
let x1y2Square: string = 'M100,199.56H200v100H100v-100Z" transform="translate(0 0)';
let x0y2Square: string = 'M0,199.56H100v100H0v-100Z" transform="translate(0 0)';
let x2y1Square: string = 'M200,100H300V200H200V100Z" transform="translate(0 0)';
let x1y1Square: string = 'M100,100H200V200H100V100Z" transform="translate(0 0)';
let x0y1Square: string = 'M0,100H100V200H0V100Z" transform="translate(0 0)';
let x2y0Square: string = 'M200,0H300V100H200V0Z" transform="translate(0 0)';
let x1y0Square: string = 'M100,0H200V100H100V0Z" transform="translate(0 0)';
let x0y0Square: string = 'M0,0H100V100H0V0Z" transform="translate(0 0)';
