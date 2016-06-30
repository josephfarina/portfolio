import { Injectable } from '@angular/core';

@Injectable()
export class TicTacToeService {
/* 
TODO: 
Turn all shared methods and attrs into this service and share them across components so that 
create getters and setters for everything

*/

    private userOne: Player;
    private userTwo: Player;
    getUserOne() {

    }

    getUserTwo() {

    }

}

export interface Player {
    name: string;
    score: number;
    tileType: TileType;
}

export enum TileType {
    X,
    O,
    null
}
