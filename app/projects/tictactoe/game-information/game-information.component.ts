import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { GithubCodeService } from './../../../shared/services/github-code-retriever.service';
import { TicTacToeService, Player, TileType } from './../tictactoe.service';

@Component({
  moduleId: module.id,
  selector: 'my-game-information',
  templateUrl: 'game-information.component.html',
  styleUrls: ['game-information.component.style.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class GameInformationComponent implements OnInit {

  // TODO: set user one and two in the service
  private userOne: Player;
  private userTwo: Player;

  private userOneName: string;
  private userTwoName: string;
  private userOneTileType: TileType;
  private userTwoTileType: TileType;
  constructor(private router: Router, private ticTacToeService: TicTacToeService) {
  }
  ngOnInit() {
    this.userOne = this.ticTacToeService.getUserOne();
    this.userTwo = this.ticTacToeService.getUserTwo();
    this.userOneName = this.userOne.name;
    this.userTwoName = this.userTwo.name;
    this.userOneTileType = this.userOne.tileType;
    this.userTwoTileType = this.userTwo.tileType;
  }

  toggleTile() {
    console.log('toggle');
    this.ticTacToeService.toggleTile();
    this.updateUserOne(true);
    this.updateUserTwo(true);
  }

  updateUserOne(withoutSetting?: boolean) {
    if (withoutSetting == null) {
      console.log('without');
      this.ticTacToeService.setUserOne(this.userOneName, this.userOneTileType);
    }
    this.userOne = this.ticTacToeService.getUserOne();
    this.userOneName = this.userOne.name;
    this.userOneTileType = this.userOne.tileType;
  }

  updateUserTwo(withoutSetting?: boolean) {
    if (withoutSetting == null) {
      console.log('without')
      this.ticTacToeService.setUserTwo(this.userTwoName, this.userTwoTileType);
    }
    this.userTwo = this.ticTacToeService.getUserTwo();
    this.userTwoName = this.userTwo.name;
    this.userTwoTileType = this.userTwo.tileType;
  }

  gameStart() {
    this.ticTacToeService.setUserOne(this.userOneName, this.userOneTileType);
    this.ticTacToeService.setUserTwo(this.userTwoName, this.userTwoTileType);
    this.router.navigate(['/tictactoe', '/play']);
    event.preventDefault();
    event.stopPropagation();
  }
}
