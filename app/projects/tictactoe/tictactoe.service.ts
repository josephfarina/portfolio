import { Injectable } from '@angular/core';

@Injectable()
export class TicTacToeService {
  private winner: Player;
  private userOne: Player = {
    name: 'Player 1',
    score: 0,
    tileType: TileType.O
  };
  private userTwo: Player = {
    name: 'Player 2',
    score: 0,
    tileType: TileType.X
  };

  toggleTile(): void {
    let onePrevTile: TileType = this.userOne.tileType;
    let twoPrevTile: TileType = this.userTwo.tileType;
    this.userOne.tileType = twoPrevTile;
    this.userTwo.tileType = onePrevTile;
  }

  setUserOne(name: string, tile: TileType): void {
    if (name != null && name.length > 0) { this.userOne.name = name; }
    if (tile !== this.userOne.tileType) { this.toggleTile(); }
  }

  getUserOne(): Player {
    return this.userOne;
  }

  setUserTwo(name: string, tile: TileType): void {
    if (name != null && name.length > 0) { this.userTwo.name = name; }
    if (tile !== this.userTwo.tileType) { this.toggleTile(); }
  }

  getUserTwo(): Player {
    return this.userTwo;
  }

  setWinner(player: Player) {
    this.winner = player;
  }

  getWinner() {
    return this.winner;
  }

  resetWinner() {
    this.winner = null;
  }

  resetGame() {
    this.userOne = {
      name: 'Player 1',
      score: 0,
      tileType: TileType.O
    };
    this.userTwo = {
      name: 'Player 2',
      score: 0,
      tileType: TileType.X
    };
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
