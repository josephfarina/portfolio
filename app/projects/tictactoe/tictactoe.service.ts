import { Injectable } from '@angular/core';

@Injectable()
export class TicTacToeService {
  private userOne: Player = {
    score: 0,
    name: 'Player 1',
    tileType: TileType.O
  };
  private userTwo: Player = {
    score: 0,
    name: 'Player 2',
    tileType: TileType.X
  };

  toggleTile(): void {
    let onePrevTile: TileType = this.userOne.tileType;
    let twoPrevTile: TileType = this.userTwo.tileType;
    this.userOne.tileType = twoPrevTile;
    this.userTwo.tileType = onePrevTile;
  }

  setUserOne(name: string, tile: TileType): void {
    if (name != null && name.length > 0) {
      this.userOne.name = name;
    }

    if (tile !== this.userOne.tileType) {
      this.toggleTile();
    }

  }

  getUserOne(): Player {
    return this.userOne;
  }

  setUserTwo(name: string, tile: TileType): void {
    if (name != null && name.length > 0) {
      this.userTwo.name = name;
    }

    if (tile !== this.userTwo.tileType) {
      this.toggleTile();
    }

  }

  getUserTwo(): Player {
    return this.userTwo;
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
