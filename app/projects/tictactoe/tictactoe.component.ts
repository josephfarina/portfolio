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
        name: 'Player 1'
    }
    private userTwo: Player = {
        score: 0,
        name: 'Player 2'
    }
    private currentPlayer: Player = this.userOne;

    // TODO: change to enum type
    private tileBoard: any[] =
    [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    setPlayer() {
        console.log(this.currentPlayer, 'current');
        console.log(this.userOne, 'useone');
        console.log(this.userTwo, 'usetwo');
        if (this.currentPlayer == this.userOne) {
            this.currentPlayer = this.userTwo;
        }
        else if (this.currentPlayer == this.userTwo) {
            this.currentPlayer = this.userOne;
        }
        
        console.log(this.currentPlayer, 'current');
    }

    setTile(xaxis: number, yaxis: number) {
        console.log(xaxis, yaxis);
        let tile: string;
        if (this.currentPlayer === this.userOne) { tile = 'O'; }
        if (this.currentPlayer === this.userTwo) { tile = 'X'; }

        if (xaxis === 0) {
            if (yaxis === 0) { this.tileBoard[0][0] = tile; }
            else if (yaxis === 1) { this.tileBoard[1][0] = tile; }
            else if (yaxis === 2) { this.tileBoard[2][0] = tile; }
        }
        else if (xaxis === 1) {
            if (yaxis === 0) { this.tileBoard[0][1] = tile; }
            else if (yaxis === 1) { this.tileBoard[1][1] = tile; }
            else if (yaxis === 2) { this.tileBoard[2][1] = tile; }
        }
        else if (xaxis === 2) {
            if (yaxis === 0) { this.tileBoard[0][2] = tile; }
            else if (yaxis === 1) { this.tileBoard[1][2] = tile; }
            else if (yaxis === 2) { this.tileBoard[2][2] = tile; }
        }
        this.setPlayer();
    }



    alert(x: any, y: any) {
        console.log('x-axis', x, 'y-axis', y);
    }

}

export interface Player {
    name: string,
    score: number
}



// export class TicTacToe {


//      private tileBoard: TileValue[] =
//      [
//           [’null’,’null’,’null’],
//           [’null’,’null’,’null’],
//           [’null’,’null’,’null’]
//      ];

//      setTile(location: string, player: Player) {
//           let ties: number = 0;
//      let tile: TileValue;
//      if (player === this.userOne) { tile = TileValue[‘x’]; }
//      if (player === this.userTwo) { tile = TileValue[‘o’]; }

//      switch(location) {
//           case ‘a1’:
//                this.tileBoard[0][0] = tile;
//                break;
//           case ‘a2’:
//                this.tileBoard[0][1] = tile;
//                break;
//           case ‘a3’:
//                this.tileBoard[0][2] = tile;
//                break;
//           case ‘b1’:
//                this.tileBoard[1][0] = tile;
//                break;
//           case ‘b2’:
//                this.tileBoard[1][1] = tile;
//                break;
//           case ‘b3’:
//                this.tileBoard[1][2] = tile;
//                break;
//           case ‘c1’:
//                this.tileBoard[2][0] = tile;
//                break;
//           case ‘c2’:
//                this.tileBoard[2][1] = tile;
//                break;
//           case ‘c3’:
//                this.tileBoard[2][2] = tile;
//                break;
//      }
//      }

//      setWinner(player:Player?) {
//           if (player === null) { this.ties++; }
//           switch(player)
//           {
//                case this.userOne:
//                     this.userOne.score++;
//                     break;
//                case this.userOne:
//                     this.userTwo.score++;
//                     break;
//           }
//      }

// }